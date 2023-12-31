﻿using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API_BanDienThoai.Models
{
    public class Rating
    {
        public int Id { get; set; }

        [DisplayName("Sao")]
        public double Star { get; set; }

        [DisplayName("Bình Luận")]
        public string Comment { get; set; }

        [DisplayName("Ngày")]
        public DateTime Date { get; set; }

        [DisplayName("Hình Ảnh")]
        public string Image { get; set; }

        [DisplayName("Người Dùng")]
        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public User User { get; set; }

        [DisplayName("Điện Thoại")]
        public int PhoneId { get; set; }
        public Phone Phone { get; set; }
    }
}
