using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace API_BanDienThoai.Models
{
    public class ProductType
    {
        public int Id { get; set; }

        [DisplayName("Tên")]
        public string Name { get; set; }
    }
}
