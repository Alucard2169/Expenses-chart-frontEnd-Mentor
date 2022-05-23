const days = document.querySelectorAll('.ch');
const dayName = document.querySelectorAll('.day')
const total = document.getElementById('sp');

// total sum
let sum = 0;


// check current day and set the color accordingly
const date = new Date().getDay();
days.forEach(day => {
    if (parseInt(day.dataset.day) === date) {
            day.style.backgroundColor = 'hsl(186, 34%, 60%)'
    }
    else {
        day.style.backgroundColor = `hsl(10, 79%, 65%)`
    }
    
})

// get data from .json file
const data = async () => {
    const res = await fetch('./data.json');
    const Data = await res.json();

    for (let i = 0; i < Data.length; i++){
        sum += Data[i].amount;
        days[i].style.height = `${Data[i].amount}%`
        days[i].setAttribute('value', `$${Data[i].amount}`);
        dayName[i].textContent = Data[i].day
    }
    total.textContent = sum;
}

data()


