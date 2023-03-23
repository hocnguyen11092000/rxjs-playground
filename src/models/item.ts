export class Items {
  items: Item[] = [];

  addItem(item: Item) {
    if (item) {
      this.items = [...this.items, item];
    }
  }
}

export class Item {
  name: string = '';
  quantity: string = '';
}
