import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports: [RouterModule]   // *** REQUIRED
})
export class LayoutComponent {

  authService = inject(AuthService);

  logout() {
    this.authService.logout();
  }
}
