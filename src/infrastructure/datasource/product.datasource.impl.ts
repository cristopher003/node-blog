import { prisma } from "../../data/postgres";
import { ProductDataSource } from "../../domain/datasources/product.datasource";
import { CreateProductDto } from "../../domain/dtos";
import { UpdateProductDto } from "../../domain/dtos/product/update-product.dto";
import { ProductEntity } from "../../domain/entities/product.entity";

export class ProductDataSourceImp implements ProductDataSource {

   async create(createProductDto: CreateProductDto): Promise<ProductEntity> {
        const product= await prisma.product.create({
            data:{...createProductDto!}
        })

      return ProductEntity.fromJson(product);
    }
    
    async getAll(): Promise<ProductEntity[]> {
        const product= await prisma.product.findMany({});
        return product.map(product=>ProductEntity.fromJson(product));
    }

    async findById(id: number): Promise<ProductEntity> {
        const product= await prisma.product.findFirst({
            where:{id}
        });

        if (!product) throw 'Product with id not found';
        return ProductEntity.fromJson(product);

    }

   async updateById(updateProductDto: UpdateProductDto): Promise<ProductEntity> {
       await this.findById(updateProductDto.id);
       const updateProduct= await prisma.product.update({
        where:{id:updateProductDto.id},
        data:{...updateProductDto.values}
    });  
    return ProductEntity.fromJson(updateProduct);
    }

    async deleteById(id: number): Promise<ProductEntity> {
       const product=await this.findById(id);
       const productDelete= UpdateProductDto.create(ProductEntity.fromJson(product));
  
       const deleted=await prisma.product.update({
        where:{id},
        data:{...productDelete.values,active:false}
       }) ;
      return ProductEntity.fromJson(deleted);
    }



    async findByCategory(category: string): Promise<ProductEntity[]> {
        const products = await prisma.product.findMany({
            where: {
                categories: {
                    has: category // Filtra los products que tengan el tag especificado
                },
                active:true
            }
        });  
        return products.map(product=>ProductEntity.fromJson(product));
    }
   

}