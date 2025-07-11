import { Body, Controller, Post } from "@nestjs/common";
import { CreateProductUseCase } from "src/application/use-cases/product/create-product.usecase";
import { CreateProductInputDto } from "src/shared/dtos/product/create-product-input.dto";
import { ProductOutputDto } from "src/shared/dtos/product/product-output.dto";

@Controller('product')
export class ProductController {
    constructor(private readonly createProductUC: CreateProductUseCase) {}

    // example endpoint
    @Post()
    async create(@Body() data: CreateProductInputDto): Promise<ProductOutputDto> {
        return await this.createProductUC.execute(data);
    }
}