let degrees = document.getElementById("deg");
let type = document.querySelector("#type-el");
let convert = document.getElementById("convert");
let result = document.getElementById("result");
let calculation;
convert.addEventListener("click", () => {
  if (type.value === "Celsius") {
    calculation = Math.ceil((degrees.value * 9) / 5 + 32);
    result.innerHTML = `${calculation} &degF`;
  } else{
    calculation = Math.ceil(((degrees.value - 32) * 5) / 9);
  result.innerHTML = `${calculation} &degC`;
  }
});
