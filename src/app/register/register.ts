import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  nome = '';
  email = '';
  senha = '';
  confirmarSenha = '';

  aceitouTermos = false;

  mensagem = '';
  tipoMensagem = '';

  constructor(private router: Router) {}

  cadastrar(): void {

    // =========================
    // 1. NOME
    // =========================

    if (this.nome.trim() === '') {

      this.mensagem = 'Digite seu nome.';
      this.tipoMensagem = 'erro';

      return;
    }

    const nomeValido = /^[A-Za-zÀ-ÿ\s]+$/;

    if (!nomeValido.test(this.nome.trim())) {

      this.mensagem =
        'O nome deve conter apenas letras e espaços.';

      this.tipoMensagem = 'erro';

      return;
    }


    // =========================
    // 2. E-MAIL
    // =========================

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


    // =========================
    // 3. SENHA
    // =========================

    if (this.senha.trim() === '') {

      this.mensagem = 'Digite uma senha.';
      this.tipoMensagem = 'erro';

      return;
    }

    if (this.senha.length < 8) {

      this.mensagem =
        'A senha deve ter pelo menos 8 caracteres.';

      this.tipoMensagem = 'erro';

      return;
    }


    // =========================
    // 4. CONFIRMAR SENHA
    // =========================

    if (this.confirmarSenha.trim() === '') {

      this.mensagem =
        'Confirme sua senha.';

      this.tipoMensagem = 'erro';

      return;
    }

    if (this.senha !== this.confirmarSenha) {

      this.mensagem =
        'As senhas não coincidem.';

      this.tipoMensagem = 'erro';

      return;
    }


    // =========================
    // 5. TERMOS
    // =========================

    if (!this.aceitouTermos) {

      this.mensagem =
        'Você precisa aceitar os Termos de Uso e a Política de Privacidade.';

      this.tipoMensagem = 'erro';

      return;
    }


    // =========================
    // 6. VERIFICAR E-MAIL EXISTENTE
    // =========================

    const usuarioExistente =
      localStorage.getItem('usuario');

    if (usuarioExistente) {

      const usuario = JSON.parse(usuarioExistente);

      if (
        usuario.email.toLowerCase() ===
        this.email.trim().toLowerCase()
      ) {

        this.mensagem =
          'Este e-mail já está cadastrado.';

        this.tipoMensagem = 'erro';

        return;
      }
    }


    // =========================
    // 7. CRIAR USUÁRIO
    // =========================

    const novoUsuario = {

      nome: this.nome.trim(),

      email: this.email.trim().toLowerCase(),

      senha: this.senha,

      aceitouTermos: true

    };


    localStorage.setItem(
      'usuario',
      JSON.stringify(novoUsuario)
    );


    // =========================
    // 8. MENSAGEM DE SUCESSO
    // =========================

    this.mensagem =
      'Cadastro realizado com sucesso!';

    this.tipoMensagem = 'sucesso';


    // =========================
    // 9. IR PARA LOGIN
    // =========================

    setTimeout(() => {

      this.router.navigate(['/login']);

    }, 1000);

  }

}