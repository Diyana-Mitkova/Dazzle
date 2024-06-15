import { SingleModel } from "../models/singleModel";

export class SingleController{
    private singleModel: SingleModel;

    constructor() {
        this.singleModel = new SingleModel();
    }

    async getSingleJewelry(id:number) {
        return await this.singleModel.getSingleJewelry(id);
    }

}
