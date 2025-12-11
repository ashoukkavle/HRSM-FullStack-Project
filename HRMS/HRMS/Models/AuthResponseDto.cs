namespace HrsmBackend.Models
{
    public class AuthResponseDto
    {
        public string Token { get; set; }
        public string FullName { get; set; }
        public string Role { get; set; }
        public string Department { get; set; }
    }
}
