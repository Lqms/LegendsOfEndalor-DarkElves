/*показать и спрятать меню*/
h = 0;
document.getElementById('hider').onclick = function () {
    if (h === 0) {
        document.getElementById('hide').hidden = true;
        h = 1;
    } else {
        document.getElementById('hide').hidden = false;
        h = 0;
    }
    var myAudio = new Audio; /*нужно сделать как-нибудь чтобы нельзя было звук заспамить*/
    myAudio.src = "ScrollOpen.mp3";
    myAudio.play();
}
/*показать и спрятать меню*/

/*изменение z-index по нажатию на кнопку*/
p1 = 1;
p2 = 0;

function NextPage() {
    if (p1 === 1) {
        document.getElementById("HistoryList2").style.zIndex = "1";
        document.getElementById("HistoryList1").style.zIndex = "0";
        p1 = 0;
        p2 = 1;
    } else {
        document.getElementById("HistoryList1").style.zIndex = "1";
        document.getElementById("HistoryList2").style.zIndex = "0";
        p1 = 1;
        p2 = 0;

    }

    var myAudio = new Audio; /*нужно сделать как-нибудь чтобы нельзя было звук заспамить*/
    myAudio.src = "NextPage.mp3";
    myAudio.play();

}

function PreviousPage() {
    if (p1 === 1) {
        document.getElementById("HistoryList2").style.zIndex = "1";
        document.getElementById("HistoryList1").style.zIndex = "0";
        p1 = 0;
        p2 = 1;
    } else {
        document.getElementById("HistoryList1").style.zIndex = "1";
        document.getElementById("HistoryList2").style.zIndex = "0";
        p1 = 1;
        p2 = 0;
    }
    var myAudio = new Audio; /*нужно сделать как-нибудь чтобы нельзя было звук заспамить*/
    myAudio.src = "NextPage.mp3";
    myAudio.play();
}
/*изменение z-index по нажатию на кнопку*/

/*для блока особенностей*/
function ShowInfo1() {
    document.getElementById("moreinfo1").style.display = "block";
    document.getElementById("moreinfo0").style.display = "none";
    document.getElementById("moreinfo2").style.display = "none";
    document.getElementById("moreinfo3").style.display = "none";
    document.getElementById("moreinfo4").style.display = "none";
    document.getElementById("moreinfo5").style.display = "none";
    document.getElementById("moreinfo6").style.display = "none";
    document.getElementById("moreinfo7").style.display = "none";
    document.getElementById("moreinfo8").style.display = "none";
}

function ShowInfo2() {
    document.getElementById("moreinfo2").style.display = "block";
    document.getElementById("moreinfo0").style.display = "none";
    document.getElementById("moreinfo1").style.display = "none";
    document.getElementById("moreinfo3").style.display = "none";
    document.getElementById("moreinfo4").style.display = "none";
    document.getElementById("moreinfo5").style.display = "none";
    document.getElementById("moreinfo6").style.display = "none";
    document.getElementById("moreinfo7").style.display = "none";
    document.getElementById("moreinfo8").style.display = "none";
}

function ShowInfo3() {
    document.getElementById("moreinfo3").style.display = "block";
    document.getElementById("moreinfo0").style.display = "none";
    document.getElementById("moreinfo2").style.display = "none";
    document.getElementById("moreinfo1").style.display = "none";
    document.getElementById("moreinfo4").style.display = "none";
    document.getElementById("moreinfo5").style.display = "none";
    document.getElementById("moreinfo6").style.display = "none";
    document.getElementById("moreinfo7").style.display = "none";
    document.getElementById("moreinfo8").style.display = "none";
}

function ShowInfo4() {
    document.getElementById("moreinfo4").style.display = "block";
    document.getElementById("moreinfo0").style.display = "none";
    document.getElementById("moreinfo2").style.display = "none";
    document.getElementById("moreinfo3").style.display = "none";
    document.getElementById("moreinfo1").style.display = "none";
    document.getElementById("moreinfo5").style.display = "none";
    document.getElementById("moreinfo6").style.display = "none";
    document.getElementById("moreinfo7").style.display = "none";
    document.getElementById("moreinfo8").style.display = "none";
}

function ShowInfo5() {
    document.getElementById("moreinfo5").style.display = "block";
    document.getElementById("moreinfo0").style.display = "none";
    document.getElementById("moreinfo2").style.display = "none";
    document.getElementById("moreinfo3").style.display = "none";
    document.getElementById("moreinfo1").style.display = "none";
    document.getElementById("moreinfo4").style.display = "none";
    document.getElementById("moreinfo6").style.display = "none";
    document.getElementById("moreinfo7").style.display = "none";
    document.getElementById("moreinfo8").style.display = "none";
}

function ShowInfo6() {
    document.getElementById("moreinfo6").style.display = "block";
    document.getElementById("moreinfo0").style.display = "none";
    document.getElementById("moreinfo2").style.display = "none";
    document.getElementById("moreinfo3").style.display = "none";
    document.getElementById("moreinfo1").style.display = "none";
    document.getElementById("moreinfo4").style.display = "none";
    document.getElementById("moreinfo5").style.display = "none";
    document.getElementById("moreinfo7").style.display = "none";
    document.getElementById("moreinfo8").style.display = "none";
}

function ShowInfo7() {
    document.getElementById("moreinfo7").style.display = "block";
    document.getElementById("moreinfo0").style.display = "none";
    document.getElementById("moreinfo2").style.display = "none";
    document.getElementById("moreinfo3").style.display = "none";
    document.getElementById("moreinfo1").style.display = "none";
    document.getElementById("moreinfo4").style.display = "none";
    document.getElementById("moreinfo5").style.display = "none";
    document.getElementById("moreinfo6").style.display = "none";
    document.getElementById("moreinfo8").style.display = "none";
}

function ShowInfo8() {
    document.getElementById("moreinfo8").style.display = "block";
    document.getElementById("moreinfo0").style.display = "none";
    document.getElementById("moreinfo2").style.display = "none";
    document.getElementById("moreinfo3").style.display = "none";
    document.getElementById("moreinfo1").style.display = "none";
    document.getElementById("moreinfo4").style.display = "none";
    document.getElementById("moreinfo5").style.display = "none";
    document.getElementById("moreinfo6").style.display = "none";
    document.getElementById("moreinfo7").style.display = "none";
}

/*для блока особенностей*/



/*по нажатию на картинку увеличивает ее (через показ секретного блока с той же картинкой)*/
function FullScreenImg() {
    /*document.getElementById("FullScreenImg").style.src="" */
    /*нада сделать чтобы брал сурс той картинки по которой кликнул*/
    document.getElementById("FullScreenImg").style.display = "block";
}

function FullScreenImgHide() {
    document.getElementById("FullScreenImg").style.display = "none";
}


function ShowHideTextArea() {
    document.getElementById("Armong").style.display = "block";
    document.getElementById("textarea").style.display = "none";

}

function HideTextArea() {
    document.getElementById("textarea").style.display = "block";
    document.getElementById("Armong").style.display = "none";
}
