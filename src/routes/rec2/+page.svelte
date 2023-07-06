<body class="body">
  
  <header>
      <img id="undoButton" src={undoImg} on:click={undoSelection}>
      <img id="saveButton" src={saveImg} on:click={saveSelection}>
  </header>
  
  <main>
    <div class="column">
      <h2>Prices</h2>
      <p>Please select the components.</p>
    </div>
    
    <div class="column">
      <h2>Overview</h2>
      <div class="box-column">
        <button class="box" on:click={() => openMenu(1)}>Case</button>
        <button class="box" on:click={() => openMenu(2)}>Motherboard</button>
        <button class="box" on:click={() => openMenu(3)}>CPU</button>
        <button class="box" on:click={() => openMenu(4)}>GPU</button>
        <button class="box" on:click={() => openMenu(5)}>Cooling</button>
        <button class="box" on:click={() => openMenu(6)}>Power Supply</button>
        <button class="box" on:click={() => openMenu(7)}>RAM</button>
        <button class="box" on:click={() => openMenu(8)}>Storage</button>
      </div>
    </div>

    <div class="column" id="menuColumn">
      <h2>List of Parts</h2><br>
      <div id="menuContent">
        
      </div>
    </div>

  </main>

</body>

<style lang="postcss">

body 
{
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #2C2E31;
}

main
{
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
    background-color: #333;
}

.column {
    flex: 1;
    padding: 10px;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background-color: #5E5E5E;
  }

footer 
{
    background-color: #333;
    color: #fff;
    padding: 10px;
    text-align: center;
}

.container
{
    position: absolute;
    width: 100%;
    height: 79px;
    left: 0px;
    top: 0px;
    background: #111113;
    display: block;
}

.burger
{
    display: block;
    text-align: center;
    position: absolute;
    width: 60px;
    height: 33px;
    top:16px;
    left:0px;
    background-color: #111113;
  
}
  
.button
{
    display: block;
    text-align: left;
    position: absolute;
  
    background-color: transparent;
    color: white;
    padding: 100px;
    border: none;
    top: -1px;
  
}

.PCbuild
{
    position: absolute;
    width: 250px;
    height: 70px;
    left: 104px;
    top: -23px;
  
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
  
    color: #FFFFFF;
}

#undoButton 
{
    margin-left: 200px;
    margin-top: 50px;
    width: 40px;
    height: 40px;
    display: inline-block;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #f1f1f1;
    text-decoration: none;
}

#saveButton 
{
    margin-left: 15px;
    margin-top: 50px;
    width: 40px;
    height: 40px;
    display: inline-block;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #f1f1f1;
    text-decoration: none;
}

#undoButton:hover 
{
    background-color: #ddd;
}
#saveButton:hover 
{
    background-color: #ddd;
}

.box-column
{
    display: flex;
    flex-wrap: wrap;
    width: 600px;
}

.box 
{
    width: 200px;
    height: 100px;
    margin: 10px;
    background-color: lightgray;
    text-align: center;
    line-height: 100px;
    font-weight: bold;
    color: #111113;
}

.box:hover {
  background-color: #bbbbbb;
}

:global(.button-part) {
  background-color: lightgray;
  font-size: 25px;
  color: black;
}

:global(.image-part) {
  height: 400px;
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
    
  import saveImg from '$lib/assets/saveImg.png';
  import undoImg from '$lib/assets/undoImg.png';
  import case1 from '$lib/assets/case1.jpg';
  import mb1 from '$lib/assets/mb1.jpg';
  import cpu1 from '$lib/assets/cpu1.jpg';


  var previousText = {};
  var savedText = {};

function openMenu(boxNumber) 
{
    var menuColumn = document.getElementById("menuColumn");
    var menuContent = document.getElementById("menuContent");
    menuContent.innerHTML = '';
    
    var { customText } = getCustomTextForBox(boxNumber);
    var { image } = getCustomTextForBox(boxNumber);//
    var buttonElement = document.createElement('button');
    var buttonImage = document.createElement('IMG');//
    buttonImage.setAttribute("src", image);//
    buttonImage.classList.add('image-part');
    buttonElement.classList.add('button-part');
    
    buttonElement.textContent = customText;
    buttonElement.onclick = function() {
      updateBoxText(boxNumber, customText);
    };
    menuContent.appendChild(buttonElement);
    menuContent.appendChild(buttonImage);//
  
    menuColumn.style.display = "block";
  }
  
  function getCustomTextForBox(boxNumber) {
    var customText = '';
    var price = 0;
    var image;
  
  switch (boxNumber) {
    case 1:
      customText = 'NZXT H510i';
      price = 1555170;
      image = case1;
      break;
    case 2:
      customText = 'ASUS TUF B550';
      price = 2340000;
      image = mb1;
      break;
    case 3:
      customText = 'AMD Ryzen 5600X';
      price = 2600000;
      break;
    case 4:
      customText = 'AMD RX 6700';
      price = 3550000;
      break;
    case 5:
      customText = 'NZXT Kraken 120';
      price = 1345800;
      break;
    case 6:
      customText = 'Corsair 650W Bronze';
      price = 11000000;
      break;
    case 7:
      customText = 'Corsair 16GB 3200MHZ';
      price = 829000;
      break;
    case 8:
      customText = 'W.D Blue SSD 500GB';
      price = 525000;
      break;
    default:
      customText = 'Error';
      price = 0;
  }

  return {
    customText: customText,
    price: price,
    image
  };
}
  
function updateBoxText(boxNumber, customText) 
{
    var box = document.querySelector('.column:nth-child(2) .box-column .box:nth-child(' + boxNumber + ')');
    if (previousText.hasOwnProperty(boxNumber)) {
        return; 
    }
    previousText[boxNumber] = box.textContent;
    box.textContent = customText;
}


function undoSelection() {
    for (var boxNumber in previousText) {
      if (previousText.hasOwnProperty(boxNumber)) {
        var box = document.querySelector('.column:nth-child(2) .box-column .box:nth-child(' + boxNumber + ')');
        
        // Restore the previous text
        box.textContent = previousText[boxNumber];
      }
    } 
    previousText = {};
  
    var column1 = document.querySelector('.column:nth-child(1)');
    column1.innerHTML = '';
  }

function updateColumn1(boxNumber, customText)
{
    if(customText)
    {
        var image = document.createElement("img");
    image.src = "image" + boxNumber + ".png"; // Set the image source based on the box number
    }
}

function saveSelection() {
  const selectedOptions = document.querySelectorAll('input[type="checkbox"]:checked');
  selectedOptions.forEach(option => {
    console.log(option.value);
  });

  var boxes = document.querySelectorAll('.column:nth-child(2) .box-column .box');
  var totalPrice = 0;
  var prices = [];

  for (var i = 0; i < boxes.length; i++) {
    var boxNumber = i + 1;
    var customText = boxes[i].textContent;
    savedText[boxNumber] = customText;

    if (customText !== '') { // Added this condition
      var { customText, price } = getCustomTextForBox(boxNumber);
      totalPrice += price;
      prices.push({ customText: customText, price: price });
    }
  }

  var column1 = document.querySelector('.column:nth-child(1)');
  column1.innerHTML = '';

  if (prices.length > 0) {
    var totalText = document.createElement('h3');
    totalText.textContent = 'Total Price: ' + totalPrice;
    column1.appendChild(totalText);

    var pricesList = document.createElement('ul');
    prices.forEach(item => {
      var listItem = document.createElement('li');
      listItem.textContent = item.customText + ': ' + item.price;
      pricesList.appendChild(listItem);
    });
    column1.appendChild(pricesList);
  }
}
  
</script>

