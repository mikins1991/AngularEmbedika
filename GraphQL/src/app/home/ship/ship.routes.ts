// // import { Routes } from '@angular/router';

// // export const HomeRoutes: Routes = [ { path: 'home-page', component: HomeComponent } ];

// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { ShipComponent } from './ship.component';

// // export const ShipRoutes: Routes = [
// //     {
// //         path: 'target-tuning',
// //         loadChildren: () => import('./ship.module').then((m) => m.ShipModule)
// //     }
// // ];

// // export const routes: Routes = [
// //     {
// //         path: '',
// //         pathMatch: 'full',
// //         redirectTo: 'target-segments/segments'
// //     },
// //     {
// //         path: ':id',
// //         pathMatch: 'full',
// //         component: ShipComponent
// //     }
// // ];

// // @NgModule({
// //     imports: [ CommonModule, RouterModule.forChild(routes) ]
// // })
// // export class ShipRouter {}

// const routes: Routes = [
//     {
//         path: 'user',
//         component: UserComponent,
//         children: [ { path: ':id', component: UserDetailComponent } ]
//     }
// ];

// @NgModule({
//     imports: [ RouterModule.forChild(routes) ],
//     exports: [ RouterModule ]
// })
// export class UserRoutingModule {}

// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { ShipComponent } from './ship.component';

// export const ShipRoutes: Routes = [
//     {
//         path: 'home-page',
//         loadChildren: () => import('./ship.module').then((m) => m.ShipModule)
//     }
// ];

// export const routes: Routes = [
//     {
//         path: '',
//         pathMatch: 'full',
//         redirectTo: 'home-page'
//     },
//     {
//         path: 'home-page/:id',
//         pathMatch: 'full',
//         component: ShipComponent
//     }
// ];

// @NgModule({
//     imports: [ CommonModule, RouterModule.forChild(routes) ]
// })
// export class ShipRouter {}
