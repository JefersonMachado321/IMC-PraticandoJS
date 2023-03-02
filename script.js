const btn = document.querySelector('#btn');

function imc() {
  const nome = document.querySelector('#nome').value;
  const peso = document.querySelector('#peso').value;
  const altura = document.querySelector('#altura').value;
  const resultado = document.querySelector('#resultado');

  const calculoImc = (peso / (altura * altura)).toFixed(1);

  if (nome !== '' && peso !== '' && altura !== '') {
    let classificacao = '';

    if (calculoImc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (calculoImc < 25) {
      classificacao = 'Peso ideal';
    } else if (calculoImc < 30) {
      classificacao = 'Sobrepeso';
    } else if (calculoImc < 35) {
      classificacao = 'Obesidade grau 1';
    } else if (calculoImc < 40) {
      classificacao = 'Obesidade grau 2';
    } else {
      classificacao = 'Obesidade grau 3';
    }

    resultado.textContent = `${nome} seu IMC é ${calculoImc} você está ${classificacao}`;
  }
}

btn.addEventListener('click', imc);
