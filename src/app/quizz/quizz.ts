import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-quizz',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './quizz.html',
  styleUrl: './quizz.css'
})
export class Quizz {

  perguntaAtual = 0;

  respostasSelecionadas: number[] = [];

  quizFinalizado = false;

  perguntas = [

    {
      pergunta: 'Como dizer "Onde fica o banheiro?" em inglês?',
      opcoes: [
        'Where is the hotel?',
        'Where is the bathroom?',
        'Where is the restaurant?',
        'Where is the airport?'
      ],
      respostaCorreta: 1
    },

    {
      pergunta: 'O que significa "I have a reservation."?',
      opcoes: [
        'Eu preciso de um quarto.',
        'Eu quero fazer uma reserva.',
        'Eu tenho uma reserva.',
        'Eu estou no hotel.'
      ],
      respostaCorreta: 2
    },

    {
      pergunta: 'Como dizer "Eu gostaria de um café, por favor."?',
      opcoes: [
        'I need a hotel, please.',
        'I would like a coffee, please.',
        'I have a coffee, please.',
        'I want the menu, please.'
      ],
      respostaCorreta: 1
    },

    {
      pergunta: 'O que significa "Could you repeat that, please?"?',
      opcoes: [
        'Você poderia repetir, por favor?',
        'Você poderia me ajudar?',
        'Onde fica o banheiro?',
        'Você fala inglês?'
      ],
      respostaCorreta: 0
    },

    {
      pergunta: 'Como dizer "Estou aprendendo inglês."?',
      opcoes: [
        'I speak English.',
        'I like English.',
        'I am learning English.',
        'I know English.'
      ],
      respostaCorreta: 2
    },

    {
      pergunta: 'O que significa "Can I pay by card?"?',
      opcoes: [
        'Posso pagar com cartão?',
        'Posso pedir a conta?',
        'Posso pedir água?',
        'Posso fazer uma reserva?'
      ],
      respostaCorreta: 0
    },

    {
      pergunta: 'Como dizer "Eu sou do Brasil."?',
      opcoes: [
        'I live in Brazil.',
        'I am from Brazil.',
        'I go to Brazil.',
        'I like Brazil.'
      ],
      respostaCorreta: 1
    },

    {
      pergunta: 'O que significa "What time is check-out?"?',
      opcoes: [
        'Onde fica o hotel?',
        'O café da manhã está incluído?',
        'Que horas é o check-out?',
        'Onde fica meu quarto?'
      ],
      respostaCorreta: 2
    }

  ];

  selecionarResposta(index: number): void {

    if (this.quizFinalizado) {
      return;
    }

    this.respostasSelecionadas[this.perguntaAtual] = index;

  }

  proximaPergunta(): void {

    if (
      this.respostasSelecionadas[this.perguntaAtual] === undefined
    ) {
      return;
    }

    if (
      this.perguntaAtual < this.perguntas.length - 1
    ) {

      this.perguntaAtual++;

    } else {

      this.finalizarQuiz();

    }

  }

  perguntaAnterior(): void {

    if (this.perguntaAtual > 0) {
      this.perguntaAtual--;
    }

  }

  finalizarQuiz(): void {
    this.quizFinalizado = true;
  }

  reiniciarQuiz(): void {

    this.perguntaAtual = 0;
    this.respostasSelecionadas = [];
    this.quizFinalizado = false;

  }

  get quantidadeAcertos(): number {

    let acertos = 0;

    for (
      let i = 0;
      i < this.perguntas.length;
      i++
    ) {

      if (
        this.respostasSelecionadas[i] ===
        this.perguntas[i].respostaCorreta
      ) {

        acertos++;

      }

    }

    return acertos;

  }

  get porcentagem(): number {

    return Math.round(
      (this.quantidadeAcertos /
        this.perguntas.length) * 100
    );

  }

}