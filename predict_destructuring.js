// Problem 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [randomCar] = cars
const [, otherRandomCar] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

//MY PREDICTION Problem 1:
//it will console.log 'Tesla' and 'Mercedes'. 
//It logs this because its declaring those positions 
//in cars to be randomCar and otherRandomCar, making
//them not actually random at all :/.
//-----------------------------------------------

// Problem 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

//MY PREDICTION Problem 2:
//name will give an error becasue that value has been
//changed to otherName, so name is no longer defined
//------------------------------------------------

// Problem 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;
//Predict the output
console.log(password);
console.log(hashedPassword);

//MY PREDICTION: Problem 3:
//password will log as '12345', hashedPassword will
//be undefined because there is no password key for person.
//------------------------------------------------

// Problem 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [, , , second] = numbers;
const [, , , , , , , , third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

//MY PREDICTION: Problem 4:
//first = 2
//second = 5
//third = 2
//first == second? false
//first == third? true
//------------------------------------------------

// Problem 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

//MY PREDICTION: Problem 5:
//log(key) = value
//log(secondKey) = [1,  5, 1, 8, 3, 3]
//log(secondKey[0]) = 1
//log(willThisWork) = 5 (this works because of [] not {})
//-------------------------------------------------