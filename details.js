async function showProduct(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    // console.log(id);
    // ****** get data from api ************
    const res = await axios.get(`https://dummyjson.com/products/${id}`, { params: { answer: 42 } });
    const productDetails=res.data;
    console.log(productDetails);
    return productDetails;
}
async function displayData(){
    const productDetails= await showProduct();
    console.log(productDetails);
    const result=`
            <h2>Product Title: ${productDetails.title}</h2>
            <h2>Product id: ${productDetails.id}</h2>
            <h2>Product description: ${productDetails.description}</h2>
            <img src="${productDetails.thumbnail}"/>
            
            `;
    document.querySelector(".product").innerHTML=result;
}
displayData();