import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { ParamsExampleComponent } from './params-example/params-example.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: 'counter-button',
    component: CounterButtonComponent,
  },
  {
    path: 'params-example/:urlParam', //this is how we add url params
    component: ParamsExampleComponent, 
  },
  {
    path: 'params-example/:urlParam/:altParam', //this is how we add url params
    component: ParamsExampleComponent, 
  },
  {
    path: '**',
    component: NotFoundPageComponent, 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
