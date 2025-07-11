import { CreateProductInputDto } from "src/shared/dtos/product/create-product-input.dto";
import { Product } from "../entities/product/product.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export abstract class ProductRepository {

    abstract create(data: CreateProductInputDto): Promise<Product>
    // abstract findAll(): Promise<Product[]>
    // abstract findById(id: number): Promise<Product|null>
    // abstract findAllByIds(ids: number[]): Promise<Product[]>
    // abstract update(data: Partial<CreateProductInputDto>, id: number): Promise<Product>
    // abstract updateMany(datas: Partial<Product>[]): Promise<Product[]>
}