import AbstractSessionState from "../AbstractSessionState";
import ICommunicationClient from "../../communication/ICommunicationClient";
import IEventChannel from "../../communication/IEventChannel";

export default class ActiveState extends AbstractSessionState {

    private static readonly NAME = '[ACTIVE]';

    constructor(
        connection,
        communicationClient: ICommunicationClient,
        eventChannel: IEventChannel,
    ) {
        super(ActiveState.NAME, connection, communicationClient, eventChannel);
    }

    emitEvent(event: string, payload: any): void {
        console.log(`[CONN: ${this.connection}]${this.name} execute event ${event}`)
    }

    execute(message: any, cb?: Function): void {
        console.log(`[CONN: ${this.connection}]${this.name} execute something ${JSON.stringify(message)}`)
    }

}