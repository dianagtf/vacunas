import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ApiVacunasService } from './api-vacunas.service';

@Component({
  selector: 'app-api-vacunas',
  templateUrl: './api-vacunas.component.html'
})
export class ApiVacunasComponent {

  private repositories: string[];

  constructor(private service: ApiVacunasService) { }

  isEmpty(): boolean {
    if (this.repositories !== undefined) {
      return this.repositories.length === 0;
    }
    return false;
  }
  search(user: string) {
    this.repositories = undefined;
    this.service.getRepositories(user).subscribe(
      repositories => this.repositories = repositories,
      error => alert(error)
    );
  }
}
