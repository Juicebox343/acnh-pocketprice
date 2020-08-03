export function timeFix(time){
    if(time === '' || time === 'undefined'){
        return 'All Day'
    }
    return time;
}

export function monthCalc(range){
    const newRange = range.split('-');
    const wordMonth =[];
    if(range === 'All Year'){
        return
    } else {
        newRange.forEach(function(numMonth){
            switch(numMonth) {
                case '1':
                    wordMonth.push('January')
                break;
                case '2':
                    wordMonth.push('February')
                break;
                case '3':
                    wordMonth.push('March')
                break;
                case '4':
                    wordMonth.push('April')
                break;
                case '5':
                    wordMonth.push('May')
                break;
                case '6':
                    wordMonth.push('June')
                break;
                case '7':
                    wordMonth.push('July')
                break;
                case '8':
                    wordMonth.push('August')
                break;
                case '9':
                    wordMonth.push('September')
                break;
                case '10':
                    wordMonth.push('October')
                break;
                case '11':
                    wordMonth.push('November')
                break;
                case '12':
                    wordMonth.push('December')
                break;
                default:
                    wordMonth.push('All Year')
              } 
        })
        if(wordMonth[1]){
            return `${wordMonth[0]} - ${wordMonth[1]}`;
        } else {
            return `${wordMonth[0]}`;
        }
    }
 
   
}


export function capitalizeNames(creatureName){
    const capitalizeString = creatureName.replace(/\b\w/g, function(itsLowerCase) {
        return itsLowerCase.toUpperCase();
    })
    return capitalizeString
}

export function fixWeekDay(numDay){
    let weekday = new Array(7);
        weekday[0] = "Sun.";
        weekday[1] = "Mon.";
        weekday[2] = "Tue.";
        weekday[3] = "Wed.";
        weekday[4] = "Thu.";
        weekday[5] = "Fri.";
        weekday[6] = "Sat.";
    
    return weekday[numDay]
}

export function fixMonth(numMonth){
    let month = new Array(12);
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

    return  month[numMonth-1]
}

export function fixMinute(numMinute){
    if(numMinute < 10){
        return '0' + parseInt(numMinute)
    } 
    return numMinute
}

export function fixHour(numHour){
    if(numHour > 12){
        return numHour - 12
    } 
    return numHour
}
    
export function fancyHour(numHour){
    if(numHour > 12){
        return numHour - 11 + 'PM'
    } 
    return numHour = 'AM'
}
    
