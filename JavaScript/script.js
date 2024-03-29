
/** Filtre dynamique galerie photo */

$('.portfolio-menu ul li').click(function () {
    $('.portfolio-menu ul li').removeClass('active');
    $(this).addClass('active');

    let selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
        filter: selector
    });
    return false;
});
$(document).ready(function () {
    let popup_btn = $('.popup-btn');
    popup_btn.magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});


/** identification role admin netlify */

if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }