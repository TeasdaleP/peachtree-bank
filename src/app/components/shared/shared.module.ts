import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BbUIModule } from '../bb-ui/bb-ui.module';

import { TransferComponent } from "./transfer/transfer.component";
import { PanelComponent } from "./panel/panel.component";
import { TransferValidationDirective } from "src/app/directives/transfer-validation.directive";
import { ReviewComponent } from "./review/review.component";
import { TransactionsComponent } from "./transactions/transactions.component";
import { Ng2SearchPipeModule } from "ng2-search-filter";

const SHARED_COMPONENTS = [
    TransferValidationDirective,
    TransferComponent,
    PanelComponent,
    ReviewComponent,
    TransactionsComponent
];

@NgModule({
    declarations: SHARED_COMPONENTS,
    imports: [
        CommonModule,
        Ng2SearchPipeModule,
        BbUIModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: SHARED_COMPONENTS
})
export class SharedModule { }
