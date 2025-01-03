function nav_toggle() {
    let x = document.getElementById("top-nav");
    if(x.className === 'nav-bar') {
        x.className += ' responsive';
    }
    else {
        x.className = 'nav-bar';
    }
}

let a = ["A Full Stack Developer", "A DSA Solver", "A Movie Lover","A Tea Lover"];
let ref = document.getElementById("text");
let ind = 0, cInd = 0;
let remove = false;

function typing() {
    if (ind < a.length) {
        let currentText = a[ind];
        if (!remove && cInd < currentText.length) {
            ref.textContent += currentText.charAt(cInd);
            cInd++;
            setTimeout(typing, 100);
        } else if (remove && cInd >= 0) {
            ref.textContent = currentText.substring(0, cInd);
            cInd--;
            setTimeout(typing, 100);
        } else {
            remove = !remove;
            if (!remove) {
                ind = (ind + 1) % a.length;
            }
            setTimeout(typing, 1000);
        }
    }
}

typing();