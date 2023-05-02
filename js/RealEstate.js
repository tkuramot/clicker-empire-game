import { Item } from "./Item.js";

class RealEstate extends Item{
    constructor(imagePath, maxStock, name, price, additionalDailyWage){
        super(imagePath, maxStock, name, price);
        this.additionalDailyWage = additionalDailyWage;
    }
    getAdditionalDailyWage(){
        return this.additionalDailyWage;
    }
    provideBenefit(player, quantity){
        player.addDailyWage(this.getAdditionalDailyWage() * quantity);
    }
}

export { RealEstate };
