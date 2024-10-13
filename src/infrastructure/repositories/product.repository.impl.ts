import { ProductDataSource } from "../../domain/datasources/product.datasource";
import { CreateProductDto } from "../../domain/dtos";
import { UpdateProductDto } from "../../domain/dtos/product/update-product.dto";
import { ProductEntity } from "../../domain/entities/product.entity";
import { ProductRepository } from "../../domain/repositories/product.repository";

export class ProductRepositoryImpl implements ProductRepository{

    constructor(private readonly datasource:ProductDataSource){}
 

    create(createProductDto: CreateProductDto): Promise<ProductEntity> {
        return this.datasource.create(createProductDto);
    }
    getAll(): Promise<ProductEntity[]> {
        return this.datasource.getAll();
    }
    findById(id: number): Promise<ProductEntity> {
        return this.datasource.findById(id);
    }
    updateById(updateProductDto: UpdateProductDto): Promise<ProductEntity> {
        return this.datasource.updateById(updateProductDto);
    }
    deleteById(id: number): Promise<ProductEntity> {
        return this.datasource.deleteById(id);
    }

    findByCategory(category: string): Promise<ProductEntity[]> {
        return this.datasource.findByCategory(category);
    }

}