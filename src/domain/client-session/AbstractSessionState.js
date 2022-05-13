"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractSessionState {
    constructor(name, connection, communicationClient, eventChannel) {
        this.name = name;
        this.connection = connection;
        this.communicationClient = communicationClient;
        this.eventChannel = eventChannel;
    }
    setConnection(connection) {
        this.connection = connection;
    }
    getState() {
        return this.name;
    }
}
exports.default = AbstractSessionState;
//# sourceMappingURL=AbstractSessionState.js.map