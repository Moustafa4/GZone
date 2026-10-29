import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
interface LoginCredentials {
  username: string;
  password: string;
  rememberMe: boolean;
}

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  showPassword = false;
  mobileMenuOpen = false;
  isLoading = false;
  errorMessage = '';

  credentials: LoginCredentials = {
    username: '',
    password: '',
    rememberMe: false,
  };

  onLogin(): void {
    this.errorMessage = '';

    if (!this.credentials.username.trim() || !this.credentials.password) {
      this.errorMessage = 'يرجى إدخال اسم المستخدم وكلمة المرور';
      return;
    }

    // اربط هنا خدمة تسجيل الدخول الموجودة في مشروعك.
    // لا تعتبر تسجيل الدخول ناجحًا قبل استجابة الـ API.
    console.log('Login form submitted', {
      username: this.credentials.username,
      rememberMe: this.credentials.rememberMe,
    });
  }

  loginWithSocial(provider: string): void {
    // اربط كل مزود بمسار OAuth الفعلي الخاص به.
    console.log(`Social login requested: ${provider}`);
  }
}
