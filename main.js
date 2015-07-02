


//==============================   1   ======================================
// takes a single object argument and returns the value of the 'name' property of the given object.
// var getName = function(person){

// 	for (i in getName) {

// 		var hisName = person.name

// 		console.log(hisName)

// 		return hisName
// 	}
// }

// getName({
// 	name   : 'Bob',
// 	age    : 27,
// });


//================================  2  =========================================
// takes an array of strings and returns the total number of letters in all strings.

// var totalLetters = function (letterCount){

// 	var total = 0

// 	for (var i = 0; i < letterCount.length; i++) {

// 		total += letterCount[i].length

// 	}
// 		return total
// };

// console.log(totalLetters([
// 	'i',
// 	'love',
// 	'javascript',
// 	'dude',
// 	'for',
// 	'sure'
// ]))

//=================================  3  ==========================================
// Write a function called 'keyValue' which takes two arguments and returns a new object with a key of the first argument and the value of the second argument.
// keyValue('city', 'Denver') should return Object {city: "Denver"}

// var keyValue = function(place, name){
// 	for ( i in place ){
		
// 	}
// 	for (j in name){

// 	}
// 	var done = [i] + ': ' + name.town
// 	return done
// }

// console.log(keyValue({city : 'Boulder'}, {town : 'Denver'}))

//==================================  4  =============================================

// Write a function called 'negativeIndex' which takes an array and a negative number, and returns the value from the array at the given negative index, as if the array was circular, i.e. arr.length+num.
// negativeIndex(['a', 'b', 'c', 'd', 'e'], -2) should return 'd'
// negativeIndex(['jerry', 'sarah', 'sally'], -1) should return 'sally'

// var negativeIndex = function (arr, num){
	
// 	var finish = arr[arr.length + num]

// 	return finish
	 	
// }

// console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2))



//===============================  5  ================================================
// Write a function called 'removeM' which takes a single string argument and removes all 'm' characters from the string. The function won't actually modify
// removeM('family') should return 'faily'
// removeM('memory') should return 'eory'

// var removeM = function (string){

// 	var output = ''
// 	for (var i = 0; i < string.length; i++) {
// 		if ( string[i] != 'm') {
// 	       output += string[i]
// 		}
// 	};
// 	return output
// }

// console.log(removeM('memory'))

//==============================  6  =================================================
// Write a function called 'printObject' which takes a single object argument and console.log's each key-value pair in the format key is value on separate lines.
// printObject({ a: 10, b: 20, c: 30 })

// var printObject = function(object){

// 	for (i in object) {

// 		var output = i + ' is ' + object[i];
// 		console.log(output);
						
// 	}

// }

// printObject({ a: 10, b: 20, c: 30 })
// printObject({ firstName: 'pork', lastName: 'chops' })

//===========================  7  =====================================================
// Write a function called 'vowels' which takes a string and returns an array of all the vowels in the string, including duplicates.
// vowels('alabama') should return ['a', 'a', 'a', 'a']
// vowels('What evil odd ducks!') should return ['a', 'e', 'i', 'o', 'u']


// var vowels = function (string){

// 	var output = []
// 	for (var i = 0; i < string.length; i++) {
// 		if ( string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
// 	       output.push(string[i])
// 		}
// 	};
// 	return output
// }


// console.log(vowels('What evil odd ducks!'))
// console.log(vowels('alabama'))

//======================================  8  ==================================================
// Write a function called 'twins' which takes an array and returns true if every adjacent pair of items in the array is the same.
// twins(['a', 'a', 'b', 'b', 'c', 'c']) should return true
// twins(['a', 'a', 'b', 'c', 'd', 'd']) should return false
// twins(['a', 'a', 'b', 'z']) should return false
// twins(['a', 'a', undefined]) should return false


// var twins = function(array){

// 	var falseArray = []

// 	for (var i = 0; i < array.length; i+=2) {

// 		if (array[i] != array[i+1] || array.length % 2 != 0){

// 		falseArray.push(false)

// 		}

// 	};

// 	// console.log(falseArray)

// 	if (falseArray.length > 0){

// 		return false

// 	}

// 	else {

// 		return true
// 	}
// }

// console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']))
// console.log(twins(['a', 'a', 'b', 'c', 'd', 'd']))
// console.log(twins(['a', 'a', 'b', 'z']))
// console.log(twins(['a', 'a', undefined]))


//=======================================  9  =========================================================
// Write a function called 'or' which takes an array of booleans and returns true if any one of them is true. Given an empty array, return false. If you find an item that is true, the function should return true immediately and not continue checking further values.
// or([false, false, true, false]) should return true
// or([false, false, false]) should return false
// or([]) should return false

// var or = function (arr){
// 	for (var i = 0; i < arr.length; i++) {
// 		// console.log(arr[i])
// 		if (arr[i]){
// 			return true
// 		}
		
// 	}
// 	 return false
// }


// console.log(or([, false, true, false]))
// console.log(or([false, false, false]))
// console.log(or([]))

//====================================  10  ===============================================================
// Write a function called 'unique' which takes an array of strings, and returns a new array consisting of the unique values (no duplicates).
// unique(['a', 'b', 'a', 'c', 'd', 'd']) should return ['a', 'b', 'c', 'd']
// unique(['todd', 'avery', 'maria', 'avery']) should return ['todd', 'avery', 'maria']

var unique = function(array){
	var newArray = [];
	array.forEach(function(element){
		if (newArray.indexOf(element) === -1){
			newArray.push(element)
		}
	});
	return newArray;
}
console.log(unique(['a', 'b', 'c', 'd', 'd']));
console.log(unique(['todd', 'avery', 'maria', 'avery']))








