import { FindAllProductsController } from "@infra/http/controller/find-all-products-controller";
import { PrismaProductRepository } from "@infra/repositories/prisma/prisma-product-repository";
import { FindAllProducts } from "./find-all-products";

const prismaProductRepository = new PrismaProductRepository();
const findAllProducts = new FindAllProducts(prismaProductRepository);
const findAllProductsController = new FindAllProductsController(findAllProducts);

export { findAllProducts, findAllProductsController }