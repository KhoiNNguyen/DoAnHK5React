using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;

namespace API_BanDienThoai.Models
{
    public class Favorite
    {
        public int Id { get; set; }

        [DisplayName("Điện Thoại")]
        public int ProductId { get; set; }
        public Product Product { get; set; }

        [DisplayName("Người Dùng")]
        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public User User { get; set; }
    }
}
