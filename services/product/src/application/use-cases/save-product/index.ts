import { SaveProductController } from "@infra/http/controller/save-product-controller";
import { PrismaProductRepository } from "@infra/repositories/prisma/prisma-product-repository";
import { SaveProduct } from "./save-product";

const prismaProductRepository = new PrismaProductRepository();
const saveProduct = new SaveProduct(prismaProductRepository);
const saveProductController = new SaveProductController(saveProduct);

export { saveProduct, saveProductController }