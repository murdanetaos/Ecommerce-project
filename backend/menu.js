window.onload = function () {
    fetch("menu.json")
      .then((response) => response.json())
      .then((data) => {
        let productsHtml = "";
        for (let i = 0; i < data.length; i++) {

          let item = data[i];

          let product = `
            <div class="div${i+1}">
              <img src="${item.img}" alt="carimg3">
              <h2>${item.name}</h2>
              <p class="price">${item.price}</p>
              <span class="description">${item.description}</span>
              <button class=" shop-item-button" type="button">ADD TO CART</button>
              </div>
          `;

          productsHtml += product;
        }


        let productsContainer = document.getElementsByClassName("parent")[0]

        productsContainer.innerHTML = productsHtml;
      })
      .catch((err) => console.log(err));
  };
  