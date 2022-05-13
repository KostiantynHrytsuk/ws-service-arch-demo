export default interface ISessionService {
    createSession(connection): void;
    destroySession(reason: string, connection): void;
    sendMessage(message, connection): void;
    reconnect(oldConnection, newConnection): void;
}