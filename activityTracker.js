const myWeek = [
    { day: "Sunday", activity: "Running", hoursSpent: 1, category: "Physical", enjoyment: 5, timeOfDay: "Morning" },
    { day: "Monday", activity: "Walking", hoursSpent: 1, category: "Physical", enjoyment: 5, timeOfDay: "Morning" },
    { day: "Tuesday", activity: "Coding", hoursSpent: 14, category: "Creative", enjoyment: 9, timeOfDay: "Morning" },
    { day: "Wednesday", activity: "Running", hoursSpent: 1, category: "Physical", enjoyment: 4, timeOfDay: "Afternoon" },
    { day: "Thursday", activity: "Coding", hoursSpent: 8, category: "Creative", enjoyment: 9, timeOfDay: "Morning" },
    { day: "Friday", activity: "Running", hoursSpent: 0.5, category: "Physical", enjoyment: 5, timeOfDay: "Afternoon" },
    { day: "Saturday", activity: "Coding", hoursSpent: 3, category: "Creative", enjoyment: 6, timeOfDay: "Morning" }
];

// Highest enjoyment: Coding, Creative is what I like doing most
// I do most stuff in the morning

function totalOutdoorTime() {
    return myWeek
        .filter(t => t.category === "Physical")
        .map(c => c.hoursSpent)
        .reduce((c, t) => c + t);
}

function averageEnjoyment() {
    return myWeek
        .map(c => c.enjoyment)
        .reduce((c, t) => c + t) / myWeek.length;
}

function getValue(i, c) {
    return c(myWeek[i]);
}

console.log(totalOutdoorTime())
console.log(averageEnjoyment().toFixed(1))
console.log(getValue(0, t => t.activity))  // Running