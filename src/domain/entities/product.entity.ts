
export class ProductEntity{
constructor(
 public id   :        string ,
public name   :      string,
public  description :  Boolean,
 public price      :     number,
  public stock      :  number   ,
  public categories  : string[] ,
  public active : boolean
){  }

public static fromJson(object:{[key:string]:any}):ProductEntity{
    const {id,name,description,price,stock,categories,active}=object;
    // validaciones 
   return new ProductEntity(id,name,description,price,stock,categories,active);
}
}