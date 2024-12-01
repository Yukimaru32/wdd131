const temples = [
    {
      templeName: "Kirtland",
      location: "Kirtland,Ohio",
      dedicated: "1836,March,27",
      area: 15000,
      imageUrl:"images/kirtland_temple.webp"
    },
    {
      templeName: "London",
      location: "London,England",
      dedicated: "1958,September,7",
      area: 42652,
      imageUrl:"images/london_england_temple.webp"
    },
    {
      templeName: "Kona Hawaii",
      location: "Kailua Lona, Hawaii",
      dedicated: "2000,January,23",
      area: 12325,
      imageUrl:"images/kona_temple.webp"
    },
    {
      templeName: "Mexico City",
      location: "San Juan de Aragon, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:"images/mexico_city_temple.webp"
    },
    {
      templeName: "Madrid Spain",
      location: "Madrid, Spain",
      dedicated: "1999, March, 19",
      area: 45800,
      imageUrl:"images/madrid_spain_temple.webp"
    },
    {
      templeName: "Oklahoma City Oklahoma",
      location: "Yukon, Oklahoma",
      dedicated: "2000, July, 30",
      area: 10890,
      imageUrl:"images/oklahoma_temple.webp"
    },
    {
      templeName: "Nauvoo Illinois",
      location: "Nauvoo, Illinois",
      dedicated: "2002 June, 27",
      area: 54000,
      imageUrl:"images/nauvoo_temple.webp"
    },
    {
      templeName: "Salt Lake",
      location: "Salt Lake City, Utah",
      dedicated: "1893, April, 6",
      area: 382207,
      imageUrl:"images/salt_lake_temple.webp"
    },
    {
      templeName: "Idaho Falls Idaho",
      location: "Idaho Falls, Idaho",
      dedicated: "1945, September, 23",
      area: 85624,
      imageUrl:"images/idaho_falls_temple.webp"
    },
];


function createTempleCard(temples) {
  const album = document.querySelector(".album");
  album.innerHTML = ""; // Clear existing content

    temples.forEach(temple =>{
      let card =document.createElement("section");
      let name =document.createElement("h3");
      let location=document.createElement("p");

      let dedication=document.createElement("p");
      let area=document.createElement("p");
      let img=document.createElement("img");

      name.textContent =temple.templeName;
      location.innerHTML= `<span class="label">Location:</span> ${temple.location}`;
      dedication.innerHTML= `<span class="label">Dedicated:</span> ${temple.dedicated}`;
      area.innerHTML= `<span class="label">Location:</span> ${temple.area} sq ft`;
      img.setAttribute("src",temple.imageUrl);
      img.setAttribute("alt",`${temple.templeName}temple`);
      img.setAttribute("loading","lazy");

      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedication);
      card.appendChild(area);
      card.appendChild(img);

      document.querySelector(".album").appendChild(card);

    })
}



function filterOldTemples() {
  const filteredTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year < 1900;
  });

  // フィルタリングされたデータのみを表示
  createTempleCard(filteredTemples);
}

function filterNewTemples() {
  const filteredTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year >= 2000;
  });

  // フィルタリングされたデータのみを表示
  createTempleCard(filteredTemples);
}
function filterLargeTemples() {
  const filteredTemples = temples.filter(temple => temple.area > 50000);

  createTempleCard(filteredTemples);
}

function filterSmallTemples() {
  const filteredTemples = temples.filter(temple => temple.area < 10000);

  createTempleCard(filteredTemples);
}


document.addEventListener("DOMContentLoaded", () => {
  createTempleCard(temples); // 初期データを表示
  document.getElementById("home").addEventListener("click",()=>{
    createTempleCard(temples);
  });

  document.getElementById("old").addEventListener("click", () => {
    filterOldTemples(); // フィルタリングされたデータを表示
  });
  document.getElementById("new").addEventListener("click" ,() => {
    filterNewTemples();
  });
  document.getElementById("large").addEventListener("click" ,()=>
  {
    filterLargeTemples();
  });
  document.getElementById("small").addEventListener("click" ,()=>
  {
    filterSmallTemples();
  });
});


























