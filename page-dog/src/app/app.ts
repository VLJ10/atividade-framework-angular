import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface DogApiResponse {
  message: string;
  status: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('page-dog');

  imagemDog = signal('')
  mostrarGaleria = false
  nomeDog: string = ''

  async buscarDog() {


    let url = 'https://dog.ceo/api/breeds/image/random'

    if (this.nomeDog.trim() !== '') {
      url = `https://dog.ceo/api/breed/${this.nomeDog.toLowerCase()}/images/random`
    }


    try {
      const response = await fetch(url)
      const data = await response.json()

      this.imagemDog.set(data.message)
    } catch (error) {
      console.error('Erro ao buscar dog:', error);
    }
  }

  trocarTela() {
    this.mostrarGaleria = true
    console.log('mostraGaleria:', this.mostrarGaleria)
  }


  constructor() {
    this.buscarDog();
  }
}

