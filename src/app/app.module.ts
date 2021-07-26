import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/pages/main/app.component';
import { SharedModule } from './components/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './ngrx';
import { EffectsModule } from '@ngrx/effects';
import { TransactionEffects } from './ngrx/effects/transaction.effects';
import { BbUIModule } from './components/bb-ui/bb-ui.module';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([TransactionEffects]),
    BbUIModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    NgbActiveModal,
    NgbModal,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
