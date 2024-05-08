const accountID=123;
let accountEmail="jiya@google.com";
var accountPassword="2345";
accountCity="jaipur";
// accountID=5678;// Not allowed
accountEmail="garv@google.com";
accountPassword="5432";
accountCity="Muzzafarnagar";
let accountState;

console.log(accountID);
/*Prefer not to use var
Because of issue in functional and global scope*/
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.table([accountID,accountEmail,accountPassword,accountCity,accountState])