const itemBoxs = document.querySelectorAll(".box");

itemBoxs.forEach((box) => { 
    box.onclick  = function () {
        console.log(box.innerText);
    }
});

