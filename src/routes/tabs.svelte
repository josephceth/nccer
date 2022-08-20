<script>
	let element = null;

	function changeActiveTab(tabID, e) {
		element = e.target;
		while (element.nodeName !== 'BUTTON') {
			element = element.parentNode;
		}
		let ulElement = element.parentNode.parentNode;
		let buttonElements = ulElement.querySelectorAll('li > button');
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
				<button
					class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-white bg-pink-600"
					on:click={(e) => changeActiveTab('tab-profile', e)}
				>
					<i class="fas fa-space-shuttle text-base mr-1" /> Profile
				</button>
			</li>
			<li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
				<button
					class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-pink-600 bg-white"
					on:click={(e) => changeActiveTab('tab-settings', e)}
				>
					<i class="fas fa-cog text-base mr-1" /> Settings
				</button>
			</li>
			<li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
				<button
					class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-pink-600 bg-white"
					on:click={(e) => changeActiveTab('tab-options', e)}
				>
					<i class="fas fa-briefcase text-base mr-1" /> Options
				</button>
			</li>
		</ul>
		<div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
			<div class="px-4 py-5 flex-auto">
				<div class="tab-content tab-space">
					<div class="block" id="tab-profile">
						<p>
							Collaboratively administrate empowered markets via plug-and-play networks. Dynamically
							procrastinate B2C users after installed base benefits.
							<br />
							<br />
							Dramatically visualize customer directed convergence without revolutionary ROI.
						</p>
					</div>
					<div class="hidden" id="tab-settings">
						<p>
							Completely synergize resource taxing relationships via premier niche markets.
							Professionally cultivate one-to-one customer service with robust ideas.
							<br />
							<br />
							Dynamically innovate resource-leveling customer service for state of the art customer service.
						</p>
					</div>
					<div class="hidden" id="tab-options">
						<p>
							Efficiently unleash cross-media information without cross-media value. Quickly
							maximize timely deliverables for real-time schemas.
							<br />
							<br />
							Dramatically maintain clicks-and-mortar solutions without functional solutions.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
