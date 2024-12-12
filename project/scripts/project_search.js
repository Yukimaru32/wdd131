const mangas = [
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
    imageUrl:"images/assasination_class.jpeg",
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
    sales: 100,
    genre: "action,battle",
    imageUrl:"images/hunterXhunter.jpg",
  },
  {
    mangaTitle: "",
    author: "",
    published: "",
    sales: 100,
    genre: "",
    imageUrl:"images/",
  },
  {
    mangaTitle: "",
    author: "",
    published: "",
    sales: 100,
    genre: "",
    imageUrl:"images/",
  },
  {
    mangaTitle: "",
    author: "",
    published: "",
    sales: 100,
    genre: "",
    imageUrl:"images/",
  },
  {
    mangaTitle: "",
    author: "",
    published: "",
    sales: 100,
    genre: "",
    imageUrl:"images/",
  },
  {
    mangaTitle: "",
    author: "",
    published: "",
    sales: 100,
    genre: "",
    imageUrl:"images/",
  },
  {
    mangaTitle: "",
    author: "",
    published: "",
    sales: 100,
    genre: "",
    imageUrl:"images/",
  },
  {
    mangaTitle: "",
    author: "",
    published: "",
    sales: 100,
    genre: "",
    imageUrl:"images/",
  },
  {
    mangaTitle: "",
    author: "",
    published: "",
    sales: 100,
    genre: "",
    imageUrl:"images/",
  },
  {
    mangaTitle: "",
    author: "",
    published: "",
    sales: 100,
    genre: "",
    imageUrl:"images/",
  },
  {
    mangaTitle: "",
    author: "",
    published: "",
    sales: 100,
    genre: "",
    imageUrl:"images/",
  },
  {
    mangaTitle: "",
    author: "",
    published: "",
    sales: 100,
    genre: "",
    imageUrl:"images/",
  },
  {
    mangaTitle: "",
    author: "",
    published: "",
    sales: 100,
    genre: "",
    imageUrl:"images/",
  },
  {
    mangaTitle: "",
    author: "",
    published: "",
    sales: 100,
    genre: "",
    imageUrl:"images/",
  },
  {
    mangaTitle: "",
    author: "",
    published: "",
    sales: 100,
    genre: "",
    imageUrl:"images/",
  },
  {
    mangaTitle: "",
    author: "",
    published: "",
    sales: 100,
    genre: "",
    imageUrl:"images/",
  },
  {
    mangaTitle: "",
    author: "",
    published: "",
    sales: 100,
    genre: "",
    imageUrl:"images/",
  },
  {
    mangaTitle: "",
    author: "",
    published: "",
    sales: 100,
    genre: "",
    imageUrl:"images/",
  },
  {
    mangaTitle: "",
    author: "",
    published: "",
    sales: 100,
    genre: "",
    imageUrl:"images/",
  },
  {
    mangaTitle: "",
    author: "",
    published: "",
    sales: 100,
    genre: "",
    imageUrl:"images/",
  },
  {
    mangaTitle: "",
    author: "",
    published: "",
    sales: 100,
    genre: "",
    imageUrl:"images/",
  },
  {
    mangaTitle: "",
    author: "",
    published: "",
    sales: 100,
    genre: "",
    imageUrl:"images/",
  },
  {
    mangaTitle: "",
    author: "",
    published: "",
    sales: 100,
    genre: "",
    imageUrl:"images/",
  },
  {
    mangaTitle: "",
    author: "",
    published: "",
    sales: 100,
    genre: "",
    imageUrl:"images/",
  },
  {
    mangaTitle: "",
    author: "",
    published: "",
    sales: 100,
    genre: "",
    imageUrl:"images/",
  },
  {
    mangaTitle: "",
    author: "",
    published: "",
    sales: 100,
    genre: "",
    imageUrl:"images/",
  },
  {
    mangaTitle: "",
    author: "",
    published: "",
    sales: 100,
    genre: "",
    imageUrl:"images/",
  },
  {
    mangaTitle: "",
    author: "",
    published: "",
    sales: 100,
    genre: "",
    imageUrl:"images/",
  },
  {
    mangaTitle: "",
    author: "",
    published: "",
    sales: 100,
    genre: "",
    imageUrl:"images/",
  },
  {
    mangaTitle: "",
    author: "",
    published: "",
    sales: 100,
    genre: "",
    imageUrl:"images/",
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

document.addEventListener("DOMContentLoaded", () => {
  createMangaCard(mangas); // 初期データを表示
  document.getElementById(".reset").addEventListener("click",()=>{
    createMangaCard(mangas);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const searchMenu = document.querySelector('.menu-bar');
  const navMenu = document.querySelector('.menu');

  searchMenu.addEventListener('click', function() {
      navMenu.classList.toggle('open');
  });
});
  