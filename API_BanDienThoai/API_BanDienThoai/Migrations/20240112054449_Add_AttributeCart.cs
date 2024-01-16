using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API_BanDienThoai.Migrations
{
    public partial class Add_AttributeCart : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Color",
                table: "Cart",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<float>(
                name: "Price",
                table: "Cart",
                type: "real",
                nullable: false,
                defaultValue: 0f);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Color",
                table: "Cart");

            migrationBuilder.DropColumn(
                name: "Price",
                table: "Cart");
        }
    }
}
