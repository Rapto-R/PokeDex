import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ahorasi';
  data: any = {};

  constructor(private ApiService: ApiService) {

  }

  ngOnInit(): void {
    this.llenarData();

  }

  llenarData() {
    this.ApiService.getData().subscribe(data => {
      this.data = data.results;
      console.log(data.results);
    })
  }
}
