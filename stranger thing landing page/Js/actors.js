const actors = [
  {
    id: 1,
    name: "Millie Bobby Brown",
    img: "./images/Millie Bobby Brown.jpg",
    description:
      "Millie Bobby Brown is a British actress and producer. She gained recognition for playing Eleven in the Netflix science fiction series Stranger Things, for which she received nominations for two Primetime Emmy Awards. ",
  
  },
  {
    id: 2,
    img: "./images/noah.jpg",
    name: "Noah Schnapp",
    description:
      "Noah Cameron Schnapp is an American actor. He gained recognition for playing Will Byers in the Netflix science fiction horror series Stranger Things",
  },

  {
    id: 3,
    img: "./images/jj.jpg",
    name: "Finn Wolfhard",
    description:
      "Finn Wolfhard is a Canadian actor and musician. He gained recognition for playing Mike Wheeler in the Netflix series Stranger Things",
  },
];

// select items
const actorImg = document.getElementById("actor-img");
const actorName = document.getElementById("actor-name");
const actorInfo = document.getElementById("actor-info");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const actor= actors[currentItem];
  actorImg.src = actor.img;
  actorName.textContent = actor.name;
  actorInfo.textContent = actor.description;
});

// show person based on item
function showPerson(person) {
   const actor = actors[currentItem];
   actorImg.src = actor.img;
   actorName.textContent = actor.name;
   actorInfo.textContent = actor.description;
}
// show next person
nextBtn.addEventListener("click",  ()=> {
  currentItem++;
  if (currentItem > actors.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click",  ()=> {
  currentItem--;
  if (currentItem < 0) {
    currentItem = actors.length - 1;
  }
  showPerson(currentItem);
});
