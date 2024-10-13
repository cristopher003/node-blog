export class CreateProductDto {

  private constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly price: number,
    public readonly stock: number,
    public readonly categories: string[]
  ) {
  }

  public static create(props: { [key: string]: any }): [string?, CreateProductDto?] {

    const { name, description, price, stock, categories } = props;

    // implement validaciones


    return [undefined, new CreateProductDto(name, description, price, stock, categories)];
  }
}