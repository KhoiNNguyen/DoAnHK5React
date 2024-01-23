using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API_BanDienThoai.Migrations
{
    public partial class Init22 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Favorite_Phone_PhoneId",
                table: "Favorite");

            migrationBuilder.RenameColumn(
                name: "PhoneId",
                table: "Favorite",
                newName: "ProductId");

            migrationBuilder.RenameIndex(
                name: "IX_Favorite_PhoneId",
                table: "Favorite",
                newName: "IX_Favorite_ProductId");

            migrationBuilder.AddForeignKey(
                name: "FK_Favorite_Product_ProductId",
                table: "Favorite",
                column: "ProductId",
                principalTable: "Product",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Favorite_Product_ProductId",
                table: "Favorite");

            migrationBuilder.RenameColumn(
                name: "ProductId",
                table: "Favorite",
                newName: "PhoneId");

            migrationBuilder.RenameIndex(
                name: "IX_Favorite_ProductId",
                table: "Favorite",
                newName: "IX_Favorite_PhoneId");

            migrationBuilder.AddForeignKey(
                name: "FK_Favorite_Phone_PhoneId",
                table: "Favorite",
                column: "PhoneId",
                principalTable: "Phone",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
