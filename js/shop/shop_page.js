// script range to shop page
$(function () {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 500,
    values: [75, 300],
    slide: function (event, ui) {
      $("#left_input").val(ui.values[0]);
      $("#rigth_input").val(ui.values[1]);
    },
  });
  $("#amount").val("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));
});


// close shop massange 
$('.shop_block .massange_shop .icon_close').on('click', function (){
  $('.shop_block .massange_shop').css('display', 'none')
})

// open mobile filter
let open_mobile_filter = false;
$('.shop_block .block_products .mobile_filter_block').on('click', function (){
  if(open_mobile_filter === false){
    $('.shop_block .block_products .filters').css({
      height: '1320px',
      'box-shadow': '0 1px 3px #00000080',
      'padding-bottom': '15px',
    })
    open_mobile_filter = true;
  } else {
    $('.shop_block .block_products .filters').css({
      height: '0',
      'box-shadow': '0 0px 0px #00000080',
      'padding-bottom': '0px',
    })
    open_mobile_filter = false;
  }
})

// edit products width
$('#products_edit').on('click', function (){
  $('.shop_block .block_products .products .body_slider').css({
    width: '100%',
  })

  $('.shop_block .block_products .products .body_slider .slider_product_photo').css({
    display: 'inline-block',
    width: '250px',
    margin: '15px',
    height: '150px',
  })
  $('.shop_block .block_products .products .body_slider .title').css({
    position: 'relative',
    top: '-170px',
    left: '285px',
    width: '33%',
    margin: '0'
  })
  $('.shop_block .block_products .products .body_slider .product_info').css({
    position: 'relative',
    top: '-150px',
    left: '285px',
    width: '30%',
    margin: '0',
  })
  $('.shop_block .block_products .products .body_slider .price_likes').css({
    width: '30%',
    'flex-wrap': 'wrap',
    position: 'relative',
    top: '-285px',
    margin: '0px',
    left: '80%',
  })
  $('.shop_block .block_products .products .body_slider .price_likes .likes .like').css({
    position: 'absolute',
    left: '0',
    top: '85px',
  })
  $('.shop_block .block_products .products .body_slider .price_likes .likes .buy').css({
    position: 'absolute',
    left: '70px',
    top: '85px',
  })
  $('.shop_block .block_products .products .body_slider').css({
    height: '225px'
  })
  $(this).css('color','#5b9600')
  $('#products_adjust').css('color','#4c4a4a')
})



$('#products_adjust').on('click', function (){
 
  $('.shop_block .block_products .products .body_slider').css({
    width: '240px',
  })

  $('.shop_block .block_products .products .body_slider .slider_product_photo').attr('style','')
  $('.shop_block .block_products .products .body_slider .title').attr('style','')
  $('.shop_block .block_products .products .body_slider .product_info').attr('style','')
  $('.shop_block .block_products .products .body_slider .price_likes').attr('style','')
  $('.shop_block .block_products .products .body_slider .price_likes .likes .like').attr('style','')
  $('.shop_block .block_products .products .body_slider .price_likes .likes .buy').attr('style','')
  $('.shop_block .block_products .products .body_slider').css({
    height: '420px'
  })
  $('#products_edit').css('color','#4c4a4a')
  $('#products_adjust').css('color','#5b9600')
})







