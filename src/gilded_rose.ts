export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class Shop {
  items: Item[];

  constructor(items: Item[] = []) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      switch (item.name) {
        case "Sulfuras, Hand of Ragnaros":
          return;

        case "Conjured Mana Cake":
          item.quality = item.quality - 2;
          break;

        case "Aged Brie":
          if (item.sellIn > 0) {
            item.quality = item.quality + 1;
            break;
          }

          item.quality = item.quality + 2;
          break;

        case "Backstage passes to a TAFKAL80ETC concert":
          item.quality = getBackstageQuality(item.sellIn, item.quality);
          break
          
        default:
          if (item.sellIn <= 0) {
            item.quality = item.quality - 2;
            break;
          }

          item.quality = item.quality - 1;
      }

      if (item.quality >= 50) {
        item.quality = 50;
      }

      if (item.quality <= 0) {
        item.quality = 0;
      }

      item.sellIn = item.sellIn - 1;
    });

    return this.items;
  }
}

const getBackstageQuality = (sellIn: number, quality: number) => {
  if (sellIn > 10) {
    return quality + 1;
  }

  if (sellIn > 5) {
    return quality + 2;
  }

  if (sellIn > 0) {
    return quality + 3;
  }

  return 0;
};
