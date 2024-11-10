const countries = ["France", "Italy", "Spain", "Belgium", "Australia", "New Zealand", "USA", "Canada", "Thailand", "China", "Vietnam", "Egypt"];
const travelMethod = ["Train", "Bus", "Car", "Taxi", "Moped", "Skateboard", "Bicycle", "Rollerblades", "Horseback", "Airplane", "Helicopter", "foot"];
const time = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const random = (arr) => {
    return (Math.floor(Math.random() * arr.length))
}
/* TESTING FOR RANDOM
console.log(countries[randomCountry]);
console.log(travelMethod[randomTravel]);
console.log(time[randomTime]);
*/

const getMessage = () => {
    const randomCountry= random(countries);
    const randomTravel = random(travelMethod);
    const randomTime = random(time);

    return `You will travel to ${countries[randomCountry]}. You will travel by ${travelMethod[randomTravel]} in ${time[randomTime]}`;
}

const updateMessage = () => {
    document.getElementById('message').innerText = getMessage();
    document.getElementById('generateButton').innerText = 'New Travel Idea';
}

document.getElementById('generateButton').addEventListener('click', updateMessage);

console.log(getMessage());