import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { QuotesComponent } from './quotes/quotes.component';

const APP_ROUTES: Routes=[
    {path:'',component:QuotesComponent},
    {path:'new-quote', component:NewQuoteComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);