const findTheOldest = function(people) {
    return people.reduce((prev, curr) => {
        let date = new Date();
        let prevAge = "yearOfDeath" in prev ? prev.yearOfDeath-prev.yearOfBirth : date.getFullYear()-prev.yearOfBirth;
        let currAge = "yearOfDeath" in curr ? curr.yearOfDeath-curr.yearOfBirth : date.getFullYear()-curr.yearOfBirth;
        return prevAge > currAge ? prev : curr;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
