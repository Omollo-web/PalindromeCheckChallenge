function check_Palindrome(str_entry) {
    //change string to lowercase & remove all non-alphanumeric  characters
    var cstr = str_entry.toLowerCase().replace(/[^a - zA - Z0 - 9]+/g, ' ');
    var ccount = 0;

    //check if the string is empty or not
    if(cstr === " ")  {
        console.log("Nothing to display!");
        return false;
    }

    // check if the length of the string is even or odd
    if((cstr.length) % 2 === 0) {
        ccount = (cstr.length) / 2;
    } else {
     // check if the length of the string is one then pass it as a palindrome
     if(cstr.length === 1) {
         console.log("String is a Palindrome");
         return true;
     }   else {
     // check if length of string is odd, ignore the middle character
        ccount = (cstr.length - 1) / 2;    
        }
    }
    // Loop through to check the first character to the last character and then move next
    for (let i = 0; i < ccount; i++) {
     // compare characters and drop them if they do not match
        if(cstr[i] != cstr.slice(-1-i) [ 0 ]) {
            console.log("String is not a palindrome");
            return false;
        }   
    }
    console.log("String is a Palindrome");
    return true;
}

check_Palindrome('madam');
check_Palindrome('nurses run');
check_Palindrome('foxsss');