import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tutorials',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './tutorials.html',
  styleUrl: './tutorials.css'
})
export class Tutorials {

  tutorialSelecionado = 0;

  tutoriais = [

    {
      icone: '🤖',
      titulo: 'Inteligência Artificial',
      descricao: 'Aprenda a utilizar ferramentas de inteligência artificial para estudar, conversar e realizar tarefas.',
      passos: [
        'Abra uma ferramenta de inteligência artificial.',
        'Escreva ou fale o que você precisa.',
        'Faça perguntas usando uma linguagem simples e direta.',
        'Peça para a inteligência artificial explicar algo de outra maneira quando não entender.',
        'Use a IA para praticar conversação em inglês.',
        'Sempre confira informações importantes antes de tomar decisões.'
      ],
      exemplo: 'Você pode dizer: "Let’s practice English. Speak slowly and correct my mistakes, please."'
    },

    {
      icone: '▶️',
      titulo: 'Aprender com vídeos',
      descricao: 'Use o YouTube para assistir conteúdos em inglês e aprender novas palavras.',
      passos: [
        'Abra o YouTube.',
        'Pesquise vídeos em inglês sobre assuntos que você gosta.',
        'Ative as legendas em inglês quando estiverem disponíveis.',
        'Pause o vídeo quando encontrar uma palavra desconhecida.',
        'Anote palavras e expressões novas.',
        'Assista novamente ao vídeo para perceber sua evolução.'
      ],
      exemplo: 'Experimente pesquisar: "English conversation for beginners".'
    },

    {
      icone: '📧',
      titulo: 'E-mail',
      descricao: 'Aprenda os conceitos básicos para enviar e receber mensagens por e-mail.',
      passos: [
        'Abra seu aplicativo ou site de e-mail.',
        'Escolha a opção para criar uma nova mensagem.',
        'Digite o endereço da pessoa que receberá a mensagem.',
        'Escreva um assunto que explique o conteúdo do e-mail.',
        'Digite sua mensagem.',
        'Confira os dados antes de enviar.'
      ],
      exemplo: 'Sempre confira o endereço do destinatário antes de enviar uma mensagem.'
    },

    {
      icone: '🔎',
      titulo: 'Pesquisando na internet',
      descricao: 'Aprenda a encontrar informações na internet de maneira mais eficiente.',
      passos: [
        'Abra seu navegador.',
        'Digite palavras relacionadas ao que você procura.',
        'Leia mais de um resultado.',
        'Observe quem publicou a informação.',
        'Desconfie de informações muito exageradas.',
        'Confira a data da publicação quando isso for importante.'
      ],
      exemplo: 'Quanto mais específica for sua pesquisa, maiores são as chances de encontrar o que procura.'
    }

  ];

  selecionarTutorial(index: number): void {
    this.tutorialSelecionado = index;
  }

}