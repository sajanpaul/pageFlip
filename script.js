var url = [
    "res/page1.html",
    "res/page2.html",
    "res/page3.html",
    "res/page4.html",
    "res/page5.html",
    "res/page6.html",
    "res/page7.html",
    "res/page8.html",
    "res/page9.html",
    "res/page10.html"
];
var left;
var right;
var leftindex = 0;
var rightindex = 1;
window.onload = function() {
    left = document.getElementById('left');
    right = document.getElementById('right');

    updatescr();
}

function trunleft() {
    if (leftindex > 0 && rightindex > 1) {
        leftindex -= 2;
        rightindex -= 2;
        $(".left").addClass('ts');
        $(".left").addClass('anim');
        setTimeout(function() {
            $(".left").removeClass('ts anim');
            updatescr();
        }, 1200);
    }
}

function trunright() {
    if (leftindex < url.length - 2 && rightindex < url.length - 1) {
        leftindex += 2;
        rightindex += 2;
        $(".right").addClass('ts');
        $(".right").addClass('anim');
        setTimeout(function() {
            $(".right").removeClass('ts anim');
            updatescr();
        }, 1200);
    }
}

function updatescr() {
    left.src = url[leftindex];
    right.src = url[rightindex];
}

function leftonload() {
    console.log("leftonload");
    $(left.contentDocument.body).hide().fadeIn(1000);
    right.contentWindow.onbeforeunload = function() {
        $(right.contentDocument.body).fadeOut(1000);
    };
}

function rightonload() {
    console.log("rightonload");
    $(right.contentDocument.body).hide().fadeIn(1000);
    right.contentWindow.onbeforeunload = function() {
        $(right.contentDocument.body).fadeOut(1000);
    };
}
