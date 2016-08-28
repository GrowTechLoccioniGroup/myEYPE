"use strict";
// main entry point
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var forms_1 = require('@angular/forms');
var app_routing_1 = require('./app.routing');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routing_1.appRoutingProviders,
    http_1.HTTP_PROVIDERS,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms()
])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map