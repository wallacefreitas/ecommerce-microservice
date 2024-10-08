import { ZodError, z } from "zod";
import { Entity } from "@core/entities/entity";

export type StockProps = {
  productId: string;
  quantity: number;
}

export class Stock extends Entity<StockProps>  {
  static create(props: StockProps, id?: string) {
    const schema = z.object({
      productId: z.string().uuid(),
      quantity: z.number(),
    })
    
    try {
      const data = schema.parse(props);
      const product = new Stock({
        ...data
      }, id)

      return product;

    } catch(err) {
      if (err instanceof ZodError) {
        err.errors.map(error => { 
          throw new Error(error.message) 
        })
      }

      throw new Error("Unknown error")
    }
  }

  get productId() {
    return this.props.productId;
  }

  get quantity() {
    return this.props.quantity;
  }
}