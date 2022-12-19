var auto = false;
var interval;

var piccounter = 1;
var maxcounter = 3;

function updatePic() {
    picchanging = true;
    currentpic = document.getElementById('currentpic');
    if (currentpic == null) {
        clearInterval(interval);
        auto = false;
        return;
    }
    newsrc = "./Images/pics/";
    newsrc += piccounter;
    newsrc += ".png";
    currentpic.src = newsrc;
    picchanging = false;
};

function nextPic() {
    piccounter++;
    if (piccounter>maxcounter) piccounter = 1;
    updatePic();
};

function prevPic() {
    if (auto) return;
    piccounter--;
    if (piccounter==0) piccounter = maxcounter;
    updatePic();
};

function nextPicButton() {
    if (auto) return;
    nextPic();
}

function prevPicButton() {
    if (auto) return;
    nextPic();
}

function autoPicButton() {
    autoPic();
}

function autoPic(){
    if (!auto) {
        interval = setInterval(nextPic, 2000);
    } else {
        clearInterval(interval);
    }
    auto = !auto;
}

