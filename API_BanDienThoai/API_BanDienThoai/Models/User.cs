using Microsoft.AspNetCore.Identity;

namespace API_BanDienThoai.Models
{
    public class User:IdentityUser
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public bool Status { get; set; }
    }
}
