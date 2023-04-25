interface shoppingItemsData {
  name: string;
  quantity: number;
  price: number;
}
interface shoppingCart{
    addItem(item: shoppingItemsData): void;
    removeProduct(name: string): void;
    updateQuantity(name:string,quantity:number):number;
    getItems():void;
    clearItems():void;
    searchItem(name:string):void;

}
function addItem(item: shoppingItemsData): shoppingItemsData[] {
  shoppingItems.push(item);
  console.log("Added new Item");
  return shoppingItems
}
function removeProduct(name: string): void {
  shoppingItems = shoppingItems.filter(function (item) {
    return item.name !== name;
    console.log("Succesfully removed product!");
  });
}
function updateQuantity(name:string,quantity:number):void{
  shoppingItems = shoppingItems.filter(function (item):number {
    return (item.quantity = item.quantity + quantity);
    console.log("Successfully updated the quantity!");
    console.log("name: ",item.name,"\n Quantity: ",item.quantity)
  });
}
function getItems():void {
  for (var i = 0; i < shoppingItems.length; i++) {
    console.log("List of items are:")
    console.log(shoppingItems[i].name);
  }
}
function clearItems():void{
    shoppingItems=[]
}
function searchItem(name:string):void{
    shoppingItems.filter(function(item){
        if(item.name==name){
            console.log("Details of your searched item are:\nName:",item.name,"\nQuantity:",item.quantity,"\n Price:",item.price);
        }
    });
}
var shoppingItems: shoppingItemsData[] = [
    { name: "A", quantity: 2, price: 250 },
    { name: "B", quantity: 2, price: 2000 },
  ];
  addItem({name:"C",quantity:1,price:100})
  getItems()
  removeProduct("B");
  updateQuantity("C",2);
  getItems();
  searchItem("C");
  clearItems();
