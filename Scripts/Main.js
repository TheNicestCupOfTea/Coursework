var typingspeed = 80;


Contents = {
    0: `<p>Hi! I am TheNicestCupOfTea, and I am an aspiring internet artisan. I do <b>stuff</b>.</p> <p>Currently I am a student, third year of my Software Engineering degree.</p> <p>${birthday}</p>`
}

BasicMenu = [
    ["About me","Transition(Contents[0],\"About me\");"],
    ["Contacts",""],
    ["Stuff",""]
]

SecretContents = {
    0 : "<p>I close my eyes and <b>SEIZE IT</b></p> <p>I clench my fists and <b>BEAT IT</b></p> <p>I light my torch and <b>BURN IT</b></p> <p><b><i>I&nbsp;&nbsp;&nbsp;A&nbsp;M&nbsp;&nbsp;&nbsp;T&nbsp;H&nbsp;E&nbsp;&nbsp;&nbsp;B&nbsp;E&nbsp;A&nbsp;S&nbsp;T&nbsp;</i></b></p> <p><b><i>I&nbsp;&nbsp;&nbsp;W&nbsp;O&nbsp;R&nbsp;S&nbsp;H&nbsp;I&nbsp;P</i></b></p>",
    1 : "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>",
    2 : "<iframe width=500px height=300px src='https://www.youtube.com/embed/Vau_LxfW_E0' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
}

SecretMenu = [
    ["Death Grip","Transition(SecretContents[0],\"Death Grip :3\");"], 
    ["Lorem Ipsum","Transition(SecretContents[1],\"Dolor sit amet?\");"], 
    ["Sex","Transition(SecretContents[2],\"SEEEEEEX!\");"]
]

window.onload = function(){
    menu = document.getElementById('menu');
    title = document.getElementById('titletext');
    icon = document.getElementById('star');
    subtitle = document.getElementById('subtitle');
    rightside = document.getElementById('rightside');
    content = document.getElementById('content');
    maincontent = document.getElementById('maincontent');
};

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


async function WriteToSubtitle(inText) {
    subtitle.innerHTML = ""
    for (var c of inText) {
        subtitle.innerHTML += c;
        await sleep(typingspeed);
    }
}

function AppearifyMenu() {
    menu.style.visibility = "visible";
    
}

function DisappearifyMenu() {
    menu.style.visibility = "hidden";
}

async function BehindTheVeil() {
    veil = document.getElementById('veil');
    for (var i=1; i>0; i-=.1) {
        veil.style.opacity = i;
        await sleep(100);
    }
    veil.style.visibility = "hidden"
}

StartSubtitles = [
                    "Aspiring internet artisan",
                    "Pianist bunny girl",
                    "The Tea",
                    "Spooky internet ghost",
                    "Formerly a frog",
                    "Everything at once",
                    "Professional jack of all trades",
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

function RandomBTW(min,max) {
    return Math.round(Math.random()*(max-min)+min);
}

function RandomSubtitle() {
    return StartSubtitles[RandomBTW(0, StartSubtitles.length-1)];
}

var Start = true;

async function StartSequence() {
    if (!Start || CurrentlyChanging) return;
    CurrentlyChanging = true;
    Start = false;
    rightside.style.display = "flex";
    maincontent.style.paddingLeft = "5rem";
    maincontent.style.paddingRight = "5rem";
    maincontent.style.paddingTop = "2rem";
    maincontent.style.paddingBottom = "2rem";
    maincontent.style.border = "1px dotted rgba(255, 255, 255, 0.3)";
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

CurrentlyChanging = false;

var clicknum = 0;

async function Click() {
    StartSequence();
    clicknum++;
    if (clicknum==10) {
        if (CurrentlyChanging) {
            clicknum = 9; return;
        }
        SecretSequence();
    }
}

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

async function CollapseContent() {
    if (content.innerHTML != "") {
        for (var i=100; i>0; i-=5) {
            content.style.width = i+"%";
            await sleep(30);
        }
    }
    content.style.width = "0%";
}

async function ExpandContent() {
    for (var i=0; i<100; i+=5) {
        content.style.width = i+"%";
        await sleep(30);
    }
    content.style.width = "100%";
}

async function WriteToContent(inText) {
    if (content.innerHTML == "") {
        content.innerHTML = inText;
        return;
    } 
    await CollapseContent();
    content.innerHTML = inText;
    await ExpandContent();
}


function CreateMenu(inMenu) {
    menu.innerHTML = "";
    for (thing of inMenu) {
        menu.innerHTML += "<li onclick='"+thing[1]+"'><a>"+thing[0]+"</a></li>";
    }
}

async function Transition(inContent,inSubtitle) {
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