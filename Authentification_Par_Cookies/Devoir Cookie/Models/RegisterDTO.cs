namespace Devoir_Cookie.Models
{
    public class RegisterDTO
    {
        public int Id { get; set; }

        public string? UserName { get; set; }

        public string? Email { get; set; }

        public string? Password { get; set; }

        public string? PasswordConfirm { get; set; }
    }
}
