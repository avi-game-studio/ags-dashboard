import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GameDetailsComponent } from './pages/game-details/game-details.component';
import { PlayGameComponent } from './pages/play-game/play-game.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { authGuard } from './core/guards/auth.guard';
import { CarouselComponent } from './features/carousel/carousel.component';
import { TrendingCardComponent } from './shared/components/trending-card/trending-card.component';

export const routes: Routes = [
    { path: 'landing', component: LandingPageComponent },
    { path: 'home', component: HomePageComponent },
    { path: 'carousel', component: CarouselComponent },
    { path: 'game-details', component: GameDetailsComponent, canActivate: [authGuard] },
<<<<<<< HEAD
    { path: 'trending-card',component:TrendingCardComponent},
=======
    { path: "trending-card", component: TrendingCardComponent },
>>>>>>> ef4388fbff1be15d8b766626d796251b925fdd6e
    { path: 'play/:game-id', component: PlayGameComponent, canActivate: [authGuard] },
    { path: 'page-not-found', component: PageNotFoundComponent },  // Wildcard route for a 404 page
    { path: '', redirectTo: '/landing', pathMatch: 'full' }, // redirect to `first-component`
    { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];