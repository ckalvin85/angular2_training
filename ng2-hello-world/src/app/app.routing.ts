import {Routes} from '@angular/router';
import {PageProductsComponent } from "./page-product";
import {PageProductItemComponent } from "./page-productitem";

export const appRoutes: Routes = [
    {
        path: "products",
        component: PageProductsComponent
    },
    {
        path: "products/:id",
        component: PageProductItemComponent
    },
    {
        path: "",
        redirectTo: "/products",
        pathMatch: "full"
    }
]