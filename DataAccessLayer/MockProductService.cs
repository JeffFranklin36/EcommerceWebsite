using ImprovedSWCApp.DataAccessLayerInterfaces;
using ImprovedSWCApp.Models;
using ImprovedSWCApp.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ImprovedSWCApp.DataAccessLayer;

public class MockProductService : IProductService
{
    public async Task<Product> GetProductAsync(int productId)
    {
        List<Product> desiredProducts = await GetTheProductsAsync();
        var product = from x in desiredProducts
                      where x.Id == productId
                      select x;
        return (Product)product;
    }
    private async Task<List<Product>> GetTheProductsAsync()
    {
        List<Product> allProducts = new List<Product>();
        Product newProduct = new Product() { Description = "General admission pass for all three days of Star Wars Celebration Japan", Id = 1, Name = "3-Day Pass", Price = 1000, ProductType = ProductType.Badge, Quantity = 1000 };
        allProducts.Add(newProduct);
        newProduct = new Product() { Description = "General admission pass for Friday of Star Wars Celebration Japan", Id = 2, Name = "Friday Pass", Price = 75, ProductType = ProductType.Badge, Quantity = 1000 };
        allProducts.Add(newProduct);
        newProduct = new Product() { Description = "General admission pass for Saturday of Star Wars Celebration Japan", Id = 3, Name = "Saturday Pass", Price = 75, ProductType = ProductType.Badge, Quantity = 1000 };
        allProducts.Add(newProduct);
        newProduct = new Product() { Description = "General admission pass for Sunday of Star Wars Celebration Japan", Id = 4, Name = "Sunday Pass", Price = 75, ProductType = ProductType.Badge, Quantity = 1000 };
        allProducts.Add(newProduct);
        newProduct = new Product() { Description = "General admission pass for Children for Star Wars Celebration Japan", Id = 5, Name = "Kids 3-Day Pass", Price = 80, ProductType = ProductType.Badge, Quantity = 1000 };
        allProducts.Add(newProduct);
        newProduct = new Product() { Description = "General admission pass for Children for Star Wars Celebration Japan", Id = 6, Name = "Kids Single Day Pass", Price = 50, ProductType = ProductType.Badge, Quantity = 1000 };
        allProducts.Add(newProduct);
        newProduct = new Product() { Description = "Official T-Shirt for Star Wars Celebration Japan", Id = 7, Name = "Celebration T-Shirt", Price = 40, ProductType = ProductType.Apparel, Quantity = 1000 };
        allProducts.Add(newProduct);
        newProduct = new Product() { Description = "Official Crewneck for Star Wars Celebration Japan", Id = 8, Name = "Celebration Crewneck", Price = 50, ProductType = ProductType.Apparel, Quantity = 1000 };
        allProducts.Add(newProduct);
        newProduct = new Product() { Description = "Official Hoodie for Star Wars Celebration Japan", Id = 9, Name = "Celebration Hoodie", Price = 50, ProductType = ProductType.Apparel, Quantity = 1000 };
        allProducts.Add(newProduct);
        newProduct = new Product() { Description = "Official Polo for Star Wars Celebration Japan", Id = 10, Name = "Celebration Polo", Price = 50, ProductType = ProductType.Apparel, Quantity = 1000 };
        allProducts.Add(newProduct);
        newProduct = new Product() { Description = "Official Cap for Star Wars Celebration Japan", Id = 11, Name = "Celebration Baseball Cap", Price = 35, ProductType = ProductType.Apparel, Quantity = 1000 };
        allProducts.Add(newProduct);
        newProduct = new Product() { Description = "Official Scarf for Star Wars Celebration Japan", Id = 12, Name = "Celebration Scarf", Price = 25, ProductType = ProductType.Apparel, Quantity = 1000 };
        allProducts.Add(newProduct);
        return allProducts;
    }

    public async Task<List<Product>> GetProductsAsync()
    {
        List<Product> desiredProducts = await GetTheProductsAsync();
        return desiredProducts;
    }

    public async Task<List<Product>> GetProductsAsync(ProductType productType)
    {
        List<Product> desiredProducts = await GetTheProductsAsync();
        var products = from x in desiredProducts
               where x.ProductType == productType
               select x;
        return products.ToList();
    }
}
