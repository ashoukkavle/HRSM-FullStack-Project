using HrsmBackend.Interface;
using HrsmBackend.Models;
using Microsoft.EntityFrameworkCore;
using HrsmBackend.Data;

namespace HrsmBackend.Repositories
{
    public class UserRepository:IUserRepository
    {
        private readonly AppDbContext _dbContext;

        public UserRepository( AppDbContext dbContext) {
        _dbContext = dbContext;
        }

        public async Task<User?> GetUserByUserName(string userName)
        {
            return await _dbContext.users
                .Include(u => u.Role)
                .Include(u =>u.Department)
                .FirstOrDefaultAsync(u => u.Username==userName);


        }

        public async Task<User?> RegisterUserAsync(User user)
        {
           _dbContext.users.Add(user);
            await _dbContext.SaveChangesAsync();
            return user;
        }
    }
}
