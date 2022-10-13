


const CURRENCY_FORMATER = new Intl.NumberFormat(undefined,{currency:"USD",style: 'currency'});


export function formatCurenncy (number){
    return CURRENCY_FORMATER.format(number) 
}