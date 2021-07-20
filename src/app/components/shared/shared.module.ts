import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";

const SHARED_COMPONENTS = [
   
]

@NgModule({
    declarations: SHARED_COMPONENTS,
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: SHARED_COMPONENTS
})
export class SharedModule { }