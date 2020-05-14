//palindrome code 

function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}
palindrome("A man, a plan, a canal. Panama");


//anagram code 

 function anagrams(stringA, stringB) {
       
        stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
        stringB = stringB.replace(/[^\w]/g, '').toLowerCase()
        return sortString(stringA) === sortString(stringB)
    }
    function sortString(string) {
        return string.split('').sort().join('');
    }


//reverse code 

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');


//power func

function PowerOfNumber(b,e){
  
  var i, power = 1;
   for(i=0; i<e; i++){
    power = power*b;
  }
 
  return power;
}



