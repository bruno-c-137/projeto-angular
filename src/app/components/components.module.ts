import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from "@angular/common";
import { NavComponent } from "./nav-menu/nav.component";
import { ContainerComponent } from "./container/container.component";
import { HeaderNavComponent } from "./headerNav/headerNav.component";
import { GraficoComponent } from "./grafico/grafico.component";
import { HeaderDashboardComponent } from './header-dashboard/header-dashboard.component';


@NgModule({
    declarations: [
        HeaderComponent,
        NavComponent,
        ContainerComponent,
        HeaderNavComponent,
        HeaderDashboardComponent,
        GraficoComponent
    ],
    exports: [
        HeaderComponent,
        NavComponent,
        ContainerComponent,
        HeaderNavComponent,
        HeaderDashboardComponent,
        GraficoComponent
    ],
    imports: [
        CommonModule,


    ]
})
export class ComponentsModule { }