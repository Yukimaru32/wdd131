const mangaList = [
  {
    mangaTitle: "Attack On Titan",
    author: "Hajime,Isayama",
    published: "2010,March,17",
    sales: 140,
    genre: "action,battle",
    imageUrl:"images/attack_on_titan.jpg",
  },
  {
    mangaTitle: "Assasination Classroom",
    author: "Yusei,Matsui",
    published: "2012,November,2",
    sales: 25,
    genre: "battle,romance,school",
    imageUrl:"images/assasination_class.jpg",
  },
  {
    mangaTitle: "Bleach",
    author: "Taito,Kubo",
    published: "2001,August,7",
    sales: 130,
    genre: "battle,action,fantasy",
    imageUrl:"images/bleach.jpg",
  },
  {
    mangaTitle: "Teasing Master Takagi-san",
    author: "Souichiro,Yamamoto",
    published: "2013,June,12",
    sales: 12,
    genre: "romance,school",
    imageUrl:"images/teasing_master.jpg",
  },
  {
    mangaTitle: "Dragonball",
    author: "Akira,Toriyama",
    published: "1984,November,20",
    sales: 260,
    genre: "battle",
    imageUrl:"images/dragonball.jpg",
  },
  {
    mangaTitle: "Chain Saw Man",
    author: "Tatsuki,Fujimoto",
    published: "2018,December,3",
    sales: 26,
    genre: "ballte,dark",
    imageUrl:"images/chainsawman.jpg",
  },
  {
    mangaTitle: "One Punch Man",
    author: "ONE",
    published: "2012,June,14",
    sales: 30,
    genre: "action,battle,comedy",
    imageUrl:"images/onepunch_man.jpg",
  },
  {
    mangaTitle: "Spy Family",
    author: "Tatsuya,Endo",
    published: "2019,March,25",
    sales: 34,
    genre: "action,battle,comedy",
    imageUrl:"images/spy_family.jpg",
  },
  {
    mangaTitle: "Slam Dunk",
    author: "Takehiko,Inoue",
    published: "1990,October,1",
    sales: 185,
    genre: "sports,school",
    imageUrl:"images/slamdunk.jpg",
  },
  {
    mangaTitle: "World Trigger",
    author: "Daisuke Ashihara",
    published: "2013,Febuary,9",
    sales: 15,
    genre: "action,battle",
    imageUrl:"images/world_trigger.jpg",
  },
  {
    mangaTitle: "Nisekoi",
    author: "Naoshi,Komi",
    published: "2012,May,12",
    sales: 12,
    genre: "school,romance",
    imageUrl:"images/nisekoi.jpg",
  },
  {
    mangaTitle: "Jujutsu Kaisen",
    author: "Gege,Akutami",
    published: "2018,March,5",
    sales: 100,
    genre: "battle,dark,school",
    imageUrl:"images/jujutsu.jpg",
  },
  {
    mangaTitle: "Hunter X Hunter",
    author: "Yoshihiro,Togashi",
    published: "1998,March,16",
    sales: 84,
    genre: "action,battle",
    imageUrl:"images/hunterXhunter.jpg",
  },
  {
    mangaTitle: "Naruto",
    author: "Masashi,Kishimoto",
    published: "1999,September,21",
    sales: 250,
    genre: "action,battle",
    imageUrl:"images/naruto.jpg",
  },
  {
    mangaTitle: "My Hero Academia",
    author: "Kouhei,Horikoshi",
    published: "2014,July,7",
    sales: 100,
    genre: "action,battle,school,comedy",
    imageUrl:"images/my_hero_academia.jpg",
  },
  {
    mangaTitle: "Death Note",
    author: "Tsugumi,Oba",
    published: "2003,December",
    sales: 30,
    genre: "battle,dark,horror",
    imageUrl:"images/deathnote.jpg",
  },
  {
    mangaTitle: "Dandadan",
    author: "Yukinobu,Tatsu",
    published: "2019,April,6",
    sales: 3.2,
    genre: "action,battle,comedy,romance,horror",
    imageUrl:"images/dandadan.jpg",
  },
  {
    mangaTitle: "One Piece",
    author: "Eichiro,Oda",
    published: "1997,July,22",
    sales: 510,
    genre: "action,battle",
    imageUrl:"images/onepiece.jpg",
  },
  {
    mangaTitle: "Demon Slayer",
    author: "Koyoharu,Gotouge",
    published: "2016,Febuary,16",
    sales: 150,
    genre: "action,battle,dark",
    imageUrl:"images/demonslayer.jpg",
  },
  {
    mangaTitle: "Good Night Punpun",
    author: "Inio,Asano",
    published: "2007,August,3",
    sales: 3,
    genre: "dark",
    imageUrl:"images/punpun.jpg",
  },
  {
    mangaTitle: "Frieren",
    author: "Kanehito,Yamada",
    published: "2020,April,28",
    sales: 22,
    genre: "actino,battle",
    imageUrl:"images/frieren.jpg",
  },
  {
    mangaTitle: "Haikyu!",
    author: "Haruichi,Hurudate",
    published: "2012,Febuary,20",
    sales: 62,
    genre: "school,sports",
    imageUrl:"images/haikyu.jpg",
  },
  {
    mangaTitle: "Gintama",
    author: "Hideaki,Sorachi",
    published: "2004,October,4",
    sales: 73,
    genre: "action,battle,comedy",
    imageUrl:"images/gintama.jpg",
  },
  {
    mangaTitle: "Jojo's Bizarre Adventure",
    author: "Hirohiko,Araki",
    published: "1986,December,2",
    sales: 120,
    genre: "actino,battle,dark,horror",
    imageUrl:"images/jojo.jpg",
  },
  {
    mangaTitle: "The Promised Neverland",
    author: "Kaiu,Shirai",
    published: "2016,Augst,1",
    sales: 42,
    genre: "action,dark,suspence",
    imageUrl:"images/neverland.jpg",
  },
  {
    mangaTitle: "Oshi no Ko",
    author: "Aka,Akasaka",
    published: "2020,April,23",
    sales: 18,
    genre: "dark,suspence",
    imageUrl:"images/oshinoko.jpg",
  },
  {
    mangaTitle: "Parasite",
    author: "Hitoshi,Iwaaki",
    published: "1990,January",
    sales: 24,
    genre: "battle,horror",
    imageUrl:"images/parasite.jpg",
  },
  {
    mangaTitle: "Fullmetal Alchemist",
    author: "Hiromu,Arakawa",
    published: "2001,August",
    sales: 80,
    genre: "action,battle",
    imageUrl:"images/metal.jpg",
  },
  {
    mangaTitle: "Baki",
    author: "Keisuke,Itagaki",
    published: "1992,Febuary,21",
    sales: 100,
    genre: "battle",
    imageUrl:"images/baki.jpg",
  },
  {
    mangaTitle: "Kingdom",
    author: "Yasuhisa,Hara",
    published: "2006,January,26",
    sales: 110,
    genre: "battle",
    imageUrl:"images/kingdom.jpg",
  },
  {
    mangaTitle: "Tokyo Revengers",
    author: "Ken,Wakui",
    published: "2017,March,1",
    sales: 80,
    genre: "action,battle",
    imageUrl:"images/tokyo.jpg",
  },
  {
    mangaTitle: "Tokyo Ghoul",
    author: "Sui,Ishida",
    published: "2011,September,8",
    sales: 47,
    genre: "action,battle,dark,horror",
    imageUrl:"images/tokyoghoul.jpg",
  },
  {
    mangaTitle: "The Seven Deadly Sins",
    author: "Nakaba,Suzuki",
    published: "2012",
    sales: 55,
    genre: "action,battle",
    imageUrl:"images/seven.jpg",
  },
  {
    mangaTitle: "Forest of Piano",
    author: "Makoto,Isshiki",
    published: "1998",
    sales: 6,
    genre: "sports",
    imageUrl:"images/piano.jpg",
  },
  {
    mangaTitle: "Blue Lock",
    author: "Muneyuki,Kaneshiro",
    published: "2018,Augst,1",
    sales: 40,
    genre: "sports",
    imageUrl:"images/bluelock.jpg",
  },
  {
    mangaTitle: "20th Century Boy",
    author: "Naoki,Urasawa",
    published: "1999",
    sales: 36,
    genre: "battle,horror,suspence",
    imageUrl:"images/20thcentury.jpg",
  },
  {
    mangaTitle: "Initial D",
    author: "Shuichi,Shigeno",
    published: "1995,July,17",
    sales: 56,
    genre: "sports",
    imageUrl:"images/initialD.jpg",
  },
  {
    mangaTitle: "Detective Conan",
    author: "Goushou,Aoyama",
    published: "1994",
    sales: 270,
    genre: "suspence",
    imageUrl:"images/conan.jpg",
  },
  {
    mangaTitle: "Aoashi",
    author: "Yugo,Kobayashi",
    published: "2015,January,5",
    sales: 21,
    genre: "school,sports",
    imageUrl:"images/aoashi.jpg",
  },
  {
    mangaTitle: "Your Lie in April",
    author: "Naoshi,Urakawa",
    published: "2011,May",
    sales: 5,
    genre: "school,romance",
    imageUrl:"images/april.jpg",
  },
  {
    mangaTitle: "Blue Box",
    author: "Kouji,Miura",
    published: "2021,April,21",
    sales: 6.2,
    genre: "school,sports,romance",
    imageUrl:"images/bluebox.jpg",
  },
  {
    mangaTitle: "Kaiju No.8",
    author: "Naoya,Matsumoto",
    published: "2020,July,3",
    sales: 16,
    genre: "action,battle",
    imageUrl:"images/no.8.jpg",
  },
    

    


]


function createMangaCard(mangas) {
    const list = document.querySelector(".mangalist");
    list.innerHTML = ""; // Clear existing content
  
      mangas.forEach(manga =>{
        let card =document.createElement("section");
        let sub1 =document.createElement("div");
        let sub2 =document.createElement("div");
        let sub3 =document.createElement("nav");
        let name =document.createElement("h3");
        let author=document.createElement("p");
  
        let publication=document.createElement("p");
        let sale=document.createElement("p");
        let genre=document.createElement("p");
        let review=document.createElement('a');
        let img=document.createElement("img");
        let cite=document.createElement("cite");

        sub1.setAttribute("class","sub1");
        sub2.setAttribute("class","sub2");
        name.textContent =`Title: ${manga.mangaTitle}`;
        author.innerHTML= `<span class="label">Author:</span> ${manga.author}`;
        publication.innerHTML= `<span class="label">Published:</span> ${manga.published}`;
        sale.innerHTML= `<span class="label">Total published:</span> ${manga.sales}M books`;
        genre.innerHTML= `<span class="label">Genre:</span> ${manga.genre}`;
        review.setAttribute("href","manga_review.html");
        review.innerHTML= 'Write a review';
        img.setAttribute("src",manga.imageUrl);
        img.setAttribute("alt",`${manga.mangaTitle} image`);
        img.setAttribute("loading","lazy");
        cite.innerHTML= `<span class="label">Citation:</span>${manga.mangaTitle} Vol.1 cover`;
  
        sub1.appendChild(name);
        sub1.appendChild(author);
        sub1.appendChild(publication);
        sub1.appendChild(sale);
        sub1.appendChild(genre);
        sub3.appendChild(review);
        sub2.appendChild(img);
        sub2.appendChild(cite);
        sub2.appendChild(sub3);
        card.appendChild(sub1);
        card.appendChild(sub2);
  
        document.querySelector(".mangalist").appendChild(card);
  
      })
}
function filterRecent() {
  const filterManga = mangaList.filter(manga => {
    const year = parseInt(manga.published.split(",")[0]);
    return year >= 2000;
  });

  createMangaCard(filterManga);
}
function filterOld() {
  const filterManga = mangaList.filter(manga =>{
    const year = parseInt(manga.published.split(",")[0]);
    return year <2000;
  });

  createMangaCard(filterManga);
}
function filterAction() {
  const filterManga = mangaList.filter(manga => {
    const filter = manga.genre.includes("action");
    return filter;
  });

  createMangaCard(filterManga);
}
function filterBattle() {
  const filterManga = mangaList.filter(manga => {
    const filter = manga.genre.includes("battle");
    return filter;
  });

  createMangaCard(filterManga);
}
function filterComedy() {
  const filterManga = mangaList.filter(manga => {
    const filter = manga.genre.includes("comedy");
    return filter;
  });

  createMangaCard(filterManga);
}
function filterDark() {
  const filterManga = mangaList.filter(manga => {
    const filter = manga.genre.includes("dark");
    return filter;
  });

  createMangaCard(filterManga);
}
function filterHorror(){
  const filterManga = mangaList.filter(manga => {
    const filter = manga.genre.includes("horror");
    return filter;
  });

  createMangaCard(filterManga);
}
function filterSchool() {
  const filterManga = mangaList.filter(manga => {
    const filter = manga.genre.includes("school");
    return filter;
  });

  createMangaCard(filterManga);
}
function filterRomance() {
  const filterManga = mangaList.filter(manga => {
    const filter = manga.genre.includes("romance");
    return filter;
  });

  createMangaCard(filterManga);
}
function filterSports() {
  const filterManga = mangaList.filter(manga => {
    const filter = manga.genre.includes("sports");
    return filter;
  });

  createMangaCard(filterManga);
}
function filterPolular() {
  const filterManga = mangaList.filter(manga => manga.sales >= 100);

  createMangaCard(filterManga);
}
function filterSuspence() {
  const filterManga = mangaList.filter(manga => {
    const filter = manga.genre.includes("suspence");
    return filter;
  });

  createMangaCard(filterManga);
}  
function SortTitle() {
  const sortManga = mangaList.sort((a,b) => 
  a.mangaTitle.localeCompare(b.mangaTitle));

  createMangaCard(sortManga);
}

document.addEventListener("DOMContentLoaded", () => {
  SortTitle(mangaList); // 初期データを表示
  document.getElementById("reset").addEventListener("click",()=>{
    createMangaCard(mangaList);
  });
  document.getElementById("recent").addEventListener("click",()=>{
    filterRecent();
  })
  document.getElementById("old").addEventListener("click",()=>{
    filterOld();
  })
  document.getElementById("action").addEventListener("click",()=>{
    filterAction();
  })
  document.getElementById("battle").addEventListener("click",()=>{
    filterBattle();
  })
  document.getElementById("comedy").addEventListener("click",()=>{
    filterComedy();
  })
  document.getElementById("dark").addEventListener("click",()=>{
    filterDark();
  })
  document.getElementById("horror").addEventListener("click",()=>{
    filterHorror();
  })
  document.getElementById("school").addEventListener("click",()=>{
    filterSchool();
  })
  document.getElementById("romance").addEventListener("click",()=>{
    filterRomance();
  })
  document.getElementById("popular").addEventListener("click",()=>{
    filterPolular();
  })
  document.getElementById("sports").addEventListener("click",()=>{
    filterSports();
  })
  document.getElementById("suspence").addEventListener("click",()=>{
    filterSuspence();
  })
});


document.addEventListener('DOMContentLoaded', function() {
  const searchMenu = document.querySelector('.menu-bar');
  const navMenu = document.querySelector('.menu');

  searchMenu.addEventListener('click', function() {
      navMenu.classList.toggle('open');
  });

});


  