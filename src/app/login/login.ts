import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = '';
  senha = '';

  mensagem = '';
  tipoMensagem = '';

  constructor(private router: Router) {}

  entrar(): void {

    if (this.email.trim() === '') {

      this.mensagem = 'Digite seu e-mail.';
      this.tipoMensagem = 'erro';

      return;
    }

    const emailValido =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(this.email.trim())) {

      this.mensagem =
        'Digite um e-mail válido. Exemplo: nome@gmail.com';

      this.tipoMensagem = 'erro';

      return;
    }


    if (this.senha.trim() === '') {

      this.mensagem = 'Digite sua senha.';
      this.tipoMensagem = 'erro';

      return;
    }


    const usuarioSalvo =
      localStorage.getItem('usuario');

    if (!usuarioSalvo) {

      this.mensagem =
        'Nenhuma conta encontrada. Crie uma conta primeiro.';

      this.tipoMensagem = 'erro';

      return;
    }


    const usuario = JSON.parse(usuarioSalvo);

    const emailDigitado =
      this.email.trim().toLowerCase();

    if (
      emailDigitado === usuario.email &&
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


      this.mensagem =
        'Login realizado com sucesso!';

      this.tipoMensagem = 'sucesso';


      setTimeout(() => {

        this.router.navigate(['/english']);

      }, 500);

    } else {

      this.mensagem =
        'E-mail ou senha incorretos.';

      this.tipoMensagem = 'erro';

    }

  }

}