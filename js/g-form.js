// Страница начинает грузиться при нажатии submit через скрипт

$(function() {
    $(".form-send").submit(function (event) {
      event.preventDefault();
   
      // Ссылка, которую получили на этапе публикации приложения
      let appLink = "https://script.google.com/macros/s/AKfycbzngM5703ttGYPwnkL-23PUG9ZPeWWxxtRVrZ5WTa0BKmpxIg-5KU_Y6715yQpRMca3YQ/exec";
   
      // Id текущей формы
      let form = $('#' + $(this).attr('id'))[0];
   
      // Кнопка отправки формы
      let submitButton = $(this).find('.g-form__button');
   
      // FormData
      let fd = new FormData(form);
   
      $.ajax({
   
        url: appLink,
        type: "POST",
        data: fd,
        processData: false,
        contentType: false,
        beforeSend: function(){
   
          if(fd.get('honeypot').length) {
            return false;
          } else {
            fd.delete('honeypot');
          }
   
        // Делаем неактивной кнопку отправки
        submitButton.prop('disabled', true);
   
      },
   
    }).done(function(res, textStatus, jqXHR) {
   
      if(jqXHR.readyState === 4 && jqXHR.status === 200) {
        // Очищаем поля формы
        form.reset();
      } else {
        setTimeout( () => {
          formRespond.css({
            'display': 'none'
          });
          formTitle.css({
            'display': 'block'
          });
   
          submitButton.prop('disabled', false);
        }, 5000);
   
        console.log('Гугл не ответил статусом 200');
      }
    }).fail(function(res, textStatus, jqXHR) {

      setTimeout( () => {
        formRespond.css({
          'display': 'none'
        });
        formTitle.css({
          'display': 'block'
        });
        submitButton.prop('disabled', false); 
      }, 5000);
   
      console.log('Не удалось выполнить запрос по указанному в скрипте пути');
    }); 
  });
  }(jQuery));