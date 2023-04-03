import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseUrl = 'https://api.themoviedb.org/3';
  apiKey = 'b43c3a837b036b696579ef55f036b6a0';

  constructor(private http: HttpClient) {}

  getMovies(type: string = 'upcoming') {
    return this.http.get(
      `${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`
    );
  }
}
