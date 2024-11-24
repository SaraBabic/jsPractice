const emptyGlass =
  "M20.7515 31.9724L23.7515 4.97239M4.49999 32.0175L1.00001 5M21 31.5C21 33.433 17.1944 35 12.5 35C7.80558 35 4 33.433 4 31.5C4 29.567 7.80558 28 12.5 28C17.1944 28 21 29.567 21 31.5ZM24 4.5C24 6.433 18.8513 8 12.5 8C6.14873 8 1 6.433 1 4.5C1 2.567 6.14873 1 12.5 1C18.8513 1 24 2.567 24 4.5Z";

const sunPath =
  "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

const darkMode = document.querySelector("#darkMode");
const title = document.querySelector(".letters");
let toggle = false;
var textWrapper = document.querySelector(".ml9 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

darkMode.addEventListener("click", () => {
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo",
  });
  timeline
    .add({
      targets: ".sun",
      d: [{ value: toggle ? sunPath : moonPath }],
    })
    .add(
      {
        targets: "#darkMode",
        rotate: toggle ? 180 : 320,
      },
      "-= 350"
    )
    .add(
      {
        targets: "section",
        backgroundColor: toggle ? "rgb(255,255,255)" : "rgb(22,22,22)",
        color: toggle ? "rgb(22,22,22)" : "rgb(255,255,255)",
      },
      "-=700"
    );
  if (!toggle) {
    toggle = true;
    title.textContent = "Dark mode";
  } else {
    title.textContent = "Light mode";
    toggle = false;
  }
});

anime
  .timeline({ loop: false })
  .add({
    targets: ".ml9 .letter",
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i + 1),
  })
  .add({
    targets: ".ml9",
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
