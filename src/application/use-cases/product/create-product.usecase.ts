import { Injectable } from "@nestjs/common";
import { ProductRepository } from "src/domain/repositories/product.repository";
import { CreateProductInputDto } from "src/shared/dtos/product/create-product-input.dto";
import { ProductOutputDto } from "src/shared/dtos/product/product-output.dto";

@Injectable()
export class CreateProductUseCase {
    constructor(private readonly productRepository: ProductRepository) {}

    async execute(data: CreateProductInputDto): Promise<ProductOutputDto> {

        // example implementation
        return new ProductOutputDto(1, 'name', 1, 1);
        
    }
}