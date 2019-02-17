let objArr = [
    {
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "age": 39,
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 19,
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
    }
];

//TASK #1
function findTypes () {
    let typesArr = [];

    for (let i = 0; i < arguments.length; i++) {
        typesArr.push(typeof arguments[i]);
    }
    return typesArr;
}
findTypes(null, 5, 'hello');

//TASK #2
function executeforEach (arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}
executeforEach([1, 2, 3], function (el) {
    console.log(el) 
});

//TASK #3
function mapArray (arr, func) {
    let newArr = [];

    executeforEach(arr, function (el) {
        newArr.push(func (el) );
    });
    return newArr;
}
mapArray([2, 5, 8], function (el) {
    return el + 3 
});

//TASK #4
function filterArray (arr, func) {
    let filteredArr = [];
    executeforEach(arr, function (el) {
        if (func (el) ) {
            filteredArr.push(el);
        }
    });
    return filteredArr;
}
filterArray([2, 5, 8], function (el) {
    return el > 3 
});

//TASK #5
function getAmountOfAdultPeople (arr) {
    let age = [];

    filterArray(arr, function (person) {
        if (person.age >= 18) {
            age.push(person);
        }
    });
    return age.length;
}
getAmountOfAdultPeople(objArr);

//TASK #6
function getGreenAdultBananaLovers (arr) {
    let greenAdultBananaLover = [];

    filterArray(arr, function (person) {
        if (person.age >= 18 && person.eyeColor === "green" && person.favoriteFruit === "banana") {
            greenAdultBananaLover.push(person.name);
        }
    });
    return greenAdultBananaLover;
}
getGreenAdultBananaLovers(objArr);

//TASK #7
function keys (obj) {
    let newArr = [];

    for (let key in obj) {
        newArr.push(key);
    }
    return newArr;
}
keys({ keyOne: 1, keyTwo: 2, keyThree: 3 });

//TASK #8
function values (obj) {
    let newArr = [];

    for (let val in obj) {
        newArr.push(obj[val]);
    }
    return newArr;
}
values({ keyOne: 1, keyTwo: 2, keyThree: 3 });

//TASK #9
function showFormattedDate (d) {
    let monthsArray =['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    let dd = String(d.getDate());
    let mm = String(monthsArray[d.getMonth()]);
    let yyyy = String(d.getFullYear());

    return "Date: " + dd + " of " + mm + ", " + yyyy;
}
showFormattedDate(new Date('2019-01-27T01:10:00'));

//TASK #10
function isEvenYear (d) {
    if (d.getFullYear() % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
isEvenYear(new Date('2019-01-27T01:10:00'));

//TASK #11
function isEvenMonth (d) {
    if (d.getMonth() % 2 === 0) {
        return false;
    } else {
        return true;
    }
}
isEvenMonth(new Date('2019-02-27T01:10:00'));