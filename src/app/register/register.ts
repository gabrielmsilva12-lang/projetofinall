import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterLink],
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

    if (
      this.nome.trim() === '' ||
      this.email.trim() === '' ||
      this.senha.trim() === '' ||
      this.confirmarSenha.trim() === ''
    ) {
      this.mensagem = 'Preencha todos os campos.';
      this.tipoMensagem = 'erro';
      return;
    }

    if (!this.aceitouTermos) {
      this.mensagem =
        'Você precisa aceitar os Termos de Uso e a Política de Privacidade.';
      this.tipoMensagem = 'erro';
      return;
    }

    if (this.senha !== this.confirmarSenha) {
      this.mensagem = 'As senhas não são iguais.';
      this.tipoMensagem = 'erro';
      return;
    }

    const usuarioExistente = localStorage.getItem('usuario');

    if (usuarioExistente) {

      const usuario = JSON.parse(usuarioExistente);

      if (usuario.email === this.email) {
        this.mensagem = 'Este e-mail já está cadastrado.';
        this.tipoMensagem = 'erro';
        return;
      }
    }

    const novoUsuario = {
      nome: this.nome,
      email: this.email,
      senha: this.senha,
      aceitouTermos: true
    };

    localStorage.setItem(
      'usuario',
      JSON.stringify(novoUsuario)
    );

    this.mensagem = 'Cadastro realizado com sucesso!';
    this.tipoMensagem = 'sucesso';

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1000);
  }

}