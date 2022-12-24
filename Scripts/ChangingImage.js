//Функция, возвращающая промис на заданное кол-во мс. (Ждем заданное кол-во мс)
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Функция, которая в цикле меняет основную картинку.
async function RandomizeImage() {
    while (true) {
        for (var i=1; i<5; i++) {
            var pic = document.getElementById("pic");
            if (pic===null) {
                await sleep(500);
                continue;
            }
            sorce = "./Images/Me_frames/Literally_me_small_"
            sorce += i;
            sorce += ".png";
            pic.src = sorce;
            await sleep(150);
        }
    }
}

//Запуск функции.
RandomizeImage();