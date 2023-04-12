const listaDeTeclas = document.querySelectorAll('.tecla');

function playSom(idSom) {
  const element = document.querySelector(idSom);

  if (element != null && element.localName == 'audio') {
    element.play();
  } else {
    alert('Elemento não encontrado ou seletor inválido');
  }
}

for (let i = 0; i < listaDeTeclas.length; i++) {
  let tecla = listaDeTeclas[i];
  let capturaSom = tecla.classList[1];

  tecla.onclick = () => {
    playSom(`#som_${capturaSom}`);
  };

  tecla.onkeydown = (event) => {
    let key = event.code;
    if (key == 'Space' || key == 'Enter' || key == 'NumpadEnter') {
      tecla.classList.add('ativa');
    }
  };

  tecla.onkeyup = () => {
    tecla.classList.remove('ativa');
  };
}
