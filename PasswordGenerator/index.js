
function generatePassword(length,includeLowerCase,includeUppercase,includeNumbers,includeSymbols)
{
    const lowercaseChars="abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars="0123456789";
    const symbolChars="!@#$%^&*()_+-=";

    let allowedChars="";
    let password="";
    allowedChars+=includeLowerCase?lowercaseChars:"";
    allowedChars+=includeUppercase?uppercaseChars:"";
    allowedChars+=includeNumbers?numberChars:"";
    allowedChars+=includeNumbers?symbolChars:"";

    console.log(allowedChars);

    if(length<=0)
    {
        return `(password length must be atleast 1)`;
    }
    if(allowedChars.length===0)
    {
          return `(At least 1  set of charcter need to be selected)`;
    }

    for(let i=0;i<length;i++)
    {
        const randomIndex=Math.floor(Math.random()*allowedChars.length);
        password+=allowedChars[randomIndex];
    }
    return password;
}

const passwordLength=12;
const includeLowerCase=true;
const includeUppercase=true;
const includeNumbers=true;
const includeSymbols=true;

const password=generatePassword(passwordLength,includeLowerCase,includeUppercase,includeNumbers,includeSymbols);
console.log(`GeneratedPassword: ${password}`);