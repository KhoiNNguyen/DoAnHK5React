using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using API_BanDienThoai.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace API_BanDienThoai.Data
{
    public class API_BanDienThoaiContext : IdentityDbContext<User>
    {
        public API_BanDienThoaiContext (DbContextOptions<API_BanDienThoaiContext> options)
            : base(options)
        {
        }

        public DbSet<API_BanDienThoai.Models.Brand> Brand { get; set; } = default!;

        public DbSet<API_BanDienThoai.Models.Cart> Cart { get; set; }

        public DbSet<API_BanDienThoai.Models.Comment> Comment { get; set; }

        public DbSet<API_BanDienThoai.Models.Favorite> Favorite { get; set; }

        public DbSet<API_BanDienThoai.Models.Invoice> Invoice { get; set; }

        public DbSet<API_BanDienThoai.Models.PaymentMethod> PaymentMethod { get; set; }

        public DbSet<API_BanDienThoai.Models.Voucher> Voucher { get; set; }

        public DbSet<API_BanDienThoai.Models.Image> Image { get; set; }

        public DbSet<API_BanDienThoai.Models.InvoiceDetail> InvoiceDetail { get; set; }

        public DbSet<API_BanDienThoai.Models.Product> Product { get; set; }

        public DbSet<API_BanDienThoai.Models.Phone> Phone { get; set; }

        public DbSet<API_BanDienThoai.Models.ProductType> ProductType { get; set; }

        public DbSet<API_BanDienThoai.Models.ProductVoucher> ProductVoucher { get; set; }

        public DbSet<API_BanDienThoai.Models.Rating> Rating { get; set; }

        public DbSet<API_BanDienThoai.Models.User> User { get; set; }
	}
}
