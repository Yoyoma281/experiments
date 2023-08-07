class Product {
  static lastId: number = 0;
  
  id: number;
  Name: string;
  DatePublished: string;
  ExtraDetails: string;
  Price: number;
  image: string;
  phoneNumber: string; 
  city: string; 

  constructor(name = "", extraDetails = "", datePublished = "", image = "", price = 0, phoneNumber = "", city = "" ) {
    this.id = ++Product.lastId;
    this.Name = name;
    this.DatePublished = datePublished;
    this.image = image;
    this.ExtraDetails = extraDetails;
    this.Price = price;
    this.phoneNumber = phoneNumber;
    this.city = city;
  }
}

export default Product;
