let side = $(".side").outerWidth();
let button = $(".button");

$(".side .close").click(function(){
    $(".side").animate({left: -side}, 500);
    button.animate({left: -side}, 500);
    button.fadeIn(500);
});

button.click(function(){
    $(".side").animate({left: 0}, 500);
    button.animate({left: 0}, 500);
    button.fadeOut(500);
});

//-------------------------------------------------------

let DateHTML = document.querySelector(".timer")
let countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();
let x = setInterval(function(){
    let now = new Date().getTime();
    let distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / (1000));

    document.getElementById("Days").innerHTML = ( days + " <span>D</span>" );
    document.getElementById("Hours").innerHTML = ( hours + " <span>H</span>" );
    document.getElementById("Min").innerHTML = ( minutes + " <span>M</span>" );
    document.getElementById("Sec").innerHTML = ( seconds + " <span>S</span>" );

    if(distance < 0){
        clearInterval(x);
        document.getElementById("Days").innerHTML = ( "0 <span>D</span>" );
        document.getElementById("Hours").innerHTML = ( "0 <span>H</span>" );
        document.getElementById("Min").innerHTML = ( "0 <span>M</span>" );
        document.getElementById("Sec").innerHTML = ( "0 <span>S</span>" );
    }
}, 1000);

//----------------------------------------------------

$("textArea").keydown(function(e){
    let outPut = this.value.length
    document.querySelector(".partTwo h6 span").innerHTML = 99 - outPut;
    console.log();
});

$(".partTwo button").click(function(){
    document.querySelector("textArea").value = "";
    document.querySelector(".partTwo h6 span").innerHTML = 100;
});