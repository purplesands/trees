
$(document).ready(function(){

            var scroll_pos = 0;
            $(document).scroll(function() {
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 90) {
                    $(".head").css({'background-color':'transparent', 'opacity':'0.8', 'transform': 'scale(1, 0.3)','top':'-3em'});
                } else {
                    $(".head").css({'background-color':'transparent', 'opacity':'1', 'transform': 'scale(1, 1)','top':'0.5em'});
                }
            });
        });
