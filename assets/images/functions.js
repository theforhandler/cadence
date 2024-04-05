var $j = jQuery.noConflict();



	$j(function () {
             $j(".aboutclicker").click(function () {
                 $j('html, body').animate({scrollTop: $j(document).height()
                 },
                 500);
                 return false;
             });

             $j(".vikingclicker").click(function () {
                 $j('html, body').animate({scrollTop: '0px'}, 800);
                 return false;
             });


         });

