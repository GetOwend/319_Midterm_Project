fetch("./data.json")
    .then(response => response.json())
    .then(myCatalog => makeCatalog(myCatalog));

let currentFileName = window.location.pathname.split('/').pop();

function makeCatalog(myCatalog) {
    let sweatshirtCount = 0;
    let hatCount = 0;
    let shoeCount = 0;
    let sunglassesCount = 0;

    for (let i = 0; i < myCatalog.catalog.length; i++) {
        let path = myCatalog.catalog[i].path;
        let alt = myCatalog.catalog[i].alt;
        let type = myCatalog.catalog[i].type;
        let productId = myCatalog.catalog[i].productId;
        let price = myCatalog.catalog[i].price;
        let description = myCatalog.catalog[i].description;
        let updated = myCatalog.catalog[i].updated;
        let catalogItem;
        let elementToAdd = document.createElement("div");
        elementToAdd.classList.add("card");
        elementToAdd.classList.add("shadow-sm");

        if (type.indexOf("sweatshirt") != -1) {
            sweatshirtCount++;
        } else if (type.indexOf("hat") != -1) {
            hatCount++;
        } else if (type.indexOf("shoe") != -1) {
            shoeCount++;
        } else if (type.indexOf("sunglasses") != -1) {
            sunglassesCount++;
        }

        if (currentFileName == "sweatshirt-catalog.html" && sweatshirtCount > 0) {
            catalogItem = document.getElementById("Sweatshirt" + (i + 1));
            elementToAdd.innerHTML = `
            <img src = "${path}" alt = "${alt}">
            <div class="card-body">
            <p class="card-text" id="checkDescription">${description}</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <p class="text-body-secondary"><strong>Product ID: ${productId}</strong></p>
                </div>
                <p class="text-body-secondary"><strong>${price}</strong></p>
            </div>
            </div>`;
            sweatshirtCount--;
            catalogItem.appendChild(elementToAdd);
        } else if (currentFileName == "hat-catalog.html" && hatCount > 0) {
            catalogItem = document.getElementById("Hat" + (i + 1));
            elementToAdd.innerHTML = `
            <img src = "${path}" alt = "${alt}">
            <div class="card-body">
            <p class="card-text">${description}</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <p class="text-body-secondary"><strong>Product ID: ${productId}</strong></p>
                </div>
                <p class="text-body-secondary"><strong>${price}</strong></p>
            </div>
            </div>`;
            hatCount--;
            catalogItem.appendChild(elementToAdd);
        } else if (currentFileName == "shoe-catalog.html" && shoeCount > 0) {
            catalogItem = document.getElementById("Shoe" + (i + 1));
            elementToAdd.innerHTML = `
            <img src = "${path}" alt = "${alt}">
            <div class="card-body">
            <p class="card-text">${description}</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <p class="text-body-secondary"><strong>Product ID: ${productId}</strong></p>
                </div>
                <p class="text-body-secondary"><strong>${price}</strong></p>
            </div>
            </div>`;
            shoeCount--;
            catalogItem.appendChild(elementToAdd);
        } else if (currentFileName == "sunglasses-catalog.html" && sunglassesCount > 0) { 
            //console.log(i);
            catalogItem = document.getElementById("sunglasses" + (i + 1));
            elementToAdd.innerHTML = `
            <img src = "${path}" alt = "${alt}">
            <div class="card-body">
            <p class="card-text">${description}</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <p class="text-body-secondary"><strong>Product ID: ${productId}</strong></p>
                </div>
                <p class="text-body-secondary"><strong>${price}</strong></p>
            </div>
            </div>`;
            sunglassesCount--;
            //console.log(catalogItem);
            //console.log(elementToAdd);
            catalogItem.appendChild(elementToAdd);
        }
    }
}

