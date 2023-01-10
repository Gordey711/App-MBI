const youHeight = prompt('Введите ваш рост в метрах, через точку'),
      youWeight = prompt('Введите ваш вес');
      
let height,
    result;

alert('Ваш рост равен ' + youHeight);
alert('Ваш вес равен ' + youWeight);

height = youHeight * 2;

result = youWeight / height;

console.log(height);
console.log(result);

// if (result > 25.0) {
//     alert('У вас проблемы с весом, ' + 'MBI равен ' + result);
// } else {
//     alert('Ваш вес в норме, ' + 'MBI равен ' + result);
// }

(result > 25.0) ? alert('У вас проблемы с весом, ' + 'MBI равен ' + result) : alert('Ваш вес в норме, ' + 'MBI равен ' + result);