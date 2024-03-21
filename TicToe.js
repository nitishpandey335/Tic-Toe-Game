let boxes = document.querySelectorAll(".box");
  let resetBtn = document.querySelector(".btn");
  let turno = true;

  const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
            console.log("Box was clicked");
            if (turno) {
                box.innerText = "X";
                turno = false;
            } else {
                box.innerText = "O";
                turno = true;
            }
            checkForWinner();
        });
});

  function checkForWinner() {
      for (let pattern of winPatterns) {
          let value1 = boxes[pattern[0]].innerText;
          let value2 = boxes[pattern[1]].innerText;
          let value3 = boxes[pattern[2]].innerText;
          if (value1 && value1=== value2 && value2 === value3) {
              alert("Winner: " + value1);
              disableBoxes();
              return;
            
          }
    
      }
  }
 const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
 };
