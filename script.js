const salario = document.getElementById("salario");
const form = document.getElementById("form");
const impostoInput = document.getElementById("imposto");
const salarioLiquido = document.getElementById("salarioLiquido");

function calcularImposto(salario) {
  if (salario < 1434) {
    return 0;
  } else if (salario >= 1434 && salario < 2150) {
    return salario * 0.075;
  } else if (salario >= 2150 && salario < 2866) {
    return salario * 0.15;
  } else if (salario >= 2866 && salario < 3582) {
    return salario * 0.225;
  } else {
    return salario * 0.275;
  }
}

form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  impostoInput.value = calcularImposto(salario.value);
  salarioLiquido.value = salario.value - impostoInput.value;
  return;
});
