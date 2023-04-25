interface shoppingItemsData {
  name: string;
  quantity: number;
  price: number;
}
let addItem = (item: shoppingItemsData): shoppingItemsData[] => {
  shoppingItems.push(item);
  console.log("Added new Item");
  console.log(
    "Name:",
    item.name,
    "\nQuantity:",
    item.quantity,
    "\n Price:",
    item.price
  );
  return shoppingItems;
};
let removeProduct = (name: string): shoppingItemsData[] => {
  console.log("Removing product", name, "from shopping cart");
  shoppingItems = shoppingItems.filter(item=> {
    return item.name !== name;
  });
  return shoppingItems;
};
let updateQuantity = (name: string, quantity: number): shoppingItemsData[] => {
  console.log(
    "Updating the quantity of product",
    name,
    "by the quantity",
    quantity
  );
  shoppingItems = shoppingItems.filter(item=>(): number {
    return (item.quantity = item.quantity + quantity);
  });
  return shoppingItems;
};
let getItems = (): void => {
  console.log("List of items are:");
  for (var i = 0; i < shoppingItems.length; i++) {
    console.log(
      "Name:",
      shoppingItems[i].name,
      "\nQuantity:",
      shoppingItems[i].quantity,
      "\n Price:",
      shoppingItems[i].price
    );
  }
  if (shoppingItems.length == 0) {
    console.log("No items found");
  }
};
let clearItems = (): shoppingItemsData[] => {
  shoppingItems = [];
  return shoppingItems;
};
let searchItem = (name: string): shoppingItemsData[] => {
  shoppingItems.filter(item=> {
    if (item.name == name) {
      console.log(
        "Details of your searched item are by name of",
        item.name,
        "\nQuantity:",
        item.quantity,
        "\n Price:",
        item.price
      );
    }
  });
  return shoppingItems;
};
{
  var shoppingItems: shoppingItemsData[] = [
    { name: "A", quantity: 2, price: 250 },
    { name: "B", quantity: 2, price: 2000 },
  ];
  getItems();
  addItem({ name: "C", quantity: 1, price: 100 });
  console.log("After adding product")
  getItems();
  removeProduct("B");
  console.log("After removing product")
  getItems();
  updateQuantity("C", 2);
  console.log("After updating the quantity")
  getItems();
  searchItem("C");
  clearItems();
  console.log("Afte clearing the product list")
  getItems();
}
