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
        document.getElementById("timestamp").innerHTML = "😝 EVENTO EM ANDAMENTO 😝";
    }
}, 1000);

const slides = document.querySelectorAll('.card');
const slideTransf = document.querySelector('#slide')
const prevBtn = document.querySelector('#prevButton');
const nextBtn = document.querySelector('#nextButton');
const pauseBtn = document.querySelector('#pauseButton');

let isPaused = false;
let intervalId;
let currentIndex = 0;

function slideAnimation() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.id = 'c2';
            switch (currentIndex) {
              case 1:
                slideTransf.style.transform = 'translateX(21%)';
                break;
              case 2:
                slideTransf.style.transform = 'translateX(-22,5%)';
                break;
              case 3:
                slideTransf.style.transform = 'translateX(-66%)';
                break;
              default:
                slideTransf.style.transform = 'translateX(64.5%)';
                break;
            }
        } else {
            slide.id = 'c1';
            slide.style.transform = '';
        }
    });
}




function prevSlide() {
    currentIndex--;
    if (currentIndex  > 5 ) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = 4
    }
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.id = 'c2';
            switch (currentIndex) {
              case 1:
                slideTransf.style.transform = 'translateX(21%)';
                break;
              case 2:
                slideTransf.style.transform = 'translateX(-22,5%)';
                break;
              case 3:
                slideTransf.style.transform = 'translateX(-66%)';
                break;
              default:
                slideTransf.style.transform = 'translateX(64.5%)';
                break;
            }
            console.log(currentIndex)
        } else {
            slide.id = 'c1';
            slide.style.transform = '';
        }
    })
}

function nextSlide() {
    slideAnimation()
}

function pauseSlide() {
    const pauseButton = document.getElementById('pauseButton');

    if (!isPaused) {
        clearInterval(intervalId);
        isPaused = true;
        pauseButton.classList.remove('fa-pause'); 
        pauseButton.classList.add('fa-play');
    } else {
        intervalId = setInterval(slideAnimation, 5000);
        isPaused = false;
        pauseButton.classList.remove('fa-play');
        pauseButton.classList.add('fa-pause');
    }
}

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const pauseButton = document.getElementById('pauseButton');

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);
pauseButton.addEventListener('click', pauseSlide);

intervalId = setInterval(slideAnimation, 5000);


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
    window.location.href = "scratch.html";
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

