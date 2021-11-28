let productQuantity = document.getElementById('product_quantity');

let fixPrice = document.getElementById('fix_price');
var regex = /\d+/g;
var string = fixPrice.innerText;
var matches = string.match(regex); // creates array from matches

console.log(matches)

productQuantity.innerText = matches[0];




let pluseButton = $('#pluse');
let minusButton = $('#minus');

let priceOne = $('.products_page .contener .products_blocks .block_info_and_image .product_info .borduct_price .price_one .price');
let priceTwo = $('.products_page .contener .products_blocks .block_info_and_image .product_info .borduct_price .price_two .price');

let priceQuanOne = $('.products_page .contener .products_blocks .block_info_and_image .product_info .borduct_price .price_one .price_quan');
let priceQuanTwo = $('.products_page .contener .products_blocks .block_info_and_image .product_info .borduct_price .price_two .price_quan');

let price = priceOne.text();


plusePrice(false);

function plusePrice(x) {
    let productQuantyti = productQuantity.innerText;
    if (x === true) {
        productQuantyti++
    }

    productQuantity.innerText = productQuantyti;

    let newPrice = price * productQuantyti;

    priceOne.text(newPrice);
    priceTwo.text(newPrice)

    priceQuanOne.text(productQuantyti);
    priceQuanTwo.text(productQuantyti);
}

// plus number
pluseButton.on('click', function () {
    plusePrice(true);
})


function minusPrice() {
    let productQuantyti = productQuantity.innerText;
    if (productQuantyti > Number(matches[0])) {
        productQuantyti--
        productQuantity.innerText = productQuantyti;


        let newPrice = price * productQuantyti;

        priceOne.text(newPrice);
        priceTwo.text(newPrice)

        priceQuanOne.text(productQuantyti);
        priceQuanTwo.text(productQuantyti);
    }
}
// minus number
minusButton.on('click', function () {
    minusPrice();
})








// open table 
let tableMenu = $('.products_page .contener .products_blocks .descreption_products .tables .tebles_texts');
let descreptionText = $('.products_page .contener .products_blocks .descreption_products .descreption_products_text');

tableMenu.map((e) => {
    tableMenu[e].onclick = function () {
        tableMenu.removeClass('active');
        tableMenu[e].classList.add('active');
        // open tabs
        descreptionText.css('display', 'none')
        descreptionText[e].style.display = 'flex';
    }
})


// open slider img 
let sliderImage = $('.products_page .contener .products_blocks .block_info_and_image .product_image .slider_image .img');
let bigPage = $('.products_page .contener .products_blocks .block_info_and_image .product_image .full_image');
let sliderMobile = $('.slidr_to_mobile .img')
sliderImage.map((e) => {
    sliderImage[e].onclick = function () {
        bigPage.css('background', 'url(' + this.src + ') no-repeat center center')
    }
})
// clisk to mobile slider
sliderMobile.map((e) => {
    sliderMobile[e].onclick = function () {
        bigPage.css('background', 'url(' + this.src + ') no-repeat center center')
    }
})


// click slider 
let ButtonSliderTop = $('.products_page .contener .products_blocks .block_info_and_image .product_image .slider_image .btn_top');
let ButtonSliderButton = $('.products_page .contener .products_blocks .block_info_and_image .product_image .slider_image .btn_bottom');
let bodySlider = $('.products_page .contener .products_blocks .block_info_and_image .product_image .slider_image .image');

let scrolingTop = 0;
let QualityImage = sliderImage.length - 5;
// to top click
ButtonSliderTop.on('click', function () {
    console.log('ds')
    if(QualityImage * 100 !== scrolingTop){
        scrolingTop += 100;
        $(bodySlider).animate({
            scrollTop: scrolingTop
        }, 500);
    }
    

})

// to button click
ButtonSliderButton.on('click', function () {
    console.log('ds')

    if(scrolingTop !== 0){
        scrolingTop -= 100;
        $(bodySlider).animate({
            scrollTop: scrolingTop
        }, 500);
    }
})


// slidre to mobile
$(".slidr_to_mobile").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
});