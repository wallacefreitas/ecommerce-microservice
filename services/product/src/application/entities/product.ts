import { ZodError, z } from "zod";
import { Entity } from "@core/entities/entity";

export type ProductProps = {
  title: string;
  description: string;
  price: number;
  image?: string;
}

export class Product extends Entity<ProductProps>  {
  static create(props: ProductProps, id?: string) {
    const schema = z.object({
      title: z.string().min(1),
      description: z.string().min(1),
      price: z.number().positive(),
      image: z.string().optional()
    })
    
    try {
      const data = schema.parse(props);
      const product = new Product({
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

  get title() {
    return this.props.title;
  }

  get description() {
    return this.props.description;
  }

  get price() {
    return this.props.price;
  }

  get image() {
    return this.props.image;
  }
}