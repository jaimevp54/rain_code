$(':root').css('--steps', ((1000 + 400) / 25).toString());


let content = document.getElementById("content");
let randoms = []
for (let i = 0; i < 140; i++) {
    randoms.push(Math.random());
    let column = document.createElement("div");
    column.className = 'column';
    let veil = document.createElement("veil");
    //let veil2 = document.createElement("veil");
    veil.className = 'veil';
    //veil2.className= 'veil';
    column.appendChild(veil);
    //column.appendChild(veil2);
    for (let j = 0; j < 60; j++) {
        let letter = document.createElement("div");
        letter.className = 'letter';
        letter.innerHTML = String.fromCharCode(Math.round(Math.random() * 92 + 33));
        column.appendChild(letter);

    }
    content.appendChild(column);
}

//setInterval(()=> {
//  console.log('interval');
//  initColumns();
//},15000)
function initElement(index, element) {
    let $element = $(element);
    $element.css('--veil-space', (25 * Math.round(Math.random() * 12 + 6)).toString() + "px")
    let n = randoms[index] * 10000;
    setTimeout(() => {
        $element.addClass('animate');
    }, n);
    setTimeout(() => {
        $element.removeClass('animate');
    }, n + 14500);
}

function initColumns() {
    $('.veil').each((index, element) => {
        initElement(index, element);
        setInterval(() => {
            initElement(index, element);
        }, 15000)
    });
}

initColumns();
