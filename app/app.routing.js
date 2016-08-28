"use strict";
var router_1 = require('@angular/router');
var advanced_routing_1 = require('./advanced/advanced.routing');
var control_routing_1 = require('./control/control.routing');
var dashboard_routing_1 = require('./dashboard/dashboard.routing');
var guide_routing_1 = require('./guide/guide.routing');
var home_routing_1 = require('./home/home.routing');
var recipe_routing_1 = require('./recipe/recipe.routing');
var shutdown_routing_1 = require('./shutdown/shutdown.routing');
var site_routing_1 = require('./site/site.routing');
var data_routing_1 = require('./data/data.routing');
var connection_routing_1 = require('./connection/connection.routing');
exports.appRoutes = advanced_routing_1.advancedRoutes.concat(control_routing_1.controlRoutes, dashboard_routing_1.dashboardRoutes, guide_routing_1.guideRoutes, home_routing_1.homeRoutes, recipe_routing_1.recipeRoutes, shutdown_routing_1.shutdownRoutes, site_routing_1.siteRoutes);
exports.appRoutingProviders = [
    router_1.provideRouter(exports.appRoutes),
    data_routing_1.dataProvider,
    connection_routing_1.connectionProvider
];
//# sourceMappingURL=app.routing.js.map