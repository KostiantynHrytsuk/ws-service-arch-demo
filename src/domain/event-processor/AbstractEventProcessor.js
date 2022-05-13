"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractEventProcessor {
    constructor(service, strategies) {
        this.strategies = strategies;
        this.sessionService = service;
    }
    detectStrategy(event) {
        this.strategy = this.strategies[event];
        console.log(`[EVENT PROCESSOR] Detected strategy: ${this.strategy.getName()}`);
        return this;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
}
exports.default = AbstractEventProcessor;
//# sourceMappingURL=AbstractEventProcessor.js.map