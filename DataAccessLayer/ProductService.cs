using ImprovedSWCApp.DataAccessLayerInterfaces;
using ImprovedSWCApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ImprovedSWCApp.DataAccessLayer;

internal class ProductService : IProductService
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
        return allProducts;
    }

    public async Task<List<Product>> GetProductsAsync()
    {
        List<Product> desiredProducts = await GetTheProductsAsync();
        return desiredProducts;
    }

}
