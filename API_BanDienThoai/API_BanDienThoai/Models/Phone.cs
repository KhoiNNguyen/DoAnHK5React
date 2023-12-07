using System.ComponentModel;

namespace API_BanDienThoai.Models
{
    public class Phone
    {
        public int Id { get; set; }

        [DisplayName("Tên")]
        public string Name { get; set; }

        [DisplayName("Màn Hình")]
        public string Screen { get; set; }

        [DisplayName("CPU")]
        public string CPU { get; set; }

        [DisplayName("Pin")]
        public string Pin { get; set; }

        [DisplayName("Sim")]
        public string SIM { get; set; }

        [DisplayName("Cam Trước")]
        public string CamTruoc { get; set; }

        [DisplayName("Cam Sau")]
        public string CamSau { get; set; }

        [DisplayName("Hệ Điều Hành")]
        public string HeDieuHanh { get; set; }

        [DisplayName("Ghi Chú")]
        public string Description { get; set; }

        [DisplayName("Trung Bình Đánh Giá")]
        public double AverageRating { get; set; }

        [DisplayName("Hình Ảnh")]
        public string Image { get; set; }

        [DisplayName("Trạng Thái")]
        public bool Status { get; set; }

        [DisplayName("Nhãn Hiệu")]
        public int BrandId { get; set; }
        public Brand Brand { get; set; }

        [DisplayName("Loại Sản Phẩm")]
        public int ProductTypeId { get; set; }
        public ProductType ProductType { get; set; }

    }
}
