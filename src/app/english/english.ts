import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-english',
  imports: [CommonModule, RouterLink],
  templateUrl: './english.html',
  styleUrl: './english.css'
})
export class English implements OnInit {

  currentLesson = 0;

  estaLogado = false;

  frasesGratis = 3;

  lessons = [
    {
      title: 'Inglês para viagem',
      category: 'VIAGEM',
      icon: '✈️',
      description: 'Aprenda inglês para situações comuns durante uma viagem.',

      sections: [
        {
          title: 'No aeroporto',
          phrases: [
            {
              english: 'Where is the check-in counter?',
              portuguese: 'Onde fica o balcão de check-in?'
            },
            {
              english: 'Where can I find my gate?',
              portuguese: 'Onde posso encontrar meu portão?'
            },
            {
              english: 'What time does the flight leave?',
              portuguese: 'Que horas o voo parte?'
            },
            {
              english: 'Where is the baggage claim?',
              portuguese: 'Onde fica a área de retirada de bagagem?'
            },
            {
              english: 'Could you help me, please?',
              portuguese: 'Você poderia me ajudar, por favor?'
            },
            {
              english: 'I need help, please.',
              portuguese: 'Eu preciso de ajuda, por favor.'
            },
            {
              english: 'Could you speak more slowly?',
              portuguese: 'Você poderia falar mais devagar?'
            },
            {
              english: 'Could you repeat that, please?',
              portuguese: 'Você poderia repetir, por favor?'
            },
            {
              english: 'Where is the bathroom?',
              portuguese: 'Onde fica o banheiro?'
            },
            {
              english: 'I do not understand.',
              portuguese: 'Eu não entendo.'
            }
          ]
        },

        {
          title: 'Na imigração',
          phrases: [
            {
              english: "I'm here on vacation.",
              portuguese: 'Estou aqui de férias.'
            },
            {
              english: "I'm staying for seven days.",
              portuguese: 'Vou ficar por sete dias.'
            },
            {
              english: "I'm staying at a hotel.",
              portuguese: 'Estou hospedado em um hotel.'
            },
            {
              english: 'Here is my passport.',
              portuguese: 'Aqui está meu passaporte.'
            },
            {
              english: 'I do not speak English very well.',
              portuguese: 'Eu não falo inglês muito bem.'
            },
            {
              english: 'Could you repeat the question?',
              portuguese: 'Você poderia repetir a pergunta?'
            }
          ]
        }
      ]
    },

    {
      title: 'Inglês no restaurante',
      category: 'RESTAURANTE',
      icon: '🍽️',
      description: 'Aprenda a pedir comida, fazer perguntas e conversar no restaurante.',

      sections: [
        {
          title: 'Fazendo um pedido',
          phrases: [
            {
              english: 'Could I see the menu, please?',
              portuguese: 'Eu poderia ver o cardápio, por favor?'
            },
            {
              english: "I'd like the chicken, please.",
              portuguese: 'Eu gostaria do frango, por favor.'
            },
            {
              english: 'I would like a coffee, please.',
              portuguese: 'Eu gostaria de um café, por favor.'
            },
            {
              english: 'Can I have some water, please?',
              portuguese: 'Posso pedir um pouco de água, por favor?'
            },
            {
              english: 'What do you recommend?',
              portuguese: 'O que você recomenda?'
            },
            {
              english: 'Does this have cheese?',
              portuguese: 'Isso tem queijo?'
            },
            {
              english: 'Is this spicy?',
              portuguese: 'Isso é apimentado?'
            },
            {
              english: 'I am allergic to peanuts.',
              portuguese: 'Eu sou alérgico a amendoim.'
            },
            {
              english: 'Could I have the bill, please?',
              portuguese: 'Eu poderia receber a conta, por favor?'
            },
            {
              english: 'Can I pay by card?',
              portuguese: 'Posso pagar com cartão?'
            }
          ]
        }
      ]
    },

    {
      title: 'Inglês no hotel',
      category: 'HOTEL',
      icon: '🏨',
      description: 'Aprenda frases para fazer check-in e resolver situações no hotel.',

      sections: [
        {
          title: 'Check-in',
          phrases: [
            {
              english: "I'd like to check in.",
              portuguese: 'Eu gostaria de fazer o check-in.'
            },
            {
              english: 'I have a reservation.',
              portuguese: 'Eu tenho uma reserva.'
            },
            {
              english: 'Here is my passport.',
              portuguese: 'Aqui está meu passaporte.'
            },
            {
              english: 'What time is check-out?',
              portuguese: 'Que horas é o check-out?'
            },
            {
              english: 'Is breakfast included?',
              portuguese: 'O café da manhã está incluído?'
            },
            {
              english: 'What time is breakfast?',
              portuguese: 'Que horas é o café da manhã?'
            },
            {
              english: 'Where is my room?',
              portuguese: 'Onde fica meu quarto?'
            },
            {
              english: 'Could you help me with my room?',
              portuguese: 'Você poderia me ajudar com meu quarto?'
            },
            {
              english: 'I need an extra towel.',
              portuguese: 'Eu preciso de uma toalha extra.'
            },
            {
              english: 'The air conditioning is not working.',
              portuguese: 'O ar-condicionado não está funcionando.'
            }
          ]
        }
      ]
    },

    {
      title: 'Conversação básica',
      category: 'CONVERSAÇÃO',
      icon: '💬',
      description: 'Aprenda a iniciar uma conversa e falar sobre você.',

      sections: [
        {
          title: 'Conhecendo alguém',
          phrases: [
            {
              english: 'Hello! How are you?',
              portuguese: 'Olá! Como você está?'
            },
            {
              english: 'Nice to meet you.',
              portuguese: 'Prazer em conhecer você.'
            },
            {
              english: 'What is your name?',
              portuguese: 'Qual é o seu nome?'
            },
            {
              english: 'My name is...',
              portuguese: 'Meu nome é...'
            },
            {
              english: 'Where are you from?',
              portuguese: 'De onde você é?'
            },
            {
              english: "I'm from Brazil.",
              portuguese: 'Eu sou do Brasil.'
            },
            {
              english: 'What do you do?',
              portuguese: 'O que você faz?'
            },
            {
              english: 'What do you like to do?',
              portuguese: 'O que você gosta de fazer?'
            },
            {
              english: 'Do you speak English?',
              portuguese: 'Você fala inglês?'
            },
            {
              english: 'I am learning English.',
              portuguese: 'Estou aprendendo inglês.'
            },
            {
              english: 'Could you speak more slowly?',
              portuguese: 'Você poderia falar mais devagar?'
            },
            {
              english: 'It was nice talking to you.',
              portuguese: 'Foi bom conversar com você.'
            }
          ]
        }
      ]
    }
  ];

  ngOnInit(): void {
    this.estaLogado =
      localStorage.getItem('usuarioLogado') === 'true';
  }

  nextLesson(): void {
    if (this.currentLesson < this.lessons.length - 1) {
      this.currentLesson++;
    }
  }

  previousLesson(): void {
    if (this.currentLesson > 0) {
      this.currentLesson--;
    }
  }

  goToLesson(index: number): void {
    this.currentLesson = index;
  }

  ouvirPronuncia(frase: string): void {
    const fala = new SpeechSynthesisUtterance(frase);

    fala.lang = 'en-US';
    fala.rate = 0.8;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(fala);
  }
}