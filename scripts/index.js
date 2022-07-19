const submitBtn = document.querySelector('.card__submit');
const numberRatings = document.querySelectorAll('.rating__number');
const rateSelected = document.querySelector('.rate__selected');

// Current display card on load
const currentCard = document.querySelector('.current__card');
// new display after submission
const thankyouCard = document.querySelector('.thankyou__card');

let selectedRate;

numberRatings.forEach(numberRating => {
    numberRating.addEventListener('click',() => {
        // pass the value of selected rate to the selectedRate variable
        selectedRate = numberRating.innerText;
        let count = 0;
        while(count < numberRatings.length) {
            numberRatings[count++].classList.remove('rating__number--selected');
        }
        
        // add a class of selected to the selected rate that will change something on dom
        // the thing is if I selected a number, then select another, the current number should be unselected
        numberRating.classList.add('rating__number--selected');
    })
})

function submitRating() {
    if(selectedRate === undefined) {
        alert('Please select a rating');
        
    } else {
        rateSelected.innerHTML = selectedRate;
        currentCard.style.display = 'none';
        thankyouCard.style.display = 'flex';
    }
   
}

submitBtn.addEventListener('click', submitRating);