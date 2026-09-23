import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  currentSlide = 0;

  slides = [
    {
      nome: 'Maria',
      idade: 67,
      texto: 'Agora consigo viajar e me comunicar melhor em inglês.'
    },
    {
      nome: 'Carlos',
      idade: 71,
      texto: 'Aprendi a usar ferramentas que antes pareciam muito complicadas.'
    },
    {
      nome: 'Ana',
      idade: 64,
      texto: 'Hoje me sinto muito mais segura usando a internet.'
    }
  ];

  frases = [
    {
      english: 'Where is the bathroom?',
      portuguese: 'Onde fica o banheiro?'
    },
    {
      english: 'I have a reservation.',
      portuguese: 'Eu tenho uma reserva.'
    },
    {
      english: "I'd like a coffee, please.",
      portuguese: 'Eu gostaria de um café, por favor.'
    },
    {
      english: 'How much is this?',
      portuguese: 'Quanto custa isso?'
    }
  ];

  nextSlide(): void {
    if (this.currentSlide < this.slides.length - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0;
    }
  }

  previousSlide(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.slides.length - 1;
    }
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  ouvirPronuncia(frase: string): void {
    const fala = new SpeechSynthesisUtterance(frase);

    fala.lang = 'en-US';
    fala.rate = 0.8;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(fala);
  }

}