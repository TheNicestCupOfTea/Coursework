//Флажок слайдшоу
var auto = false;
//Переменная, в которую будет записываться интервал слайдшоу
var interval;

//Текущая картинка
var piccounter = 1;
//Количество картинок
var maxcounter = 3;

//Обновление картинки по id 'currentpic'
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

//Перелистывание вперед
function nextPic() {
    piccounter++;
    if (piccounter>maxcounter) piccounter = 1;
    updatePic();
};

//Перелистывание назад
function prevPic() {
    if (auto) return;
    piccounter--;
    if (piccounter==0) piccounter = maxcounter;
    updatePic();
};

//Обрамление перелистывания вперед для кнопки
function nextPicButton() {
    if (auto) return;
    nextPic();
}

//Обрамление перелистывания назад для кнопки
function prevPicButton() {
    if (auto) return;
    nextPic();
}

//Включение слайдшоу
function autoPic(){
    if (!auto) {
        interval = setInterval(nextPic, 2000);
    } else {
        clearInterval(interval);
    }
    auto = !auto;
}

//Обрамление включения слайдшоу для кнопки
function autoPicButton() {
    autoPic();
}


