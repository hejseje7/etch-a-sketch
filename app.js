const div_con = document.querySelector(".container");
const rainbowBtn = document.querySelector(".rainbow");
let slider = document.querySelector(".slider");
let sliderVal = document.querySelector(".sliderVal");
let clearBtn = document.querySelector(".clearBtn");
sliderVal.textContent=slider.value+" x "+slider.value;

slider.oninput = function slider_oninput() {
    sliderVal.textContent = slider.value+" x "+slider.value;
    let squareCount =slider.value*slider.value+1;
    while (div_con.firstChild) {
        div_con.removeChild(div_con.lastChild);
    };
    for (let i=1; i<squareCount; ++i) {
        let div = document.createElement("div");
        div.style.width=1/slider.value*40+"vw";
        div.style.height=1/slider.value*40+"vw";
        div.addEventListener("mouseover", function mouse_over() {
            div.classList.add("hover");
        });
        div_con.appendChild(div);
    };
};

clearBtn.addEventListener('click', function clear() {
    children = div_con.children;
    for (let i=0; i<children.length; i++) {
        children[i].classList.remove("hover");
    };
});

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function mouse_over() {
    div.classList.add("hover");
};
for (let i=1; i<257; ++i) {
    let div = document.createElement("div");
    div.style.width=1/16*40+"vw";
    div.style.height=1/16*40+"vw";
    div.addEventListener("mouseover", function mouse_over() {
        div.classList.add("hover");
    });
    div_con.appendChild(div);
};
