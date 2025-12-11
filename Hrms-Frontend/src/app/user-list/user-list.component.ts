import { Component, ChangeDetectionStrategy } from '@angular/core';

interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  users: User[] = [
    { id: 1, name: 'Ashok' },
    { id: 2, name: 'Anil' },
    { id: 3, name: 'Asha' }
  ];

  addUser(name: string) {
    if (!name.trim()) return;

    const newUser: User = {
      id: Date.now(),
      name
    };

 
    this.users = [...this.users, newUser];
  }

  trackByUserId(index: number, user: User) {
    return user.id;
  }
}
