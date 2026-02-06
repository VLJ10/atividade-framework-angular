import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface DogApiResponse {
  message: string;
  status: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('page-dog');

  imagemDog = signal('') 

  async buscarDog() {
    try {

      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data: DogApiResponse = await response.json();

      console.log('Resposta da API:', data);
      this.imagemDog.set(data.message);

    } catch (error) {
      console.error('Erro ao buscar dog:', error);
    }
  }

  constructor() {
    this.buscarDog();
  }
}

