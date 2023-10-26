var countDownDate = new Date("Oct 26, 2023 09:00:00").getTime();
var countdownfunction = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timestamp").innerHTML = "😝 O evento começará em " + days + "d : " + hours + "h : "
        + minutes + "m : " + seconds + "s 😝";

    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("countdown").innerHTML = "😝 EVENTO EM ANDAMENTO 😝";
    }
}, 1000);

const slides = document.querySelectorAll('.card');
const slideTransf = document.querySelector('#slide');
const prevBtn = document.querySelector('#prevButton');
const nextBtn = document.querySelector('#nextButton');
const pauseBtn = document.querySelector('#pauseButton');

let isPaused = false;
let intervalId;
let intervalId2;
let currentIndex = 0;


function slideAnimation1366() {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    slides.forEach((slide, index) => {
      if (index === currentIndex) {
        slide.id = 'c2';
        switch (currentIndex) {
          case 1:
            slideTransf.style.transform = 'translateX(21.5vw)';
            break;
          case 2:
            slideTransf.style.transform = 'translateX(-16vw)';
            break;
          case 3:
            slideTransf.style.transform = 'translateX(-56,5vw)';
            break;
          default:
            slideTransf.style.transform = 'translateX(65vw)';
            break;
        }
      } else {
        slide.id = 'c1';
        slide.style.transform = '';
      }
    });
}

function slideAnimation1920() {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    slides.forEach((slide, index) => {
      if (index === currentIndex) {
        slide.id = 'c2';
        switch (currentIndex) {
          case 1:
            slideTransf.style.transform = 'translateX(15.5vw)';
            break;
          case 2:
            slideTransf.style.transform = 'translateX(-15vw)';
            break;
          case 3:
            slideTransf.style.transform = 'translateX(-45.5vw)';
            break;
          default:
            slideTransf.style.transform = 'translateX(46vw)';
            break;
        }
      } else {
        slide.id = 'c1';
        slide.style.transform = '';
      }
    });
}

let mediaQueries = {
  "(max-width: 1366px)": function(e) {
    if (e.matches) {
      // Chame a função slideAnimation1366 aqui
      slideAnimation1366();
      console.log("Media query (max-width: 1366px) corresponde!");
    } else {
      console.log("Media query (max-width: 1366px) não corresponde!");
    }
  },
  "(max-width: 1920px)": function(e) {
    if (e.matches) {
      // Chame a função slideAnimation1920 aqui
      slideAnimation1920();
      console.log("Media query (max-width: 1920px) corresponde!");
    } else {
      console.log("Media query (max-width: 1920px) não corresponde!");
    }
  }
};

// Adicione listeners para cada media query
for (let query in mediaQueries) {
  let mediaQuery = window.matchMedia(query);
  mediaQuery.addListener(mediaQueries[query]);

  // Verifique a correspondência inicial
  if (mediaQuery.matches) {
    mediaQueriesquery;
    console.log(`Media query ${query} corresponde!`);
  } else {
    console.log(`Media query ${query} não corresponde!`);
  }
}
intervalId = setInterval(slideAnimation1366, 5000);
intervalId2 = setInterval(slideAnimation1920, 5000);

function ari() {
    window.location.href = "https://arineto1.github.io/fetec"
}

function pong() {
    window.location.href = "../pong.html"
}

function robo () {
    window.location.href = "../robotica.html";
}

function scratch() {
    window.location.href = "../scratch.html";
}

function spotify() {
    window.location.href = "https://profkeribeiro.github.io/fetec2023/"
}

function inicio() {
    window.location.href = "index.html";
}



// Selecione todos os cards dentro da div pai
const cards = slideTransf.querySelectorAll('.card');

// Função para ajustar o tamanho dos cards com base na posição na div pai
function adjustCardSize() {
  const slideRect = slideTransf.getBoundingClientRect();
  const slideCenter = slideRect.width / 2;

  cards.forEach((card) => {
    const cardRect = card.getBoundingClientRect();
    const cardCenter = (cardRect.left + cardRect.right) / 2;

    // Calcule a distância do card ao centro da div pai
    const distanceToCenter = Math.abs(slideCenter - cardCenter);

    // Calcule um fator de escala com base na distância ao centro
    // Quanto mais próximo do centro, maior será o fator de escala
    const scale = 1 + 0.4 * Math.pow(1 - distanceToCenter / (slideRect.width / 2), 3);//Menos abrupta "Math.pow(1 - distanceToCenter / (slideRect.width / 2), 2)"

    // Aplique a escala ao card
    card.style.transform = `scale(${scale})`;
  });
}

// Adicione um evento de rolagem na div pai para chamar a função
slideTransf.addEventListener('scroll', adjustCardSize);

// Chame a função uma vez para ajustar o tamanho dos cards inicialmente
adjustCardSize();

