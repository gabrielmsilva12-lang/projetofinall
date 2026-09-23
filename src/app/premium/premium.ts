import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-premium',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './premium.html',
  styleUrl: './premium.css'
})
export class Premium {

  conteudoSelecionado = 0;

  conteudos = [

    {
      icone: '💬',
      titulo: 'Diálogos completos',
      descricao:
        'Pratique inglês através de conversas completas baseadas em situações do dia a dia.',

      itens: [
        {
          titulo: 'No hotel',
          descricao:
            'Pratique uma conversa completa entre hóspede e recepcionista.'
        },
        {
          titulo: 'No restaurante',
          descricao:
            'Aprenda como conversar desde o pedido até o pagamento da conta.'
        },
        {
          titulo: 'No aeroporto',
          descricao:
            'Pratique situações como check-in, embarque e imigração.'
        }
      ]
    },

    {
      icone: '📚',
      titulo: 'Mais frases',
      descricao:
        'Tenha acesso a frases adicionais para ampliar seu vocabulário.',

      itens: [
        {
          titulo: 'Viagens',
          descricao:
            'Mais frases para aeroportos, hotéis, transporte e turismo.'
        },
        {
          titulo: 'Restaurantes',
          descricao:
            'Mais maneiras de pedir comida, fazer perguntas e conversar.'
        },
        {
          titulo: 'Conversação',
          descricao:
            'Mais expressões para conversar sobre sua rotina, interesses e experiências.'
        }
      ]
    },

    {
      icone: '📝',
      titulo: 'Exercícios extras',
      descricao:
        'Pratique o conteúdo aprendido através de exercícios interativos.',

      itens: [
        {
          titulo: 'Complete as frases',
          descricao:
            'Escolha a palavra correta para completar cada frase em inglês.'
        },
        {
          titulo: 'Escolha a resposta',
          descricao:
            'Identifique qual resposta faz sentido em diferentes situações.'
        },
        {
          titulo: 'Tradução',
          descricao:
            'Pratique a tradução de frases simples entre português e inglês.'
        }
      ]
    },

    {
      icone: '🧠',
      titulo: 'Vocabulário por situação',
      descricao:
        'Aprenda palavras importantes organizadas de acordo com cada situação.',

      itens: [
        {
          titulo: 'Viagem',
          descricao:
            'Palavras relacionadas a aeroporto, hotel, transporte e turismo.'
        },
        {
          titulo: 'Restaurante',
          descricao:
            'Vocabulário relacionado a comidas, bebidas, pedidos e pagamentos.'
        },
        {
          titulo: 'Cotidiano',
          descricao:
            'Palavras e expressões utilizadas em conversas do dia a dia.'
        }
      ]
    },

    {
      icone: '🎯',
      titulo: 'Desafios de prática',
      descricao:
        'Desafios para transformar o inglês em uma prática constante.',

      itens: [
        {
          titulo: 'Desafio de 7 dias',
          descricao:
            'Pratique inglês durante sete dias seguindo pequenas atividades.'
        },
        {
          titulo: 'Desafio de frases',
          descricao:
            'Aprenda e pratique novas frases durante a semana.'
        },
        {
          titulo: 'Desafio de conversação',
          descricao:
            'Use o inglês em situações simuladas do cotidiano.'
        }
      ]
    }

  ];

  selecionarConteudo(index: number): void {
    this.conteudoSelecionado = index;
  }

}