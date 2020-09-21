jQuery(document).ready(function ($) {

   //burger
   $('.icon-menu').on('click', function () {
      $('.icon-menu').toggleClass('active') && $('.header-modal').toggleClass('show') && $('body').toggleClass('lock');
   });


   //шапка
   let scrolled;
   window.onscroll = function () {
      scrolled = window.pageYOffset || document.documentElement.scrollTop;
      if (scrolled > 100) {
         $(".icon-menu").addClass('show') && $('.header').addClass('hide');
      }
      if (100 > scrolled) {
         $(".icon-menu").removeClass('show') && $('.header').removeClass('hide');
      }

   }

   //скролл

   $('a[href*="#"]').on("click", function (e) {
      e.preventDefault();

      $("html, body").animate(
         {
            scrollTop: $($(this).attr("href")).offset().top,
         },
         500,
         "linear"
      );
   });

   // делаете переменную в начале кода
   var isMobile = false;
   // проверка на размер экрана (размер я брал вроде с Bootstrap-а)
   $(document).ready(function () {
      if ($("body").width() <= 1024) {
         isMobile = true;
      }
      // и потом если нужен код только для телефона:
      if (isMobile) {
      }
      // или для остальных
      if (!isMobile) {
         function slide() {
            h = document.documentElement.clientHeight;
            $(
               ".welcome, .marketing, .video-and-foto, .youtoobe, .contact-form"
            ).css("height", h);
         }
         $(window).resize(slide);
         $(document).ready(slide);
      }
   });

   $(document).bind("mousewheel DOMMouseScroll", function (event) {
      scroll(event);
   });

   var num = 1;
   scrolling = false;

   function scroll(event) {
      event.preventDefault();
      if (!scrolling) {
         scrolling = true;
         if (
            event.originalEvent.wheelDelta > 0 ||
            event.originalEvent.detail < 0
         ) {
            num--;
            num = num < 1 ? 1 : num;
         } else {
            num++;
            num = num > 7 ? 7 : num;
         }

         $("html, body").animate(
            {
               scrollTop: $(".num" + num).offset().top,
            },
            700,
            "linear",
            function () {
               scrolling = false;
            }
         );
      }
   }


   //quiz

   $(function () {
      var el;
      $("#rng").change(function () {
         el = $(this);
         el
            .next("#ong")
            .text(el.val());
      })
         .trigger('change');
   });

   $(function () {
      var el;
      $("#rng1").change(function () {
         el = $(this);
         el
            .next("#ong1")
            .text(el.val());
      })
         .trigger('change');
   });

   $(function () {
      var el;
      $("#rng2").change(function () {
         el = $(this);
         el
            .next("#ong2")
            .text(el.val());
      })
         .trigger('change');
   });

   $(function () {
      var el;
      $("#rng3").change(function () {
         el = $(this);
         el
            .next("#ong3")
            .text(el.val());
      })
         .trigger('change');
   });



   $('.banner__text').on('click', function () {
      $('body').addClass('lock') && $('.quiz').addClass('active') &&
         $('.quiz-first').addClass('active') &&
         $('.quiz-first .quiz__container').addClass('animLeft') &&
         $('.message').hide();
   });

   $('.quiz__icon').on('click', function () {
      $('input:checked').prop('checked', false) &&
         $('input:radio').prop('checked', false) && $('body').removeClass('lock') &&
         $('.quiz').removeClass('active') &&
         $('.quiz-first .quiz__container').removeClass('animLeft') &&
         $('.quiz__body').removeClass('active') &&
         $('.img-question').show() &&
         $('.img-photo').hide() && $('.img-video').hide() &&
         $('.message').hide();

   });

   //первый
   $('.next-first').on('click', function () {
      $('.quiz-first').removeClass('active') &&
         $('.quiz-first .quiz__container').removeClass('animLeft') &&
         $('.quiz-second').addClass('active') &&
         $('.quiz-second .quiz__container').addClass('animLeft');
   });

   //второй
   $('#input-video').on('click', function () {
      $('.img-question').hide() && $('.img-photo').hide() && $('.img-video').show()
   });

   $('#input-photo').on('click', function () {
      $('.img-question').hide() && $('.img-photo').show() && $('.img-video').hide()
   });


   $('.next-second').on('click', function () {
      if ($('#input-video').is(':checked')) {

         $('#quiz-form [name="content"]').val($('.quiz-second input:checked').val())
            && $('.quiz-second').removeClass('active')
            && $('.quiz-second .quiz__container').removeClass('animLeft')
            && $('.quiz-thrid-video').addClass('active')
            && $('.quiz-thrid-video .quiz__container').addClass('animLeft');
      }

      if ($('#input-photo').is(':checked')) {
         $('#quiz-form [name="content"]').val($('.quiz-second input:checked').val())
            && $('.quiz-second').removeClass('active')
            && $('.quiz-second .quiz__container').removeClass('animLeft')
            && $('.quiz-thrid-photo').addClass('active')
            && $('.quiz-thrid-photo .quiz__container').addClass('animLeft');
      }

      if ($('#input-our').is(':checked')) {
         $('#quiz-form [name="content"]').val($('.quiz-second input:checked').val())
            && $('.quiz-second').removeClass('active')
            && $('.quiz-second .quiz__container').removeClass('animLeft')
            && $('.quiz-thrid-our').addClass('active')
            && $('.quiz-thrid-our .quiz__container').addClass('animLeft');
      }
   });

   $('.prev-second').on('click', function () {
      $('.quiz-first').addClass('active')
         && $('.quiz-second').removeClass('active')
         && $('.quiz-first .quiz__container').addClass('animLeft')
         && $('.quiz-second .quiz__container').removeClass('animLeft');
   });

   //третий
   $('.next-thrid-video').on('click', function () {
      if ($('.quiz-thrid-video [type="checkbox"]').is(':checked')) {
         let res = '';
         $('.quiz-thrid-video input[type="checkbox"]:checked').each(function () {

            res += $(this).val() + ', ';
            $('#quiz-form [name="typeContent"]').val(res)
               && $('.quiz-thrid-video').removeClass('active')
               && $('.quiz-thrid-video .quiz__container').removeClass('animLeft')
               && $('.quiz-fourth-video').addClass('active')
               && $('.quiz-fourth-video .quiz__container').addClass('animLeft')
         });
      }
   });

   $('.next-thrid-photo').on('click', function () {
      if ($('.quiz-thrid-photo [type="checkbox"]').is(':checked')) {
         let res = '';
         $('.quiz-thrid-photo input[type="checkbox"]:checked').each(function () {

            res += $(this).val() + ', ';
            $('#quiz-form [name="typeContent"]').val(res)
               && $('.quiz-thrid-photo').removeClass('active')
               && $('.quiz-thrid-photo .quiz__container').removeClass('animLeft')
               && $('.quiz-fourth-photo').addClass('active')
               && $('.quiz-fourth-photo .quiz__container').addClass('animLeft')
         });
      }
   });

   $('.next-thrid-our').on('click', function () {
      if ($('.quiz-thrid-our [type="radio"]').is(':checked')) {
         let res = '';
         $('.quiz-thrid-our input[type="radio"]:checked').each(function () {

            res += $(this).val() + ', ';
            $('#quiz-form [name="rabota"]').val(res)
               && $('.quiz-thrid-our').removeClass('active')
               && $('.quiz-thrid-our .quiz__container').removeClass('animLeft')
               && $('.quiz-fourth-our').addClass('active')
               && $('.quiz-fourth-our .quiz__container').addClass('animLeft')
         });
      }
   });

   $('.prev-thrid-video').on('click', function () {
      $('.quiz-second').addClass('active')
         && $('.quiz-thrid-video').removeClass('active')
         && $('.quiz-second .quiz__container').addClass('animLeft')
         && $('.quiz-thrid-video .quiz__container').removeClass('animLeft');
   });

   $('.prev-thrid-photo').on('click', function () {
      $('.quiz-second').addClass('active')
         && $('.quiz-thrid-photo').removeClass('active')
         && $('.quiz-second .quiz__container').addClass('animLeft')
         && $('.quiz-thrid-photo .quiz__container').removeClass('animLeft');
   });

   $('.prev-thrid-our').on('click', function () {
      $('.quiz-second').addClass('active')
         && $('.quiz-thrid-our').removeClass('active')
         && $('.quiz-second .quiz__container').addClass('animLeft')
         && $('.quiz-thrid-our .quiz__container').removeClass('animLeft');
   });

   //четвертый
   $('.next-fourth-video').on('click', function () {
      if ($('.quiz-fourth-video [type="checkbox"]').is(':checked')) {
         let res = '';
         $('.quiz-fourth-video input[type="checkbox"]:checked').each(function () {

            res += $(this).val() + ', ';
            $('#quiz-form [name="ploshadka"]').val(res)
               && $('.quiz-fourth-video').removeClass('active')
               && $('.quiz-fourth-video .quiz__container').removeClass('animLeft')
               && $('.quiz-fifth-video').addClass('active')
               && $('.quiz-fifth-video .quiz__container').addClass('animLeft')
         });
      }
   });

   $('.prev-fourth-video').on('click', function () {
      $('.quiz-thrid-video').addClass('active')
         && $('.quiz-fourth-video').removeClass('active')
         && $('.quiz-thrid .quiz__container').addClass('animLeft')
         && $('.quiz-fourth-video .quiz__container').removeClass('animLeft');
   });

   $('.next-fourth-photo').on('click', function () {
      if ($('.quiz-fourth-photo [type="radio"]').is(':checked')) {
         $('#quiz-form [name="retush"]').val($('.quiz-fourth-photo input:checked').val())
            && $('.quiz-fourth-photo').removeClass('active')
            && $('.quiz-fourth-photo .quiz__container').removeClass('animLeft')
            && $('.quiz-fifth-photo').addClass('active')
            && $('.quiz-fifth-photo .quiz__container').addClass('animLeft')

      }
   });

   $('.next-fourth-our').on('click', function () {
      if ($('.quiz-fourth-our [type="checkbox"]').is(':checked')) {
         let res = '';
         $('.quiz-fourth-our input[type="checkbox"]:checked').each(function () {

            res += $(this).val() + ', ';
            $('#quiz-form [name="ploshadka"]').val(res)
               && $('.quiz-fourth-our').removeClass('active')
               && $('.quiz-fourth-our .quiz__container').removeClass('animLeft')
               && $('.quiz-fifth-our').addClass('active')
               && $('.quiz-fifth-our .quiz__container').addClass('animLeft')
         });
      }
   });

   $('.prev-fourth-photo').on('click', function () {
      $('.quiz-thrid-photo').addClass('active')
         && $('.quiz-fourth-photo').removeClass('active')
         && $('.quiz-thrid .quiz__container').addClass('animLeft')
         && $('.quiz-fourth-photo .quiz__container').removeClass('animLeft');
   });

   $('.prev-fourth-our').on('click', function () {
      $('.quiz-thrid-our').addClass('active')
         && $('.quiz-fourth-our').removeClass('active')
         && $('.quiz-thrid-our .quiz__container').addClass('animLeft')
         && $('.quiz-fourth-our .quiz__container').removeClass('animLeft');
   });

   //пятый
   $('.next-fifth-video').on('click', function () {
      if ($('.quiz-fifth-video [type="text"]').val() != '') {
         $('#quiz-form [name="time"]').val($('.quiz-fifth-video input').val())
            && $('.quiz-fifth-video').removeClass('active')
            && $('.quiz-fifth-video .quiz__container').removeClass('animLeft')
            && $('.quiz-sixth-video').addClass('active')
            && $('.quiz-sixth-video .quiz__container').addClass('animLeft')
      }
   });

   $('.prev-fifth-video').on('click', function () {
      $('.quiz-fourth-video').addClass('active')
         && $('.quiz-fifth-video').removeClass('active')
         && $('.quiz-fourth .quiz__container').addClass('animLeft')
         && $('.quiz-fifth-video .quiz__container').removeClass('animLeft');
   });

   $('.next-fifth-photo').on('click', function () {
      if ($('.quiz-fifth-photo [type="checkbox"]').val() != '') {
         $('#quiz-form [name="sozdanie"]').val($('.quiz-fifth-photo input').val())
            && $('.quiz-fifth-photo').removeClass('active')
            && $('.quiz-fifth-photo .quiz__container').removeClass('animLeft')
            && $('.quiz-ninth').addClass('active')
            && $('.quiz-ninth .quiz__container').addClass('animLeft')
      }
   });

   $('.prev-fifth-photo').on('click', function () {
      $('.quiz-fourth-photo').addClass('active')
         && $('.quiz-fifth-photo').removeClass('active')
         && $('.quiz-fourth .quiz__container').addClass('animLeft')
         && $('.quiz-fifth-photo .quiz__container').removeClass('animLeft');
   });

   $('.next-fifth-our').on('click', function () {
      if ($('.quiz-fifth-our [type="radio"]').is(':checked')) {
         let res = '';
         $('.quiz-fifth-our input[type="radio"]:checked').each(function () {

            res += $(this).val() + ', ';
            $('#quiz-form [name="sroki"]').val(res)
               && $('.quiz-fifth-our').removeClass('active')
               && $('.quiz-fifth-our .quiz__container').removeClass('animLeft')
               && $('.quiz-sixth-our').addClass('active')
               && $('.quiz-sixth-our .quiz__container').addClass('animLeft')
         });
      }
   });

   $('.prev-fifth-our').on('click', function () {
      $('.quiz-fourth-our').addClass('active')
         && $('.quiz-fifth-our').removeClass('active')
         && $('.quiz-fourth-our .quiz__container').addClass('animLeft')
         && $('.quiz-fifth-our .quiz__container').removeClass('animLeft');
   });


   //шестой
   $('.next-sixth-video').on('click', function () {
      if ($('.quiz-sixth-video [type="radio"]').is(':checked')) {
         $('#quiz-form [name="kogda"]').val($('.quiz-sixth-video input:checked').val())
            && $('.quiz-sixth-video').removeClass('active')
            && $('.quiz-sixth-video .quiz__container').removeClass('animLeft')
            && $('.quiz-seventh-video').addClass('active')
            && $('.quiz-seventh-video .quiz__container').addClass('animLeft')
      }

      $('.prev-sixth-video').on('click', function () {
         $('.quiz-fifth-video').addClass('active')
            && $('.quiz-sixth-video').removeClass('active')
            && $('.quiz-fifth .quiz__container').addClass('animLeft')
            && $('.quiz-sixth-video .quiz__container').removeClass('animLeft');
      });
   });

   $('.next-sixth-our').on('click', function () {
      if ($('.quiz-sixth-our [type="radio"]').is(':checked')) {
         let res = '';
         $('.quiz-sixth-our input[type="radio"]:checked').each(function () {

            res += $(this).val() + ', ';
            $('#quiz-form [name="budzhet"]').val(res)
               && $('.quiz-sixth-our').removeClass('active')
               && $('.quiz-sixth-our .quiz__container').removeClass('animLeft')
               && $('.quiz-seventh-our').addClass('active')
               && $('.quiz-seventh-our .quiz__container').addClass('animLeft')
         });
      }
   });

   $('.prev-sixth-our').on('click', function () {
      $('.quiz-fifth-our').addClass('active')
         && $('.quiz-sixth-our').removeClass('active')
         && $('.quiz-fifth-our .quiz__container').addClass('animLeft')
         && $('.quiz-sixth-our .quiz__container').removeClass('animLeft');
   });

   //седьмой
   $('.next-seventh-video').on('click', function () {
      if ($('.quiz-seventh-video [type="text"]').val() != '') {
         $('#quiz-form [name="sozdanie"]').val($('.quiz-seventh-video input').val())
            && $('.quiz-seventh-video').removeClass('active')
            && $('.quiz-seventh-video .quiz__container').removeClass('animLeft')
            && $('.quiz-eighth-video').addClass('active')
            && $('.quiz-eighth-video .quiz__container').addClass('animLeft')
      }
   });

   $('.prev-seventh-video').on('click', function () {
      $('.quiz-sixth-video').addClass('active')
         && $('.quiz-seventh-video').removeClass('active')
         && $('.quiz-sixth .quiz__container').addClass('animLeft')
         && $('.quiz-seventh-video .quiz__container').removeClass('animLeft');
   });


   $('.next-seventh-our').on('click', function () {
      if ($('.quiz-seventh-our [type="radio"]').is(':checked')) {
         let res = '';
         $('.quiz-seventh-our input[type="radio"]:checked').each(function () {

            res += $(this).val() + ', ';
            $('#quiz-form [name="cel"]').val(res)
               && $('.quiz-seventh-our').removeClass('active')
               && $('.quiz-seventh-our .quiz__container').removeClass('animLeft')
               && $('.quiz-ninth').addClass('active')
               && $('.quiz-ninth .quiz__container').addClass('animLeft')
         });
      }
   });

   $('.prev-seventh-our').on('click', function () {
      $('.quiz-sixth-our').addClass('active')
         && $('.quiz-seventh-our').removeClass('active')
         && $('.quiz-sixth-our .quiz__container').addClass('animLeft')
         && $('.quiz-seventh-our .quiz__container').removeClass('animLeft');
   });

   //восьмой
   $('.next-eighth-video').on('click', function () {
      if ($('.quiz-eighth-video [type="text"]').val() != '') {
         $('#quiz-form [name="prodvizhenie"]').val($('.quiz-eighth-video input').val())
            && $('.quiz-eighth-video').removeClass('active')
            && $('.quiz-eighth-video .quiz__container').removeClass('animLeft')
            && $('.quiz-ninth').addClass('active')
            && $('.quiz-ninth .quiz__container').addClass('animLeft')
      }
   });

   $('.prev-eighth-video').on('click', function () {
      $('.quiz-seventh-video').addClass('active')
         && $('.quiz-eighth-video').removeClass('active')
         && $('.quiz-sixth .quiz__container').addClass('animLeft')
         && $('.quiz-eighth-video .quiz__container').removeClass('animLeft');
   });

   //девятый
   $('[type="submit"]').click(function (e) {
      let form = $(this).parents('form');
      if (form.find('[name="phone"]').val() != '' && form.find('[name="name"]').val() != '' && form.find('[type="radio"]').is(':checked')) {
         $('.message').show();

      }

      e.preventDefault();
      $.ajax({
         cashe: false,
         type: form.attr('method'),
         url: form.attr('action'),
         data: form.serialize(),
      });
   });

});