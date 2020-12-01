import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
@Injectable()
export class QuoteService{
    constructor(private http: HttpClient) { 
       
    }
    getQuotes(): Observable<any> {
            return this.http.get('http://localhost:8000/api/quotes')
            .map(
                (response:  Response) => {
                    return response.json().quotes;
                }
            );
    }
}