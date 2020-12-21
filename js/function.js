window.addEventListener("DOMContentLoaded", () => {

  // 各セルの状態を管理する
  let cells = document.querySelectorAll(".cell")
  let states = [{id:cells[0].id,state:""},
                {id:cells[1].id,state:""},
                {id:cells[2].id,state:""},
                {id:cells[3].id,state:""},
                {id:cells[4].id,state:""},
                {id:cells[5].id,state:""},
                {id:cells[6].id,state:""},
                {id:cells[7].id,state:""},
                {id:cells[8].id,state:""},];

   let NextTurn = true;
   let turns = document.querySelector(".turn");

   // クリックイベント
   cells.forEach((element, index) => {
     element.addEventListener("click", function(){
       cellClick(element,states,index)
    },false);
   });

   // クリックした時の処理を決める関数
   function cellClick(element,states,index) {
    if (element.textContent == "") {
      let target = states[index]
      target.state = NextTurn ? "○" : "×";
      element.innerHTML = target.state;
      if(NextTurn == true){
        element.classList.toggle('active');
      }
    }
    
    NextTurn = !NextTurn;
    
   }

   // "○" : "×"下線の入れ替え
   // function TitleSwap(NextTurn){
   //   if(NextTurn == true){
   //     element.classList.toggle('apple');
   //   }else{
   //    element.classList.toggle('orange');
   //   }
   // }
});


