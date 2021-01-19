import { NgModule } from "@angular/core";
import { ExampleComponent } from '../example/example/example.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExampleRoutingModule } from '../example/example-routing.module';

@NgModule({
    declarations: [ExampleComponent],
    imports: [
        CommonModule,
        SharedModule,
        ExampleRoutingModule,
    ]
})

export class ExampleModule {}