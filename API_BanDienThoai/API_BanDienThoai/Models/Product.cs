using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace API_BanDienThoai.Models
{
    public class Product
    {
        public int Id { get; set; }

        [DisplayName("Rom")]
        public string Rom { get; set; }

        [DisplayName("Số Lượng")]
        public int Quantity { get; set; }

        [DisplayName("Giá")]
        public int Price { get; set; }

        [DisplayName("Màu")]
        public string Color { get; set; }

        [DisplayName("Trạng Thái")]
        public bool Status { get; set; }

        [DisplayName("Điện Thoại")]
        public int PhoneId { get; set; }
        public Phone Phone { get; set; }
    }
}
