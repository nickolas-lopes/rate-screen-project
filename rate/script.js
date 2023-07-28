const rateBtn = document.querySelector('ul');
const submitBtn = document.querySelector('.submit');
const rateScreen = document.querySelector('.info');
const greetings = document.querySelector('.thanks');
const displayRate = document.querySelector('#rate');
let selectedRate;
let rate = (e) => {
    selectedRate = e.target.value;
    target = e.target
    return selectedRate;
}
rateBtn.addEventListener('click', rate)
submitBtn.addEventListener('click', () => {
    if(selectedRate === undefined){
        
    }else{
        rateScreen.style.display = 'none';
        greetings.style.display = 'flex';
        greetings.style.justifyContent = 'center';
        greetings.style.alignItems = 'center';
        displayRate.innerHTML = ` ${selectedRate}`
        greetings.classList.add('info');
    }
})