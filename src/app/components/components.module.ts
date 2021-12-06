import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from "@angular/common";
import { NavComponent } from "./nav-menu/nav.component";
import { ContainerComponent } from "./container/container.component";
import { HeaderNavComponent } from "./headerNav/headerNav.component";

@NgModule({
    declarations: [
        HeaderComponent,
        NavComponent,
        ContainerComponent,
        HeaderNavComponent
    ],
    exports: [
        HeaderComponent,
        NavComponent,
        ContainerComponent,
        HeaderNavComponent
    ],
    imports: [
        CommonModule,


    ]
})
export class ComponentsModule { }