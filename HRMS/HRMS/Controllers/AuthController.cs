
using HrsmBackend.Interface;
using HrsmBackend.Models;
using HrsmBackend.Repositories;
using HrsmBackend.Service;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace HrsmBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        private readonly IConfiguration _configuration;
        private readonly GenerateJwtToken _generateJwtToken;

        public AuthController(IUserRepository userRepository, IConfiguration configuration, GenerateJwtToken generateJwtToken)
        {
            _userRepository = userRepository;
            _configuration = configuration;
            _generateJwtToken = generateJwtToken;
        }

        // ✅ 2. LOGIN (Hash Verify karein)
        [HttpPost("login")]
        public async Task<ActionResult<AuthResponseDto>> Login(LoginDto request)
        {
            var user = await _userRepository.GetUserByUserName(request.Username);

            // User nahi mila
            if (user == null)
            {
                return Unauthorized("Invalid Username or Password");
            }

            // 👇👇 PASSWORD VERIFICATION LOGIC 👇👇
            // Hum request.Password ko Hash karke DB ke Hash se compare karte hain
            // Note: Use BCrypt.Verify, direct '==' kaam nahi karega
            if (!BCrypt.Net.BCrypt.Verify(request.Password, user.Password))
            {
                return Unauthorized("Invalid Username or Password");
            }

            // Token Generation (Jo abhi aapne fix kiya tha)
            var token = _generateJwtToken.GenerateToken(user);

            return Ok(new AuthResponseDto
            {
                Token = token,
                FullName = user.FullName,
                Role = user.Role?.RoleName ?? "Unknown",
                Department = user.Department?.DepartmentName ?? "Unknown"
            });
        }
        
        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterDto request)
        {
            string passwordHash = BCrypt.Net.BCrypt.HashPassword(request.Password);
            // Map DTO to Entity
            var newUser = new User
            {
                Username = request.Username,
                Password = passwordHash,
                FullName = request.FullName,
                RoleId = request.RoleId,
                DepartmentId = request.DepartmentId
            };

            await _userRepository.RegisterUserAsync(newUser);
            return Ok("User Registered Successfully");
        }
    }
}

    

