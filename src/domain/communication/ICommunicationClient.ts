export default interface ICommunicationClient {
    send(connectionId: string, message: any): void;
}