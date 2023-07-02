  btn.addEventListener('click', function () {
    secret.classList.toggle('show')
  })

  function Reproduccion() {
    var video = document.getElementById("miVideo");
    if (video.paused) {
      video.play();
      setTimeout(function() {
        video.classList.add("mostrar");
      }, 10);
    } else {
      video.classList.remove("mostrar");
      setTimeout(function() {
        video.pause();
      }, 500);
    }
  }
  function toggleModoNoche() {
    var body = document.body;
    var boton = document.querySelector("button");

    body.classList.toggle("dark-mode");
  

    if (body.classList.contains("dark-mode")) {
      boton.textContent = "🌞";
    } else {
      boton.textContent = "🌛";
    }
  }
  function smoothScroll(target) {
    const element = document.querySelector(target);
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  }
  const scrollLinks = document.querySelectorAll('.scroll');

scrollLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('data-target');
    smoothScroll(target);
  });
});
