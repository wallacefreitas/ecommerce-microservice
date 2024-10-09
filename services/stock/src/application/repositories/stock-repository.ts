import { Stock } from "../entities/stock";

export interface StockRepository {
  create(stock: Stock): Promise<void>;
}