const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.tech__raiting-counter'),
        lines = document.querySelectorAll('.tech__raiting-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
})



$(document).ready(function(){
$('.contacts__form').validate();

// function valideForms(form) {
//     $(form).validate({
//       rules: {
//         name: {
//           required: true,
//           minlength: 2
//         },
//         email: {
//           required: true,
//           email: true
//         }
//       },
//       messages: {
//         name: {
//           required: "Пожалуйста, введите своё имя",
//           minlength: jQuery.validator.format("Введите {0} символа!")
//         },
//         email: {
//           required: "Пожалуйста, введите свою почту",
//           email: "Неправильно введён адрес почты"
//         }
//       }
//     });
//   };

//   valideForms('#contacts-form');

});