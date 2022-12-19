function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function RandomizeImage() {
    while (true) {
        for (var i=1; i<5; i++) {
            var pic = document.getElementById("pic");
            if (pic===null) {
                await sleep(500);
                continue;
            }
            sorce = "/Images/Me_frames/Literally_me_"
            sorce += i;
            sorce += ".png";
            pic.src = sorce;
            await sleep(80);
        }
    }
}

RandomizeImage();