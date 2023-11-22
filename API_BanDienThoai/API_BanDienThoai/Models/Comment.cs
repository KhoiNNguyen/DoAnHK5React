using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;

namespace API_BanDienThoai.Models
{
    public class Comment
    {
        public int Id { get; set; }

        [DisplayName("Nội Dung")]
        public string Content { get; set; }

        [DisplayName("Ngày")]
        public DateTime Date { get; set; }

        [DisplayName("Trạng Thái")]
        public bool Status { get; set; }

        [DisplayName("Điện Thoại")]
        public int PhoneId { get; set; }
        public Phone Phone { get; set; }

        [DisplayName("Bình Luận")]
        public int? ParentCommentId { get; set; }
        [ForeignKey("ParentCommentId")]
        public Comment ParentConmment { get; set; }

        [DisplayName("Người Dùng")]
        public int UserId { get; set; }
        public User User { get; set; }
    }
}
