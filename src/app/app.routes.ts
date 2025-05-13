import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AnimalCategoryListComponent } from './feature-animal-category/animal-category-list/animal-category-list.component';
import { AnimalCategoryComponent } from './feature-animal-category/animal-category/animal-category.component';

export const routes: Routes = [
{
    path: 'animal-category',
    component: AnimalCategoryComponent
},
{
    path: 'animal-list',
    component: AnimalCategoryListComponent
},
{
    path:'',
    redirectTo:'/animal-category',
    pathMatch:'full',
}
];
