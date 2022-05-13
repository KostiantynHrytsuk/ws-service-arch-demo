"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractSessionState_1 = __importDefault(require("../AbstractSessionState"));
class DestroyState extends AbstractSessionState_1.default {
    constructor(connection, communicationClient, eventChannel) {
        super(DestroyState.NAME, connection, communicationClient, eventChannel);
    }
    emitEvent(event, payload) {
        console.log(DestroyState.NAME, `[CONN: ${this.connection}] Emitted event ${event}, payload: ${JSON.stringify(payload)}`);
    }
    execute(message) {
        console.log(DestroyState.NAME, `[CONN: ${this.connection}] Received message ${message}`);
        this.communicationClient.send(this.connection, message);
    }
}
exports.default = DestroyState;
DestroyState.NAME = '[DESTROYED]';
//# sourceMappingURL=DestroyState.js.map