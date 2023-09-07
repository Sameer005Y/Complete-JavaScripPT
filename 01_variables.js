const accountid = 233394;
let accountEmail = "Sameer@developer.com";
var accountPassword = "1291298";
accountCity = "Faridabad";
let accountState;

accountEmail = "KuchBhi123@gmail.com";
accountPassword = "13891918";
accountCity = "Hisar";

/*
    Prefer not to use var 
    because of issue in block scope and functional scope
*/
console.table([accountid,accountEmail,accountPassword,accountCity,accountState]);