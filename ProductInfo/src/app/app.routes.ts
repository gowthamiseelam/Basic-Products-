import { Routes } from '@angular/router';
import { ProductComponent} from '../product/product.component';
import { ProductsComponent} from '../products/products.component';
import { DetailsComponent } from '../product/details/details.component';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
{
    path: 'products',
    component: ProductsComponent,
},
{
    path:'addProduct',
    component:ProductComponent,
    children:[
        {
            path:':name',
            component:DetailsComponent,
        },
    ],

},
{
    path:'',
    redirectTo:'home',
    pathMatch:'full',  
},
{
    path:'home',
    component:HomeComponent,
},
];