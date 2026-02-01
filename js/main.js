console.log("JavaScript file is connected!");

const fruit = document.querySelectorAll("svg");
console.log(fruit);

function logId(){
    console.log(this.id);
}

fruit.forEach(fruit => fruit.addEventListener('click', logId));