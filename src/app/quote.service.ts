import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';


@Injectable()
export class QuoteService {
    constructor(private http: HttpClient) { 
       
    }

    addQuote(content: string){
        const body = JSON.stringify({content: content});
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
            return this.http.post('http://localhost:8000/api/quote' , body, {headers: headers})
    }
    getQuotes(): Observable<any> {
            return this.http.get('http://localhost:8000/api/quotes')
            .map(
                (response:  Response) => {
                    return response.quotes;
                }
            );
    }
    updateQuote(id:number, newContent: string){
        const body = JSON.stringify({content:newContent});
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
            return this.http.put('http://localhost:8000/api/quote' + id, body,{headers:headers})
            .map(
                (response: Response) => response.qoute
            );
    }
    deleteQuote(id:number){
        return this.http.delete('http://localhost:8000/api/quote');
    }
}