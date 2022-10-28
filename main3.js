//   Задачи  //

//  Циклы while и for //

// 1
// var num = 1;
// while (num <= 100) {
//     console.log(num);
// 	num++;  
// }

// 2
// var num = 11;
// while (num <= 33) {
//     console.log(num);
// 	num++;  
// }

// 4
// var sum = 0;
// for (var i = 0; i <= 100; i++) {
//     sum += i;
//  }
// console.log(sum);

// 5
// var arr = [1, 2, 3, 4, 5];
// for (var i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// 6
// var result = 1;
// var arr = [2, 3, 4, 5];
// for (var i = 0; i < arr.length; i++) {
// 	result = result * arr[i];
// }
// console.log(result);

// 7
// var obj = {
// 	'Green': 'Зеленый',
// 	'Red': 'Красный',
// 	'blue': 'Голубой'
// };

// 8
// for (var key in obj) {
// 	console.log(key);
// }

// 9
// var obj = {
// 	'Коля - зарплата 200 долларов': 'Коля',
// 	'Вася - зарплата 300 долларов': 'Вася',
// 	'Петя - зарплата 400 долларов': 'Петя'
// };

// Задачи //

// 1
// for (var key in obj) {
// 	console.log(key);
// }
// var arr = [2, 5, 9, 15, 0, 4];
// for (var i = 0; i < arr.length; i++) {
// if (arr[i] > 3 && arr[i] < 10) {
// console.log(arr[i]);
// }
// }

// 2
// var arr = [2, 5, 9, 15, 0, 4];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i]%2 !=1){
//         console.log(arr[i]*2)
//     }
// }

// 3
// var arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for (var i = 0; i < arr.length; i++) {
// if (arr[i] == 4) {
// console.log('Есть!');
// break;
// }
// }

// 5
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//  for (var i = 0; i < arr.length; i++){
//     console.log('-' +arr[i]);
//  }

// 6
// let arr = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт','Сб', 'Вс'];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 'Сб' || arr[i] == 'Вс') {
//         document.write('<b>' + arr[i] + '</b> ');
//     } else {
//         document.write(arr[i] + ' ');
//     }
// }

// 7
// let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// let day = 5;
// for (let i = 0; i < week.length; i++) {
//     if ( i == day){
//         document.write('<i>' + week[i] + '</i> <br>');
//     }else {
//         document.write(week[i] + '<br>');
//     }
// };

//8
// for (let n = 1000, num = 0; n > 50; num++) {
//     n /= 2;
//         console.log(num);
//     }
    