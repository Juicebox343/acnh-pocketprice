export function timeFix(time){
    if(time === '' || time === 'undefined'){
        return 'All Day'
    }
    return time;
}

export function monthCalc(range){
    let dashSplit = [];
    let andSplit = [];
    let wordMonth = [];

    if(range.includes('-')){
        dashSplit = range.split('-');
    }
   
    if(range === ''){
        return 'All Year'
    } else {
       return range
.replace('12','December')
.replace('11','November')
.replace('10','October')                    
.replace('9','September')
.replace('8','August')
.replace('7','July')
.replace('6','June')
.replace('5','May')
.replace('4','April')
.replace('3','March')
.replace('2','February')
.replace('1','January')
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
    return numHour + 'AM'
}
    
