var is_array = function (input) {
    if (toString.call(input) === "[object Array]")
        return true;
    return false;
};
console.log(is_array('w3reosurce'));
console.log(is_array([1, 2, 3, 4]));


///Wirte a java script to retu arn the frist element of an arrary

var first = function (array, n) {
    if (array == null)
        return void 0;
    if (n == null)
        return array[0];
    if (n < 0)
        return array.slice(0, n);
};
console.log(first([4, 2, 4, 5, 8, 4, 3, -2], 6));

///Wirte a java script to retu arn the last element of an array

var last = function (array, n) {
    if (array == null)
        return void 0;

    if (n == null)
        return array[array.length - 1];

    /// Math.max is a function that returns the largest number from an array
    /// Slice method returneaza o portiune dintr-un array intr-un object array selectat de la inceput pana la sfarsit
    return array.slice(Math.max(array.length - n, 0));
};
console.log(last([1, 2, 4, 5, 8, 9]))

var myObject = {
    firstName: "Bogdan",
    lastName: "Dadu",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
myObject.fullName();

////apply preia argumentele ca si un array iar in schimb call ia argumentele separat

var person={
    fullName: function(){
        return this.firstName+ " " +this.lastName;
    }
}
var person1={
    firstName: "Ciprian",
    lastName: "Magnificul"
}
person.fullName.apply(person1);