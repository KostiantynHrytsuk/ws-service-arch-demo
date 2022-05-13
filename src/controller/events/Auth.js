"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractEventStrategy_1 = __importDefault(require("../../domain/event-processor/AbstractEventStrategy"));
class Auth extends AbstractEventStrategy_1.default {
    constructor(service, name) {
        super(service, name);
    }
    execute(payload) {
        this.sessionService.sendMessage({ event: 'AUTH' }, payload.connection);
    }
}
exports.default = Auth;
//# sourceMappingURL=Auth.js.map