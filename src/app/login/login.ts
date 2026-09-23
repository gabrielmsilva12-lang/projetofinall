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

    if (
      this.email.trim() === '' ||
      this.senha.trim() === ''
    ) {
      this.mensagem = 'Preencha todos os campos.';
      return;
    }

    const usuarioSalvo = localStorage.getItem('usuario');

    if (!usuarioSalvo) {
      this.mensagem =
        'Nenhuma conta encontrada. Crie uma conta primeiro.';
      return;
    }

    const usuario = JSON.parse(usuarioSalvo);

    if (
      this.email === usuario.email &&
      this.senha === usuario.senha
    ) {

      localStorage.setItem(
        'usuarioLogado',
        'true'
      );

      localStorage.setItem(
        'usuarioEmail',
        usuario.email
      );

      localStorage.setItem(
        'usuarioNome',
        usuario.nome
      );

      this.router.navigate(['/english']);

    } else {

      this.mensagem =
        'E-mail ou senha incorretos.';

    }
  }

}