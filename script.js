// http://api.weatherapi.com/v1/current.json?key=0585b73dc103420988d191341230603&q=London&aqi=no


const tempField = document.querySelector('.temp');
const locationField = document.querySelector('.timeLocation');
const dateandTimeField = document.querySelector('.locationTime');
const cond = document.querySelector('.condition p');
const searchField = document.querySelector('.search_area');
const form = document.querySelector('form');

form.addEventListener('submit', searchForLocation);

let target = 'Nigeria'
const fetchResult = async(targetLocation) => {
    let Url = `http://api.weatherapi.com/v1/current.json?key=0585b73dc103420988d191341230603&q=${targetLocation}&aqi=no`
    const resp = await fetch(Url)
    console.log(resp);

    const data = await resp.json()
    console.log(data);


    let locationName = data.location.name;
    let time = data.location.localtime;
    let temp = data.current.temp_c;
    let condition = data.current.condition.text;

    

    updateDetails (temp, locationName, time, condition);
}

function updateDetails (temp, locationName, time, condition) {

    let splitDate = time.split(' ')[0]
    let splitTime = time.split(' ')[1]
    let currentDay = getDayName(new Date(splitDate).getDay())


    tempField.innerText = temp + '°C'
    locationField.innerText = locationName
    dateandTimeField.innerText = `${splitDate} ${currentDay} ${splitTime}`
    cond.innerText = condition
}


function searchForLocation (evt) {
    evt.preventDefault()
    target = searchField.value
    fetchResult(target)

}

fetchResult(target)

const getDayName = (number) => {
    switch (number) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
    }
}

// we have  three ways in calling html through javascript 1.InnerHtml  2. Text Content  3. Inner Text