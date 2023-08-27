$(document).ready(function () {
  // Scrooling Animation
  $(window).scroll(function () {
    var h = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;

    $(".slideanim1").each(function () {
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
      if (pos < winTop + h * 80 / 100) {
        $(this).addClass("slide");
      }
    });
    $(".slideanim2").each(function () {
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
      if (pos < winTop + h * 80 / 100) {
        setTimeout(() => {
          $(this).addClass("slide");
        }, 150);
      }
    });
    $(".slideanim3").each(function () {
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
      if (pos < winTop + h * 80 / 100) {
        setTimeout(() => {
          $(this).addClass("slide");
        }, 300);
      }
    });
    $(".slideanim4").each(function () {
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
      if (pos < winTop + h * 80 / 100) {
        setTimeout(() => {
          $(this).addClass("slide");
        }, 450);
      }
    });
    $(".slideanim5").each(function () {
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
      if (pos < winTop + h * 80 / 100) {
        setTimeout(() => {
          $(this).addClass("slide");
        }, 600);
      }
    });
  });

  // Slick Configuration
  $('.testimonial-slider').slick({
    infinite: true,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal
  var modalImg = $("#modal-img");
  $(".srcImg").on("click", function () {
    url = $(this).attr("src");
    modal.style.display = "flex";
    $(modalImg).attr("src", url);
  })

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }
});

// Change favicon according to dark/light theme

let lightSchemeIcon = document.querySelector('link#light-theme-favicon');
let darkSchemeIcon = document.querySelector('link#dark-theme-favicon');

matcher = window.matchMedia('(prefers-color-scheme: dark)');
matcher.addEventListener('change', onUpdate);
onUpdate();

function onUpdate() {
  if (matcher.matches) {
    lightSchemeIcon.remove();
    document.head.append(darkSchemeIcon);
  } else {
    darkSchemeIcon.remove();
    document.head.append(lightSchemeIcon);
  }
}
