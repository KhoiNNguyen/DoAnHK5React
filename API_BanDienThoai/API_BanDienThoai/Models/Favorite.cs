using System.ComponentModel;

namespace API_BanDienThoai.Models
{
    public class Favorite
    {
        public int Id { get; set; }

        [DisplayName("Điện Thoại")]
        public int PhoneId { get; set; }
        public Phone Phone { get; set; }

        [DisplayName("Người Dùng")]
        public int UserId { get; set; }
        public User User { get; set; }
    }
}
