const renderProductsList = (productsList) => {

  let productsContainer = document.querySelector('#products')

  let proTmpl = (products) => `
  <div class="productContain" id="${products.productId}">
    <img class="productImg" src="assets/products/${products.image}">
    <h2>${products.title}</h2>
    <div class="productInfo">
      <p>
        Id : ${products.productId}
        <br>
        Farver : ${products.colors}
      </p>
      <div class="productEnd">
        <p>
          Pris : ${products.price} DKK
        </p>
        <div class="productBtn">
          <p>
            Køb
          </p>
        </div>
      </div>
    </div>
  </div>
  `

  productsList.map((products) => {
    productsContainer.insertAdjacentHTML('beforeend', proTmpl(products));
  })

}

const getProductsList = () => {

  return fetch('data/products.json')
  .then((respons) => respons.json());
  
}

getProductsList() .then((productsList) => renderProductsList(productsList))