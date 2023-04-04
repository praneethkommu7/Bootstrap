let products = [
  {
    id: "1",
    title: "Levi's Men's 511 Slim Fit Jeans",
    price: "1500",
    img: "https://m.media-amazon.com/images/I/81b-2ZVYpjL._UL1500_.jpg",
  },
  {
    id: "2",
    title: "Watch",
    price: "8300",
    img: "https://m.media-amazon.com/images/I/41abhjzgbHL.jpg",
  },
  {
    id: "3",
    title: "Men's Regular Polo Shirt",
    price: "700",
    img: "https://m.media-amazon.com/images/I/817EZt85TUL._UL1500_.jpg",
  },
  {
    id: "4",
    title: "USB Port",
    price: "1700",
    img: "https://m.media-amazon.com/images/I/51hY3+gronL._AC_AA180_.jpg",
  },
  {
    id: "5",
    title: "Power Bank Mi",
    price: "2149",
    img: "https://m.media-amazon.com/images/I/71lVwl3q-kL._AC_AA180_.jpg",
  },
  {
    id: "6",
    title: "Philips Multi Grooming Kit",
    price: "3730",
    img: "https://m.media-amazon.com/images/I/51zVbmI+-hL._AC_AA180_.jpg",
  },
  {
    id: "7",
    title: "SHOE SHIELD",
    price: "300",
    img: "https://m.media-amazon.com/images/I/811kFulPrnL._AC_AA180_.jpg",
  },
  {
    id: "8",
    title: "Wood Specs Stand",
    price: "170",
    img: "https://m.media-amazon.com/images/I/61mBm4Yio9L._AC_AA180_.jpg",
  },
  {
    id: "9",
    title: "USB Universal Travel Adapter",
    price: "600",
    img: "https://m.media-amazon.com/images/I/91evrvdxYlL._AC_AA180_.jpg",
  },
];
let pageNo = 1;
let prodEle = document.querySelector(".products");
let previous = document.querySelector(".previous");
let next = document.querySelector(".next");
let pages = document.querySelectorAll(".pages");
populateTable();
for (page of pages) {
  page.onclick = function () {
    for (page of pages) {
      page.classList.remove("active");
    }
    this.classList.add("active");
    pageNo = +this.innerText;
    populateTable();
    if (pageNo == 3) next.classList.add("disabled");
    else next.classList.remove("disabled");

    if (pageNo == 1) previous.classList.add("disabled");
    else previous.classList.remove("disabled");
  };
}
next.onclick = function () {
  if (pageNo < 3) {
    pageNo += 1;
    populateTable();
    updateActivePage();

    if (pageNo == 3) {
      this.classList.add("disabled");
    }
    if (pageNo > 1) {
      previous.classList.remove("disabled");
    }
  }
};
previous.onclick = function () {
  if (pageNo > 1) {
    pageNo -= 1;
    populateTable();
    updateActivePage();
  }
  if (pageNo == 1) {
    this.classList.add("disabled");
  }
  if (pageNo < 3) {
    previous.classList.remove("disabled");
  }
};

function populateTable() {
  let table = `<thead>
    <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Price(RS)</th>
        <th>Img</th>
    </tr>
    </thead>
    <tbody>
        `;
  let row;
  prodEle.innerHTML = "";
  let start = (pageNo - 1) * 3;
  let end = start + 3;
  for (i = start; i < end; i++) {
    row = `<tr>
                <td>${products[i].id}</td>
                <td>${products[i].title}</td>
                <td>${products[i].price}</td>
                <td><img src="${products[i].img}"></td>
            </tr>`;
    table = table + row;
  }
  table = table + "</tbody>";
  prodEle.innerHTML = table;
}

function updateActivePage() {
  for (page of pages) {
    if (page.innerText == pageNo) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }
  }
}
