window.addEventListener("DOMContentLoaded", () => {

  // 状態の管理(変数,状態)
  const context = {
    states:      new Array(9),
    NextTurn:    true,
    Progress:    true,
    battlecnt:   0,
    cellelement:   document.querySelectorAll(".cell"),
    restart_btn:   document.getElementById("restart_btn"),
    circle:        document.getElementById("circle"),
    cross:         document.getElementById("cross"),
    messagestatus: document.getElementById("status")
  }

  const status = {
    stating:        'starting...',
    circle_win:     '○ win!!',
    cross_win:      '× win!!',
    draw:           'draw'
  }

  const characters = {
    circle: '○',
    cross: '×'
  }

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
  
   // 関数(動作)

   //  "○" : "×"下線の入れ替え
   let TitleSwap = ({ NextTurn }) =>{
    if(NextTurn){
     circle.classList.add('active');
     cross.classList.remove("active");
    }else{
     cross.classList.add('active');
     circle.classList.remove("active");
    }
  }

   // クリックした時の処理を決める関数
   let cellClick = (e) => {
    const { Progress, states, NextTurn , cellelement, messagestatus } = context
    const index = Number(e.target.getAttribute('data-id')) - 1

    // 空だった時のみ○×記入可
    if(cellelement[index].innerHTML != "" || !Progress){
      return;
    }

    // ○×をcell内に表示させる
    const val = NextTurn ? characters.circle : characters.cross
    e.target.innerHTML = val
    states[index] = val
    context.NextTurn = !context.NextTurn;

    TitleSwap(context)
    calculateWinner(context)
    
    // どちらかが勝利のパターン
    if (calculateWinner(context)) {
      context.Progress = false
      const message = NextTurn ? status.circle_win : status.cross_win
      messagestatus.innerHTML = message
      return;
    }

    // 引き分けのパターン
    context.battlecnt++ 
    if (context.battlecnt === 9) {
      context.Progress = false
      messagestatus.innerHTML = status.draw
      return
    }
   }
   
   //勝敗を判定する  
   let calculateWinner = ({ states }) => {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        states[a] &&
        states[a] === states[b] &&
        states[a] === states[c]
      ) {
        return states[a];
      }
    }
    return null;
  }


  // main関数
  let mainfunc = () => {
    context.cellelement.forEach((element, index) => {
      element.addEventListener('click', cellClick)
    })
    restart_btn.addEventListener("click", () => location.reload())
  }
  
  mainfunc()
});



// クソコード

// window.addEventListener("DOMContentLoaded", () => {

//   // 各セルの状態を管理する
//   let cells = document.querySelectorAll(".cell")
//   let states = ["","","","","","","","",""];

//    // クリックイベント
//    cells.forEach((element, index) => {
//      element.addEventListener("click", function(){
//        cellClick(element,states,index)
//     },false);
//    });

//    // true/falseで○×を切り替えられるようにする。  
//    let NextTurn = true;

//    // クリックした時の処理を決める関数
//    function cellClick(element,states,index) {
//     if (calculateWinner(states)) {
//       return;
//     }
//     if (element.textContent == "") {
//       states[index] = NextTurn ? "○" : "×";
//       element.innerHTML = states[index];
//       TitleSwap(NextTurn)
//     }
//     calculateWinner(states)
//     NextTurn = !NextTurn;
//    }

//    //  "○" : "×"下線の入れ替え
//    function TitleSwap(NextTurn){
//      let circle = document.getElementById("circle");
//      let cross = document.getElementById("cross");
//      if(NextTurn == true){
//       circle.classList.toggle('active');
//       cross.classList.remove("active");
//      }else{
//       cross.classList.toggle('active');
//       circle.classList.remove("active");
//      }
//    }

//    //statusのテキスト(Starting...)を変える  
//    function changestatus(winstate){
//     document.getElementById("status").innerText = `${winstate} win!!`;
//   }

//   // RESTARTボタンを押したらstateの状態を初期値にする
//     let restart_btn = document.getElementById("restart_btn")
//     restart_btn.addEventListener("click", function(){
//       states = new Array(9).fill("")
//       cells.forEach((element, index) => {
//       element.innerHTML = states[index]
//       document.getElementById("status").innerText = `starting...`;
//      });
//    },false);

//    //勝敗を判定する  
//    function calculateWinner(states) {
//     const lines = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6]
//     ];
//     for (let i = 0; i < lines.length; i++) {
//       const [a, b, c] = lines[i];
//       if (
//         states[a] &&
//         states[a] === states[b] &&
//         states[a] === states[c]
//       ) {
//         changestatus(states[a])
//         return states[a];
//       }
//     }
//     return null;
//   }
// });