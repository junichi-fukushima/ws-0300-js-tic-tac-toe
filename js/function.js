window.addEventListener("DOMContentLoaded", () => {
  let xIsNext = true;
  document.querySelectorAll(".cell").forEach((element, index) => {
    element.addEventListener("click", cellClick);
  });
  function cellClick(event) {
    event.target.textContent = xIsNext ? "○" : "×";
    // status.textContent = "次の手番: " + (xIsNext ? "O" : "X");
    xIsNext = !xIsNext;
  }
});


// let elm1 = document.getElementById("1")
//   elm1.addEventListener('click', function() {
//   elm1.innerHTML = "○";
// }, false);
