// var user = prompt("Please enter your name");
// if (user=="admin") {
var t = setInterval(move, 1);
var pos = 0;
//var box = document.getElementById("box");

var screenW = window.innerWidth;

function move() {
    if (pos >= screenW - 216) {
        clearInterval(t);
        // $("#bird").attr("src","http://neman96.ru/wp-content/uploads/2015/04/%D0%BF%D1%83%D1%81%D1%82%D0%BE%D0%B5-%D0%BE%D0%BA%D0%BD%D0%BE-%D0%B4%D0%BB%D1%8F-%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0.png");
        $("#bird").hide();
    }
    else {
        pos += 2;
        $("#bird").css({"left": pos +'px'});
    }
}

var he2 = document.getElementById('shakeBody');
he2.addEventListener("click", reload);

function  reload() {
    location.reload();
}

function shakeBody() {
    he2.style.color = 'red';
}


function person(name, age, login, password) {
    this.name = name;
    this.age = age;
    this.login = login;
    this.password = password;
    this.changeAgeToOld = function (addYears) {
        this.age += addYears
    } // Добавить возраст
}

var jack = new person("Jack", 34, "gggglw@mail.ru", 433555);
var jessy = new person("Jessy", 52, "waaaalw@mail.ru", 245754);

var array = document.getElementsByClassName("jack");
array[0].innerHTML = jack.name;
array[1].innerHTML = jack.age;
array[2].innerHTML = jack.login;
array[3].innerHTML = jack.password;

var array2 = document.getElementsByClassName("jessy");
array2[0].innerHTML = jessy.name;
array2[1].innerHTML = jessy.age;
array2[2].innerHTML = jessy.login;
array2[3].innerHTML = jessy.password;

var thisDiv = document.getElementById('paintBackground');

function paint() {
    var colorArray = new Array('green', 'yellow', 'red');
    thisDiv.style.backgroundColor = colorArray[Math.floor(Math.random() * 3)];
}

    var images = [
        "http://www.sololearn.com/uploads/slider/1.jpg",
        "http://www.sololearn.com/uploads/slider/2.jpg",
        "http://www.sololearn.com/uploads/slider/3.jpg"
    ];
    var num = 0;

    function next() {
        var slider = document.getElementById("slider");
        num++;
        if (num >= images.length) {
            num = 0;
        }
        slider.src = images[num];
    }

    function prev() {
        var slider = document.getElementById("slider");
        num--;
        if (num < 0) {
            num = images.length - 1;
        }
        slider.src = images[num];
    }
$(document).ready(function() {
    $("#start").html("Go");

});


// }