namespace HrsmBackend.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string FullName { get; set; } = string.Empty;

        // Foreign Keys (Relation banane ke liye)
        public int RoleId { get; set; }
        public Role? Role { get; set; } // Navigation Property

        public int DepartmentId { get; set; }
        public Department? Department { get; set; } // Navigation Property


    }
}
