// Task 1 🎯

// ### Bərabər bölənlər

// m natural ədədi n ədədinin o zaman bərabər böləni adlanır ki, n-nin m-ə bölünməsindən alınan tam və qalıq bərabər olsun. 
// Verilmiş n natural ədədinə görə onun bərabər bölənlərinin sayını tapın.

// ### Input
// Müsbət n tam ədədi (1 ≤ n ≤ 10**6).

// ### Output
// Tələb olunan say.

// #### Input example 1

//     20


// #### Output example 1

//     2


let cem = 0

function divider(n) {
    for (let m = 0; m < n; m++) {
        if (parseInt(n / m) == n % m) {
            sum = sum + 1
        }
    }
    console.log(cem)
}

divider(4);

//-----------------------------------------------------------------------

// ## Task 4 🎯

// ### İki massiv

// İki massiv verilib.Birinci massivin o elementlərini çap edin ki, qiymətləri ikinci massivdə olmasın(elementlərin ardıcıllığı birinci massivdəki kimi çap edilməlidir).


// ### Input
// Əvvəlcə birinci massivin elementlərinin n sayı və massivin elelemntləri verilir.Sonra ikinci massivin elementlərinin m sayı və elementləri verilir.Hər iki massivin elementlərinin sayı 100 - ü aşmır.Bütün elelmentlər tam ədədlərdir.

// ### Output
// İlk sətirdə cari elementlərin sayını, ikinci sətirdə isə birinci massivin ikinci massivdə olmayan elementlərini verilmiş ardıcıllıqda çap edin.


const arr1 = [6, 4, 15, 19, 21, 25, 29, 0, 12];
const arr2 = [2, 12, 6, 8, 4, 0];
const arr3 = [];

for (let i = 0; i < arr1.length; i++) {
    let find = false;

    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] == arr2[j]) {
            find = true
            break;
        }
    }

    if(find == false){
        arr3.push(arr1[i])
    }
}

console.log(arr3)

//----------------------------------------------------------------------------

// Task - 1:
// Ədədin istənilən qüvvətini tapan alqoritmi qurmaq.

function quvvetTap(eded, quvvet) {
    let netice = 1;
    for (let i = 0; i < quvvet; i++) {
        netice = eded * netice;
    }
    console.log(netice);
}

quvvetTap(5,3)

//---------------------------------------------------------------------------


// Task - 2:
// Array-də(minimum 5 element olsun) cüt ədədlərlə tək ədədlərin fərqini tapan algorithmi qurun;

let cut = 0;
let tek = 0;

function ferq(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            cut = cut + 0
        } else if (arr[i] % 2 == 0){
            cut = cut + 1
        }else{
            tek = tek +1
        }
    }
    console.log(cut - tek)
}

ferq([1,2,3,4,5,6,7,8,9,12,14,18,0]);


//-----------------------------------------------------------------------

// Task - 3:
// Array-də(minimum 5 element olsun) 3 rəqəmli ədədlərlə digər ədədlər arasındakı fərqi tapan algorithmi qurun;

let ucReqemli = 0;
let diger = 0;

function ferq(arr){
    for(let i =0; i< arr.length; i++){
        if(arr[i] / 100 >=1){
            ucReqemli = ucReqemli + arr[i] 
        }else{
            diger = diger + arr[i]
        }
    }
    console.log(ucReqemli - diger)
}

ferq([724,67,26,35,148,23]);

//---------------------------------------------------------------------------

// Task - 4:
// Array-i(minimum 5 element olsun) tərsinə çevirən(reverse) algorithmi qurun(Misal: [10, 45, 32, 48, 72] => [72, 48, 32, 45, 10]);

let reversedArray = []

function reverseArr(arr){
    for(let i = arr.length -1; i >=0; i--){
        reversedArray.push(arr[i])
    }
    console.log(reversedArray)
}

reverseArr([10, 45, 32, 48, 72]);