import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceComponent } from './invoice.component';
import { InvoiceFormComponent } from './invoices/invoice-form/invoice-form.component';
import { InvoiceListingComponent } from './invoices/invoice-listing/invoice-listing.component';
import { InvoiceViewComponent } from './invoices/invoice-view/invoice-view.component';
import { ClientListingComponent } from './clients/client-listing/client-listing.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuardService } from './services/auth-guard.service';
import { EditInvoiceResolverService } from './services/edit-invoice-resolver.service';
import { ForgotpasswordComponent } from './auth/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './auth/resetpassword/resetpassword.component';

// PATH: '/app-invoice',
const routes: Routes = [
  {
    path: '',
    component: InvoiceComponent,
    canActivate: [AuthGuardService],
    children: [
      // {
      //   path: 'invoice',
      //   component: InvoiceListingComponent,
      //   // canActivateChild: [AuthGuardService],
      // },
      // {
      //   path: 'clients',
      //   component: ClientListingComponent,
      //   canActivate: [AuthGuardService],
      // },
    ],
  },
  {
    path: 'invoice',
    component: InvoiceListingComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'new',
    component: InvoiceFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'invoice/:id',
    component: InvoiceFormComponent,
    canActivate: [AuthGuardService],
    resolve: {
      invoice: EditInvoiceResolverService,
    },
  },
  {
    path: 'invoice/:id/view',
    component: InvoiceViewComponent,
    canActivate: [AuthGuardService],
    resolve: {
      invoice: EditInvoiceResolverService,
    },
  },
  {
    path: 'clients',
    component: ClientListingComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'login', component: AuthComponent },
  { path: 'signup', component: AuthComponent },
  { path: 'forgot-password', component: ForgotpasswordComponent },
  { path: 'reset-password/:token', component: ResetpasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppInvoiceRoutingModule {}
