$(document).ready(function() {    
    var setting1 = {
      spaceBetween: 10,
      slidesPerView: 4,
      width:650,
      // loop: true,
      // freeMode: true,
      // loopedSlides: 1, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    }
    var galleryThumbs = new Swiper('.gallery-thumbs',setting1);

    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      
      // loop:true,
      // loopedSlides: 1, //looped slides should be the same
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
})