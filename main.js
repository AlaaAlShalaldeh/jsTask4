async function getProduct(){

        const res = await axios.get('https://dummyjson.com/products', { params: { answer: 42 } });
        // res.constructor.name;
        // res.data; 
        const products=res.data.products;
        console.log(res);
        console.log(products);
        return products;
}


     

async function displayData(){
    const products= await getProduct();
    console.log(products);
    const result=products.map(function(product){
        return`
            <h2>${product.title}</h2>
            <img src="${product.thumbnail}"/>
            <a href="details.html?id=${product.id}">Details</a>
        `;
    }).join("");
    document.querySelector(".posts").innerHTML=result;
}
displayData();