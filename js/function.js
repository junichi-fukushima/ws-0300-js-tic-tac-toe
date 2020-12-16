window.addEventListener("DOMContentLoaded", () => {

  // 各セルの状態を管理する
  let cells = document.getElementsByClassName("cell")
  console.log(cells[0].dataset)
  // let states = [{id:cells[0].dataset.id,state:""},
  //               {id:cells[1].dataset.id,state:""},
  //               {id:cells[2].dataset.id,state:""},
  //               {id:cells[3].dataset.id,state:""},
  //               {id:cells[4].dataset.id,state:""},
  //               {id:cells[5].dataset.id,state:""},
  //               {id:cells[6].dataset.id,state:""},
  //               {id:cells[7].dataset.id,state:""},
  //               {id:cells[8].dataset.id,state:""},
  //               {id:cells[9].dataset.id,state:""},];

  // console.log(states[0].id)

  let NextTurn = true;
  let turns = document.querySelector(".turn");

  // クリックした時の処理を決める関数
  function cellClick(event) {
    event.dataset.id = '○';
    console.log(event)
    event.target.textContent = NextTurn ? "○" : "×";
    NextTurn = !NextTurn;
  }

  // クリックイベント
  states.forEach((element, index) => {
    console.log(element)
    element.addEventListener("click", cellClick(element));
    
  });
});


