const additionalItems3 = [
    {
      name: "Silver Earrings",
      img: "images/earrings/4.jpg",
      price: 1500.0,
    },
    {
      name: "Gold Earrings",
      img: "images/earrings/5.jpg",
      price: 950.0,
    },
    {
      name: "Gold Earrings",
      img: "images/earrings/6.jpg",
      price: 700.0,
    },
    {
      name: "Pearl Earrings",
      img: "images/earrings/7.jpg",
      price: 1100.0,
    },
    {
      name: "Ruby Earrings",
      img: "images/earrings/8.jpg",
      price: 1200.0,
    },
    {
        name: "Silver Pendant",
        img: "images/earrings/9.jpg",
        price: 650.0,
      },
      {
        name: "Fashion Pendant",
        img: "images/earrings/10.jpg",
        price: 700.0,
      },
  ];
  
  document.getElementById("earring_btn").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior
    const container = document.getElementById("earringPriceContainer");
    const loaded = parseInt(container.getAttribute("data-loaded"), 10);
    const itemsToLoad = 3; // Number of items to load at a time
  
    // Load next set of items
    const nextItems = additionalItems3.slice(loaded, loaded + itemsToLoad);
    additionalItems3.forEach((item) => {
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
  