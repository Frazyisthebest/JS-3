var a = prompt('Вводите число')

var b = prompt('Вводите степень')

const result = Math.pow(a, b);

alert("Ответ " + result); 

let first = +prompt('Введите количество ступенек'),
    second = prompt('Введите символы'),
    third = prompt('Введите конечный символ');
for(let i = 0; i < first; i++){
    if(i == 0) console.log(third);
    else{
        third = second + third;
        console.log(third);
    }
}
alert('Зайдите в консоль');