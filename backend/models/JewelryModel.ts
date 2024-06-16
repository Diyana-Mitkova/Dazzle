import { DB } from "../core/DB";

export class JewelryModel extends DB {
  async getAllJewelry() {
    const [rows] = await this.conn.query("SELECT * FROM jewelry");
    return rows;
  }

  async deleteJewelryById(id: number): Promise<boolean> {
    const [result]: any = await this.conn.execute(
      "DELETE FROM jewelry WHERE id = ?",
      [id]
    );
    return result.affectedRows > 0;
  }

  async createJewelry({
    name,
    description,
    price,
    image_src,
  }: {
    name: string;
    description: string;
    price: number;
    image_src: string;
  }) {
    const [result]: any = await this.conn.execute(
      "INSERT INTO jewelry (name, description, price, image_src) VALUES (?, ?, ?, ?)",
      [name, description, price, image_src]
    );

    const insertId = result.insertId;
    const [rows] = await this.conn.query("SELECT * FROM jewelry WHERE id = ?", [
      insertId,
    ]);
    return rows[0];
  }

  async updateJewelry(
    id: number,
    name: string,
    description: string,
    price: number,
    image_src: string
  ) {
    const [result]: any = await this.conn.execute(
      "UPDATE jewelry SET name = ?, description = ?, price = ? ,image_src = ? WHERE id = ?",
      [name, description, price, image_src, id]
    );

    if (result.affectedRows > 0) {
      const [rows] = await this.conn.query(
        "SELECT * FROM jewelry WHERE id = ?",
        [id]
      );
      return rows[0];
    }

    return null;
  }
}
