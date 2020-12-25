import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable()
export class QuoteService {
    constructor(private http: HttpClient, private authService: AuthService) { 
       
    }

    addQuote(content: string){
        const token = this.authService.getToken();
        const body = JSON.stringify({content: content});
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
            return this.http.post('http://localhost:8000/api/quote?token='+ token , body, {headers: headers})
    }
    getQuotes(): Observable<any> {
            return this.http.get('http://localhost:8000/api/quotes')
            .map(
                (response: any) => {
                    return response.quotes;
                }
            );
    }
    updateQuote(id:number, newContent: string){
        const token = this.authService.getToken();
        const body = JSON.stringify({content:newContent});
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
            return this.http.put('http://localhost:8000/api/quote/' + id +'?token='+token, body,{headers:headers})
            .map(
                (response: any) => response.quote
            );
    }
    deleteQuote(id:number){
        const token = this.authService.getToken();
        return this.http.delete('http://localhost:8000/api/quote/'+id+'?token='+token);
    }
}