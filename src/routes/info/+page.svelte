<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import { Modal, modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
	import modalForm1 from '$lib/assets/modal.svelte';
	import modalForm2 from '$lib/assets/modal2.svelte';
	import modalForm3 from '$lib/assets/modal3.svelte';
	import modalForm4 from '$lib/assets/modal4.svelte';
	import modalForm5 from '$lib/assets/modal5.svelte';
	import modalForm6 from '$lib/assets/modal6.svelte';
	import mb_pic from '$lib/assets/mb_pic.jpg';
	import ram_pic from '$lib/assets/ram_pic.jpg';
	import gpu_pic from '$lib/assets/gpu_pic.jpg';
	import cpu_pic from '$lib/assets/cpu_pic.jpg';
	import storage_pic from '$lib/assets/storage_pic.jpg';
	import os_pic from '$lib/assets/os_pic.jpg';
	
	
	function myFunction(arg) {
		const modalComponent: ModalComponent = {
			ref: getModalForm(arg),
			props: { background: 'bg-red-500' },
			slot: '<p>Skeleton</p>'
		};
		const modal: ModalSettings = {
			type: 'component',
			// Pass the component directly:
			title: 'Example Alert',
			body: 'This is an example modal.',
			component: modalComponent,
		};
		modalStore.trigger(modal);
		console.log("test");
	}
	function getModalForm(arg) {
		if(arg == 0) {
			return modalForm1;
		}
		else if(arg == 1) {
			return modalForm2;
		}
		else if(arg == 2) {
			return modalForm3;
		}
		else if(arg == 3) {
			return modalForm4;
		}
		else if(arg == 4) {
			return modalForm5;
		}
		else if(arg == 5) {
			return modalForm6;
		}
	}

</script>

<div class="grid-container">
	<div class="grid-item-header">
		<h1>Get to Know Your PC</h1>
		<p>Click the component to learn more about them and how to install it</p>
	</div>

	<button class="button mbr" type="button" on:click={() => myFunction(0)}>
		<img class="thumb mb_pic" src={mb_pic}><div class="grid-item motherboard"> 
		<h1>MOTHER BOARD</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</div></button>

	<button class="button ramb" type="button" on:click={() => myFunction(1)}><img class="thumb ram_pic" src={ram_pic}><div class="grid-item ram">
		<h1>RAM</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</div></button>

	<button class="button gpub" type="button" on:click={() => myFunction(2)}><img class="thumb gpu_pic" src={gpu_pic}><div class="grid-item gpu">
		<h1>GPU</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</div></button>

	<button class="button cpub" type="button" on:click={() => myFunction(3)}><img class="thumb cpu_pic" src={cpu_pic}><div class="grid-item cpu">
		<h1>CPU</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</div></button>

	<button class="button storageb" type="button" on:click={() => myFunction(4)}><img class="thumb storage_pic" src={storage_pic}><div class="grid-item storage">
		<h1>STORAGE</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</div></button>

	<button class="button osb" type="button" on:click={() => myFunction(5)}><img class="thumb os_pic" src={os_pic}><div class="grid-item os">
		<h1>OS</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</div></button>
</div>

<style >
	*{
		background: #bababa;
	}

	.grid-container {
		justify-content: space-around;
		display: grid;
		padding: 30px;
		grid-template-columns: 400px 400px 400px;
		grid-template-rows: 100px 220px 220px;
		gap: 30px;

		height: 100%;
		z-index: 1;
	}

	.button {
		border-style: solid;
		border-color: aliceblue;
		border-width: 2px;
		background-color: rgb(88, 88, 88);
		position: relative;
	}
	
	.button:hover{
		background-color: #9d6868;
	}

	.grid-item {
		position: relative;
		padding: 0px;
		text-align: center;
		background-color: transparent;
		/* top: 0px; */
	}

	.grid-item h1 {
		background-color: transparent;
		font-size: 30px;
		padding-top: 30px;
	}

	.grid-item p {
		background-color: transparent;
		font-size: 15px;
		padding-top: 40px;
		padding-left: 14px;
		padding-right: 14px;
	}

	.thumb {
		position: absolute;
		top: 0px;
		width: 100%;
		height: 100%;
		object-fit: fill;
		opacity: 0.3;
		object-fit: cover;
	}

	.grid-item-header {
		grid-column-start: 1;
		grid-column-end: 4;
		text-align: center;
		border-style: none;
		background-color: transparent;
		align-self: center;
	}

	.grid-item-header h1 {
		font-size: 30px;
		color: black;
	}

	.grid-item-header p {
		padding-top: 5px;
		font-size: 20px;
		color: black;
	}
	
	/* figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	} */
</style>

