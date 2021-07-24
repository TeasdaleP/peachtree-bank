import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { BbUIModule } from "../bb-ui/bb-ui.module";

import { TransferComponent } from "./transfer/transfer.component";
import { PanelComponent } from "./panel/panel.component";

import { TransferValidationDirective } from "src/app/directives/transfer-validation.directive";
import { ReviewComponent } from "./review/review.component";
import { TransactionsComponent } from "./transactions/transactions.component";

const SHARED_COMPONENTS = [
    TransferValidationDirective,
    TransferComponent,
    PanelComponent,
    ReviewComponent,
    TransactionsComponent
]

@NgModule({
    declarations: SHARED_COMPONENTS,
    imports: [
        CommonModule,
        BbUIModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: SHARED_COMPONENTS
})
export class SharedModule { }