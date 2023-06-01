export const item = product => {
  return `
    <li class="product__item item">
      <div class="product__block js_product glass glass-m" id="${product.id}">

      <div class="product__img-box">
      <img src="${product.image}" alt="" class="product__block-img">
      
      </div>
   
      <div class="product__block--inner">
      <div class="product__btn-block">
      <a href="product-page.html?id=${
        product.id
      }" id="btn-1" class="btn product__btn first" style="margin: ${
    product.type == 'ring' || product.type == 'clothing' ? 'auto' : ''
  }">details</a>
      ${
        product.type == 'ring' || product.type == 'clothing'
          ? ''
          : '<button id="btn-2" class="btn product__btn second js_add-to-cart">buy</button>'
      }
     </div>
     
      <p class="product__name js_product-name">${product.name}</p> 
      <span class="product__price">$${product.price.toFixed(2)}</span>
      


      </div>
     </div>
   </li>
    `;
};
