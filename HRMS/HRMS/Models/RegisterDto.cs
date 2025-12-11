namespace HrsmBackend.Models
{
    public class RegisterDto
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string FullName { get; set; }
        public int RoleId { get; set; }       // Dropdown se aayega
        public int DepartmentId { get; set; } // Dropdown se aayega
    }
}

