// Darsdagi misollar ///
// 1-misol
// let k = Math.floor(prompt("K ning qiymatini kiriting: "));
// let n = Math.floor(prompt("N ning qiymatini kiriting: "));
// for (var i = 0; i < n; i++) {
//     console.log(k);
// }



//  2-misol
// let narx = prompt("1 kg konfetni narxini kiriting: ");
// for (let i = 1; i <= 10; i++) {
//     let kilogramm = i / 10;
//     console.log(kilogramm + " kg konfet narxi: " + (kilogramm * narx) + " so'm");
// }

// 3-misol
// let n = Math.floor(prompt("n ga qiymat kiriting: "));
// let S = 0;
// for (let i = n; i <= 2 * n; i++) {
//     S += i * i;
// }
// console.log("Yig'indi S: " + S);



//  4-misol
// let N = Math.floor(prompt("N ning qiymatini kiriting: "));
// let S = 0;
// for (let i = 1; i <= N; i++) {
//     S += Math.pow(i, N - i + 1);
// }
// console.log("Yig'indi S: " + S);





/// UYGA VAZIFA  ///
// 1-misol
// let a = Math.floor(prompt("a ning qiymatini kiriting; "));
// let b = Math.floor(prompt("b ning qiymatini kiriting; "));
// let count = 0;
// for (let i = a; i <= b; i++) {
//     console.log(i);
//     count++;
// }
// console.log("Chiqarilgan sonlar soni: " + count);


// 2-misol
// let a = Math.floor(prompt("a ning qiymatini kiriting: "));
// let b = Math.floor(prompt("b ning qiymatini kiriting: "));
// let natija = 0;
// for (let i = b - 1; i > a; i--) {
//     console.log(i);
//     natija++;
// }
// console.log("Chiqarilgan sonlar soni: " + natija);


// 3-misol
// let narx = prompt("konfetni narxini kiriting: ");
// for (let i = 1; i <= 10; i++) {
//     console.log(i + " kg konfet narxi: " + (i * narx) + " so'm");
// }


// 4-misol
// let narx = prompt("konfetni narxini kiriting: ");
// for (var i = 1.2; i <= 2.0; i += 0.2) {
//     console.log(i.toFixed(1) + " kg konfet narxi: " + (i * narx).toFixed(2) + " so'm");
// }


// 5-misol
// let a = Math.floor(prompt("a ning qiymatini kiriting: "));
// let b = Math.floor(prompt("b ning qiymatini kiriting: "));
// let yigindi = 0;
// for (let i = a; i <= b; i++) {
//     yigindi += i;
// }
// console.log("Yig'indisi: " + yigindi);


// 6-misol
// let a = Math.floor(prompt("a ning qiymatini kiriting: "));
// let b = Math.floor(prompt("b ning qiymatini kiriting: "));
// let kopaytma = 1;
// for (let i = a; i <= b; i++) {
//     kopaytma *= i;
// }
// console.log("Ko'paytma: " + kopaytma);

// 7-misol
// let a = Math.floor(prompt("a ning qiymatini kiriting: "));
// let b = Math.floor(prompt("b ning qiymatini kiriting: "));
// let yigindi = 0;
// for (let i = a; i <= b; i++) {
//     yigindi += i * i;
// }
// console.log("Kvadratlar yig'indisi: " + yigindi);


// 8-misol
// let n = Math.floor(prompt("n ning iqymatini kiriting: "));
// let S = 0;

// for (let i = 1; i <= n; i++) {
//     S += 1 / i;
// }
// console.log("Yig'indi S: " + S);


// 9-misol
// let n = prompt("n ning iqymatini kiriting: ");
// let S = 1;

// for (let i = 1.1; i <= n; i += 0.1) {
//     S *= i;
// }
// console.log("Ko'paytma S: " + S);


// 10-misol
// let n = prompt("n ning qiymatini kriting: ");
// let S = 0;

// for (let i = 1; i <= n; i++) {
//     let qoshiluvchi = 2 * i - 1;
//     S += qoshiluvchi;
//     console.log("Qo'shiluvchi: " + qoshiluvchi + ", Jami yig'indi: " + S);
// }
// console.log("Natijada " + n + " ning kvadrati: " + S);


// 11-misol
// let a = prompt("a ning qiymatini kiriting: ");
// let n = prompt("n ning qiymatini kiriting: ");
// let natija = 1;

// for (let i = 1; i <= n; i++) {
//     natija *= a;
//     console.log("Iteratsiya " + i + ": " + natija);
// }
// console.log(a + " ning " + n + "-darajasi: " + natija);


// 12-misol
// let a = prompt("a ning qiymatini kiriting: ");
// let n = prompt("n ning qiymatini kiriting: ");
// let natija = 1;
// console.log("a ning darajalari: ");
// for (let i = 1; i <= n; i++) {
//     natija *= a;
//     console.log(a + " ning " + i + "-darajasi: " + natija);
// }


// 13-misol
// let a = prompt("a ning qiymatini kiriting: ");
// let n = prompt("n ning qiymatini kiriting: ");
// let S = 1; 
// let daraja = 1;
// for (let i = 1; i <= n; i++) {
//     daraja *= a;  
//     S += daraja;  
//     console.log(a + " ning " + i + "-darajasi: " + daraja);  
// }
// console.log("Yig'indi S: " + S);


// 14-misol
// let n = prompt("n ning qiymatini kiriting: ");
// let S = 0;  
// let faktorial = 1;
// for (let i = 1; i <= n; i++) {
//     faktorial *= i;
//     S += 1 / faktorial;
//     console.log(i + " ning faktoriali: " + faktorial);
// }
// console.log("Yig'indi S: " + S);


// 15-misol
// let N = prompt("N ning qiymatini kiriting: ");
// let K = prompt("K ning qiymatini kiriting: ");
// let S = 0;  

// for (let i = 1; i <= N; i++) {
//     S += Math.pow(i, K);  
//     console.log(i + "^" + K + " = " + Math.pow(i, K)); 
// }
// console.log("Yig'indi S: " + S);


// 16-misol
// let N = prompt("N ning qiymatini kiriting: ");
// let S = 0; 
// for (let i = 1; i <= N; i++) {
//     S += Math.pow(i, i);  
//     console.log(i + "^" + i + " = " + Math.pow(i, i)); 
// }
// console.log("Yig'indi S: " + S);


// 17-misol
// let A = Math.floor(prompt("A ning qiymatini kiriting: "));
// let B = Math.floor(prompt("B ning qiymatini kiriting: "));
// for (let i = A; i <= B; i++) {
//     for (let j = 0; j < i - A + 1; j++) {
//         console.log(i);  
//     }
// }


// 18-misol
// let n = prompt("n ning qiymatini kiriting: "); 
// let boluvchilarYigindisi = 0; 
// let boluvchilarSoni = 0;  
// console.log(n + " sonining bo'luvchilari: ");
// for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {  
//         console.log(i);  
//         boluvchilarYigindisi += i;  
//         boluvchilarSoni++;  
//     }
// }
// console.log("Bo'luvchilar soni: " + boluvchilarSoni);
// console.log("Bo'luvchilar yig'indisi: " + boluvchilarYigindisi);


// 19-misol (tushunmadm chatgpdan sorab ishladm..)
// let n = prompt("n ning qiymatini kiriting: ");   
// let tub = true;  
// if (n <= 1) {
//     tub = false;  
// } else {
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {  
//             tub = false;
//             break;  
//         }
//     }
// }
// if (tub) {
//     console.log(n + " soni tub son.");
// } else {
//     console.log(n + " soni tub emas.");
// }


// 20-misol
// let N = Math.floor(prompt("N ning qiymatini kiriting: ")); 
// for (let i = 1; i <= N; i++) {
//     let qator = "";  
//     for (let j = 1; j <= i; j++) {
//         qator += j + " ";  
//     }
//     console.log(qator.trim());  
// }


// 21-misol
// let A = Math.floor(prompt("A ning qiymatini kiriting: "));
// let B = Math.floor(prompt("B ning qiymatini kiriting: "));
// let boshQismi = A;  
// let kesmalarSoni = 0;

// while (boshQismi >= B) { 
//     boshQismi -= B;
//     kesmalarSoni++;   
// }
// console.log("Joylashtirilgan kesmalar soni: " + kesmalarSoni);
// console.log("Bo'sh qismi: " + boshQismi);


// 22-misol
