<div class="grid-container">
	<div class="grid-item left-header">Design your very own PC,</div>
	<div class="grid-item right-header">Presets</div>
	<div class="grid-item preview"><p>PC IMAGE GOES HERE</p></div>
	<div class="grid-item preset1">
		<h1>BUDGET NVIDIA BUILD</h1><br>
		<ul style="list-style-type:none;">
			<li>11th-gen intel core i5</li>
			<li>Nvidia Geforce GTX 1660</li>
			<li>16GB DDR4 RAM</li>
			<li>512 SSD</li>
		</ul> 
		<a href="http://localhost:5173/rec2" class="btn variant-filled-primary">USE THIS PRESET</a>
	</div>
	<div class="grid-item preset2">
		<h1>HIGH-END AMD BUILD</h1><br>
		<ul style="list-style-type:none;">
			<li>AMD Ryzen 7 7700X</li>
			<li>AMD Radeon RX 6800 XT</li>
			<li>16GB DDR4 RAM</li>
			<li>512 SSD</li>
		</ul> 
		<a href="http://localhost:5173/rec2" class="btn variant-filled-primary">USE THIS PRESET</a>
	</div>
	<div class="grid-item pickpart">Pick parts based on budget and functionality</div>
	<div class="grid-item moreinfo">
		<a href="http://localhost:5173/info" class="btn variant-filled-primary">MORE INFO</a>
	</div>
	<div class="grid-item start">
		<a href="http://localhost:5173/rec1_2" class="btn variant-filled-primary">START BUILDING YOUR PC</a>
	</div>
</div>

<style lang="postcss">
	*{
		background: #313131;
		font-family: Arial;
	}

	.grid-container {
		justify-content: center;
		display: grid;
		padding: 20px;
		padding-bottom: 0px;
		grid-template-columns: 10vw 20vw 5vw 15vw 15vw;
		grid-template-rows: 10vh 20vh 10vh 15vh 10vh;
		grid-auto-rows: minmax(15%, auto);
		gap: 20px;

		height: 100%;
		/* justify-content: center;
		align-content: start; */
		z-index: 1;
	}

	.grid-item {
		border-style: solid;
		border-color: aliceblue;
		border-width: 2px;
		background-color: rgb(47, 0, 255);
	}

	.left-header{
		grid-column-start: 1;
		grid-column-end: 3;
		align-self: center;
		justify-self: stretch;
		text-align: center;
		font-size: 40px;
		background: transparent;
		border-style: none;
	}

	.right-header{
		grid-column-start: 4;
		grid-column-end: 6;
		background: transparent;
		border-style: none;
		align-self: center;
		justify-self: stretch;
		text-align: center;
		text-justify: center;
		font-size: 40px;
	}

	.preview{
		grid-column-start: 1;
		grid-column-end: 3;
		grid-row-start: 2;
		grid-row-end: 4;
		text-align: center;
		background-color: transparent;
	}

	.preview p {
		font-size: 20px;
		padding-top: 90px;
	}

	.preset1 {
		grid-row-start: 2;
		grid-row-end: 6;
		grid-column-start: 4;
		grid-column-end: 5;
		background-color: rgb(84, 84, 84);
		/* border-style: none; */
	}

	.preset1 h1 {
		text-align: center;
		font-size: 25px;
		padding: 10px;
		line-height: 35px;
	}

	.preset1 li{
		height: 70px;
		font-size: 20px;
		font-weight: bold;
		padding: 10px;
		background-color: rgb(84, 84, 84);
	}

	.preset1 a {
		margin-left: 43px;
		background: rgb(47, 47, 255);
		font-size: 15px;
		padding: 15px 15px;
	}

	.preset2{
		grid-row-start: 2;
		grid-row-end: 6;
		grid-column-start: 5;
		grid-column-end: 6;
		background-color: rgb(84, 84, 84);
	}

	.preset2 h1 {
		text-align: center;
		font-size: 25px;
		padding: 10px;
		line-height: 35px;
	}

	.preset2 li{
		height: 70px;
		font-size: 20px;
		font-weight: bold;
		padding: 10px;
		background-color: rgb(84, 84, 84);
	}

	.preset2 a {
		margin-left: 43px;
		background: rgb(47, 47, 255);
		font-size: 15px;
		padding: 15px 15px;
	}

	.pickpart {
		grid-row-start: 4;
		grid-column-start: 1;
		grid-column-end: 3;
		font-size: 40px;
		line-height: 45px;
		background-color: transparent;
		border-style: none;
	}

	.moreinfo {
		text-align: center;
		border-style: none;
		grid-row-start: 5;
		grid-column-start: 1;
		font-size: 23px;
		background-color: transparent;
		justify-self: start;
	}

	.moreinfo a {
		background: rgb(47, 47, 255);
		font-size: 20px;
		padding: 23px 20px;
	}

	.start {
		grid-row-start: 5;
		grid-column-start: 2;
		text-align: center;
		font-size: 23px;
		border-style: none;
		background: transparent;
		justify-self: end;
	}

	.start a {
		background: rgb(47, 47, 255);
		font-size: 20px;
		padding: 23px 20px;
		/* border-radius: 25%; */
	}


	figure {
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
	}
</style>

<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
</script>