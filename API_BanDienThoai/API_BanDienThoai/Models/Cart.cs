using System.ComponentModel;

namespace API_BanDienThoai.Models
{
    public class Cart
    {
        public int Id { get; set; }
        [DisplayName("Sản Phẩm")]
        public int ProductId { get; set; }
        public Product Product { get; set; }

        [DisplayName("Số Lượng")]
        public int Quantity { get; set; }

        [DisplayName("Người Dùng")]
        public int UserId { get; set; }
        public User User { get; set; }
    }
}
