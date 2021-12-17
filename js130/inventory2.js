
class ItemManager {
  static items = [];

  static create(name, category, quantity) {
    if (validateItemName(name) && validateCategory(category) && validateQuantity(quantity)) {
      let newItem = {
        name : name,
        cateogry : category,
        quantity : quantity,
        sku : createSKU(name, category),
      };
      ItemManager.items.push(newItem);
    } else {
      return {'notValid' : true }
    }

    function validateItemName(name) {
      return name.split("").filter(char => char !== " ").length >= 5
    }

    function validateCategory(category) {
      return category.indexOf(" ") === -1 && category.length >= 5;
    }

    function validateQuantity(quantity) {
      return Number.isInteger(quantity) && quantity !== '';
    }
    function createSKU(name, category) {
      let sku = '';

      for (let i = 0; sku.length < 3; i++) {
        if (name[i] == ' ') continue;
        sku += name[i]
      }

      for (let i = 0; sku.length < 5; i++) {
        sku += category[i]
      }

      return sku.toUpperCase();
    }
  }

  static update(sku, updatedItem) {
    let item = ItemManager.getItemBySKU(sku);
    Object.assign(item, updatedItem)
    console.log("Item updated!");
  }

  static delete(sku) {
    let item = ItemManager.getItemBySKU(sku);
    let idx = ItemManager.items.findIndex(invItem => invItem === item)
    ItemManager.items.splice(idx, 1)
  }

  static inStock() {
    let instockArray = ItemManager.items.filter(item => item['quantity'] > 0)
    return instockArray.map(item => item['name']).join(", ");
  }

  static itemsInCategory(category) {
    return ItemManager.items
      .filter(item => item['category'] === category)
      .map(item => item['name'])
      .join(", ");
  }

  static getItemBySKU(sku) {
    return ItemManager.items.filter(item => item['sku'] === sku)[0]
  }
}

ReportManager = {
  init(ItemManager) {
    this.items = ItemManager;
  },

  reportInStock() {
    console.log(this.items.inStock())
  },
  createReporter(sku) {
    let item = this.items.getItemBySKU(sku)
    return {
      itemInfo() {
        for (let prop in item) {
          console.log(`${prop}: ${item[prop]}`);
        }
      }
    };
  }
}

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
ItemManager.items;

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
// ReportManager.reportInStock();

// ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
// console.log(ItemManager.inStock());
// football,kitchen pot
// ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
console.log(ItemManager.itemsInCategory('sports')); // FLAG

// ItemManager.delete('SOCSP');
// console.log(ItemManager.items);
// returns list the remaining 3 valid items (soccer ball is removed from the list)
let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10
