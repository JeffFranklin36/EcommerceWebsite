using ImprovedSWCApp.Models;
using ImprovedSWCApp.Models.Enums;

namespace ImprovedSWCApp.DataAccessLayerInterfaces;

public interface IProductService
{
    Task<List<Product>> GetProductsAsync();
    Task<Product> GetProductAsync(int productID);
    Task<List<Product>> GetProductsAsync(ProductType productType);

}