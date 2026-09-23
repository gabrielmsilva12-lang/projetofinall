import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-progress',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './progress.html',
  styleUrl: './progress.css'
})
export class Progress implements OnInit {

  aulas = [
    {
      titulo: 'Inglês para viagem',
      categoria: 'VIAGEM',
      icone: '✈️'
    },
    {
      titulo: 'Inglês no restaurante',
      categoria: 'RESTAURANTE',
      icone: '🍽️'
    },
    {
      titulo: 'Inglês no hotel',
      categoria: 'HOTEL',
      icone: '🏨'
    },
    {
      titulo: 'Conversação básica',
      categoria: 'CONVERSAÇÃO',
      icone: '💬'
    }
  ];

  aulasConcluidas: boolean[] = [];

  ngOnInit(): void {

    const progressoSalvo =
      localStorage.getItem('progressoAulas');

    if (progressoSalvo) {

      this.aulasConcluidas =
        JSON.parse(progressoSalvo);

    } else {

      this.aulasConcluidas =
        this.aulas.map(() => false);

    }

  }

  alternarAula(index: number): void {

    this.aulasConcluidas[index] =
      !this.aulasConcluidas[index];

    this.salvarProgresso();

  }

  salvarProgresso(): void {

    localStorage.setItem(
      'progressoAulas',
      JSON.stringify(this.aulasConcluidas)
    );

  }

  get aulasConcluidasQuantidade(): number {

    return this.aulasConcluidas.filter(
      concluida => concluida
    ).length;

  }

  get aulasRestantes(): number {

    return this.aulas.length -
      this.aulasConcluidasQuantidade;

  }

  get porcentagem(): number {

    if (this.aulas.length === 0) {
      return 0;
    }

    return Math.round(
      (this.aulasConcluidasQuantidade /
        this.aulas.length) * 100
    );

  }

}