"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractSocketSession_1 = __importDefault(require("../AbstractSocketSession"));
class WebSocketClientServerSession extends AbstractSocketSession_1.default {
    constructor(connection, communicationClient, eventChannel) {
        super(connection, communicationClient, eventChannel);
    }
    execute(message) {
        console.log(`[CONN: ${this.connection}]${this.state.getState()}Executing some session logic!`);
        this.state.execute(message);
        console.log('Executing some other session logic!');
    }
}
exports.default = WebSocketClientServerSession;
//# sourceMappingURL=WebSocketClientServerSession.js.map