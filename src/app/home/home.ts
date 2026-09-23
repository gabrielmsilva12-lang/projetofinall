import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

  currentSlide = 0;

  slides = [
    {
      icon: '✈️',
      category: 'VIAGEM',
      title: 'No aeroporto',
      phrase: 'Where is the bathroom?',
      translation: 'Onde fica o banheiro?'
    },
    {
      icon: '🏨',
      category: 'HOTEL',
      title: 'No hotel',
      phrase: 'I have a reservation.',
      translation: 'Eu tenho uma reserva.'
    },
    {
      icon: '🍽️',
      category: 'RESTAURANTE',
      title: 'No restaurante',
      phrase: "I'd like a coffee, please.",
      translation: 'Eu gostaria de um café, por favor.'
    },
    {
      icon: '🛒',
      category: 'COMPRAS',
      title: 'Fazendo compras',
      phrase: 'How much is this?',
      translation: 'Quanto custa isso?'
    }
  ];

  nextSlide() {
    if (this.currentSlide < this.slides.length - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0;
    }
  }

  previousSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.slides.length - 1;
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }


  // ========================================
  // CARROSSEL DE AVALIAÇÕES
  // ========================================

  testimonialSlide: number = 0;

  testimonials = [
    {
      image: 'https://i.pravatar.cc/150?img=47',
      name: 'Maria, 67 anos',
      role: 'Aluna ElderEnglish',
      text: 'Agora consigo entender algumas frases em inglês e também aprendi a usar o tradutor do celular.'
    },
    {
      image: 'https://i.pravatar.cc/150?img=12',
      name: 'João, 71 anos',
      role: 'Aluno ElderEnglish',
      text: 'Eu tinha dificuldade com tecnologia. Hoje consigo pesquisar e usar ferramentas digitais sozinho.'
    },
    {
      image: 'https://i.pravatar.cc/150?img=32',
      name: 'Ana, 64 anos',
      role: 'Aluna ElderEnglish',
      text: 'Gostei porque as explicações são simples e consigo estudar no meu próprio ritmo.'
    }
  ];

  nextTestimonial(): void {
    this.testimonialSlide =
      (this.testimonialSlide + 1) % this.testimonials.length;
  }

  previousTestimonial(): void {
    this.testimonialSlide =
      (this.testimonialSlide - 1 + this.testimonials.length) %
      this.testimonials.length;
  }

  goToTestimonial(index: number): void {
    this.testimonialSlide = index;
  }

}