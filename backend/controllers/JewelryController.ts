import {JewelryModel} from "../models/JewelryModel";

export class JewelryController{
    private jewelryModel: JewelryModel;

    constructor() {
        this.jewelryModel = new JewelryModel();
    }

    async getAllJewelry() {
        return await this.jewelryModel.getAllJewelry();
    }

    async deleteJewelryById(id: number) {
        return await this.jewelryModel.deleteJewelryById(id);
    }

    async createJewelry({ name, description, price }:{name: string, description: string, price: number}) {
        return await this.jewelryModel.createJewelry({name,description,price});
    }

    async updateJewelry(id: number, name: string, description: string, price: number) {
        return await this.jewelryModel.updateJewelry(id, name,description,price);
    }
}
