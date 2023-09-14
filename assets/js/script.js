  // Set the date we're counting down to
  var countDownDate = new Date("Oct 26, 2023 09:00:00").getTime();

  // Update the count down every 1 second
  var countdownfunction = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML = "O evento começará em " + days + "d : " + hours + "h : "
  + minutes + "m : " + seconds + "s";

  // If the count down is finished, write some text 
  if (distance < 0) {
      clearInterval(countdownfunction);
      document.getElementById("countdown").innerHTML = "😝 EVENTO EM ANDAMENTO 😝";
      }
   }, 1000);

   document.querySelector('.roxo').addEventListener('click', function() {
    window.open('https://www.instagram.com/luizeduos/');
   })