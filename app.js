$(document).ready(function(){

            var scroll_pos = 0;
            $(document).scroll(function() {
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 90) {
                    $(".head").css({'background-color':'transparent', 'opacity':'0.7', 'transform': 'scale(1, 0.5)','top':'-2em'});
                } else {
                    $(".head").css({'background-color':'transparent', 'opacity':'1', 'transform': 'scale(1, 1)','top':'0.5em'});
                }
            });
            $('.hoke').hover(function () {
                $("#hoke").show();
                $("#sel").hide();
            },function () {
                $("#hoke").hide();
                $("#sel").show();

            });
            $('.lemontown').hover(function () {
                $("#lemontown").show();
                $("#sel").hide();
            },function () {
                $("#lemontown").hide();
                $("#sel").show();
            });
            $('.tetrotis').hover(function () {
                $("#tetrotis").show();
                $("#sel").hide();
            },function () {
                $("#tetrotis").hide();
                $("#sel").show();
            });
            // $('.lemonV').click(function () {
            //   console.log('hi')
            //     $("#lemonYT").show();
            //     $("#sel").hide();
            //
            // });


        });
