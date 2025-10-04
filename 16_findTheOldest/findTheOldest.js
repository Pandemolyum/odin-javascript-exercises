const findTheOldest = function(arr) {
    let ages = arr.map((person) => {
        if (person.yearOfDeath == undefined) {
            person.yearOfDeath = new Date().getFullYear();
        }

        return {
            name: person.name, 
            age: person.yearOfDeath - person.yearOfBirth,
        };
    });
    
    return ages.reduce((oldest, current) => {
        if (oldest.age > current.age) {
            return oldest;
        } else {
            return current;
        }
    }, {name: "", age: -1})
};

// Do not edit below this line
module.exports = findTheOldest;
