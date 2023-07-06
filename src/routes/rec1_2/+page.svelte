<body class="body">
  <div class="main">
  <h1 class ="text1">Let's Build Your PC!</h1>
  <h2 class ="text2">Please Answer These Questions!</h2>
  <div class="form">
    <h1>What are you planning to build this PC for?</h1>
    <div class="form-item pc-type">
      <input type="radio" class="option 1" id="fpc" name="pc-type" value="always" required>
      <label for="fpc">Family PC</label>

      <input type="radio" class="option 2" id="wpc" name="pc-type" value="never" required>
      <label for="wpc">Work PC</label>

      <input type="radio" class="option 3" id="gpc" name="pc-type" value="costChange" required>
      <label for="gpc">Gaming PC</label>

      <input type="radio" class="option 4" id="mcpc" name="pc-type" value="costChange" required>
      <label for="mcpc">Media Creation PC</label>
      
      <input type="radio" class="option 5" id="other" name="pc-type" value="costChange" required>
      <label for="other">Other</label>

    </div>
    <hr>

    <h1>What chipset brand you want to choose?</h1>
    <div class="form-item chipset">
      <input type="radio" class="option 1" id="intel" name="chipset" value="always"/>
      <label for="intel">Intel</label>

      <input type="radio" class="option 2" id="amdcs" name="chipset" value="never"/>
      <label for="amdcs">AMD</label>

      <input type="radio" class="option 3" id="npcs" name="chipset" value="costChange"/>
      <label for="npcs">No preference</label>

    </div>
    <br><br>
    <h1>What graphic card brand you want to choose?</h1>
    <div class="form-item gc">
      <input type="radio" class="option 1" id="nvidia" name="gc" value="always"/>
      <label for="nvidia">Nvidia</label>

      <input type="radio" class="option 2" id="amdgc" name="gc" value="never"/>
      <label for="amdgc">AMD</label>

      <input type="radio" class="option 3" id="npgc" name="gc" value="costChange"/>
      <label for="npgc">No preference</label>

    </div>
    <hr>
    
    <h1>Please set your budget</h1>
    <div class="budget">
      <button class="budget changer reduce" id="budget_decrease" on:click={decreaseBudget}>-</button>
      <h1 class="budget amount" id="budget_display">{budget}k IDR</h1>
      <button class="budget changer increase" id="budget_increase" on:click={increaseBudget}>+</button>
    </div>
    <div class="continue">
      <a href="http://localhost:5173/rec2" class="btn variant-filled-primary">START BUILDING YOUR PC</a>
    </div>
    

    <br>
  </div>
</div>
</body>

<style lang="postcss">

*{
  font-family: arial;
}

.body{
    background-color: #1A1C1E;
    font-family: Arial;
}

.main {
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
}

.dropdown1 {
  position: relative;
  display: inline-block;
  top: -12px;
}

.dropdown-content1 {
  display: none;
  position: absolute;
  width: 190px;
  height: 145px;
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
  top: 75px;
}


.dropdown1:hover .dropdown-content1 {
  display: block;
}

.text1{
position: absolute;
width: 380px;
height: 48px;
left: 50%;
top: 45px;
transform: translate(-50%, -50%);

font-family: Arial;
font-style: normal;
font-weight: 400;
font-size: 40px;
line-height: 48px;
text-align: center;
color: #FFFFFF;

}

.text2{

position: absolute;
/* width: 1000px;
height: 44px; */
left: 50%;
top: 90px;
transform: translate(-50%, -50%);
text-align: justify;
font-family: Arial;
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 44px;
color: #FFFFFF;
}

.form {
  position: absolute;
  background-color: #2C2E31;
  width: 100vw;
  height: auto;
  top: 150px;
}

.form h1 {
  font-size: 30px;
  text-align: center;
  padding: 20px;
}

.form-item {
  text-align: center;
}

label {
  display: inline-block;
  padding-top: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
  padding-left: 10px;
  font-size: 30px
}

hr {
  background-color: #FFFFFF;
  height: 2px;
}

.budget {
  display: inline-block;
  padding: 20px;
  text-align: start;
  justify-self: start;
  position: relative;
  left: 310px;
  padding-bottom: 50px;
}

.budget button {
  /* position: absolute; */
  font-size: 50px;
  justify-self: start;
}

.changer:hover {
  background-color: #1A1C1E;
}

.continue {
  position: absolute;
  /* text-align: right; */
  /* background-color: blue; */
  font-size: 30px;
  right: 50px;
  bottom: 100px;
  justify-self: end;
}

.continue a {
  background-color: blue;
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

  const increaseButton = document.getElementById('increase_button');
  const decreaseButton = document.getElementById('decrease_button');

  // // Set the initial budget value
  let budget = 10000;

  // // Function to handle increasing the budget
  const increaseBudget = () => {
    if (budget + 5000 <= 30000) {
      budget += 5000;
      console.log(budget);
      updateBudgetDisplay();
    }
  };

  // Function to handle decreasing the budget
  const decreaseBudget = () => {
    if (budget - 5000 >= 10000) {
      budget -= 5000;
      updateBudgetDisplay();
    }
  };
</script>

