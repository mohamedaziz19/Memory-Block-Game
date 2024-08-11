// Select The Start Game Button
document.querySelector(".control-button span").onclick = function (){
  // Prompt Window To Ask For Name
  let yourName = prompt("What's Your Name");

  // if name Empty
  if (yourName === null || yourName === "") {
    // Set Name Unknown
    document.querySelector(".name span").innerHTML = "Unknown";
  } else {
    // Set Name To Your Name
    document.querySelector(".name span").innerHTML = yourName;
  }

  // Audio Game

    if (yourName === null || yourName ===  yourName){
      function audioGame () {
        document.getElementById("fail").play();
      }
    }
audioGame(); 

  // Remove Splash Screen
  document.querySelector(".control-button").remove();

  // Add Timer to Game
  let timer = document.querySelector(".info-container .timer span ");
  
  timer.style.color = "#2196f3";

  let counter = setInterval(countDown, 1000);

  function countDown() {

    timer.innerHTML = parseInt(timer.innerHTML);

    timer.innerHTML -= 1;

  if (timer.innerHTML === "15") {

    timer.style.cssText = 

    "background-color : #DDD ; color : red ; font-size :38px ; padding : 4px" ;

  }else if (timer.innerHTML === "0") {

      clearInterval(counter);

      let end = document.querySelector(".control-end")
      end.style.display = 'block'
    }
  }
}




// Duration of the operation
let duration = 1000; 

  // Select memory-game-block
let blockContainer = document.querySelector(".memory-game-block");

  // Create Array From My Blocks
let blocks = Array.from(blockContainer.children);

  // Create Range From 
// let orderRange = [...Array(blocks.length).keys()];

  // Create Range From Keys
let orderRange = Array.from(Array(blocks.length).keys());

// console.log(orderRange)
shuffle(orderRange);
// console.log(orderRange)

  // Add Order CSS property To Game Blocks
blocks.forEach((block , index) => {

  block.style.order = orderRange[index];

  // Add Click Event 
  block.addEventListener("click", function (){

    // Trigger The Flip Block Function
    flipBlock(block)

  })
});

  // Shuffle Function
  function shuffle (array){

    // Settings var
    let current = array.length,
    temp, 
    random;

    while(current > 0 ){

      // Get Random ele
      random = Math.floor(Math.random() * current)

      // Decrease length bu one
      current--;

      // [1] Save current Element In Stash 
      temp = array[current]

      // [2] Current Element = Random Element
      array[current] = array[random]

      // [3] Random Element = Get Element From Stash
      array[random] = temp
    }

    return array

  }

  // Flip block function 
  function flipBlock(selectedBlock){

    // Add Class Is Flipped
    selectedBlock.classList.add("is-flipped");

    // Collect All Flipped Cards
    let allFlippedBlocks = blocks.filter((flipBlock) =>
      flipBlock.classList.contains("is-flipped")
    );

    // if there's two Selected Bocks
    if (allFlippedBlocks.length === 2 ){

      // console.log('two flipped Box Selected')

      // Stop Clicking function
      stopClicking()

      // Check Matched Block 
      checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
    }

  }
  
  // Stop Clicking Function
  function stopClicking(){

    // Add Class No Name On Main Container
    blockContainer.classList.add('no-clicking')

    setTimeout(() => {
      // Remove Class no-clicking After The Duration
        blockContainer.classList.remove("no-clicking");
    }, duration);
  }

    // FunctionCheck Matched Block 
function checkMatchedBlocks (firstBlock , secondBlock){

  let triesElement = document.querySelector(".tries span"); 

  if(firstBlock.dataset.animal === secondBlock.dataset.animal){

    firstBlock.classList.remove('is-flipped')
    secondBlock.classList.remove('is-flipped')

    firstBlock.classList.add('has-match');
    secondBlock.classList.add('has-match');

    // Add Audio if they Match
        // document.getElementById("success").play();
  } else {
    triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;

    setTimeout(() => {
      firstBlock.classList.remove("is-flipped");
      secondBlock.classList.remove("is-flipped");
    }, duration);

    // Add Audio if they Don't Match
    // document.getElementById("fail").play();
  }
}
