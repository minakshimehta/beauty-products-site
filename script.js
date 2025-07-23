$(document).ready(function () {
  let current = 0;
  const slides = $('.carousel-slide');

  function showSlide(index) {
    slides.removeClass('active');
    slides.eq(index).addClass('active');
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  setInterval(nextSlide, 4000);

  $('.custom-hamburger').click(function () {
    $('.custom-nav').toggleClass('active');
  });

  $('.filter-btn').on('click', function () {
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    const category = $(this).text().trim();

    $('.product-card').each(function () {
      const match = $(this).find('.product-category').text().trim();
      if (category === 'All Product' || match === category) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });


});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for contacting us!");
  this.reset();
});
