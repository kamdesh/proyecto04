const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const sumBtn = document.getElementById("sumBtn");
const result = document.getElementById("result");

sumBtn.addEventListener("click", () => {

  const total =
  Number(num1.value) + num2.value;

  result.textContent = `Resultado: ${total}`;

});