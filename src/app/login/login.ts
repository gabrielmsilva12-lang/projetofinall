import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = '';
  senha = '';

  mensagem = '';

  constructor(private router: Router) {}

  entrar(): void {

    if (this.email.trim() === '' || this.senha.trim() === '') {
      this.mensagem = 'Preencha todos os campos.';
      return;
    }

    localStorage.setItem('usuarioLogado', 'true');
    localStorage.setItem('usuarioEmail', this.email);

    this.router.navigate(['/english']);
  }

}