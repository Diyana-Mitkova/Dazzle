import { SingleModel } from "../models/SingleModel";

export class SingleController{
    private singleModel: SingleModel;

    constructor() {
        this.singleModel = new SingleModel();
    }

    async getSingleJewelry(id:number) {
        return await this.singleModel.getSingleJewelry(id);
    }

}
