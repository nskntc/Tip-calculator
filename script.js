let billDiv = document.getElementById('billTotalInput')
let tipDiv = document.getElementById('tipInput')
let numberOfPeopleDiv = document.getElementById('numberOfPeople')
let totalPerPersonDiv = document.getElementById('perPersonTotal')

// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText)

// ** Calculate the total bill per person **
const calculateBill = () => {
    // get bill from user input & convert it into a number
    let bill = Number(billDiv.value)

    // get the tip from user & convert it into a percentage (divide by 100)
    let tip = Number(tipDiv.value) / 100

    // get the total tip amount
    let tipAmount = bill * tip

    // calculate the total (tip amount + bill)
    let total = tipAmount + bill

    // calculate the per person total (total divided by number of people)
    let totalPerPerson = total / numberOfPeople

    // update the perPersonTotal on DOM & show it to user
    totalPerPersonDiv.innerText = totalPerPerson.toFixed(2);
}

// ** Splits the bill between more people **
const increasePeople = () => {
    // increment the amount of people
    numberOfPeople++

    // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople

    // calculate the bill based on the new number of people
    calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
    if(numberOfPeople <= 1) {
        return
    }

    // decrement the amount of people
    numberOfPeople--

    // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople

    // calculate the bill based on the new number of people
    calculateBill()
}
