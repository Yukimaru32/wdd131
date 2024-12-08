const productList =[
    {
        name:"Audio Recorder"
    },
    {
        name:"Macbook Pro"
    },
    {
        name:"Beats Headphone"
    },
    {
        name:"iPhone16"
    },
    {
        name:"Leather Gloves"
    },
    {
        name:"Nike Air Jordan"
    },
    {
        name:"Nintendo Swich"
    },
    {
        name:"Book Of Mormon"
    },
    {
        name:"Portable Charger"
    },
    {
        name:"Photo Album"
    },

]

function createProductlist(products){
    products.forEach(product =>{
        let card =document.createElement("option");
        

        card.innerHTML=`${product.name}`;
        card.setAttribute("value",product.name);

        document.querySelector("#product-select").appendChild(card);
    })
}

createProductlist(productList);