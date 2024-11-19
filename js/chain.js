const additionalItems4 = [
    {
      name: "Platinum Chain",
      img: "images/chains/4.jpg",
      price: 1500.0,
    },
    {
      name: "Diamond Chain",
      img: "images/chains/5.jpg",
      price: 950.0,
    },
    {
      name: "Gold chains",
      img: "images/chains/6.jpg",
      price: 700.0,
    },
    {
      name: "Pearl Chain",
      img: "images/chains/7.jpg",
      price: 1100.0,
    },
    {
      name: "Cuban Chain",
      img: "images/chains/8.jpg",
      price: 1200.0,
    },
    {
        name: "Silver Chain With Cross",
        img: "images/chains/9.jpg",
        price: 650.0,
      },
      {
        name: "Platinum Chain With Pendent",
        img: "images/chains/10.jpg",
        price: 700.0,
      },
  ];
  
  document.getElementById("chain_btn").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior
    const container = document.getElementById("chainPriceContainer");
    const loaded = parseInt(container.getAttribute("data-loaded"), 10);
    const itemsToLoad = 3; // Number of items to load at a time
  
    // Load next set of items
    const nextItems = additionalItems4.slice(loaded, loaded + itemsToLoad);
    additionalItems4.forEach((item) => {
      const box = document.createElement("div");
      box.className = "box";
  
      box.innerHTML = `
        <div class="name">
          <h6>${item.name}</h6>
        </div>
        <div class="img-box">
          <img src="${item.img}" alt="${item.name}">
        </div>
        <div class="detail-box">
          <h5>$<span>${item.price.toFixed(2)}</span></h5>
        </div>
      `;
  
      container.appendChild(box);
    });
  
    // Update the number of loaded items
    container.setAttribute("data-loaded", loaded + nextItems.length);
  
    // Hide "See More" if all items are loaded
    if (loaded + nextItems.length >= additionalItems.length) {
      e.target.style.display = "none";
    }
  });
  