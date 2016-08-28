import { provideRouter, 
         RouterConfig}       from '@angular/router';

import { advancedRoutes } from './advanced/advanced.routing';
import { controlRoutes } from './control/control.routing';
import { dashboardRoutes } from './dashboard/dashboard.routing';
import { guideRoutes } from './guide/guide.routing';
import { homeRoutes } from './home/home.routing';
import { recipeRoutes } from './recipe/recipe.routing';
import { shutdownRoutes } from './shutdown/shutdown.routing';
import { siteRoutes } from './site/site.routing';

import { dataProvider }       from './data/data.routing';
import { connectionProvider } from './connection/connection.routing';

export const appRoutes: RouterConfig = [
    ...advancedRoutes,
    ...controlRoutes,
    ...dashboardRoutes,
    ...guideRoutes,
    ...homeRoutes,
    ...recipeRoutes,
    ...shutdownRoutes,
    ...siteRoutes
];

export const appRoutingProviders = [
    provideRouter(appRoutes),
    dataProvider,
    connectionProvider
];
