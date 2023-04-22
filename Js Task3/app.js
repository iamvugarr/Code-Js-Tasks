// Task 1
// const students = [
//   { name: "Leyla", points: 500 },
//   { name: "Akif", points: 500 },
//   { name: "Fikret", points: 3000 },
//   { name: "Rashad", points: 500 },
//   { name: "Turkan", points: 1900 },
//   { name: "Sabir", points: 1000 },
//   { name: "Idris", points: 340 },
//   { name: "Nijat", points: 940 },
//   { name: "Ismet", points: 1780 },
// ];

// her telebenin pointini 30 bal artirin

const students = [
    { name: "Leyla", points: 500 },
    { name: "Akif", points: 500 },
    { name: "Fikret", points: 3000 },
    { name: "Rashad", points: 500 },
    { name: "Turkan", points: 1900 },
    { name: "Sabir", points: 1000 },
    { name: "Idris", points: 340 },
    { name: "Nijat", points: 940 },
    { name: "Ismet", points: 1780 },
];

students.forEach((elem, index) => {
    students[index].points += 30
})

console.log(students)

//-----------------------------------------------------------------

// Task 2
// let bdays = ['08-14', '10-04', '04-21', '08/14', '10/04', '04/21'];
// - isharesini / ile deyishin
// output: ['08/14', '10/04', '04/21', 08/14, '10/04', '04/21'];

let bdays = ['08-14', '10-04', '04-21', '08/14', '10/04', '04/21'];

bdays.forEach((elem, index) => {
    bdays[index] = bdays[index].replace('-', '/')
})

console.log(bdays)

//--------------------------------------------------------------------

// Task 3
// let numbers = [1.5, 2.56, 5.1, 12.33];
// butun regemlerini yuvarlaqlashdirin

let numbers = [1.5, 2.56, 5.1, 12.33];

numbers.forEach((elem, index) => {
    numbers[index] = Math.round(numbers[index])
})

console.log(numbers)

//--------------------------------------------------------------------

// Task 4
// Verilmish stringdeki ededleri cemleyin --> reduce 
// const b = "5,4,3,2,1";

const b = "5,4,3,2,1";

function sumStr(str) {
    let strArr = str.split(",");
    let sum = strArr.reduce((total, num) => {
        return parseFloat(total) + parseFloat(num);
    });

    return sum;
}

console.log(sumStr(b));

//--------------------------------------------------------------------

// Task 5

// Sözlərin sayı
// Verilmiş mətn fraqmentində sözlərin sayını müəyyənləşdirin.

// Input example 1

//     Hello world!

// Output example 1

//     2

// Input example 2

//      Hello world! Hello, country!

// Output example 2

//     4

let str = "Hello world! Hello, country!"


function countWords(string) {
    string = string.trim();

    const words = string.split(" ");
    console.log(words.length)
}

countWords(str)

//--------------------------------------------------------------------

// Task 6

// Baş hərfli sözlər sətri
// Mətnlərin emalına aid sadə məsələlərdən biri sətirdəki hər bir sözün birinci hərfini baş hərfə çevirməkdir.
// Bir və ya bir neçə boşluqla ayrılmış kiçik hərflərdən ibarət sətir verilmişdir. Eyni sətri, hər sözün birinci hərfini baş hərfə çevirərək çap edin.

// Input example 1

//     introduction to algorithms

// Output example 1

//     Introduction To Algorithms


const word = 'introduction to algorithms';

const word2 = word.split(" ")

word2.forEach((elem, index) => {
    word2[index] = word2[index][0].toUpperCase() + word2[index].slice(1)
})

console.log(word2.join(" "))

//--------------------------------------------------------------------------------

// Task 7

// ### Hərfləri saymalı
// s sətri və c hərfi verilmişdir. Bu hərfə sətirdə neçə dəfə rast gəlinir?

// Input example 1

//     Programming Principles 1
//     p


// #### Output example 1

//     3

let count = 0

function countLetter (str, letter) {
    let str1 = str.toLowerCase()
    let str2 = str1.split('');
    

    str2.forEach((elem, index) =>{
        if(str2[index] === letter){
            count++
        }
    })

    return count
}
console.log(countLetter("Programming Principles" , "p"));
