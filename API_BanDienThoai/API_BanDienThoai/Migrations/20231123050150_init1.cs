using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API_BanDienThoai.Migrations
{
    public partial class init1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cart_AspNetUsers_UserId1",
                table: "Cart");

            migrationBuilder.DropForeignKey(
                name: "FK_Comment_AspNetUsers_UserId1",
                table: "Comment");

            migrationBuilder.DropForeignKey(
                name: "FK_Favorite_AspNetUsers_UserId1",
                table: "Favorite");

            migrationBuilder.DropForeignKey(
                name: "FK_Invoice_AspNetUsers_UserId1",
                table: "Invoice");

            migrationBuilder.DropForeignKey(
                name: "FK_Rating_AspNetUsers_UserId1",
                table: "Rating");

            migrationBuilder.DropIndex(
                name: "IX_Rating_UserId1",
                table: "Rating");

            migrationBuilder.DropIndex(
                name: "IX_Invoice_UserId1",
                table: "Invoice");

            migrationBuilder.DropIndex(
                name: "IX_Favorite_UserId1",
                table: "Favorite");

            migrationBuilder.DropIndex(
                name: "IX_Comment_UserId1",
                table: "Comment");

            migrationBuilder.DropIndex(
                name: "IX_Cart_UserId1",
                table: "Cart");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "Rating");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "Invoice");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "Favorite");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "Comment");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "Cart");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Rating",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Invoice",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Favorite",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Comment",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Cart",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.CreateIndex(
                name: "IX_Rating_UserId",
                table: "Rating",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Invoice_UserId",
                table: "Invoice",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Favorite_UserId",
                table: "Favorite",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Comment_UserId",
                table: "Comment",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Cart_UserId",
                table: "Cart",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Cart_AspNetUsers_UserId",
                table: "Cart",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Comment_AspNetUsers_UserId",
                table: "Comment",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Favorite_AspNetUsers_UserId",
                table: "Favorite",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Invoice_AspNetUsers_UserId",
                table: "Invoice",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Rating_AspNetUsers_UserId",
                table: "Rating",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cart_AspNetUsers_UserId",
                table: "Cart");

            migrationBuilder.DropForeignKey(
                name: "FK_Comment_AspNetUsers_UserId",
                table: "Comment");

            migrationBuilder.DropForeignKey(
                name: "FK_Favorite_AspNetUsers_UserId",
                table: "Favorite");

            migrationBuilder.DropForeignKey(
                name: "FK_Invoice_AspNetUsers_UserId",
                table: "Invoice");

            migrationBuilder.DropForeignKey(
                name: "FK_Rating_AspNetUsers_UserId",
                table: "Rating");

            migrationBuilder.DropIndex(
                name: "IX_Rating_UserId",
                table: "Rating");

            migrationBuilder.DropIndex(
                name: "IX_Invoice_UserId",
                table: "Invoice");

            migrationBuilder.DropIndex(
                name: "IX_Favorite_UserId",
                table: "Favorite");

            migrationBuilder.DropIndex(
                name: "IX_Comment_UserId",
                table: "Comment");

            migrationBuilder.DropIndex(
                name: "IX_Cart_UserId",
                table: "Cart");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Rating",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId1",
                table: "Rating",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Invoice",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId1",
                table: "Invoice",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Favorite",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId1",
                table: "Favorite",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Comment",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId1",
                table: "Comment",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Cart",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId1",
                table: "Cart",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Rating_UserId1",
                table: "Rating",
                column: "UserId1");

            migrationBuilder.CreateIndex(
                name: "IX_Invoice_UserId1",
                table: "Invoice",
                column: "UserId1");

            migrationBuilder.CreateIndex(
                name: "IX_Favorite_UserId1",
                table: "Favorite",
                column: "UserId1");

            migrationBuilder.CreateIndex(
                name: "IX_Comment_UserId1",
                table: "Comment",
                column: "UserId1");

            migrationBuilder.CreateIndex(
                name: "IX_Cart_UserId1",
                table: "Cart",
                column: "UserId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Cart_AspNetUsers_UserId1",
                table: "Cart",
                column: "UserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Comment_AspNetUsers_UserId1",
                table: "Comment",
                column: "UserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Favorite_AspNetUsers_UserId1",
                table: "Favorite",
                column: "UserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Invoice_AspNetUsers_UserId1",
                table: "Invoice",
                column: "UserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Rating_AspNetUsers_UserId1",
                table: "Rating",
                column: "UserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }
    }
}
