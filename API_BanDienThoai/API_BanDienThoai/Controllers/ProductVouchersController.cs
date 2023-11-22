using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API_BanDienThoai.Data;
using API_BanDienThoai.Models;

namespace API_BanDienThoai.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductVouchersController : ControllerBase
    {
        private readonly API_BanDienThoaiContext _context;

        public ProductVouchersController(API_BanDienThoaiContext context)
        {
            _context = context;
        }

        // GET: api/ProductVouchers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductVoucher>>> GetProductVoucher()
        {
            return await _context.ProductVoucher.ToListAsync();
        }

        // GET: api/ProductVouchers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProductVoucher>> GetProductVoucher(int id)
        {
            var productVoucher = await _context.ProductVoucher.FindAsync(id);

            if (productVoucher == null)
            {
                return NotFound();
            }

            return productVoucher;
        }

        // PUT: api/ProductVouchers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProductVoucher(int id, ProductVoucher productVoucher)
        {
            if (id != productVoucher.Id)
            {
                return BadRequest();
            }

            _context.Entry(productVoucher).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductVoucherExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ProductVouchers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ProductVoucher>> PostProductVoucher(ProductVoucher productVoucher)
        {
            _context.ProductVoucher.Add(productVoucher);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProductVoucher", new { id = productVoucher.Id }, productVoucher);
        }

        // DELETE: api/ProductVouchers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProductVoucher(int id)
        {
            var productVoucher = await _context.ProductVoucher.FindAsync(id);
            if (productVoucher == null)
            {
                return NotFound();
            }

            _context.ProductVoucher.Remove(productVoucher);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProductVoucherExists(int id)
        {
            return _context.ProductVoucher.Any(e => e.Id == id);
        }
    }
}
