import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  /**
   * Busca a lista completa de mangás do backend.
   */
  getMangaList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/manga-list`);
  }

  /**
   * Rastreia um mangá específico pelo seu ID.
   * @param mangaId O ID do mangá a ser rastreado.
   */
  trackManga(mangaId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/track-manga/${mangaId}`);
  }

  /**
   * Adiciona um novo mangá ao banco de dados.
   * @param manga Os dados do mangá a ser adicionado.
   */
  addManga(manga: { name: string, url: string, selector: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/add-manga`, manga);
  }

  /**
   * Exclui um mangá do banco de dados pelo seu ID.
   * @param mangaId O ID do mangá a ser excluído.
   */
  deleteManga(mangaId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete-manga/${mangaId}`);
  }
}
