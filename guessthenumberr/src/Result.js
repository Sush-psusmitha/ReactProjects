
function Result({term,secretNum}){
    
    let result; 

     if(term){
        if(term > secretNum){
            result = "Higher"; 
        } else if(term < secretNum){
            result = "Lower"
        } else if(term == secretNum){
            result = 'Yipee! Correct🎉🥳';
        }else{
            result = 'Enter Valid Input'
        }
    }
    return(
        <h3>You Guessed: {result}</h3>
    )
}

// function Result({term,secreatNum}){
//     let result; 
//     if(term){
//         if(term > secreatNum){
//           result= "Higher!";
//         }
//         else if(term < secreatNum){
//          result = "Lower!"
//         }
//         else if(term == secreatNum){
//             result = "Yipeee, Correct🎉🥳"
//         }
//         else{
//             result="Enter a valid input"
//         }
//     }
//     return(
//         <h3>You Gussed: {result}</h3>
//     )
// }

export default Result;