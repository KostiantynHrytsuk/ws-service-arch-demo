"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractEventProcessor_1 = __importDefault(require("../domain/event-processor/AbstractEventProcessor"));
class ClientServerEventProcessor extends AbstractEventProcessor_1.default {
    constructor(service, strategies) {
        super(service, strategies);
    }
    execute(payload) {
        this.strategy.execute(payload);
    }
}
exports.default = ClientServerEventProcessor;
//# sourceMappingURL=ClientServerEventProcessor.js.map