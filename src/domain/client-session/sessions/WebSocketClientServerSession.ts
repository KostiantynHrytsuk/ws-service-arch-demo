import AbstractSocketSession from "../AbstractSocketSession";

export default class WebSocketClientServerSession extends AbstractSocketSession {

    constructor(connection, communicationClient, eventChannel) {
        super(connection, communicationClient, eventChannel);
    }

    execute(message): void {
        console.log(`[CONN: ${this.connection}]${this.state.getState()}Executing some session logic!`);
        this.state.execute(message);
        console.log('Executing some other session logic!');
    }
}