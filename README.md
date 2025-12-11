
![login](https://github.com/user-attachments/assets/ff5921f3-4383-4227-943b-8e421a510a0b)
![employeelist](https://github.com/user-attachments/assets/d1be26e5-b1d5-47e2-a490-ae30853de72c)
![Registration](https://github.com/user-attachments/assets/a55aec45-d12b-464b-aaa5-71ab1eed50b6)
![dashboard](https://github.com/user-attachments/assets/6cc2e15a-4779-4143-b1fd-3a526f74faf0)




HRSM - Employee Management System (Full Stack)

Hi, this is **Ashok Kavle**.
This is a complete Full Stack project I built to demonstrate my skills in **Angular 19** and **.NET Core 8**.

The main goal of this project was to create a secure system where companies can manage their Employees, Departments, and Roles. I have used the latest technologies like **Signals** and **NgRx** to make the app fast and scalable.

---
 Tech Stack (What I used)

* **Frontend:** Angular 19 (Latest version)
* **State Management:** NgRx (Redux Pattern)
* **Backend:** .NET Core 8 Web API
* **Database:** PostgreSQL (with Entity Framework Core)
* **Security:** JWT Token & BCrypt Password Hashing

---
 Key Features & My Learning
1. Secure Login & Registration
I implemented a complete auth system.
* When a user registers, I don't save the password directly. I used **BCrypt** to hash (encrypt) it for safety.
* For login, I used **JWT (JSON Web Token)**. This keeps the user logged in securely.
* I also created an **Auth Interceptor** in Angular, so the token is automatically sent with every API call.
 2. State Management with NgRx
Instead of calling APIs again and again, I used **NgRx** to manage the state.
* It handles the Login flow (Loading spinners, Success/Error messages).
* It keeps the data consistent across the application.
3. Dynamic Dashboard
* The dashboard shows real-time counts of Employees and Projects.
* I used **Angular Signals** here to update the UI efficiently.
* The system allows users to select dynamic Roles and Departments from the database, not hardcoded.
 4. Clean Backend Architecture
I followed the **Repository Pattern** in .NET Core.
* This keeps my Controllers clean.
* All database logic is inside the Repository.
* If I want to change the database in the future, I only need to change the Repository, not the whole project.

---
How to Run This Project
If you want to run this on your local machine, follow these steps:
Step 1: Setup Backend
1.  Open the 'HRMS' folder.
2.  Check `appsettings.json` and update your Database Connection String.
3.  Run these commands:
    bash
    dotnet ef database update
    dotnet run
    (The API will start on 'https://localhost:44346')
 Step 2: Setup Frontend
1.  Open the 'Hrms-Frontend' folder.
2.  Install the packages:
    ```bash
    npm install
    ```
3.  Run the app:
    ```bash
    ng serve --ssr=false
    ```
    (Open `http://localhost:4200` in your browser)

---

## 📸 Screenshots
*(You can see the Login Page and Dashboard in the code files)*

---

### Author
**Ashok Kavle**
(.NET & Angular Developer)
