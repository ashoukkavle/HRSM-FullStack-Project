using HrsmBackend.Models;

namespace HrsmBackend.Interface
{
    public interface IUserRepository
    {
        Task<User?>GetUserByUserName(string userName);
        Task<User?> RegisterUserAsync(User user);

    }
}
