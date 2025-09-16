import {Component, EventEmitter, Output} from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-add-manga',
  standalone: false,
  templateUrl: './add-manga.component.html',
  styleUrl: './add-manga.component.scss'
})
export class AddMangaComponent {
  manga = { name: '', url: '', selector: '' };

  // O @Output permite que o componente pai saiba quando um novo manga foi adicionado
  @Output() mangaAdded = new EventEmitter<void>();

  constructor(private apiService: ApiService) { }

  ngOnInit(): void { }

  addManga() {
    this.apiService.addManga(this.manga).subscribe((data: any) => {
      alert(data.message);
      this.manga = { name: '', url: '', selector: '' }; // Limpa o formulário
      this.mangaAdded.emit(); // Notifica o componente pai para atualizar a lista
    });
  }
}
