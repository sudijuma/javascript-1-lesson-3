const pets = [
    {
        type: null,
        colour: "brown",
        age: 10,
        friendly: true,
    },
    {
        colour: "orange",
        age: 7,
        friendly: false,
    },
    {
        type: "duck",
        colour: "#00ff00",
        age: 20,
        friendly: false,
    },
];
// Select the pet-container class

const container = document.querySelector(".pet-container");


// Create a html variable to hold our html in it when we use the loop
let html = "";
// Loop over the array

for (let i = 0; i < pets.length; i++) {
    console.log(pets[i]);
    let theType = "";

    // if(pets[i].type !== null)
    if (pets[i].type) {
        theType = pets[i].type;
    } else {
       console.log(theType = "unkown type");
    }

    html = html + `
    <div>
        <h4>The type: ${pets[i].type}</h4>
        <p>The age: ${pets[i].age}</p>
        <p>The Mood: ${pets[i].friendly ? "yes it its friendly" : "no its not friendly"}</p>
        </div >
        `;
    console.log(html);
}
container.innerHTML = html;
// change the innerHTML
