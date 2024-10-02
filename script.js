const countries = ["France", "Italy", "Spain", "Belgium", "Australia", "New Zealand", "USA", "Canada", "Thailand", "China", "Vietnam", "Egypt"];
const travelMethod = ["Train", "Bus", "Car", "Taxi", "Moped", "Skateboard", "Bicycle", "Rollerblades", "Horseback", "Airplane", "Helicopter", "foot"];
const time = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const random = (arr) => {
    return (Math.floor(Math.random() * arr.length))
}

const randomCountry= random(countries);
const randomTravel = random(travelMethod);
const randomTime = random(time);

console.log(countries[randomCountry]);
console.log(travelMethod[randomTravel]);
console.log(time[randomTime]);