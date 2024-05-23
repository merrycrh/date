document.addEventListener('DOMContentLoaded', function() {

    let currentDate = new Date();
    let yearStart = new Date(currentDate.getFullYear(), 0, 0);
    let diff = currentDate - yearStart;
    let oneDay = 1000 * 60 * 60 * 24;
    let dayNumber = Math.floor(diff / oneDay);


    document.getElementById('day-number').innerHTML = "Bugungi Kun raqami: " + dayNumber;


    let daysLeft = 365 - dayNumber;
    document.getElementById('days-left').innerHTML = "2024-yilning 366 kunidan " + (dayNumber + 1) + " kuni\n2024-yildan " + daysLeft + " kun qoldi";

    // Display current date
    let days = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'];
    let months = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'];
    let day = days[currentDate.getDay()];
    let month = months[currentDate.getMonth()];
    let formattedDate = day + ", " + currentDate.getDate() + " " + month + " " + currentDate.getFullYear() + " " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    
    document.getElementById('current-date').innerHTML = "BUGUN: " + formattedDate;


    let formattedDateString = currentDate.getDate() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear();
    document.getElementById('formatted-date').innerHTML = "Bugungi sana Kun/Oy/Yil: " + formattedDateString;
});
