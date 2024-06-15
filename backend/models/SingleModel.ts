import { DB } from "../core/DB";

export class SingleModel extends DB {
    async getSingleJewelry(id: number) {
        const [rows] = await this.conn.query("SELECT * FROM jewelry WHERE id = ?", [id]);
        return rows[0]; // Assuming you want to return a single object rather than an array
      }
}
