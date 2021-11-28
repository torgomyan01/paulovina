
        let windows_width = window.innerWidth;
        if (windows_width > 1500 && windows_width < 2000) {
            $(".slider").slick({
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
            });

            $(".my_sorts_heading_fullBody").slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                prevArrow: false,
                nextArrow: false,
            });
        }
        if (windows_width > 700 && windows_width < 1200) {
            $(".slider").slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
            });
            $(".my_sorts_heading_fullBody").slick({
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                prevArrow: false,
                nextArrow: false,
            });
        }
        if (windows_width > 500 && windows_width < 700) {
            $(".slider").slick({
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
            });
            $(".my_sorts_heading_fullBody").slick({
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                prevArrow: false,
                nextArrow: false,
                arows: true,
                vertical: true,
                verticalSwiping: true,
            });
        }
        if (windows_width > 300 && windows_width < 500) {


            $(".slider").slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
            });
            $(".my_sorts_heading_fullBody").slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                prevArrow: false,
                nextArrow: false,
                arows: true,
                vertical: true,
                verticalSwiping: true,
            });

            $("#maps")[0].height = 450;
        }


// header slider
let header = $('header');
let headerSliderPhotoLinks = [
  'photo1.jpg',
  'photo2.jpg',
  'photo3.jpg',
  'photo4.png',
  'photo2.jpg',
  'photo3.jpg',
  'photo1.jpg',
];
let nextImageHeaderNumber = 0; 
headerSliderPhotoLinks.map((e)=>{
  $('header .slider_pages_round').append('<div class="rounds"></div>')
})
let sliderPpages = $('header .slider_pages_round .rounds');
let headerInterval = setInterval(()=>{
  header.css('background-image','url(img/slide_image/'+headerSliderPhotoLinks[nextImageHeaderNumber]+')');
  sliderPpages.removeClass('active');
  sliderPpages[nextImageHeaderNumber].classList.add('active');
  nextImageHeaderNumber++
  if(nextImageHeaderNumber === headerSliderPhotoLinks.length){
    nextImageHeaderNumber = 0;
  }
},4000)
let routClick = $('header .slider_pages_round .rounds');
routClick.map((e)=>{
  routClick[e].onclick = function (){
    nextImageHeaderNumber = e;
    sliderPpages.removeClass('active');
    header.css('background-image','url(img/slide_image/'+headerSliderPhotoLinks[nextImageHeaderNumber]+')');
    sliderPpages[nextImageHeaderNumber].classList.add('active');
  }
})