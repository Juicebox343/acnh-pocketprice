export function monthCalc(range){

    const newRange = range.split('-');
    const wordMonth =[];
 
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

