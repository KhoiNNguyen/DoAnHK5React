using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;

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
        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public User User { get; set; }
        public float Price { get; set; }
        public string Color { get; set; }
    }
}
