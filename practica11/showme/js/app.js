const moneyImage = document.getElementById('moneyImage');
const miamiImage = document.getElementById('miamiImage');
const maiameeeImage = document.getElementById('maiameeeImage');

const showMoneyButton = document.getElementById('showMoney');
const showMiamiButton = document.getElementById('showMiami');
const showMaiameeeButton = document.getElementById('showMaiameee');

showMoneyButton.addEventListener('click', () => {
    moneyImage.classList.toggle('oculto');
});
showMiamiButton.addEventListener('click', () => {
    miamiImage.classList.toggle('oculto');
});
showMaiameeeButton.addEventListener('click', () => {
    maiameeeImage.classList.toggle('oculto');
});

moneyImage.addEventListener('click', () => {
    moneyImage.classList.add('oculto');
});
miamiImage.addEventListener('click', () => {
    miamiImage.classList.add('oculto');
});
maiameeeImage.addEventListener('click', () => {
    maiameeeImage.classList.add('oculto');
});