const itemShow = document.querySelectorAll('.accordion-item');

itemShow.forEach((item) => {
    item.onclick = () => {
        const exPanded = item.querySelector('.accordion-collapse');
        exPanded.classList.toggle('collapse')
    }
})
alert("huy")
