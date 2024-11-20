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
      {
        name: "Gold Earrings",
        img: "images/earrings/11.jpg",
        price: 700.0,
      },
      {
        name: "Pearl Earrings",
        img: "images/earrings/12.png",
        price: 1100.0,
      },
      {
        name: "Ruby Earrings",
        img: "images/earrings/13.png",
        price: 1200.0,
      },
      {
          name: "Silver Pendant",
          img: "images/earrings/14.png",
          price: 650.0,
        },
        {
          name: "Fashion Pendant",
          img: "images/earrings/15.png",
          price: 700.0,
        },
        {
          name: "Silver Earrings",
          img: "images/earrings/16.png",
          price: 1500.0,
        },
        {
          name: "Gold Earrings",
          img: "images/earrings/17.png",
          price: 950.0,
        },
        {
          name: "Gold Earrings",
          img: "images/earrings/18.png",
          price: 700.0,
        },
  ];
  
  // Add event listener to load additional items
document.getElementById("earring_btn").addEventListener("click", function (e) {
  e.preventDefault();
  const container = document.getElementById("earringPriceContainer");
  const loaded = parseInt(container.getAttribute("data-loaded"), 10);
  const itemsToLoad = 3;

  const nextItems = additionalItems3.slice(loaded, loaded + itemsToLoad);
  additionalItems3.forEach((item) => {
    const box = document.createElement("div");
    box.className = "box";

    box.innerHTML = `
      <div class="name">
        <h6>${item.name}</h6>
      </div>
      <div class="img-box">
        <img src="${item.img}" alt="${item.name}" class="zoomable-image">
      </div>
      <div class="detail-box">
        <h5>$<span>${item.price.toFixed(2)}</span></h5>
      </div>
    `;

    container.appendChild(box);
  });

  container.setAttribute("data-loaded", loaded + nextItems.length);

  if (loaded + nextItems.length >= additionalItems3.length) {
    e.target.style.display = "none";
  }
});
