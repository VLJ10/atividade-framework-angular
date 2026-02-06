import { Injectable } from '@angular/core';

interface DogApiResponse {
  message: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})

export class DogService {
  async buscarDog(): Promise<DogApiResponse> {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data: DogApiResponse = await response.json();
    return data;
  }
}
