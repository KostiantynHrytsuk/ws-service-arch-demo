"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DestroyState_1 = __importDefault(require("./states/DestroyState"));
const InitialState_1 = __importDefault(require("./states/InitialState"));
class AbstractSocketSession {
    constructor(connection, communicationClient, eventChannel) {
        this.connection = connection;
        this.communicationClient = communicationClient;
        this.eventChannel = eventChannel;
        this.state = new InitialState_1.default(connection, communicationClient, eventChannel);
        this.eventChannel.on('changeState', this.switchState.bind(this));
    }
    destroy(reason) {
        this.switchState(new DestroyState_1.default(this.connection, this.communicationClient, this.eventChannel));
    }
    getState() {
        return this.state;
    }
    switchState(state) {
        this.state = state;
        console.log(`[CONN: ${this.connection}] State was changed to ${state.getState()}`);
    }
    syncReconnect(newConnection) {
        this.connection = newConnection;
        this.state.setConnection(newConnection);
    }
}
exports.default = AbstractSocketSession;
//# sourceMappingURL=AbstractSocketSession.js.map