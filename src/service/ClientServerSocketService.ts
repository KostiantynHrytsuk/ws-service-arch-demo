import ISessionService from "../domain/client-session/ISessionService";
import IActiveSession from "../domain/client-session/IActiveSession";
import WebSocketClientServerSession from "../domain/client-session/sessions/WebSocketClientServerSession";
import CommunicationClient from "../communication/CommunicationClient";
import SomeEventChannel from "../communication/SomeEventChannel";

export default class ClientServerSocketService implements ISessionService {

    private repository: {[connection: string]: IActiveSession}

    constructor() {
        this.repository = {};
    }

    createSession(connection): void {
        const newSession = new WebSocketClientServerSession(
                connection,
                new CommunicationClient(),
                new SomeEventChannel()
            );

        this.repository[connection] = newSession;
    }

    destroySession(reason: string, connection): void {
        const session = this.repository[connection];
        session.destroy(reason);
    }

    reconnect(oldConnection, newConnection): void {
    }

    sendMessage(message, connection): void {
        const session = this.repository[connection];
        session.execute(message);
    }
}