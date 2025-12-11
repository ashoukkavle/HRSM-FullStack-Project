using HrsmBackend.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HRMS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MasterController : ControllerBase
    {
        private readonly AppDbContext _context;

        public MasterController(AppDbContext context)
        {
             _context = context;
        }
        [HttpGet("roles")]
        public  async Task<IActionResult> GetRoles()
        {
            var roles=await _context.roles.ToListAsync();
            return Ok(roles);
        }

        [HttpGet("department")]

        public async Task<IActionResult> GetDepartment()
        {
            var depts= await _context.department.ToListAsync();
            return Ok(depts);
        }

    }
}
