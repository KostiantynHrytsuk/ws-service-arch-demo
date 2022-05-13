"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractEventStrategy {
    constructor(service, name) {
        this.sessionService = service;
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
exports.default = AbstractEventStrategy;
//# sourceMappingURL=AbstractEventStrategy.js.map