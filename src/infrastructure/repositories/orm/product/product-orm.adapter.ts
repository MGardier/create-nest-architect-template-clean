import { Injectable } from "@nestjs/common";
import { Product } from "src/domain/entities/product/product.entity";
import { ProductRepository } from "src/domain/repositories/product.repository"
import { CreateProductInputDto } from "src/shared/dtos/product/create-product-input.dto";

// Example of domain implementation in infrastructure

@Injectable()
export class ProductOrmAdapter implements ProductRepository {
    constructor(
        //private readonly ormService: OrmService,
    ) {}
    
    // async create(data: CreateProductInputDto): Promise<Product> {
    //     return await this.ormService.product.create({
    //         data
    //     });
    // }

}