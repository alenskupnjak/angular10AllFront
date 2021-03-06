import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomefileComponent } from './homefile/homefile.component';
import { TecajListaComponent } from './tecaj/tecaj-lista/tecaj-lista.component';
import { CourseResolver } from '../services/course.resolver';
import { CourseComponent } from './course-list/course/course.component';
import { PokusniComponent } from './pokusni/pokusni.component';


// PATH: '/app-university,
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // childern se dodaje na HomeComponent nastavku Homecomponent
    children: [{ path: 'pokus', component: PokusniComponent }],
  },
  {
    path: 'homefile',
    component: HomefileComponent,
    children: [{ path: 'pokus', component: PokusniComponent }],
  },
  { path: 'tecaj/:id', component: TecajListaComponent },
  {
    path: 'courses/:id',
    component: CourseComponent,
    resolve: {
      course: CourseResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UniversitycourseRoutingModule {}
