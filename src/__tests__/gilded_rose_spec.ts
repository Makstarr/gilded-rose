import { Shop, Item } from '../gilded_rose';

describe("Gilded Rose", () => {

    describe("Generic items", () => {

        it("Lowers the qualty by 1", () => {
            const gildedRose = new Shop([new Item('+5 Dexterity Vest', 10, 20)]); 
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(19);
        });

        it("Lowers the sellIn by 1", () => {
            const gildedRose = new Shop([new Item('+5 Dexterity Vest', 10, 20)]);
            const items = gildedRose.updateQuality();
            expect(items[0].sellIn).toEqual(9);
        });

        it("The Quality of an item is never negative", () => {
            const gildedRose = new Shop([new Item('+5 Dexterity Vest', 10, 0)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(0);
        });

        it("Once the sell by date has passed, Quality degrades twice as fast", () => {
            const gildedRose = new Shop([new Item('+5 Dexterity Vest', 0, 10)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(8);
        });

    })

    describe("Aged Brie", () => {

        it("Quality increases by 1", () => {
            const gildedRose = new Shop([new Item('Aged Brie', 10, 20)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(21);
        });

        it("The Quality of an item is never more than 50", () => {
            const gildedRose = new Shop([new Item('Aged Brie', 10, 50)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(50);
        });

        it("Quality increases by 2 after SellIn < 0", () => {
            const gildedRose = new Shop([new Item('Aged Brie', -1, 20)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(22);
        });

    })

    describe("Sulfuras", () => {

        it("Qualty never changes", () => {
            const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 10, 20)]); 
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(20);
        });

        it("SellIn  never changes", () => {
            const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 10, 20)]);
            const items = gildedRose.updateQuality();
            expect(items[0].sellIn).toEqual(10);
        });

    })


    describe("Backstage passes", () => {

        it("Quality increases by 1 if SellIn > 10", () => {
            const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 20, 20)]); 
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(21);
        });

        it("Quality increases by 2 if 5 < SellIn <= 10", () => {
            const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20)]); 
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(22);
        });

        it("Quality increases by 3 if 0 <= SellIn <= 5", () => {
            const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20)]); 
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(23);
        });

        it("Quality drops to 0 if SellIn < 0", () => {
            const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)]); 
            const items = gildedRose.updateQuality();
            expect(items[0].sellIn).toEqual(-1);
            expect(items[0].quality).toEqual(0);
        });

    })

    describe("Conjured", () => {

        it("Lowers the quality by 2", () => {
            const gildedRose = new Shop([new Item('Conjured Mana Cake', 10, 20)]);
            const items = gildedRose.updateQuality();
            expect(items[0].sellIn).toEqual(9);
            expect(items[0].quality).toEqual(18);
        });

    })

});
