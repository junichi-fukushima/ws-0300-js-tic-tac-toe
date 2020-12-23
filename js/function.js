window.addEventListener("DOMContentLoaded", () => {

  // 各セルの状態を管理する
  let cells = document.querySelectorAll(".cell")
  let states = ["","","","","","","","",""];

   // クリックイベント
   cells.forEach((element, index) => {
     element.addEventListener("click", function(){
       cellClick(element,states,index)
    },false);
   });

   // true/falseで○×を切り替えられるようにする。  
   let NextTurn = true;

   // クリックした時の処理を決める関数
   function cellClick(element,states,index) {
    if (calculateWinner(states)) {
      return;
    }
    if (element.textContent == "") {
      states[index] = NextTurn ? "○" : "×";
      element.innerHTML = states[index];
      TitleSwap(NextTurn)
    }
    calculateWinner(states)
    NextTurn = !NextTurn;
   }

   //  "○" : "×"下線の入れ替え
   function TitleSwap(NextTurn){
     let circle = document.getElementById("circle");
     let cross = document.getElementById("cross");
     if(NextTurn == true){
      circle.classList.toggle('active');
      cross.classList.remove("active");
     }else{
      cross.classList.toggle('active');
      circle.classList.remove("active");
     }
   }

   //statusのテキスト(Starting...)を変える  
   function changestatus(winstate){
    document.getElementById("status").innerText = `${winstate} win!!`;
  }

  // RESTARTボタンを押したらstateの状態を初期値にする
    let restart_btn = document.getElementById("restart_btn")
    restart_btn.addEventListener("click", function(){
      states = new Array(9).fill("")
      cells.forEach((element, index) => {
      element.innerHTML = states[index]
      document.getElementById("status").innerText = `starting...`;
     });
   },false);

   //勝敗を判定する  
   function calculateWinner(states) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        states[a] &&
        states[a] === states[b] &&
        states[a] === states[c]
      ) {
        changestatus(states[a])
        return states[a];
      }
    }
    return null;
  }
});


