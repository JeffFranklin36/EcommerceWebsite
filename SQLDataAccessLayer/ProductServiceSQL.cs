using ImprovedSWCApp.DataAccessLayerInterfaces;
using ImprovedSWCApp.Models;
using ImprovedSWCApp.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ImprovedSWCApp.SQLDataAccessLayer;

public class ProductServiceSQL : IProductService
{
    public Task<Product> GetProductAsync(int productID)
    {
        throw new NotImplementedException();
    }

    public Task<List<Product>> GetProductsAsync()
    {
        throw new NotImplementedException();
    }

    public Task<List<Product>> GetProductsAsync(ProductType productType)
    {
        throw new NotImplementedException();
    }
}
