// Create an array which value is the planets of the solar system.
const planets = [
    {
        name: "Mercury",
        moons: [], // Mercury has no moons
    },
    {
        name: "Venus",
        moons: [], // Venus has no moons
    },
    {
        name: "Earth",
        moons: ["Moon"],
    },
    {
        name: "Mars",
        moons: ["Phobos",
            "Deimos"],
    },
    {
        name: "Jupiter",
        moons: ["Io",
            "Europa",
            "Ganymede",
            "Callisto",
            "Adrastea",
            "Amalthea",
            "Thebe",
            "Himalia",
            "Elara",
            "Lysithea",
            "Ananke",
            "Carme",
            "Leda",
            "S/2000 J 11",
            "S/2000 J 12",
            "S/2000 J 13",
            "Euanthe",
            "Orthosie",
            "Hippocamp",
            "Iocaste",
            "Praxidike",
            "Erinome",
            "Isonoe",
            "Harpalyke",
            "Taygete",
            "Callichore",
            "Megaclite",
            "Autonoe",
            "Thyone",
            "Eurydome",
            "S/2003 J 18",
            "S/2003 J 19",
            "S/2003 J 23",
            "Hermippe",
            "Pasiphae",
            "Sinope",
            "Spudeus",
            "Calliroe",
            "Aitne",
            "Caldene",
            "Themisto",
            "Aoede",
            "S/2010 J 1",
            "S/2010 J 2",
            "Jupiter LXIV",
            "Jupiter LXV",
            "Jupiter LXVI",
            "Jupiter LXVII",
            "Jupiter LXVIII",
            "Jupiter LXIX",
            "Jupiter LXX",
            "Jupiter LXXI",
            "Jupiter LXXII",
            "Jupiter LXXIII",
            "Jupiter LXXIV",
            "Jupiter LXXV",
            "Jupiter LXXVI",
            "Jupiter LXXVII",
            "Jupiter LXXVIII",
            "Jupiter LXXIX",
            "Jupiter LXXX",
            "Jupiter LXXXI",
            "Jupiter LXXXII",
            "Jupiter LXXXIII",
            "Jupiter LXXXIV",
            "Jupiter LXXXV",
            "Jupiter LXXXVI",
            "Jupiter LXXXVII",
            "Jupiter LXXXVIII",
            "Jupiter LXXXIX",
            "Jupiter XC",
            "Jupiter XCI",
            "Jupiter XCII",
            "Jupiter XCIII",
            "Jupiter XCIV",
            "Jupiter XCV",
            "Jupiter XCVI",
            "Jupiter XCVII",
            "Jupiter XCVIII",
            "Jupiter XCIX"],
    },
    {
        name: "Saturn",
        moons: ["Titan",
            "Rhea",
            "Iapetus",
            "Dione",
            "Tethys",
            "Enceladus",
            "Mimas",
            "Hyperion",
            "Phoebe",
            "Janus",
            "Epimetheus",
            "Helene",
            "Telesto",
            "Calypso",
            "Atlas",
            "Prometheus",
            "Pandora",
            "Polydeuces",
            "Dactyl",
            "Suttungr",
            "Kiviuq",
            "Ymir",
            "Ijiraq",
            "Paaliaq",
            "Siarnaq",
            "Tarvos",
            "Mundilfari",
            "Albiorix",
            "Erriapo",
            "S/2004 S 7",
            "S/2004 S 12",
            "S/2004 S 13",
            "S/2004 S 14",
            "S/2004 S 17",
            "S/2004 S 36",
            "S/2004 S 37",
            "S/2006 S 1",
            "S/2006 S 4",
            "S/2007 S 1",
            "S/2007 S 2",
            "S/2007 S 3",
            "S/2009 S 1",
            "S/2009 S 2",
            "S/2011 S 1",
            "S/2011 S 2",
            "S/2011 S 3",
            "S/2011 S 4",
            "S/2014 S 1",
            "S/2014 S 2",
            "S/2014 S 3",
            "S/2014 S 4",
            "S/2014 S 7",
            "S/2019 S 1"],
    },
    {
        name: "Uranus",
        moons: ["Titania",
            "Oberon",
            "Umbriel",
            "Ariel",
            "Miranda",
            "Caliban",
            "Sycorax",
            "Prospero",
            "Setebos",
            "Stephano",
            "Trinculo",
            "Francisco",
            "Ferdinand",
            "Margaret",
            "Mab",
            "Cupid",
            "Belinda",
            "Perdita",
            "Rosalind",
            "Desdemona",
            "Bianca",
            "Cressida",
            "Ophelia",
            "Juliet",
            "Portia",
            "Puck",
            "S/2023 U 1"],
    },
    {
        name: "Neptune",
        moons: ["Triton",
            "Proteus",
            "Nereid",
            "Larissa",
            "Thalassa",
            "Despina",
            "Galatea",
            "Naiad",
            "Hippocamp",
            "Psamathe",
            "Neso",
            "Sao"],
    },
];
// For each planet in the array, create a < div > using createElement.This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background - color).
// Finally append each div to the < section > in the HTML(presented below).
//     Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons.How should you display them ?
//     Should you still use an array for the planets ? Or an array of objects ?

function createPlanetMoonList(planets) {
    const solarSystemSection = document.querySelector(".solar-system");

    planets.forEach(planet => {
        // Create a wrapper div for planet and moons
        const planetWrapperDiv = document.createElement("div");
        planetWrapperDiv.classList.add("planet-wrapper");

        // Create a div for the planet
        const planetDiv = document.createElement("div");
        planetDiv.classList.add("planet", `planet-${planet.name.toLowerCase()}`);

        // Create content for the planet div (optional)
        planetDiv.textContent = `${planet.name}`;

        // Create a div to hold the moons (container)
        const moonContainerDiv = document.createElement("div");
        moonContainerDiv.classList.add("moons");

        // Loop through moons and create moon divs
        planet.moons.forEach(moon => {
            const moonDiv = document.createElement("div");
            const moonNameClass = moon.replace(/\s+/g, "_").toLowerCase();
            moonDiv.classList.add("moon", `moon-${moonNameClass}`);

            // Create content for the moon div (optional)
            moonDiv.textContent = `${moon}`;

            // Append the moon div to the moon container
            moonContainerDiv.appendChild(moonDiv);
        });

        // Append the moon container and planet div to the wrapper div
        planetWrapperDiv.appendChild(moonContainerDiv);
        planetWrapperDiv.appendChild(planetDiv);

        // Append the entire wrapper div to the solar system section
        solarSystemSection.appendChild(planetWrapperDiv);
    });
}

createPlanetMoonList(planets);

