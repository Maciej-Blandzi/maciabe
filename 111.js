var movieGoer = false;
if (movieGoer) {
    console.log('.. go to the movies');
    document.write('.. go to the movies')
}else{
    console.log('.. its not for you');
    document.write('.. its not for you')
}
var number = 10;
if (number > 10 || Number < 20){
    document.write('.. youre between 10 and 20');
    console.log('.. youre between 10 and 20');
    }
else if(number === 10 || number ===20){
    document.write('.. youre right on the money');
    console.log('.. youre right on the money');
}else if(number < 10 || number > 20){
        document.write('  . youre out of range');
        console.log('  . youre out of range');
}else{
    document.write('  .  error');
}
/*
for (i = 1; i<20; i++){
    document.write(i);
    console.log(i);
}*/
/*
var num = 10;
while (num < 20){
    console.log('.. keep tryin.. ');
    num++;
}

for (num = 1; num < 20; num++){
    console.log('we did it');
    if(num === 10) {
        break;
    }
}*/

var links = document.getElementsByTagName('div');

for (i = 1; i < links.length; i++)
{
    if(i === 2 || i === 4 || i === 6 || i === 8){
        continue;
    }
    console.log(' loop number - ' + i);
    if(i === 4){
        break;

    }
}console.log('we skipped 2,4 and 6 and broke at ' + i);

function NewAverage (a,b,c) {
    var average = (a + b + c) / 2;
    console.log('the average is : ' + average);
}
NewAverage(4,7,11);

/*my own average

function myAverage (a,b,c,d){

    var avg = (a + b + c + d) / 4;
    console.log('the average this time is : ' + avg);
    return avg;

}
var theResult = myAverage(2,4,6,8);
console.log(' once again, the average is : ' + theResult);
// again

function theAverage(a,b){
    var average = (a + b) / 2;
    console.log('my average is : ' + average);
    return average;
}
var RealAverage = theAverage(-3,5);
console.log('the real average is : ' + RealAverage);

document.write(typeof (RealAverage) );
console.log('the type of this element is : ' + typeof (RealAverage) );*/

function multiplicationFam (a,b){
    var multi = (a * b);
    console.log('the result of the multiplication\'s of ' + a + ' and ' + b + ' is : ' + multi);
    return(multi);
}

var newResult = multiplicationFam(100, 100);
var PI = 3.14;
console.log( "the result plus Pi is .. " + newResult + PI);


var slicing = "i like ike";
var newslice = slicing.slice(2,7,9,11);
console.log(newslice);

var splitting = "one, two, three, four, five";
var NewSplit = splitting.split(',');
console.log(NewSplit);

var MyArray = [12,'pip',7,'lolo',false];
console.log(MyArray);

//objects plus METHODS
var myArray2 = new Array();
myArray2[0] = 20;
myArray2[1] = 10;
myArray2[2] = 34;

myArray2.newfunction = function(){
    document.write('sorted array : ' + myArray2);
};
myArray2.newfunction();

var newDrive = {

    maxSpeed: 50,
    driver: "MyAss",
    distance: 700,
    mileage : function(time, speed){
        console.log(time * speed);
    }


};
console.log(newDrive.driver);
newDrive.mileage(2,70);

//age = prompt('whats your age ?');
//console.log(age);

var qq = "hello"
if (!isNaN(qq)){
    console.log('not a number');

}else{console.log(qq);}


var amount = 33;
amount = amount * 2;
console.log(amount);
amount = " $$ " + String(amount);
console.log(amount);

// price
var Price = 999.99;
var Tax = 0.08;
Price = Price + (Price * Tax)
console.log(Price);
console.log(Price.floor);
console.log(typeof Price);

