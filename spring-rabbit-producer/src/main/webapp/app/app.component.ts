import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {environment} from "../environments/environment";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HttpClientModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'spring-rabbit-producer';

    constructor(private httpClient: HttpClient) {
    }

    private apiUrl = `server/spring-rabbit-producer/message/send`; // URL da API

    async call() {
        console.log("test")

        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        let request = await this.httpClient.post<any>(`${this.apiUrl}`, {message: "Hello World"}, { headers }).subscribe(
            value => {console.log(value)},
            error => {console.log(error)}

        );

        console.log(request)
        //this.httpClient.post()
    }
}
