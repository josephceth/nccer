<script>
	import Certifications from '../components/Certifications.svelte';
	import KnowledgeVerified from '../components/KnowledgeVerified.svelte';
	import PerformanceVerified from '../components/PerformanceVerified.svelte';
	import CompletedPVTasks from '../components/CompletedPVTasks.svelte';
	let element = null;
	function changeActiveTab(tabID, e) {
		element = e.target;
		while (element.nodeName !== 'A') {
			element = element.parentNode;
		}
		let ulElement = element.parentNode.parentNode;
		let buttonElements = ulElement.querySelectorAll('li > a');
		let tabContents = document.getElementById('tabs-id').querySelectorAll('.tab-content > div');
		for (let i = 0; i < buttonElements.length; i++) {
			buttonElements[i].classList.remove('text-white');
			buttonElements[i].classList.remove('bg-pink-600');
			buttonElements[i].classList.add('text-pink-600');
			buttonElements[i].classList.add('bg-white');
			tabContents[i].classList.add('hidden');
			tabContents[i].classList.remove('block');
		}
		element.classList.remove('text-pink-600');
		element.classList.remove('bg-white');
		element.classList.add('text-white');
		element.classList.add('bg-pink-600');
		document.getElementById(tabID).classList.remove('hidden');
		document.getElementById(tabID).classList.add('block');
	}
</script>

<div class="flex flex-wrap" id="tabs-id">
	<div class="w-full">
		<ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
			<li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
				<a
					href="javascript:;"
					class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-white bg-pink-600"
					on:click={(e) => changeActiveTab('tab-profile', e)}
				>
					<i class="fas fa-space-shuttle text-base mr-1" /> Certifications
				</a>
			</li>
			<li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
				<a
					href="javascript:;"
					class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-pink-600 bg-white"
					on:click={(e) => changeActiveTab('tab-settings', e)}
				>
					<i class="fas fa-cog text-base mr-1" /> Knowledge Verified
				</a>
			</li>
			<li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
				<a
					href="javascript:;"
					class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-pink-600 bg-white"
					on:click={(e) => changeActiveTab('tab-options', e)}
				>
					<i class="fas fa-briefcase text-base mr-1" /> Performance Verified
				</a>
			</li>
			<li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
				<a
					href="javascript:;"
					class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-pink-600 bg-white"
					on:click={(e) => changeActiveTab('tab-completedPV', e)}
				>
					<i class="fas fa-briefcase text-base mr-1" /> Completed PV Tasks
				</a>
			</li>
		</ul>
		<div class="relative flex flex-col min-w-0 break-word w-full mb-6 shadow-lg rounded">
			<div class="px-4 py-5 flex-auto">
				<div class="tab-content tab-space">
					<div class="block h-80" id="tab-profile">
						<Certifications />
					</div>
					<div class="hidden h-80" id="tab-settings">
						<KnowledgeVerified />
					</div>
					<div class="hidden h-80" id="tab-options">
						<PerformanceVerified />
					</div>
					<div class="hidden h-80 overflow-y-scroll" id="tab-completedPV">
						<CompletedPVTasks />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
