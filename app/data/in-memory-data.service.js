"use strict";
var InMemoryDaraService = (function () {
    function InMemoryDaraService() {
    }
    InMemoryDaraService.prototype.createDB = function () {
        var recipes = [
            { id: 1, name: 'Insalata', }
        ];
        return { recipes: recipes };
    };
    return InMemoryDaraService;
}());
exports.InMemoryDaraService = InMemoryDaraService;
//# sourceMappingURL=in-memory-data.service.js.map