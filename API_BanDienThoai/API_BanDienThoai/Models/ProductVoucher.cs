using System.ComponentModel;

namespace API_BanDienThoai.Models
{
    public class ProductVoucher
    {
        [DisplayName("Sản Phẩm")]
        public int ProductId { get; set; }
        public Product Product { get; set; }

        [DisplayName("Voucher")]
        public int VoucherId { get; set; }
        public Voucher Voucher { get; set; }
    }
}
