// function frontAgain(str){
//     const first2Char = str.slice(0,2)
//     console.log(' esto es log',first2Char); 
//     const last2Char = str.slice(-2) 
//     console.log (last2Char);
//      if (str === '' || str.length<4) {
//    return false
//      }else if ((first2Char === last2Char)){
//         return true
//      }
// }

function frontAgain(str){
    const first2Char = str.slice(0,2)
    console.log(' esto es log',first2Char); 
    const last2Char = str.slice(-2) 
    console.log (last2Char);
    if (str === '') {
    return false;
     } else if (str.lenght === 1){
        return false
     } else if (first2Char === last2Char) {
        return true
} else {
    return false
}
}



console.log(frontAgain('x'));
