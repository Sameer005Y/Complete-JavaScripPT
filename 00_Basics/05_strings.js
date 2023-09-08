const name = "Sameer";
const age = 18;
// console.log(name,age);
// console.log(`My name is ${name} and I am ${age} years old.`);  //--> String interPolation

//Second Method to declare a String
const fullName = new String('Sameer');

// console.log(fullName[0]);
// console.log(fullName);
// console.log(fullName.__proto__);
// console.log(fullName.indexOf('e'));
// console.log(fullName.toUpperCase());

//******************************************************************************************************* */
let iterat = fullName[Symbol.iterator]();
//==>Using iterator function without Loop
// console.log(iterat.next());
// console.log(iterat.next());
// console.log(iterat.next());
// console.log(iterat.next());
// console.log(iterat.next());
// console.log(iterat.next());
// console.log(iterat.next());

//==>Using iterator function with for loop
for(let i=0;i<=fullName.length;i++){
    // console.log(iterat.next());
}
//******************************************************************************************************** */

//String.prototype(anchor)
// document.body.innerHTML = fullName.anchor["myName"];
//******************************************************************************************************** */

// console.log(fullName.at(-4));
// console.log(fullName.at(4));

//******************************************************************************************************** */

// console.log(fullName.big(3));
// String.prototype.fixed()
// String.prototype.fontcolor()
// String.prototype.fontsize()

//******************************************************************************************************** */

// console.log(fullName.blink());
// console.log(fullName.bold());
// console.log(fullName.italics());
// console.log(fullName.strike());

//******************************************************************************************************** */
// console.log(fullName.charAt(2));

//******************************************************************************************************** */
// console.log(fullName.charCodeAt(1));
// console.log(String.fromCharCode(62,277,213,77));  //return '>eQM'
// console.log(fullName.codePointAt(1));
// console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804));     // Expected output: "☃★♲你"


// ******************************************************************************************************** */
// console.log(fullName.concat(' ', 'Saifi'));

// ******************************************************************************************************** */
// string.endsWith(searchValue, StringLengthRange)
let naam = 'My name is Sameer Khan and I am 18 years old';
// console.log(naam.length);
// console.log(naam.endsWith('old'));                  //true
// console.log(naam.endsWith('old',19));               //false
// console.log(naam.endsWith('Sameer',17));            //true
// console.log(naam.endsWith('18 years old', 44));     //true


// ******************************************************************************************************** */



// ******************************************************************************************************** */
//===>>All String function used in JS

// String.prototype[@@iterator]()
// String.prototype.anchor()
// Deprecated
// String.prototype.at()
// String.prototype.big()
// Deprecated
// String.prototype.blink()
// Deprecated
// String.prototype.bold()
// Deprecated
// String.prototype.charAt()
// String.prototype.charCodeAt()
// String.prototype.codePointAt()
// String.prototype.concat()
// String.prototype.endsWith()
// String.prototype.fixed()
// Deprecated
// String.prototype.fontcolor()
// Deprecated
// String.prototype.fontsize()
// Deprecated
// String.fromCharCode()
// String.fromCodePoint()
// String.prototype.includes()
// String.prototype.indexOf()
// String.prototype.isWellFormed()
// String.prototype.italics()
// Deprecated
// String.prototype.lastIndexOf()
// String.prototype.link()
// Deprecated
// String.prototype.localeCompare()
// String.prototype.match()
// String.prototype.matchAll()
// String.prototype.normalize()
// String.prototype.padEnd()
// String.prototype.padStart()
// String.raw()
// String.prototype.repeat()
// String.prototype.replace()
// String.prototype.replaceAll()
// String.prototype.search()
// String.prototype.slice()
// String.prototype.small()
// Deprecated
// String.prototype.split()
// String.prototype.startsWith()
// String.prototype.strike()
// Deprecated
// String.prototype.sub()
// Deprecated
// String.prototype.substr()
// Deprecated
// String.prototype.substring()
// String.prototype.sup()
// Deprecated
// String.prototype.toLocaleLowerCase()
// String.prototype.toLocaleUpperCase()
// String.prototype.toLowerCase()
// String.prototype.toString()
// String.prototype.toUpperCase()
// String.prototype.toWellFormed()
// String.prototype.trim()
// String.prototype.trimEnd()
// String.prototype.trimStart()
// String.prototype.valueOf()
//******************************************************************************************************* */