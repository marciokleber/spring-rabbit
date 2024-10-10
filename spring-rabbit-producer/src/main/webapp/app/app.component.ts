import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {environment} from "../environments/environment";
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HttpClientModule, FormsModule,],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'spring-rabbit-producer';

    constructor(private httpClient: HttpClient) {
    }

    private URL_API = `${environment.CONTEXT_PATH}/message/send`;
    selectedColor: string = '#000000';

    submit() {
        console.log(this.selectedColor)
        this.call(this.selectedColor);
    }

    async call(color: string) {
        console.log("test")

        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        let request = await this.httpClient.post<any>(`${this.URL_API}`, {message: color}, {headers}).subscribe(
            value => {
                console.log(value)
            },
            error => {
                console.log(error)
            }
        );

        console.log(request)

    }
}
