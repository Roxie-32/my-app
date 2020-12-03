import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '../quote.interface';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
@Input() quote : Quote; 
editing = false;
editValue='';
  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
  }

  onEdit() {
    this.editing=true;
    this.editValue=this.quote.content;
  }

  onUpdate(){
    this.quoteService.updateQuote()
    this.editValue='';
    this.editing = false;
  }
}
