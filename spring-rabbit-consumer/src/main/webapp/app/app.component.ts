import { Component, OnInit, NgZone } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { environment } from "../environments/environment";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'spring-rabbit-consumer';
  backgroundColor: string = '#ffffff'; // Valor padrão inicial

  private URL_API = `${environment.CONTEXT_PATH}/bridge/color`;

  constructor(private http: HttpClient, private zone: NgZone) {}

  getColor() {
    return this.http.get(this.URL_API, { responseType: 'text' });
  }

  ngOnInit(): void {
    this.getColor().subscribe((data) => {
      // Parse da resposta JSON
      const json = JSON.parse(data);
      console.log('Cor recebida do backend:', json.message);

      // Usa o NgZone.run para garantir que o Angular detecte a mudança
      this.zone.run(() => {
        this.backgroundColor = json.message; // Atualiza a cor
        console.log('Cor atualizada no componente:', this.backgroundColor);
      });
    });
  }
}
