"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractSessionState_1 = __importDefault(require("../AbstractSessionState"));
class ActiveState extends AbstractSessionState_1.default {
    constructor(connection, communicationClient, eventChannel) {
        super(ActiveState.NAME, connection, communicationClient, eventChannel);
    }
    emitEvent(event, payload) {
        console.log(`[CONN: ${this.connection}]${this.name} execute event ${event}`);
    }
    execute(message, cb) {
        console.log(`[CONN: ${this.connection}]${this.name} execute something ${JSON.stringify(message)}`);
    }
}
exports.default = ActiveState;
ActiveState.NAME = '[ACTIVE]';
//# sourceMappingURL=ActiveState.js.map