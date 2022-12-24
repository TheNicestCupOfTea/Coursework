//Скорость, с которой пишется текст (мс между буквами)
var typingspeed = 50;

//Возможные подзаголовки на начальном экране.
StartSubtitles = [
    "Aspiring internet artisan",
    "Pianist bunny girl",
    "The Tea",
    "Spooky internet ghost",
    "Formerly a frog",
    "Everything at once",
    "Jack of all trades",
    "Certified bunny liker",
    "Wannabe artist",
    "Fruit or perhaps a berry",
    "Likes violet a lot",
    "Человек в межпланетном пространстве",
    "Antonymph of the internet",
    "Been there, done that",
    "[Insert funny descriptor here]",
    "Been teleporting bread for 3 days",
    "月の兎",
    "The most person ever"
];

//Содержание, которое подгружается при переключении в менюшке.
Contents = {
    0: `<p>Hi! I am TheNicestCupOfTea, and I am an aspiring internet artisan. I do <b>stuff</b>.</p>
         <p>Currently I am a student, third year of my Software Engineering degree.</p> 
         <p>${birthday}</p>`,

    1: `Discord - <a class='clickable' onclick="Clipboard('TheNicestCupOfTea 🥕#2667');">TheNicestCupOfTea 🥕#2667</a></p>
        <p>Github - <a class='clickable' onclick="window.open('http://github.com/thenicestcupoftea')">github.com/thenicestcupoftea</a></p>
        <p>Itch - <a class='clickable' onclick="window.open('http://thenicestcupoftea.itch.io')">thenicestcupoftea.itch.io</a></p>`,

    2: `<div id="picselector">
        <div id="currentpiccontainer"><img id="currentpic" src="./Images/pics/1.png" /></div>
        <div id="buttons">
            <button class='clickable' onclick='prevPicButton();'>\<</button>
            <button class='clickable' onclick='autoPicButton();'>Auto</button>
            <button class='clickable' onclick='nextPicButton();'>\></button>
        </div>
        </div>`
}

//Менюшка, которая появляется в начале.
BasicMenu = [
    ["About me","Transition(Contents[0],\"About me\");"],
    ["Links","Transition(Contents[1],\"Links\");"],
    ["Drawings","Transition(Contents[2],\"Drawings\");"]
]

//Содержания для тестовой менюшки.
// 1 - Тест на огромный текст
// 2 - Тест на встраивание видео в содержание
SecretContents = {
    0 : `<p>I close my eyes and <b>SEIZE IT</b></p> 
        <p>I clench my fists and <b>BEAT IT</b></p> 
        <p>I light my torch and <b>BURN IT</b></p> 
        <p><b><i>I&nbsp;&nbsp;&nbsp;A&nbsp;M&nbsp;&nbsp;&nbsp;T&nbsp;H&nbsp;E&nbsp;&nbsp;&nbsp;B&nbsp;E&nbsp;A&nbsp;S&nbsp;T&nbsp;</i></b></p> 
        <p><b><i>I&nbsp;&nbsp;&nbsp;W&nbsp;O&nbsp;R&nbsp;S&nbsp;H&nbsp;I&nbsp;P</i></b></p>`,

    1 : `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> 
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    
    2 : `<iframe width=500px height=300px src='https://www.youtube.com/embed/7KBTTn58iXg' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>`
}

//Сама тестовая менюшка.
SecretMenu = [
    ["Death Grips","Transition(SecretContents[0],\"Beware :3\");"], 
    ["Lorem Ipsum","Transition(SecretContents[1],\"Dolor sit amet?\");"], 
    ["Video","Transition(SecretContents[2],\"Embed astonishing success.\");"]
]

//Получаем при загрузке страницы все нужные элементы.
window.onload = function(){
    menu = document.getElementById('menu');
    title = document.getElementById('titletext');
    icon = document.getElementById('star');
    subtitle = document.getElementById('subtitle');
    rightside = document.getElementById('rightside');
    content = document.getElementById('content');
    maincontent = document.getElementById('maincontent');
};

//Функция для копирования текста в буфер обмена.
async function Clipboard(inText) {
    navigator.clipboard.writeText(inText).then(() => {
        alert("Copied!");
    }).catch( () => {
        alert("Uh oh, stinky! Something went wrong!");
    });
}

//Функция записи в главный заголовок.
async function WriteToTitle(inText) {
    icon.style.visibility = "hidden";
    title.innerHTML = ""
    for (var c of inText) {
        title.innerHTML += c;
        await sleep(typingspeed);
    }
    icon.style.visibility = "visible";
    await sleep(typingspeed);
}

//Функция записи в подзаголовок.
async function WriteToSubtitle(inText) {
    subtitle.innerHTML = ""
    for (var c of inText) {
        subtitle.innerHTML += c;
        await sleep(typingspeed);
    }
}

//Функция показа кнопок меню.
function AppearifyMenu() {
    menu.style.visibility = "visible";
    
}

//Функция скрытыя кнопок меню.
function DisappearifyMenu() {
    menu.style.visibility = "hidden";
}

//Функция открытия "завесы", т.е. черного фона в начале.
async function BehindTheVeil() {
    veil = document.getElementById('veil');
    for (var i=1; i>0; i-=.1) {
        veil.style.opacity = i;
        await sleep(100);
    }
    veil.style.visibility = "hidden"
}

//Функция получения случайного числа в диапазоне от min до max.
function RandomBTW(min,max) {
    return Math.round(Math.random()*(max-min)+min);
}

//Функция записи в подзаголовок случайного текста из списка.
function RandomSubtitle() {
    return StartSubtitles[RandomBTW(0, StartSubtitles.length-1)];
}

//Флаг открытия сайта
var Start = true;

//Само раскрытие сайта из картинки
async function StartSequence() {
    if (!Start || CurrentlyChanging) return;
    CurrentlyChanging = true;
    Start = false;
    rightside.style.display = "flex";
    maincontent.style.paddingLeft = "5rem";
    maincontent.style.paddingRight = "5rem";
    maincontent.style.paddingTop = "2rem";
    maincontent.style.paddingBottom = "2rem";
    maincontent.style.border = "1px dotted rgba(255, 255, 255, 0.6)";
    DisappearifyMenu();
    await WriteToContent("");
    WriteToTitle("");
    WriteToSubtitle("");
    BehindTheVeil();
    await WriteToTitle("TheNicestCupOfTea");
    await WriteToSubtitle(RandomSubtitle());
    CreateMenu(BasicMenu);
    AppearifyMenu();
    CurrentlyChanging = false;
}

//Флаг того, что меняется состояние сайта. Нужно для избежания переключения на два разных состояния.
CurrentlyChanging = false;

//Счетчик нажатий на картинку
var clicknum = 0;

//Нажатие на картинку. Если нажать 20 раз, то открывается тестовая менюшка.
async function Click() {
    StartSequence();
    clicknum++;
    if (clicknum==20) {
        if (CurrentlyChanging) {
            clicknum = 19; return;
        }
        SecretSequence();
    }
}

//Раскрытие тестовой менюшки.
async function SecretSequence() {
    CurrentlyChanging = true;
    content.innerHTML = "";
    title.innerHTML = "";
    subtitle.innerHTML = "";
    DisappearifyMenu();
    await WriteToTitle("?????????????????");
    await WriteToSubtitle("Shh.. It's a secret ;)");
    CreateMenu(SecretMenu);
    AppearifyMenu();
    clicknum = 0;
    Start = true;
    CurrentlyChanging = false;
}

//Схлопывание содержания (нужно для переходов)
async function CollapseContent() {
    if (content.innerHTML != "") {
        for (var i=100; i>0; i-=5) {
            content.style.width = i+"%";
            await sleep(30);
        }
    }
    content.style.width = "0%";
}

//Раскрытие содержания (нужно для переходов)
async function ExpandContent() {
    for (var i=0; i<100; i+=5) {
        content.style.width = i+"%";
        await sleep(30);
    }
    content.style.width = "100%";
}

//Функция записи в содержание
async function WriteToContent(inText) {
    if (content.innerHTML == "") {
        content.innerHTML = inText;
        return;
    } 
    await CollapseContent();
    content.innerHTML = inText;
    await ExpandContent();
}

//Функция создания меню
function CreateMenu(inMenu) {
    menu.innerHTML = "";
    for (thing of inMenu) {
        menu.innerHTML += "<li ><a onclick='"+thing[1]+"' class='clickable'>"+thing[0]+"</a></li>";
    }
}

//Функция перехода между страницами менюшки
async function Transition(inContent,inSubtitle) {
    if (subtitle.innerHTML == inSubtitle) {
        return;
    }
    CurrentlyChanging = true;
    DisappearifyMenu();
    if (content.innerHTML == "") {
        content.innerHTML = inContent;
        subtitle.innerHTML = inSubtitle;
    } else {
        await CollapseContent();
        subtitle.innerHTML = inSubtitle;
        content.innerHTML = inContent;
        await ExpandContent();
    }
    AppearifyMenu();
    CurrentlyChanging = false;
}