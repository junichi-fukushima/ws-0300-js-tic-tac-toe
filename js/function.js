window.addEventListener("DOMContentLoaded", () => {
  let NextTurn = true;
  let turns = document.querySelector(".turn");

  // クリックイベント
  document.querySelectorAll(".cell").forEach((element, index) => {
    element.addEventListener("click", cellClick);
  });

  // クリックした時の処理を決める関数
  function cellClick(event) {
    event.target.textContent = NextTurn ? "○" : "×";
    NextTurn ? turns.classList.add("active") : "×";
    NextTurn = !NextTurn;
    
  }
});


