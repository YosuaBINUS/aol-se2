var previousText = {};
var savedText = {};

function openMenu(boxNumber) 
{
    var menuColumn = document.getElementById("menuColumn");
    var menuContent = document.getElementById("menuContent");
    menuContent.innerHTML = '';
    
    var { customText } = getCustomTextForBox(boxNumber);
    var buttonElement = document.createElement('button');
    
    buttonElement.textContent = customText;
    buttonElement.onclick = function() {
      updateBoxText(boxNumber, customText);
    };
    menuContent.appendChild(buttonElement);
  
    menuColumn.style.display = "block";
  }
  
  function getCustomTextForBox(boxNumber) {
    var customText = '';
    var price = 0;
  
  switch (boxNumber) {
    case 1:
      customText = 'NZXT H510i';
      price = 1555170;
      break;
    case 2:
      customText = 'ASUS TUF B550';
      price = 2340000;
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
    price: price
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