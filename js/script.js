// ========================================
// INTRO JS :
// ========================================

// var result = 2 + 2;
// console.log(result);

// var year = 2017;
// console.log(year);

// var otherYear = year + 10;
// console.log(otherYear);

// var sum = 12 + 25 + 5;
// console.log(sum);

// ========================================
// TYPE DE VARIABLE :
// ========================================

// number :
var year      = 2017;
var average   = 12.5;

// string :
var firstName = "Alex";

// boolean :
var isRaining = false;
var isSunny   = true;

// Vérifier le type d une variable : typeof();
// console.log( typeof(year) );
// console.log( typeof(firstName) );
// console.log( typeof(isRaining) );

// ========================================
// CONCATENATION :
// ========================================

var balance = 100;
var deposit = "50";

// console.log(balance + deposit); // pas addition /!\
var firstName = "Alex";
var lastName = "Hitchens";

// console.log(firstName + " " + lastName);

// ========================================
// CONDITION :
// ========================================

// Quel heure est-il ? :
var nowHour = new Date().getHours();
// Si l'heure qu'il est est inferieure à l'heure de fermeture (19H00)
// Si l'heure qu'il est superieur à l'heure d'ouverture (09H00)
// Et on affiche un jolie message :

// if( nowHour < 19 && nowHour >= 9 ){
//   console.log("La boutique est ouverte.");
// } else {
//   console.log("La boutique est fermée.");
// }

// ========================================

// 1er MAI (5/1) et NOEL (12/25), la boutique est fermee sinon elle est ouverte :
var nowMonth = new Date().getMonth();
var nowDay   = new Date().getDate();

// console.log("Le mois d'aujourd'hui est " + (nowMonth+1));
// console.log("Le jour d'aujourd'hui est " + nowDay);

var isChristmas = (nowMonth == 11 && nowDay == 25);
var isFirstOfMay = (nowMonth == 4 && nowDay == 1);

// if( isChristmas || isFirstOfMay ){
//   console.log("La boutique est fermée");
// } else {
//   console.log("La boutique est ouverte");
// }

// ========================================

// "L'avanturier prend le large"

var men = 10;
var women = 0;

// if (men > 0) {
// 	if (men + women >= 2) {
// 		console.log("Les avanturiers prennent le large");
// 	} else {
// 		console.log("L'avanturier prend le large");
// 	}
// } else {
// 	// Il n'y a pas d'homme
// 	if (women >= 2 ) {
// 		console.log("Les avanturières prennent le large");
// 	} else {
// 		console.log("L'avanturière prend le large");
// 	}
// }

// ========================================
// OPERATEUR TERNAIRE :
// ========================================

// Bonjour ou Bonsoir selon l'heure :
var nowHour = new Date().getHours();

// if (nowHour < 17 && nowHour >= 6) {
// 	console.log("Bonjour");
// } else {
// 	console.log("Bonsoir");
// }

// Condition ? codeIfTrue : codeIfFalse;
// console.log( (nowHour < 17 && nowHour >= 6) ? "Bonjour" : "Bonsoir" );

// ========================================
// EXO :
// ========================================

// Afficher les nombres impairs :
// Écrivez un programme qui va afficher sur la console tous les entiers naturels impairs jusqu’à 100.

// for (var i = 1; i <= 100; i+=2) {
// 	console.log(i);
// }

// ========================================
// EXO :
// ========================================

// Au cube :
// Écrivez une fonction qui prend en paramètre un nombre et renvoie ce nombre puissance trois (au cube).

// function auCube(nombre) {
// 	var result = nombre * nombre * nombre;
// 	return "Le résultat de " + nombre + " au cube est de : " + result;
// }
// console.log( auCube(3) );

// ========================================
// EXO :
// ========================================

// Fizz buzz (un classique)

// Écrivez une fonction qui prend un nombre n en argument, et qui renvoie un tableau de n éléments des nombres 1 à n, en remplaçant certains nombres dans le tableau en suivant les règles suivantes :

// Si le nombre est divisible par 3, alors remplacer par "Fizz"
// Si le nombre est divisible par 5, alors remplacer par "Buzz"
// Si le nombre est divisible par 3 et par 5, alors remplacer par "FizzBuzz"
// Par exemple, si on appelle la fonction avec comme argument le nombre 16, on devrait nous renvoyer le tableau suivant :

// fizzBuzz(16);
// => [ 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16 ]

// function fizzBuzz(n){
// 	var array = [];
// 	for (var i = 1; i <= n; i++) {
// 		if (i % 3 == 0 && i % 5 == 0) {
// 			array.push("FizzBuzz");
// 		} else if (i % 5 == 0) {
// 			array.push("Buzz");
// 		} else if (i % 3 == 0) {
// 			array.push("Fizz");
// 		} else {
// 			array.push(i);
// 		}
// 	}
// 	return array;
// }

// console.log( fizzBuzz(16) );