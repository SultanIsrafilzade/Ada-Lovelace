const timeContainer = document.getElementById('time-container');
const birth_day = '12-10-1815';
const birt_day_date = new Date(birth_day);
const intNumberFormatter = new Intl.NumberFormat('en-US');

setInterval(()=> {
    const now = new Date();
    const difference = Math.floor((now.getTime() - birt_day_date.getTime()) /1000
);

timeContainer.innerHTML=intNumberFormatter.format(difference);
}, 1000);