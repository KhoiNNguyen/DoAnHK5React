using System.ComponentModel;

namespace API_BanDienThoai.Models
{
    public class Brand
    {
        public int Id { get; set; }

        [DisplayName("Thương Hiệu")]
        public string Name { get; set; }

        [DisplayName("Hình Ảnh")]
        public string Image { get; set; }

        [DisplayName("Trạng Thái")]
        public bool Status { get; set; }
    }
}
