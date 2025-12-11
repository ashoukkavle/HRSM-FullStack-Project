using HRMS.Models;
using HrsmBackend.Data;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HrsmBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DashboardController : ControllerBase
    {
        private readonly AppDbContext _context;

        public DashboardController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("stats")]
        public async Task<ActionResult<DashboardStatsDto>> GetStats()
        {
          
            var employeeCount = await _context.users.CountAsync();
            var projectCount = 8;
            var leaveCount = 3;

            return Ok(new DashboardStatsDto
            {
                TotalEmployees = employeeCount,
                ActiveProjects = projectCount,
                PendingLeaves = leaveCount
            });
        }
    }
}