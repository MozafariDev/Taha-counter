let res = document.querySelector(".box-res");
let reset = document.querySelector(".box-reset");
let title = document.querySelector(".box-title");
let plus = document.querySelector(".box-option-button-plus");
let mins = document.querySelector(".box-option-button-mins");
plus.addEventListener("click", function () {
  counterValue = Number(res.textContent);
  let newValue = counterValue + 1;
  if (newValue > 50) {
    newValue = 50;
    title.textContent = "LIMIT! BUY PRO TO COUNT MORE.";
  }
  res.innerHTML = newValue;
});
mins.addEventListener("click", function () {
  counterValue = Number(res.textContent);
  let newValue = counterValue - 1;
  if (newValue < 0) {
    newValue = 0;
  }
  title.textContent = "COUNT ALL THINGS YOU NEED!";
  res.innerHTML = newValue;
});
reset.addEventListener("click", function () {
  res.textContent = 0;
});
