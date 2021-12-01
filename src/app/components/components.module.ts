import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from "@angular/common";
import { NavComponent } from "./nav-menu/nav.component";
import { ContainerComponent } from "./container/container.component";

@NgModule({
    declarations: [
        HeaderComponent,
        NavComponent,
        ContainerComponent
    ],
    exports: [
        HeaderComponent,
        NavComponent,
        ContainerComponent
    ],
    imports: [
        CommonModule,


    ]
})
export class ComponentsModule { }