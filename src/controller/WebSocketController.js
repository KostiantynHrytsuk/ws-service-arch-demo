"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InitialConnect_1 = __importDefault(require("./events/InitialConnect"));
const ClientServerSocketService_1 = __importDefault(require("../service/ClientServerSocketService"));
const Auth_1 = __importDefault(require("./events/Auth"));
const SomeEvent_1 = __importDefault(require("./events/SomeEvent"));
const Destroy_1 = __importDefault(require("./events/Destroy"));
const ClientServerEventProcessor_1 = __importDefault(require("../service/ClientServerEventProcessor"));
class WebSocketController {
    constructor() {
        this.service = new ClientServerSocketService_1.default();
        this.processor = new ClientServerEventProcessor_1.default(this.service, this.initStrategies());
    }
    message(message) {
        const { connection, event } = message;
        this.processor.detectStrategy(event).execute({ connection, event });
    }
    initStrategies() {
        return {
            'INIT': new InitialConnect_1.default(this.service, 'INIT'),
            'AUTH': new Auth_1.default(this.service, 'AUTH'),
            'OPERATIONS': new SomeEvent_1.default(this.service, 'OPERATIONS'),
            'DESTROY': new Destroy_1.default(this.service, 'DESTROY'),
        };
    }
}
exports.default = WebSocketController;
//# sourceMappingURL=WebSocketController.js.map