<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { Drawer } from '@skeletonlabs/skeleton';
	import burger from '$lib/assets/Hamburger.png';
	import { Modal, modalStore } from '@skeletonlabs/skeleton';
</script>

<style>

.dropdown1 {
  position: relative;
  display: inline-block;
  width: 45px;
}

.dropdown-content1 {
  display: none;
  position: absolute;
  width: 190px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 6px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 60px;
  color: #F3F3F3;
  text-align: middle ;
  background-color: #1A1C26;
  padding-left: 5px;
}

.dropdown-content1 li {
	list-style-position: inside;
}

.dropdown-content1 li:hover {
	background-color: #313131;
}


.dropdown1:hover .dropdown-content1 {
    display: block;
}

</style>


<!-- App Shell -->
<Drawer />
<Modal />
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				
			<div class="dropdown1">
				<button class="butt"><img class="burger" src={burger} style="width:100%"></button>
				<div class="dropdown-content1">
				  <li><a href="http://localhost:5173">Home</a></li>
				  <li><a href="http://localhost:5173/rec1_2">Build Your PC</a></li>
				  <li><a href="http://localhost:5173/info">Info and Video</a></li>
				</div>
			  </div>

			</svelte:fragment>
			<span class="badge-icon variant-filled">(icon)</span>
			<h1 style="font-size:200%; ">PC Builder</h1>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>