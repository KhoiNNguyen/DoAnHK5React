using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;

namespace API_BanDienThoai.Models
{
    public class Invoice
    {
        public int Id { get; set; }

        [DisplayName("Ngày Lập")]
        public DateTime InvoiceDate { get; set; }

        [DisplayName("Địa Chỉ Giao Hàng")]
        public string AddressShip { get; set; }

        [DisplayName("Tổng Tiền")]
        public double Total { get; set; }

        [DisplayName("Tổng Tiền Giảm")]
        public double DiscoundTotal { get; set; }

        [DisplayName("Trạng Thái")]
        public bool Status { get; set; }

        [DisplayName("Người Dùng")]
        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public User User { get; set; }

        [DisplayName("Hình Thức Thanh Toán")]
        public int PaymentMethodId { get; set; }
        public PaymentMethod PaymentMethod { get; set; }
    }
}
