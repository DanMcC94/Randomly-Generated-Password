var choosingLength = prompt("Between 8 to 128, select a length for your password.");
var choosingLower = prompt("Would you like lower case letter? y/n");
var choosingUpper = prompt("Would you like uppercase letters? y/n");
var choosingNumbers = prompt("Would you like numbers? y/n");
var choosingSpecialCharacters = prompt("Would you like special characters included? y/n")
 

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//var lowerCase [q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m,];
//var upperCase [Q,W,E,R,T,Y,U,I,O,P,A,S,D,F,G,H,J,K,L,Z,X,C,V,B,N,M,];
//var numbers [0,1,2,3,4,5,6,7,8,9];
//var special [!,@,#,$,%,^,&,*,(,),_,+,=,~,`]; 

 
//Random generator
function generatePassword() {



    var length = choosingLength;
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+<>?:\"\}\{\~\`.,",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
