/*var numbers = [1, 2, 3];
//map's parameters value,index, array
var items = numbers.map((n, i) => (i + '<li>' + n + '</li>'));

console.log(items);
*/
var numbers = [1, 2, 3];
//map's parameters value,index, array
var items = numbers.map((n, i) => i + '. <li>' + n + '</li>');

console.log(items);

["<li>1</li>", "<li>2</li>", "<li>3</li>"]