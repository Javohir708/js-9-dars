const timeEl = document.querySelector('.time')

function qoshish (zero){
    if(zero < 10){
        zero = '0'+ zero;
    }
    return zero;
}

function getTime () {
    let date = new Date()
    
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    hour = qoshish(hour);
    minute = qoshish(minute);
    second = qoshish(second);

    let timeView = `${hour}:${minute}:${second}`

    timeEl.innerHTML = timeView
}
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
setInterval ( () => {
    getDateYear()
}, 1000)