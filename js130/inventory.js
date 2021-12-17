// TODO: If any of the require information provided is not valid, the item creator returns an object with a notValid property with a value of true.

ItemManager = (function() {
  // private
  let itemsInventory = [];

  function getItem(sku) {
    return itemsInventory.filter(item => item[sku] === sku)[0];
  }
  function createSKU(name, category) {

    let letterIdx = 0;
    let firstLetters = name[0];
    while (firstLetters.length < 3) {
      letterIdx += 1;
      if (!name[letterIdx] || name[letterIdx] === ' ') {
        continue;
      }
      firstLetters += name[letterIdx];
    }
    let catCode = category[0] + category[1];
    return firstLetters.toUpperCase() + catCode.toUpperCase();
  }

  function isValidName(name) {
    return name.split("").length >= 5;
  }

  function isValidCategoryName(category) {
    return category.split(" ").length < 2 && isValidName(category);
  }

  return {
    // Manager methods
    items: (function() {
      return itemsInventory;
    })(),

    create(name, category, quantity) {
      let errorObj = { notValid: true };
      if (arguments.length < 3) {
        return false;
      }
      if (!isValidName(name) || !isValidCategoryName(category)) return false;

      let item = {
        sku: createSKU(name, category),
        name: name,
        category: category,
        quantity: quantity,
      };

      itemsInventory.push(item);

    },
    update(sku, {property : value} ) {
      let item = getItem(sku);
      item[property] = value;
      return `Item updated`;
    },

    delete(sku) {
      let idx = itemsInventory.findIndex(getItem(sku));
      itemsInventory.slice(idx, 1);
      return `Item deleted`;
    },

    inStock() {
      console.log(`-- IN STOCK -- `);
      itemsInventory.filter(item => item['quantity'] > 0).forEach(item => {
        console.log(`SKU: ${item['sku']}, Quantity: ${item['quantity']}`);
      });
    },

    itemsInCategory(category) {
      console.log(`-- ITEMS IN THE ${category} CATEGORY --`);
      itemsInventory.filter(item => item['category'] === category).forEach(item => {
        console.log(`SKU: ${item['sku']}, Quantity: ${item['quantity']}`);
      });
    },
  };
})();

ReportManager = (function() {
  //private
  let items;

  // give the ReportManager access to ItemManager's items? for reporting?
  return {

    init(ItemManager) {
      this.items = ItemManager.items,
      return this;
    },

    getItem(sku) {
      return itemsInventory.filter(item => item[sku] === sku)[0];
    },

    createReporter(sku) {
      return function() {
        return {
          itemInfo() {
          // Todo: log all properties of an object as kv pairs
            let item = getItem(sku);
            for (let prop in item) {
              console.log(`${prop}: ${item[prop]}`);
            }
          }
        };
      };
    },

    reportInStock() {
    // TODO: logs the item names of all items that are in stock sep. commas
      items.inStock();
    }
  };
})();

ItemManager.create('basket ball', 'sports', 0);           // valid item
// ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
// ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
// ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

ItemManager.items; // returns list with the 4 valid items

ReportManager.init(ItemManager);
//
// // logs soccer ball,football,kitchen pot
// ReportManager.reportInStock();
//
// ItemManager.update('SOCSP', { quantity: 0 });
// // returns list with the item objects for football and kitchen pot
// ItemManager.inStock();
// // football,kitchen pot
