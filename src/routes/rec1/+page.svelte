<body class="body">
    <main>
      <h1 class ="text1">Let's Build Your PC!</h1>
      <h2 class ="text2">Please Answer These Questions!</h2>
      <div class="form-container">
        <div class="form-question1">
          <label class="question-label">What Are you planning to use this PC for?:</label>
          <div class="form-option1">
            <input type="radio" id="type-family" name="type" value="family" required>
            <label for="type-family">Family PC</label>
          </div>
          <div class="form-option2">
            <input type="radio" id="type-work" name="type" value="work" required>
            <label for="type-work">Work PC</label>
          </div>
          <div class="form-option3">
            <input type="radio" id="type-gaming" name="type" value="gaming" required>
            <label for="type-gaming">Gaming PC</label>
          </div>
          <div class="form-option4">
            <input type="radio" id="type-media-creation" name="type" value="media-creation" required>
            <label for="type-media-creation">Media Creation PC</label>
          </div>
          <div class="form-option5">
            <input type="radio" id="type-other" name="type" value="other" required>
            <label for="type-other">Other</label>
          </div>
        </div>
        <div class="form-question2">
          <label class="question-label">What chipset brand you want to choose?:</label>
          <div class="form-option2">
            <input type="radio" id="chip-intel" name="chip" value="intel" required>
            <label for="chip-intel">Intel</label>
          </div>
          <div class="form-option3">
            <input type="radio" id="chip-AMD" name="chip" value="AMD" required>
            <label for="chip-AMD">AMD</label>
          </div>
          <div class="form-option6">
            <input type="radio" id="chip-non" name="type" value="non" required>
            <label for="chip-non">No Preference</label>
          </div>
        </div>
        <div class="form-question3">
          <label class="question-label">What Graphic Card brand you want to choose?:</label>
          <div class="form-option2">
            <input type="radio" id="gpu-nvidia" name="gpu" value="nvidia" required>
            <label for="gpu-nvidia">Nvidia</label>
          </div>
          <div class="form-option3">
            <input type="radio" id="gpu-AMD" name="gpu" value="AMD" required>
            <label for="gpu-AMD">AMD</label>
          </div>
          <div class="form-option6">
            <input type="radio" id="gpu-non" name="gpu" value="non" required>
            <label for="gpu-non">No Preference</label>
          </div>
        </div>
        <div class="form-question4">
            <label class="question-label">Please Set Your Budget!</label>
            <div class="budget-displays">
            <div id="budget-display">10000K IDR</div>
            <div>
              <button id="decrease-button" class="budget-button">-</button>
              <button id="increase-button" class="budget-button">+</button>
            </div>
            </div>
          </div>
        </div>
    <div class = "continue">
      <a href="reccomended.html">Continue</a>
    </div>
   </main>
   <script src="myscripts.js"></script>
  </body>

<style lang="postcss">

.body{
    background-color: #1A1C1E;
}
.container{
  position: absolute;
  width: 100%;
  height: 79px;
  left: 0px;
  top: 0px;
  background: #111113;
  display: block;
}


.burger{
  display: block;
  text-align: center;
  position: absolute;
  width: 60px;
  height: 33px;
  top:16px;
  left:0px;
  background-color: #111113;

}

.butt{
  display: block;
  text-align: left;
  position: absolute;

  background-color: transparent;
  color: white;
  padding: 100px;
  border: none;

}


.PCbuild{
  position: absolute;
  width: 250px;
  height: 70px;
  left: 104px;
  top: 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;

  color: #FFFFFF;
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
top: 120px;
transform: translate(-50%, -50%);

font-family: 'Inter';
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
top: 160px;
transform: translate(-50%, -50%);
text-align: justify;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 44px;


color: #FFFFFF;

}

.form-container {
  box-sizing: border-box;

  position: absolute;
  width: 100vw;
  height: 1100px;
  top:200px;
 
  background: #2C2E31;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}

.form-question1 {
  margin-bottom: 20px;
  position: absolute;
}

.form-question2 {
  top: 250px;
  position: absolute;
}

.form-question3 {
  top: 500px;
  position: absolute;
}

.form-question4 {
  top: 750px;
  left: 90px;
  position: absolute;
}

.question-label{
  font-weight: bold;
  color:#ccc;

  position: absolute;
  width: 1000px;
  height: 39px;
  left: 625px;
  top: 20px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  text-decoration: underline;
}

.form-input {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.form-option1{

position: absolute;
width: 250px;
height: 24px;
left: 150px;
top: 120px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 24px;

color: #FFFFFF;


}

.form-option2{

position: absolute;
width: 250px;
height: 24px;
left: 450px;
top: 120px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 24px;

color: #FFFFFF;


  }
  .form-option3{

  position: absolute;
  width: 250px;
  height: 24px;
  left: 850px;
  top: 120px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;

  color: #FFFFFF;

    }
    .form-option4{

    position: absolute;
    width: 250px;
    height: 24px;
    right: 450px;
    top: 120px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;

    color: #FFFFFF;
  }
.form-option5{

  position: absolute;
  width: 250px;
  height: 24px;
  right: 50px;
  top: 120px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;

    color: #FFFFFF;


        }

.form-option6{

 position: absolute;
  width: 250px;
  height: 24px;
  left: 1200px;
 top: 120px;
        
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
        
  color: #FFFFFF;
        
        
  }
      


.slider-container {
  max-width: 400px;
  margin: 0 auto;
}

.slider-label {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}



.budget-displays{

  position: absolute;
  width: 500px;
  height: 50px;
  left: 555px;
  top: 120px;
  text-align: center;
  background: #5E5E5E;
  font-size: 40px;
  color: #ccc;
}

.budget-button{
  background-color: transparent;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 50px;
}

.budget-button:hover {
  background-color: #ccc;
}

.continue{

  position: absolute;
  width: 280px;
  height: 80px;
  left: 1500px;
  top: 1225px;
  font-size: 30px;
  text-align: center;
  background: #0029FF;


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
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';
</script>