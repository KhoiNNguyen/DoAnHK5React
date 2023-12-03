using Microsoft.AspNetCore.Identity;

namespace API_BanDienThoai.Models
{
    public class User : IdentityUser
    {
        public string FullName { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public bool Status { get; set; }
    }
}
