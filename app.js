// Soatni ko'rsatish uchun.
const timeEl = document.querySelector('.time')
// console.log(timeEl);

function setInsertParam(param){
    if(param < 10){
        param = '0'+ param;
    }
    return param;
}

function getTime () {
    let date = new Date()
    
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    hour = setInsertParam(hour);
    minute = setInsertParam(minute);
    second = setInsertParam(second);

    let timeView = `${hour}:${minute}:${second}`
    // console.log(timeView);

    timeEl.innerHTML = timeView
}


// getTime()

setInterval ( () => {
    getTime()
}, 1000 )


// Kunni ko'rsatish uchun
const day = document.querySelector('.day')

function getDay () {
    let days = new Date()
    let kun = days.getDay()

    let dayName = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba']
 
    let dayView = dayName[kun]

    day.innerHTML = dayView
}

// getDay()

setInterval ( () => {
    getDay()
}, 1000)


// Sana va yilni ko'rsatish uchun
const date = document.querySelector('.date')

function getDateYear () {
    let dates = new Date()

    let sana = dates.getDate()
    let oy = dates.getMonth()
    let yil = dates.getFullYear()

    let months = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr']

    let dateView = `${sana}-${months[oy]}. ${yil}`

    date.innerHTML = dateView
}

// getDateYear()

setInterval ( () => {
    getDateYear()
}, 1000)