import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DogService } from './app/dog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'], 
})
export class App {
  imagemDog = signal<string[]>([]); 
  mostrarGaleria = false;
  nomeDog = '';

  constructor(private dogService: DogService) {}


  async buscarDog() {
    const raca = this.nomeDog.trim().toLowerCase();
    let urlBase = 'https://dog.ceo/api/breeds/image/random';

    if (raca) {
      urlBase = `https://dog.ceo/api/breed/${raca}/images/random`;
    }

    this.imagemDog.set([]); 
    this.mostrarGaleria = true;

    const urls: string[] = [];

    for (let i = 0; i < 20; i++) { 
      try {
        const res = await fetch(urlBase);
        const data = await res.json();
        if (data.status === 'success') {
          urls.push(data.message);
        }
      } catch (err) {
        console.error('Erro ao buscar imagem:', err);
      }
    }

    this.imagemDog.set(urls); 
  }

  voltar() {
    this.mostrarGaleria = false;
    this.imagemDog.set([]);
    this.nomeDog = '';
  }
}