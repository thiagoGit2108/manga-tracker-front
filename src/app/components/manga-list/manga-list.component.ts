import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-manga-list',
  standalone: false,
  templateUrl: './manga-list.component.html',
  styleUrl: './manga-list.component.scss'
})
export class MangaListComponent implements OnInit {
  mangas: any[] = [];

  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getMangaList();
  }

  getMangaList() {
    this.apiService.getMangaList().subscribe((data: any) => {
      this.mangas = [...data.mangas];
      this.cdr.detectChanges(); // força atualização
    });
  }

  trackManga(mangaId: number) {
    this.apiService.trackManga(mangaId).subscribe((data: any) => {
      alert(data.message);
      this.getMangaList(); // Atualiza a lista para mostrar o novo capítulo
    });
  }

  deleteManga(mangaId: number) {
    if (confirm('Tem certeza que deseja excluir este mangá?')) {
      this.apiService.deleteManga(mangaId).subscribe((data: any) => {
        alert(data.message);
        this.getMangaList(); // Atualiza a lista
      });
    }
  }
}
