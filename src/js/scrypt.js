// var name = 'evgeny';

// let number = 7;
// const pi = 3.14;

// number = 4;

// let leftBorderWidth = 200;

//number
//string   строка словами  '', "", ``
// true/false
// null 
// undefined
// let obj = {
//     name: 'apple',
//     color: 'green',
//     weight: 200
// }
// Symbol

// alert(1234)
// console.log(number)
// let answer = confirm('Вам есть 18?')
// console.log(answer);

// let answer = prompt('Вам есть 18?')
// console.log(answer);

// console.log(4 + "sdf");

// let isChecked = false,
//     isClose = false;

// console.log(isChecked && isClose);

// console.log(isChecked || isClose);

// if (2*1 == 8*1) {
//     console.log('верно')
// } else {
//     console.log('ошибка')
// }

// let answer = confirm('Вам есть 18?')
// if  (answer) {
//     console.log('go in')
// } else{
//     console.log('bye')
// }

// const num = 48;

// if (num < 49) {
//     console.log('no')
// } else if (num>100){
//     console.log('many')
// } else {
//     console.log('good')
// }

// for(let i = 1; i < 8; i++) {
//     console.log(i)
// }

// function logging(a, b){
//     console.log(a + b)
// }

// logging(3, 5);


// logging(6, 4);


// 1 способ slick



// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron_left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron_right.png"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                   dots: true,
//                   arrows: false
//                 }
//             }
//         ]
//       });
//   });

//  "2  способ через Tiny slider"


// main slider Tiny Slider
const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  controls: false,
  nav: false
});
document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});
document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});



// Tabs jQuery scrypt
$(document).ready(function(){
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});

function toggleSlide(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    });
};

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');
});

    






//   var slider = tns({
//     container: '.my-slider',
//     items: 1,
//     responsive: {
//       640: {
//         edgePadding: 20,
//         gutter: 20,
//         items: 2
//       },
//       700: {
//         gutter: 30
//       },
//       900: {
//         items: 3
//       }
//     }
//   });
  

// 3 способ