// if (typeof window !== 'undefined') {

//TODO GET SERVER DT !
/** This DT is used for the whole calendar. It must be server DT   */

const serverDate = new Date();

//TODO GET SERVER DT !
//TODO the Container must hold the information !!!
//TODO the Months !!!
//TODO Apply Styling to dates with orders (non-finished) !!!

/** Assign names to days and months   */

function dayToString(Date) {
    let day = "";
    switch (Date) {

        case 1:
            day = "Mon";
            break;
        case 2:
            day = "Tue";
            break;
        case 3:
            day = "Wed";
            break;
        case 4:
            day = "Thu";
            break;
        case 5:
            day = "Fri";
            break;
        case 6:
            day = "Sat";
            break;
        case 0:
            day = "Sun";
            break;
    }
    return day;
}

function monthToString(Month) {
    let month;
    switch (Month) {
        case 0:
            month = "JAN";
            break;
        case 1:
            month = "FEB";
            break;
        case 2:
            month = "MAR";
            break;
        case 3:
            month = "APR";
            break;
        case 4:
            month = "MAY";
            break;
        case 5:
            month = "JUN";
            break;
        case 6:
            month = "JUL";
            break;
        case 7:
            month = "AUG";
            break;
        case 8:
            month = "SEP";
            break;
        case 9:
            month = "OCT";
            break;
        case 10:
            month = "NOV";
            break;
        case 11:
            month = "DEC";
            break;
    }
    return month;
}

/** Add all dates in range - previous, current, next month to an ARR */

const start = new Date(serverDate.getFullYear(), serverDate.getMonth() - 1, 1);
const end = new Date(serverDate.getFullYear(), serverDate.getMonth() + 2, 1);
let loop = new Date(start);
let datesInRangeArr = [];
while (loop <= end) {
    let newDate = loop.setDate(loop.getDate() + 1);
    loop = new Date(newDate);
    datesInRangeArr.push(loop);
}

/** Returns the index of the current date from datesInRangeArr */
let currentDateIndex;

for (const date of datesInRangeArr) {
    if (date.getMonth() === serverDate.getMonth() && date.getDate() === serverDate.getDate()) {
        currentDateIndex = datesInRangeArr.indexOf(date);
    }
}
console.log(datesInRangeArr.length);
console.log(currentDateIndex);

/** Initial settings of dates in range */

let dates = document.getElementById('dates');
let dateContainer = document.createElement('a');
dateContainer.className = "date-container";


for (let i = currentDateIndex - 13; i < currentDateIndex; i++) {
    if (datesInRangeArr[i].getDate() === 1) {
        let previousMonth = document.createElement('span');
        dates.appendChild(previousMonth);
        previousMonth.className = "months";
        previousMonth.textContent = monthToString(datesInRangeArr[i].getMonth());
    }
    let dateContainer = document.createElement('a');
    dateContainer.className = "date-container";
    dates.appendChild(dateContainer);
    let pastDate = document.createElement('span');
    pastDate.className = 'past-date';
    let pastDay = document.createElement('span');
    pastDay.className = 'past-day';

    pastDate.textContent = datesInRangeArr[i].getDate();

    pastDay.textContent = dayToString(datesInRangeArr[i].getDay());

    dateContainer.appendChild(pastDate);
    dateContainer.appendChild(pastDay);
    dateContainer.href = "#";
    weekendCheck(pastDay);
}

for (let i = currentDateIndex; i < currentDateIndex + 14; i++) {
    if (datesInRangeArr[i].getDate() === 1) {
        let nextMonth = document.createElement('span');
        dates.appendChild(nextMonth);
        nextMonth.className = "months";
        nextMonth.textContent = monthToString(datesInRangeArr[i].getMonth());
    }

    let dateContainer = document.createElement('a');
    dateContainer.className = "date-container";
    dates.appendChild(dateContainer);
    
    let futureDate = document.createElement('span');
    futureDate.className = 'future-date';
    let futureDay = document.createElement('span');
    futureDay.className = 'future-day';
    
    futureDate.textContent = datesInRangeArr[i].getDate();

    futureDay.textContent = dayToString(datesInRangeArr[i].getDay());

    dateContainer.appendChild(futureDate);
    dateContainer.appendChild(futureDay);
    dateContainer.href = "#";

    weekendCheck(futureDay);
    
    if (datesInRangeArr[i].getDate() === serverDate.getDate() && datesInRangeArr[i].getMonth() === serverDate.getMonth()) {
        futureDate.className = 'current-date';
    }
}

/** Add scrolling to calendar */

dates.addEventListener("wheel", function (e) {


    if (e.deltaY < 0) {
        this.scrollLeft -= 60;
    } else {
        this.scrollLeft += 60;
    }
}, {passive: true})

/** Mark weekends in red */

function weekendCheck(Day) {
    if (Day.textContent === "Sun" || Day.textContent === "Sat") {
        Day.className = "weekend";
    } else {
        Day.className = "current-day";
    }
}

