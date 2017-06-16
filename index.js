

$(document).ready(function(){

  var thomasDailey = $(".thomas-dailey");
  TweenMax.from(thomasDailey, 2, {css:{
    position: "relative",
    top: "-300px"
  }});

  $(function(){
  		$(".typed-out-1").typed({
        strings: ["^2000 Full-Stack Developer"],
        typeSpeed: 50,
        showCursor: false,
        callback: function(){
          $(".typed-out-2").typed({
            strings: ["^500 Problem Solver"],
            typeSpeed: 50,
            showCursor: false,
            callback: function(){
              $(".typed-out-3").typed({
                strings: ["^500 Apprentice"],
                typeSpeed: 50,
                showCursor: false
            })
        }
  		});
  	}

})

})
});
