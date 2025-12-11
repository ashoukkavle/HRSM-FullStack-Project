export interface LoginRequest {
    username: string;
    password: string;
    
}
export interface RegisterRequest {
  fullName: string;
  username: string;
  password: string;
  roleId: number;
  departmentId: number;
}

export interface AuthResponse {
token: string;
fullName: string;
role: string;
department: string;
}
export interface Role {
  id: number;
  roleName: string;
}

export interface Department {
  id: number;
  departmentName: string;
}