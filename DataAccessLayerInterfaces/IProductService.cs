using ImprovedSWCApp.Models;

namespace ImprovedSWCApp.DataAccessLayerInterfaces;

public interface IProductService
{
    Task<List<Product>> GetProductsAsync();
    Task<Product> GetProductAsync(int productID);
}