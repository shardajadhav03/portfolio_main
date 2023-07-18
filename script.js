const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDown = document.querySelector('.dropdown')

toggleBtn.onclick = function () {
    dropDown.classList.toggle('open')
    const isOpen = dropDown.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

const round = document.querySelector('.round p');
round.innerHTML = round.innerText.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i * 14}deg)">${char}</span>`
).join("")

