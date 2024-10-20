import { Arg, FieldResolver, Int, Query, Resolver, Root } from 'type-graphql';
import { Product } from '@models/product-model';
import { Inventory } from '@models/inventory-model';
import { fetchInventories } from '@helpers/fetch-inventories';

@Resolver(of => Product)
export class ProductResolver {
  @Query(() => [Product])
  async product(
    @Arg("id", () => String, { nullable: true }) id?: string,
    @Arg('limit', () => Int, { defaultValue: 10 }) limit = 10,
    @Arg('offset', () => Int, { defaultValue: 0 }) offset = 0,
  ): Promise<Product[]> {
    const url = `http://host.docker.internal:8000/product`;
    const path = (
      id 
        ? `/${id}?limit=${limit}&offset=${offset}` 
        : `?limit=${limit}&offset=${offset}`
    );

    try {
      const data = await fetch(`${url + path}`);
      const products = await data.json() as Product[];
      const productIds = [...new Set(products.map((product) => product.id))];
      const inventories = await fetchInventories(productIds, limit, offset);

      return products.map((product) => ({
        ...product,
        inventories: inventories.find((inventory) => inventory.productId === product.id),
      }));
    } catch (error) {
      console.error(error);
    }

    return [];
  }

  @FieldResolver(() => [Inventory])
  async inventories(
    @Root() product: Product,
  ): Promise<Inventory> {
    const data = await fetch(`http://host.docker.internal:8000/inventory/product/${product.id}`);
    const inventory = await data.json() as Inventory;

    return inventory;
  }
}
