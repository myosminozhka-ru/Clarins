$(function() {
    $('.sl_why_js').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });

    $('.prod_sl_js').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    fade: true,
                    adaptiveHeight: true,
                    dots: true
                }
            }
        ]
    });

    $('.prod_sl_js_tree').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    fade: true,
                    adaptiveHeight: true,
                    dots: true
                }
            }
        ]
    });

    $('.osmi_prods__button').on('click', function() {
        $(this).parents('.osmi_prods__txt').find('.osmi_prods__lorem').toggleClass('isActive');
        $(this).toggleClass('isActive');
        if ($(this).hasClass('isActive')) {
            $(this).text('Скрыть описание');
        } else {
            $(this).text('Показать описание');
        }
    });
    
    var lazyload = {
        init : function(opt){
          var that = this,
          op = {
              anim: true,
              extend_height:0,
              selectorName:"img",
              realSrcAtr:"data-src"
          };
          // Объединить объекты, существующие {anim: true} + определенные пользователем объекты. То есть op = op + opt
          $.extend(op,opt);
          // вызов функции lazyload.img.init (op)
          that.img.init(op);
      
        },
      
        img : {
          init : function(n){
      
            var that = this,
            selectorName = n.selectorName,
            realSrcAtr = n.realSrcAtr,
            anim = n.anim;
//              console.log(n);
      
            // Будет ли картинка загружена в указанное окно
            function inViewport( el ) {
                // верх текущего окна
              var top = window.pageYOffset,
              // нижняя часть текущего окна
             btm = window.pageYOffset + window.innerHeight,
              // Положение по оси Y всей страницы, на которой расположен элемент
             elTop = $(el).offset().top;
              // Определяем, находится ли элемент в текущем окне, или текущее окно простирается в пределах 400 пикселей
              return elTop >= top && elTop - n.extend_height <= btm;
            }
      
            // Оценить событие прокрутки, загрузить картинку
             $(window).on('scroll', function() {
                $(selectorName).each(function(index,node) {
                  var $this = $(this);
                  
                  if(!$this.attr(realSrcAtr) || !inViewport(this)){
                    return;
                  }
                 
                  act($this);
      
                })
              }).trigger('scroll');
      
             // Показать картинки
             function act(_self){
                    // был загружен, затем прерываем следующий код
                 if (_self.attr('lazyImgLoaded')) return;
                  var img = new Image(), 
                  original = _self.attr('data-src');
                  // Событие после завершения запроса изображения, поместите изображение, указанное dataimg, в src, и браузер отобразит
                  img.onload = function() {
                      _self.attr('src', original);
                      anim && _self.css({ opacity: .2 }).animate({ opacity: 1 }, 280);
                  };
                  // Когда вы устанавливаете img.src, браузер отправляет запрос изображения
                  original && (img.src = original);
                   _self.attr('lazyImgLoaded', true);
             }
          }
        }
      };
      
      lazyload.init({
          anim:false,
          selectorName:".samLazyImg"
      });
});