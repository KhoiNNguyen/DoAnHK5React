using System.ComponentModel;

namespace API_BanDienThoai.Models
{
    public class Image
    {
        public  int Id { get; set; }

        [DisplayName("Tên Hình Ảnh")]
        public string Name { get; set; }

        [DisplayName("Điện Thoại")]
        public int PhoneId { get; set; }
        public Phone Phone { get; set; }
    }
}
