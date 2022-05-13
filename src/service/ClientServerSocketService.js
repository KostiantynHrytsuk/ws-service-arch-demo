"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WebSocketClientServerSession_1 = __importDefault(require("../domain/client-session/sessions/WebSocketClientServerSession"));
const CommunicationClient_1 = __importDefault(require("../communication/CommunicationClient"));
const SomeEventChannel_1 = __importDefault(require("../communication/SomeEventChannel"));
class ClientServerSocketService {
    constructor() {
        this.repository = {};
    }
    createSession(connection) {
        const newSession = new WebSocketClientServerSession_1.default(connection, new CommunicationClient_1.default(), new SomeEventChannel_1.default());
        this.repository[connection] = newSession;
    }
    destroySession(reason, connection) {
        const session = this.repository[connection];
        session.destroy(reason);
    }
    reconnect(oldConnection, newConnection) {
    }
    sendMessage(message, connection) {
        const session = this.repository[connection];
        session.execute(message);
    }
}
exports.default = ClientServerSocketService;
//# sourceMappingURL=ClientServerSocketService.js.map