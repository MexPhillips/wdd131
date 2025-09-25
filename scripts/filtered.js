// scripts/temples.js

// 1️⃣ Temple Data Array
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // ➕ Added 3+ more temples below


    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/457d18284a3214df5942ad5b9557d806444b2d1b/full/1600%2C/0/default"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/882909eb6a835276e4dd9519b93cad9da6e223a3/full/1600%2C/0/default"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 52959,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/0e85ee02f9c7079448ade5ad4b8b0505a07b4231/full/800%2C/0/default"
    }
];

// 2️⃣ Render Function
const templeGrid = document.getElementById("templeGrid");

function renderTemples(list) {
    templeGrid.innerHTML = "";
    list.forEach(t => {
        const figure = document.createElement("figure");
        figure.innerHTML = `
      <img src="${t.imageUrl}" alt="${t.templeName}" loading="lazy">
      <figcaption>${t.templeName}</figcaption>
      <div class="temple-meta">
        <p>${t.location}</p>
        <p>Dedicated: ${t.dedicated}</p>
        <p>Area: ${t.area.toLocaleString()} sq ft</p>
      </div>
    `;
        templeGrid.appendChild(figure);
    });
}

// 3️⃣ Filter Logic
function parseYear(dateStr) {
    return parseInt(dateStr.split(",")[0]);
}

function filterTemples(criteria) {
    switch (criteria) {
        case "old":
            return temples.filter(t => parseYear(t.dedicated) < 1900);
        case "new":
            return temples.filter(t => parseYear(t.dedicated) >= 2000);
        case "large":
            return temples.filter(t => t.area > 90000);
        case "small":
            return temples.filter(t => t.area < 10000);
        default:
            return temples;
    }
}

// 4️⃣ Event Listeners for Navigation
document.querySelectorAll(".filter-link").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const filter = e.target.getAttribute("data-filter");
        renderTemples(filterTemples(filter));
    });
});

// 5️⃣ Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navbarMobile = document.querySelector(".navbar-mobile");
menuToggle.addEventListener("click", () => {
    navbarMobile.classList.toggle("active");
});

// 6️⃣ Footer Updates
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// ✅ Initial Render
renderTemples(temples);
