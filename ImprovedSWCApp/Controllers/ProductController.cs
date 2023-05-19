using ImprovedSWCApp.Models.Enums;
using ImprovedSWCApp.Models;
using Microsoft.AspNetCore.Mvc;
using ImprovedSWCApp.DataAccessLayerInterfaces;

namespace ImprovedSWCApp.Controllers;


[ApiController]
//[Route("[controller]")]
[Route("[controller]/[action]")]
public class ProductController : ControllerBase
{
    private readonly ILogger<ProductController> _logger;
    private readonly IProductService _productService;
    private List<Product> _allProducts;

    public ProductController(ILogger<ProductController> logger, IProductService productService)
    {
        _logger = logger;
        _productService = productService;
        _allProducts = new List<Product>();
    }

    [HttpGet("{productType}"), ActionName("GetByType")]
    public async Task<IEnumerable<Product>> GetByType(ProductType productType)
    {
        return await _productService.GetProductsAsync(productType);
    }

    [HttpGet(""), ActionName("GetAll")]
    public async Task<IEnumerable<Product>> GetAll()
    {
        var products = await _productService.GetProductsAsync();
        return products.ToArray();
    }
}
