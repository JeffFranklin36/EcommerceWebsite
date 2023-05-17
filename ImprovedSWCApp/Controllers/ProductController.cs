using ImprovedSWCApp.Enums;
using ImprovedSWCApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace ImprovedSWCApp.Controllers;


[ApiController]
[Route("[controller]")]
public class ProductController : ControllerBase
{
    private readonly ILogger<ProductController> _logger;
    private List<Product> _allProducts;

    public ProductController(ILogger<ProductController> logger)
    {
        _logger = logger;
        _allProducts = new List<Product>();
    }

    [HttpGet]
    public IEnumerable<Product> Get(ProductType productType)
    {
        List<Product> desiredProducts = new List<Product>();
        foreach (var item in _allProducts)
        {
            if (item.ProductType == productType)
            {
                desiredProducts.Add(item); 
            }
        }
        return desiredProducts.ToArray();
    }

    [HttpGet]
    public IEnumerable<Product> Get()
    {
        return _allProducts.ToArray();
    }
}
