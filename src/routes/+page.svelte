<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { DoubleBounce } from 'svelte-loading-spinners';
	import type { NCCERPerson, OnlineVerification } from '$lib/types';
	import UserData from '$lib/components/UserData.svelte';
	import { GetBySSN, GetCertificationData, GetByNCCER, GetByJDEId } from '$lib/scripts/nccer';
	import { ErrorToast } from '$lib/scripts/toast.js';
	import Certifications from '$lib/components/verification/Certifications.svelte';
	import CompletedPvTasks from '$lib/components/verification/CompletedPVTasks.svelte';
	import KnowledgeVerified from '$lib/components/verification/KnowledgeVerified.svelte';
	import PerformanceVerified from '$lib/components/verification/PerformanceVerified.svelte';
	import { Tabs, Tab, TabList, TabPanel } from '$lib/components/tabs';
	import CompletedTraining from '$lib/components/verification/CompletedTraining.svelte';
	import { DataIndicatorArray, getPublicKey } from '$lib/scripts/site';
	import NavBar from '$lib/components/NavBar.svelte';
	import Card from '$lib/components/Card.svelte';
	import { account } from '../stores/authStore.js';
	import * as openpgp from 'openpgp';

	let userData: NCCERPerson;
	let verificationData: OnlineVerification;
	let loadingUser: boolean = false;
	let loadingVerification: boolean = false;

	function later(delay: number) {
		return new Promise(function (resolve) {
			setTimeout(resolve, delay);
		});
	}

	async function SSNLookup(ssn: string) {
		try {
			verificationData = null;
			userData = null;
			loadingUser = true;
			//await later(1000);
			let username = $account.username;
			userData = await GetBySSN(ssn, username);
		} catch (e: any) {
			console.log(e);
			ErrorToast('There was an error with the user lookup, please try again.', 80);
		} finally {
			loadingUser = false;
		}
	}

	async function JDELookup(jdeId: string) {
		try {
			verificationData = null;
			userData = null;
			loadingUser = true;
			//await later(1000);
			let username = $account.username;
			userData = await GetByJDEId(jdeId, username);
		} catch (e: any) {
			console.log(e);
			ErrorToast('There was an error with the user lookup, please try again.', 80);
		} finally {
			loadingUser = false;
		}
	}

	async function NCCERLookup(nccerId: string) {
		try {
			verificationData = null;
			userData = null;
			loadingUser = true;
			await later(1000);
			userData = await GetByNCCER(nccerId, $account.username);
		} catch (e: any) {
			console.log(e);
			ErrorToast('There was an error with the user lookup, please try again.', 80);
		} finally {
			loadingUser = false;
		}
	}

	async function VerificationLookup() {
		if (userData == null) {
			return;
		}
		try {
			loadingVerification = true;
			await later(1000);
			verificationData = await GetCertificationData(userData.NccerCardNumber, $account.username);
			console.log(verificationData);
		} catch (e: any) {
			console.log(e);
			ErrorToast('There was an error with the user lookup, please try again.', 80);
		} finally {
			loadingVerification = false;
		}
	}

	async function encryptItem(item: string) {
		const publicKey = await openpgp.readKey({ armoredKey: getPublicKey() });

		const encrypted = await openpgp.encrypt({
			message: await openpgp.createMessage({ text: 'Hello, World!' }), // input as Message object
			encryptionKeys: publicKey // for encryption
		});

		console.log(encrypted);
	}
</script>

{#if $account != null}
	{#if $account.idTokenClaims !== undefined && $account.idTokenClaims.roles.includes('NCCERViewer')}
		<NavBar nccerCallback={NCCERLookup} ssnCallback={SSNLookup} jdeCallback={JDELookup} />
		<div class="md:container md:mx-auto pt-5">
			{#if loadingUser}
				<div>
					<DoubleBounce size="40" unit="px" duration="1s" />
				</div>
			{:else}
				<UserData {userData} callback={VerificationLookup} />
			{/if}

			{#if loadingVerification}
				<div>
					<DoubleBounce size="40" unit="px" duration="1s" />
				</div>
			{:else if verificationData}
				<Card>
					<Tabs>
						<TabList>
							<Tab>Certifications {@html DataIndicatorArray(verificationData.Certifications)}</Tab>
							<Tab
								>Completed PV Tasks {@html DataIndicatorArray(
									verificationData.CompletedPVTasks
								)}</Tab
							>
							<Tab
								>Knowledge Verified {@html DataIndicatorArray(
									verificationData.KnowledgeVerified
								)}</Tab
							>
							<Tab>
								Performance Verified {@html DataIndicatorArray(
									verificationData.PerformanceVerified
								)}
							</Tab>
							<Tab
								>Completed Trainings {@html DataIndicatorArray(
									verificationData.CompletedTraining
								)}</Tab
							>
						</TabList>

						<TabPanel>
							<Certifications certifications={verificationData.Certifications} />
						</TabPanel>
						<TabPanel>
							<CompletedPvTasks pvTasks={verificationData.CompletedPVTasks} />
						</TabPanel>
						<TabPanel>
							<KnowledgeVerified knowledgeVerified={verificationData.KnowledgeVerified} />
						</TabPanel>
						<TabPanel>
							<PerformanceVerified performanceVerified={verificationData.PerformanceVerified} />
						</TabPanel>
						<TabPanel>
							<CompletedTraining completedTrainings={verificationData.CompletedTraining} />
						</TabPanel>
					</Tabs>
				</Card>
			{/if}
		</div>
	{:else}
		You do not have access to view this page. Please submit a helpdesk ticket to get the NCCERView
		Role
	{/if}
{/if}
