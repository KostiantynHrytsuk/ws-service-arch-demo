import ICommunicationClient from "../domain/communication/ICommunicationClient";

export default class CommunicationClient implements ICommunicationClient {
    send(connectionId: string, message: any): void {
    }
}