const reverseSentence = (str = null) => {
    let newStr = [];
    let string = "";
    let reverseStr = "";
    for (i = 0; i < str.length; i++) {
       if (str[i] == " ") {
           newStr.push(string);
           string = "";
       } else {
           string += str[i];
       }
     }
    if (string) {  
    newStr.push(string);
    } 
    for (i = newStr.length - 1; i >= 0; i--) {
         reverseStr += newStr[i] + " ";
    }
    return reverseStr;
    };
    let val = reverseSentence("this is good");
    console.log(val);