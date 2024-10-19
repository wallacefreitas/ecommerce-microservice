import { FindUniqueProductController } from "@infra/http/controller/find-unique-product-controller";
import { PrismaProductRepository } from "@infra/repositories/prisma/prisma-product-repository";
import { FindUniqueProduct } from "./find-unique-product";

const prismaProductRepository = new PrismaProductRepository();
const findUniqueProduct = new FindUniqueProduct(prismaProductRepository);
const findUniqueProductController = new FindUniqueProductController(findUniqueProduct);

export { findUniqueProduct, findUniqueProductController }