"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractSessionState_1 = __importDefault(require("../AbstractSessionState"));
const ActiveState_1 = __importDefault(require("./ActiveState"));
class InitialState extends AbstractSessionState_1.default {
    constructor(connection, communicationClient, eventChannel) {
        super(InitialState.NAME, connection, communicationClient, eventChannel);
    }
    emitEvent(event, payload) {
        if (event === 'AUTH') {
            this.eventChannel.emit('changeState', new ActiveState_1.default(this.connection, this.communicationClient, this.eventChannel));
        }
    }
    execute(message, cb) {
        console.log(`[CONN: ${this.connection}] ${this.name} Executed event ${JSON.stringify(message)}`);
        this.emitEvent(message.event, null);
    }
}
exports.default = InitialState;
InitialState.NAME = '[INITIAL]';
//# sourceMappingURL=InitialState.js.map