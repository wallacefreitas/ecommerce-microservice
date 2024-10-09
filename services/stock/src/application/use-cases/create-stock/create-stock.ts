import { Stock } from "@application/entities/stock";
import { StockRepository } from "@application/repositories/stock-repository";

type CreateStockRequest = {
  productId: string;
  quantity: number;
};

type CreateProductResponse = {
  stock: any
};

export class CreateStock {
  constructor(
    private stockRepository: StockRepository
  ) {}

  async execute({ productId, quantity }: CreateStockRequest): Promise<CreateProductResponse> {
    const stock = Stock.create({
      productId,
      quantity
    });

    console.log(stock);

    await this.stockRepository.create(stock);

    return {
      stock
    }
  }
}