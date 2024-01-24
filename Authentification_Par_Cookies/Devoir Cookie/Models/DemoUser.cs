using Microsoft.AspNetCore.Identity;

namespace Devoir_Cookie.Models
{
    public class DemoUser : IdentityUser
    {
        public string? UserName { get; set; }

        public string? Email { get; set; }
    }
}
