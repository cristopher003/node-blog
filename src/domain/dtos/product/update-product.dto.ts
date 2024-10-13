export class UpdateProductDto{
  
  private constructor(
    public readonly   id  :   number,
    public readonly name: String,
    public readonly description: Boolean,
    public readonly price: number,
    public readonly stock: number,
    public readonly categories: String[],
    public readonly active :boolean
  ){
    }

    get values() {
      const returnObj: {[key: string]: any} = {};
  
      returnObj.name=this.name;
      returnObj.description=this.description;
      returnObj.price=this.price;
      returnObj.categories=this.categories;
      returnObj.stock=this.stock;
      returnObj.active=this.active
      return returnObj;
    }
  

 public static create(props:{[key:string]:any}):[string?,UpdateProductDto?]{

    const{id,name,description,price,stock,categories,active=true}=props;

    // implement validaciones
// validar id
    return[undefined,new UpdateProductDto(id,name,description,price,stock,categories,active)];
 }
}