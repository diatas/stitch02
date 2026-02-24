import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {PremiumComponent} from './pages/premium/premium.component';
import {ListingsComponent} from './pages/listings/listings.component';
import {BoostComponent} from './pages/boost/boost.component';
import {CreateListingComponent} from './pages/create-listing/create-listing.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'premium', component: PremiumComponent },
  { path: 'listings', component: ListingsComponent },
  { path: 'boost', component: BoostComponent },
  { path: 'create-listing', component: CreateListingComponent },
  { path: '**', redirectTo: '' }
];
