import AbstractSessionState from "../AbstractSessionState";
import ICommunicationClient from "../../communication/ICommunicationClient";
import IEventChannel from "../../communication/IEventChannel";

export default class DestroyState extends AbstractSessionState {

    private static readonly NAME = '[DESTROYED]';

    constructor(
        connection,
        communicationClient: ICommunicationClient,
        eventChannel: IEventChannel,
    ) {
        super(DestroyState.NAME, connection, communicationClient, eventChannel);
    }


    public emitEvent(event: string, payload: any): void {
        console.log(DestroyState.NAME, `[CONN: ${this.connection}] Emitted event ${event}, payload: ${JSON.stringify(payload)}`);
    }

    public execute(message: any): void {
        console.log(DestroyState.NAME, `[CONN: ${this.connection}] Received message ${message}`);
        this.communicationClient.send(this.connection, message)
    }
}