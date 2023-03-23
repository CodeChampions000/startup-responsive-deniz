const team = [
  {
    image: "./Images/person1.png",
    name: "Peg Legge",
    position: "CEO",
  },
  {
    image: "./Images/person2.png",
    name: "Richard Guerra",
    position: "CTO",
  },
  {
    image: "./Images/person3.png",
    name: "Alexandra Stolz",
    position: "Designer",
  },
  {
    image: "./Images/person4.png",
    name: "Janet Brey",
    position: "Developer",
  },
];

document.querySelector(".cards").innerHTML = team
  .map(
    (person, index) =>
      `
    <div key="${index}" class="card">
          <div>
            <img src="${person.image}" alt="Person1 card" />
            <div>
              <p class="name">${person.name}</p>
              <p class="position">${person.position}</p>
            </div>
          </div>
        </div>
    `
  )
  .join(" ");
team.map((person, index) => {
  console.log(person);
});

const menu = document.querySelector(".hamburger-menu");

document.querySelector(".hamburger").addEventListener("click", () => {
  if ((menu.style.display = "none")) {
    menu.style.display = "block";
  }
});
