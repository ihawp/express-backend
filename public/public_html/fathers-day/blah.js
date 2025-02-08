// ihawp

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function photoButtonsVisible() {
    const back = document.getElementById("back-to-home");
    back.style.display = 'inline';
    const newImages = document.getElementById("new-images");
    newImages.style.display = 'inline';
}
function photoButtonsNotVisible() {
    const back = document.getElementById("back-to-home");
    back.style.display = 'none';
    const newImages = document.getElementById("new-images");
    newImages.style.display = 'none';
}

function memoryButtonsVisible() {
    const back = document.getElementById("back-to-home");
    back.style.display = 'inline';
    const newImages = document.getElementById("new-memory");
    newImages.style.display = 'inline';
}
function memoryButtonsNotVisible() {
    const back = document.getElementById("back-to-home");
    back.style.display = 'none';
    const newImages = document.getElementById("new-memory");
    newImages.style.display = 'none';
}

function expandImg(image) {
    headerNotVisible();
    mainHundred();
    photoButtonsNotVisible();
    const main = document.getElementById("main");
    main.innerHTML = `
    <img id="expand-image" src="/fathers-day/img/${image}.jpg">
    <div id="ei-above">
        <button onclick="photos()"><i class="fa-solid fa-x icon"></i></button
    </div>
    `;
}

function headerVisible() {
    const header = document.getElementById("header");
    header.style.height = '20vh';
}
function headerNotVisible() {
    const header = document.getElementById("header");
    header.style.height = '0vh';
}

function mainEighty() {
    const main = document.getElementById("main");
    main.style.height = '80vh';
}
function mainHundred() {
    const main = document.getElementById("main");
    main.style.height = '100vh';
}

function photos() {
    headerVisible();
    photoButtonsVisible();
    mainEighty();
    var random1 = randomNumber(1, 33);
    var random2 = randomNumber(34, 66);
    var random3 = randomNumber(67, 98);

    const main = document.getElementById("main");
    main.innerHTML = `
        <div id="block" class="flex block">
            <img onclick="expandImg(${random1})" id="img1" src="/fathers-day/img/${random1}.jpg"></img>
        </div>
        <div id="block" class="flex block">
            <img onclick="expandImg(${random2})" id="img2" src="/fathers-day/img/${random2}.jpg"></img>
        </div>
        <div id="block" class="flex block">
            <img onclick="expandImg(${random3})" id="img3" src="/fathers-day/img/${random3}.jpg"></img>
        </div>
    `;
}
function newPhotos() {
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");
    const img3 = document.getElementById("img3");
    img1.style.animationName = 'ltr-out-3000';
    img2.style.animationName = 'ltr-out-2000';
    img3.style.animationName = 'ltr-out-1000';

    setTimeout(function() {
        photos();
    }, 1200);
}

const memoryDict = {
    p1: {
        img: '22',
        memory: "i don't remember this"
    },
    p2: {
        img: '18',
        memory: "us eating at still the coolest restaurant i've ever been to"
    },
    p3: {
        img: '55',
        memory: "us and scarlett after your birthday dinner"
    },
    p4: {
        img: '91',
        memory: "my second favourite memory of all time"
    },
    p5: {
        img: '21',
        memory: "we used to spend a lot of time at hollyburn"
    }
}

function memories() {
    mainEighty();
    headerVisible();
    memoryButtonsVisible();

    const random = randomNumber(1, 5);
    const memory = `p${random}`;
    console.log(memory);

    const dict = memoryDict[memory];

    const main = document.getElementById("main");
    main.innerHTML = `
        <div id="block" class="flex">
            <memories-container>
                <b-img-block id="bimgb">
                    <img src="/fathers-day/img/${dict.img}.jpg"></img>
                </b-img-block>
                <b-text-block id="btextb">
                    <h2>${dict.memory}</h2>
                </b-text-block> 
            </memories-container>   
        </div>
    `;
}
function newMemory() {
    const left = document.getElementById("bimgb");
    const right = document.getElementById("btextb");
    right.style.animationName = 'shortLeftOut';
    left.style.animationName = 'shortRightOut';

    setTimeout(function() {
        memories();
    }, 1200);
}

function main() {
    headerNotVisible();
    mainHundred();
    memoryButtonsNotVisible();
    photoButtonsNotVisible();
    const main = document.getElementById("main");
    main.style.height = '100vh';
    main.innerHTML = `
        <div id="block" class="flex">
            <h1>happy fathers day dad!</h1>
            <div id="main-buttons">
                <button onclick="photos()"><i class="fa-solid fa-image icon"></i></button>
                <button onclick="memories()"><i class="fa-solid fa-question icon"></i></button>
            </div>        
        </div>
  `;
}

main();