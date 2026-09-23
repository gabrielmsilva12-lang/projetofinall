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
      titulo: 'Conversar com IA',

      descricao:
        'Aprenda a usar ferramentas de inteligência artificial para praticar conversação em inglês.',

      passos: [
        'Abra uma ferramenta de inteligência artificial.',
        'Inicie uma nova conversa.',
        'Escreva uma mensagem em inglês para começar a conversa.',
        'Conte para a IA que você está praticando inglês.',
        'Peça para a IA corrigir seus erros quando necessário.',
        'Faça perguntas sobre palavras ou frases que você não conhece.'
      ],

      exemplo:
        'Experimente escrever: "Let’s practice English. Ask me questions about my day."',

      videoTitulo:
        'Como usar a IA para praticar inglês',

      videoDescricao:
        'Veja como utilizar uma ferramenta de inteligência artificial para conversar e praticar inglês.'
    },

    {
      icone: '📱',
      titulo: 'Aplicativos de conversação',

      descricao:
        'Aprenda a encontrar e utilizar aplicativos que ajudam você a praticar inglês conversando.',

      passos: [
        'Abra a loja de aplicativos do seu celular.',
        'Pesquise por aplicativos de conversação em inglês.',
        'Leia a descrição do aplicativo antes de instalar.',
        'Baixe o aplicativo escolhido.',
        'Crie sua conta quando for necessário.',
        'Procure a área de conversação para começar a praticar.'
      ],

      exemplo:
        'Procure por aplicativos que tenham recursos de conversação em inglês e confira as avaliações antes de instalar.',

      videoTitulo:
        'Como usar aplicativos para praticar inglês',

      videoDescricao:
        'Aprenda os passos básicos para encontrar, instalar e utilizar aplicativos de conversação.'
    },

    {
      icone: '▶️',
      titulo: 'YouTube em inglês',

      descricao:
        'Aprenda a utilizar o YouTube para encontrar vídeos em inglês e transformar seus momentos de lazer em oportunidades de aprendizado.',

      passos: [
        'Abra o YouTube.',
        'Pesquise por vídeos utilizando palavras em inglês.',
        'Escolha um vídeo sobre um assunto que você goste.',
        'Ative as legendas quando estiverem disponíveis.',
        'Pause o vídeo quando encontrar uma frase que queira entender melhor.',
        'Repita partes do vídeo para praticar as palavras e expressões.'
      ],

      exemplo:
        'Experimente pesquisar: "English conversation for beginners".',

      videoTitulo:
        'Como aprender inglês com o YouTube',

      videoDescricao:
        'Aprenda a pesquisar vídeos em inglês e utilizar as legendas para acompanhar o conteúdo.'
    }

  ];

  selecionarTutorial(index: number): void {
    this.tutorialSelecionado = index;
  }

}