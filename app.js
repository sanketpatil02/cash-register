const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const displayNotes = document.querySelectorAll(".no-of-notes");
const returnAmount = document.querySelector("#return");

const notes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateAmount() {
    message.style.display = "none";
    if(Number(billAmount.value) > 0) {
        if(Number(cashGiven.value) >= Number(billAmount.value)) {
            const amountToBeReturned = Number(cashGiven.value) - Number(billAmount.value);
            returnAmount.innerText = amountToBeReturned;
            returnChange(amountToBeReturned);
        } else{
            displayError("cash amount should be greater than bill amount");
        }
    } else {
        displayError("Bill should greater than 0");
    }
});

function returnChange(amountToBeReturned) {
    // console.log("BILL" + billAmount.value);
    // console.log("cash" + cashGiven.value);
    for(let i = 0; i < notes.length; i++) {
        var noOfNotes = Math.trunc(Number(amountToBeReturned) / Number(notes[i]));
        amountToBeReturned %= Number(notes[i]);
        displayNotes[i].innerText = noOfNotes;
    }
}

function displayError(m) {
    message.style.display = "block";
    message.innerText = m;
}