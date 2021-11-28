// media site for slider


// to languages
let open_language = false;
$("#languages").on("click", function () {
  if (open_language === false) {
    $(this).css({
      height: "270px",
      top: "125px",
      background: "#fff",
      color: "#000",
    });
    $(".countryCode").css({
      color: "#595656",
      "font-style": "normal",
      "font-weight": "normal",
      "font-size": "14px",
      "line-height": "30px",
    });
    open_language = true;
  } else {
    $(this).css({
      height: "30px",
      top: "0px",
      background: "#fff0",
      color: "#fff",
    });
    $(".countryCode").css({
      color: "#595656",
      "font-style": "normal",
      "font-weight": "normal",
      "font-size": "14px",
      "line-height": "30px",
    });
    open_language = false;
  }
});

// open mobile menu to Павловния

let open_table_podmenu_one = false;
$(".table_podmenu_one").on("click", function () {
  if (open_table_podmenu_one === false) {
    $(this).css({
      height: "290px",
      background: "#efefef",
      "border-radius": "30px 0 0 0",
      "margin-left": "-25px",
    });

    $(".text_one_podmenu").css({
      background: "#5b9600",
      padding: "5px 25px",
      "border-radius": "30px 0px",
      color: "#fff",
    });
    $("#mob_menu_icons_to_open_1").css("transform", "rotate(90deg)");
    open_table_podmenu_one = true;
  } else {
    $(this).css({
      height: "30px",
      background: "#fff",
      "border-radius": "0 0 0 0",
      "margin-left": "0px",
    });

    $(".text_one_podmenu").css({
      background: "#fff",
      padding: "5px 0px",
      "border-radius": "0px 0px",
      color: "#595656",
    });
    $("#mob_menu_icons_to_open_1").css("transform", "rotate(-90deg)");
    open_table_podmenu_one = false;
  }
});

// open mobile menu to Бизнес - план

let table_podmenu_two = false;
$(".table_podmenu_two").on("click", function () {
  if (table_podmenu_two === false) {
    $(this).css({
      height: "295px",
      background: "#efefef",
      "border-radius": "30px 0 0 0",
      "margin-left": "-25px",
    });

    $(".text_one_podmenu_tow").css({
      background: "#5b9600",
      padding: "5px 25px",
      "border-radius": "30px 0px",
      color: "#fff",
    });
    $("#mob_menu_icons_to_open_2").css("transform", "rotate(90deg)");
    table_podmenu_two = true;
  } else {
    $(this).css({
      height: "30px",
      background: "#fff",
      "border-radius": "0 0 0 0",
      "margin-left": "0px",
    });

    $(".text_one_podmenu_tow").css({
      background: "#fff",
      padding: "5px 0px",
      "border-radius": "0px 0px",
      color: "#595656",
    });
    $("#mob_menu_icons_to_open_2").css("transform", "rotate(-90deg)");
    table_podmenu_two = false;
  }
});

// open mobile menu to Личный кабинет
let table_podmenu_three = false;
$(".table_podmenu_three").on("click", function () {
  if (table_podmenu_three === false) {
    $(this).css({
      height: "365px",
      background: "#efefef",
      "border-radius": "30px 0 0 0",
      "margin-left": "-25px",
    });

    $(".text_one_podmenu_three").css({
      background: "#5b9600",
      padding: "5px 25px",
      "border-radius": "30px 0px",
      color: "#fff",
    });
    $("#mob_menu_icons_to_open_3").css("transform", "rotate(90deg)");
    table_podmenu_three = true;
  } else {
    $(this).css({
      height: "30px",
      background: "#fff",
      "border-radius": "0 0 0 0",
      "margin-left": "0px",
    });

    $(".text_one_podmenu_three").css({
      background: "#fff",
      padding: "5px 0px",
      "border-radius": "0px 0px",
      color: "#595656",
    });
    $("#mob_menu_icons_to_open_3").css("transform", "rotate(-90deg)");
    table_podmenu_three = false;
  }
});

function block() {
  $("body").addClass("hiden");
}

function closeBody() {
  $("body").removeClass("hiden");
}

// close mobile menu
$(".icon_close").on("click", function () {
  $(".mobile_menu").css("transform", "translateX(100%)");
  closeBody();
});

// for open mobile menu
$(".mob_menu").on("click", function () {
  $(".mobile_menu").css("transform", "translateX(0)");
  block();
});

// close popup for registration to mobile
$(".icon_close").on("click", function () {
  $(".page_reg").css("transform", "translateX(100%)");
  closeBody();
});

// open registratin page for mobile
$(".menu_buttons_for_regREG").on("click", function () {
  $(".mobile_menu").css("transform", "translateX(100%)");

  setTimeout(() => {
    $(".page_reg").css("transform", "translateX(0)");
  }, 500);
});

// close logout page for mobile
$(".icon_close_logout").on("click", function () {
  $(".page_logot").css("transform", "translateX(100%)");
  closeBody();
});

// open logout page for mobile
$(".menu_buttons_for_regLog").on("click", function () {
  $(".mobile_menu").css("transform", "translateX(100%)");

  setTimeout(() => {
    $(".page_logot").css("transform", "translateX(0)");
  }, 500);
});

// open header for to sorts select 1
let open_header_select_1 = false;
$(".header_form_sorts_1").on("click", function () {
  let block_left = $(".header_form_sorts_1")[0].offsetLeft;
  let block_top = $(".header_form_sorts_1")[0].offsetTop;
  if (open_header_select_1 === false) {
    $(this).css({
      "border-radius": "25px 25px 0 0",
      "border-bottom": "0",
    });
    $(".openening_page_header_form_sorts_1").css({
      display: "block",
      top: block_top + 40,
      left: block_left,
    });
    open_header_select_1 = true;
  } else {
    $(".header_form_sorts_1").css({
      "border-radius": "30px",
      "border-bottom": "1px solid rgb(163, 163, 163)",
    });
    //
    $(".openening_page_header_form_sorts_1").css({
      display: "none",
      top: block_top + 40,
      left: block_left,
    });
    open_header_select_1 = false;
  }
  let choose_selects_1 = $(".openening_page_header_childs");
  choose_selects_1.map((e) => {
    choose_selects_1[e].onclick = function () {
      console.log(e);
      let this_title = this.innerText;
      $(".title_header_form_sort_1").text(this_title);
      // closing selects 1
      $(".header_form_sorts_1").css({
        "border-radius": "30px",
        "border-bottom": "1px solid rgb(163, 163, 163)",
      });
      //
      $(".openening_page_header_form_sorts_1").css({
        display: "none",
        top: block_top + 40,
        left: block_left,
      });
      open_header_select_1 = false;
    };
  });

  console.log(block_top, block_left);
});

// open header for to sorts select 2
let open_header_select_2 = false;
$(".header_form_sorts_2").on("click", function () {
  let block_left = $(".header_form_sorts_2")[0].offsetLeft;
  let block_top = $(".header_form_sorts_2")[0].offsetTop;
  if (open_header_select_1 === false) {
    $(this).css({
      "border-radius": "25px 25px 0 0",
      "border-bottom": "0",
    });
    $(".openening_page_header_form_sorts_2").css({
      display: "block",
      top: block_top + 40,
      left: block_left,
    });
    open_header_select_1 = true;
  } else {
    $(".header_form_sorts_2").css({
      "border-radius": "30px",
      "border-bottom": "1px solid rgb(163, 163, 163)",
    });
    //
    $(".openening_page_header_form_sorts_2").css({
      display: "none",
      top: block_top + 40,
      left: block_left,
    });
    open_header_select_1 = false;
  }
  let choose_selects_1 = $(".openening_page_header_childs_2");
  choose_selects_1.map((e) => {
    choose_selects_1[e].onclick = function () {
      console.log(e);
      let this_title = this.innerText;
      $(".title_header_form_sort_2").text(this_title);
      // closing selects 1
      $(".header_form_sorts_2").css({
        "border-radius": "30px",
        "border-bottom": "1px solid rgb(163, 163, 163)",
      });
      //
      $(".openening_page_header_form_sorts_2").css({
        display: "none",
        top: block_top + 40,
        left: block_left,
      });
      open_header_select_1 = false;
    };
  });

  console.log(block_top, block_left);
});

// open filter to range
let filter_price = false;
$("#open_price").on("click", function () {
  if (filter_price === false) {
    $(".price").css("height", "160px");
    $("#open_price_icon").css("transform", "rotate(0deg)");
    filter_price = true;
  } else {
    $(".price").css("height", "42px");
    $("#open_price_icon").css("transform", "rotate(-180deg)");
    filter_price = false;
  }
});

// open filter to chackbox 1
let filter_chack_products = false;
$("#open_chack_1").on("click", function () {
  if (filter_chack_products === false) {
    $("#products_filter").css("height", "262px");
    $("#open_chack_one").css("transform", "rotate(0deg)");
    filter_chack_products = true;
  } else {
    $("#products_filter").css("height", "42px");
    $("#open_chack_one").css("transform", "rotate(-180deg)");
    filter_chack_products = false;
  }
});

// open filter to sorts
let filter_chack_sort = false;
$("#open_sorts").on("click", function () {
  if (filter_chack_sort === false) {
    $("#sorts_filter").css("height", "385px");
    $("#open_sorts_icon").css("transform", "rotate(0deg)");
    filter_chack_sort = true;
  } else {
    $("#sorts_filter").css("height", "42px");
    $("#open_sorts_icon").css("transform", "rotate(-180deg)");
    filter_chack_sort = false;
  }
});

// open filter to size
let filter_chack_size = false;
$("#open_size").on("click", function () {
  if (filter_chack_size === false) {
    $("#size_filter").css("height", "200px");
    $("#open_size_icon").css("transform", "rotate(0deg)");
    filter_chack_size = true;
  } else {
    $("#size_filter").css("height", "42px");
    $("#open_size_icon").css("transform", "rotate(-180deg)");
    filter_chack_size = false;
  }
});

// open filter to sezon
let filter_chack_sezon = false;
$("#sezon_size").on("click", function () {
  if (filter_chack_sezon === false) {
    $("#sezon_filter").css("height", "150px");
    $("#open_sezon_icon").css("transform", "rotate(0deg)");
    filter_chack_sezon = true;
  } else {
    $("#sezon_filter").css("height", "42px");
    $("#open_sezon_icon").css("transform", "rotate(-180deg)");
    filter_chack_sezon = false;
  }
});

// funbction open pemember to login popup
let open_pemember = false;
$(".registration_popup .body_login_popup form .pemember_block .pemember").on("click", function () {
  if (open_pemember === false) {
    $(".registration_popup .body_login_popup form .pemember_block .pemember .chackbox .chack").css({
      "-webkit-transform": "scale(1)",
      transform: "scale(1)",
    });
    $(this).attr("data-pemember", "true");
    open_pemember = true;
  } else {
    $(".registration_popup .body_login_popup form .pemember_block .pemember .chackbox .chack").css({
      "-webkit-transform": "scale(0)",
      transform: "scale(0)",
    });
    $(this).attr("data-pemember", "false");
    open_pemember = false;
  }
});

// close login popup for desktop
$(".registration_popup .body_login_popup .header_login_popup .icon_close").on("click", function () {
  $(".registration_popup").css("display", "none");
});

// close registration popup for desktop
$(".registration_popup .body_registration_popup .header_registration_popup .icon_close").on("click", function () {
  $(".registration_popup").css("display", "none");
});

// function ti open popup registration
$(".registration_popup .body_login_popup .header_login_popup .title").on("click", function () {
  $(".registration_popup .body_login_popup").css("display", "none");
  $(".registration_popup .body_registration_popup").css("display", "block");
});

// function open popup for registration
$(".registration_popup .body_registration_popup .header_registration_popup .login").on("click", function () {
  $(".registration_popup .body_login_popup").css("display", "block");
  $(".registration_popup .body_registration_popup").css("display", "none");
});

let open_odal_myProfile = false;
$("#icons_open_modal").on("click", function () {
  if (open_odal_myProfile === false) {
    $("nav .contener .nav_full_menu .user_prpfile .icons:nth-of-type(4) .opening_modal").css("height", "370px");
    open_odal_myProfile = true;
  } else {
    $("nav .contener .nav_full_menu .user_prpfile .icons:nth-of-type(4) .opening_modal").css("height", "0px");
    open_odal_myProfile = false;
  }
});

let menu_paulownia = false;
$("#menu_paulownia").on("click", function () {
  if (menu_paulownia === false) {
    $("nav .contener .nav_full_menu .menu #menu_paulownia .opening_menu_paulownia").css("height", "360px");
    setTimeout(() => {
      $("nav .contener .nav_full_menu .menu #menu_paulownia .opening_menu_paulownia").css("overflow", "unset");
    }, 500);
    menu_paulownia = true;
  } else {
    $("nav .contener .nav_full_menu .menu #menu_paulownia .opening_menu_paulownia").css({
      height: "0px",
      overflow: "hidden",
    });
    menu_paulownia = false;
  }
});

// open menu buisnes plans
let open_buisnes_plan = false;
$("#buisnes_plan").on("click", function () {
  if (open_buisnes_plan === false) {
    $("nav .contener .nav_full_menu .menu #buisnes_plan .buisnes").css("height", "365px");
    open_buisnes_plan = true;
  } else {
    $("nav .contener .nav_full_menu .menu #buisnes_plan .buisnes").css("height", "0px");
    open_buisnes_plan = false;
  }
});
// open menu
let open_modal_dsptop_meu_rigth = false;
$("nav .contener .nav_full_menu .menu #menu_paulownia .opening_menu_paulownia a:nth-of-type(2)").on("mouseover", function () {
  if (open_modal_dsptop_meu_rigth === false) {
    $(this).css("background", "#fff");
    $("nav .contener .nav_full_menu .menu #menu_paulownia .opening_menu_paulownia").css({
      background: "#EFEFEF",
      "border-radius": "30px 0 0 0",
    });
    $("nav .contener .nav_full_menu .menu #menu_paulownia .opening_menu_paulownia .new_paulownia").css("display", "block");
    open_modal_dsptop_meu_rigth = true;
  }
});

$("nav .contener .nav_full_menu .menu #menu_paulownia .opening_menu_paulownia .new_paulownia").on("mouseover", function () {
  if (open_modal_dsptop_meu_rigth === false) {
    $(this).css("background", "#fff");
    $("nav .contener .nav_full_menu .menu #menu_paulownia .opening_menu_paulownia").css({
      background: "#EFEFEF",
      "border-radius": "30px 0 0 0",
    });
    $("nav .contener .nav_full_menu .menu #menu_paulownia .opening_menu_paulownia .new_paulownia").css("display", "block");
    open_modal_dsptop_meu_rigth = true;
  }
});
$("nav .contener .nav_full_menu .menu #menu_paulownia .opening_menu_paulownia .new_paulownia").on("mouseout", function () {
  if (open_modal_dsptop_meu_rigth === true) {
    $(this).css("background", "#fff");
    $("nav .contener .nav_full_menu .menu #menu_paulownia .opening_menu_paulownia").css({
      background: "#fff",
      "border-radius": "30px 0",
    });
    $("nav .contener .nav_full_menu .menu #menu_paulownia .opening_menu_paulownia .new_paulownia").css("display", "none");
    open_modal_dsptop_meu_rigth = false;
  }
});

$("nav .contener .nav_full_menu .menu #menu_paulownia .opening_menu_paulownia a:nth-of-type(2)").on("mouseout", function () {
  if (open_modal_dsptop_meu_rigth === true) {
    $(this).css("background", "#fff");
    $("nav .contener .nav_full_menu .menu #menu_paulownia .opening_menu_paulownia").css({
      background: "#fff",
      "border-radius": "30px 0",
    });
    $("nav .contener .nav_full_menu .menu #menu_paulownia .opening_menu_paulownia .new_paulownia").css("display", "none");
    open_modal_dsptop_meu_rigth = false;
  }
});

// chackbox to shop page
let products_chack = $(".block_chackbox");
let item_obj = [];
products_chack.map((e) => {
  item_obj.push(false);
  products_chack[e].onclick = function () {
    let this_item = $(".item")[e];
    console.log(this_item);
    if (item_obj[e] === false) {
      this_item.style.transform = "scale(1)";
      item_obj[e] = true;
    } else {
      this_item.style.transform = "scale(0)";
      item_obj[e] = false;
    }
    console.log(item_obj);
  };
});

// ful selects site functions

let sections = $(".sec");
let bodyOptions = $(".body_sec");
let op_t = $(".op_t");
let sectionsArray = [];

sections.map((e) => {
  sectionsArray.push(false);
  sections[e].onclick = function () {
    //for showing to sections
    showingSection(e);
    //for coose title to section
    CooseTitle(e);
    if (sectionsArray[e] === true) {
      op_t[e].style.borderRadius = "30px 30px 0 0";
      console.log(op_t[e].style.borderRadius);
    } else {
      op_t[e].style.borderRadius = "40px";
    }
  };
});

// function to choose value
function CooseTitle(e) {
  let childBodySec = bodyOptions[e].children;
  for (let i = 0; i < childBodySec.length; i++) {
    childBodySec[i].onclick = function () {
      console.log(this);
      let this_text = this.innerText;
      op_t[e].innerText = this_text;
      op_t[e].setAttribute("data-title", this_text);
    };
  }
}

function showingSection(e) {
  let showindBlock = bodyOptions[e];
  if (sectionsArray[e] === false) {
    showindBlock.classList.add("show");
    sectionsArray[e] = true;
  } else {
    showindBlock.classList.remove("show");
    sectionsArray[e] = false;
  }
}


let news_block_buttons = $('.news_block .tatle_nav button');
news_block_buttons.onclick = function (){
  
}
news_block_buttons.map((e)=>{
  news_block_buttons[e].onclick = function (){
    news_block_buttons.map((i)=>{
      news_block_buttons[i].classList.remove('active');
    })
    news_block_buttons[e].classList.add('active');
  }
})
// open block news
$('#block_news').on('click', function (){
  $('.news_block .news_block_body .search_block .icon_to_news_block').css('display', 'flex');
  $('.news_block .news_block_body .search_block').css('display','flex');
  $('#select_news').css('display', 'none');
  $('#news_block_1').css('display','block');
  $('#news_block_2').css('display','none');
  $('#news_block_3').css('display','none');
})
// open block_blog
$('#block_blog').on('click', function (){
  $('.news_block .news_block_body .search_block .icon_to_news_block').css('display', 'none');
  $('.news_block .news_block_body .search_block').css('display','flex');
  $('#select_news').css('display', 'block');
  $('#news_block_1').css('display','none');
  $('#news_block_2').css('display','block');
  $('#news_block_3').css('display','none');
})
// open block_info
$('#block_info').on('click', function (){
  $('.news_block .news_block_body .search_block .icon_to_news_block').css('display', 'flex');
  $('.news_block .news_block_body .search_block').css('display','none');
  $('#select_news').css('display', 'none');
  $('#news_block_1').css('display','none');
  $('#news_block_2').css('display','none');
  $('#news_block_3').css('display','block');
})


