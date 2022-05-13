import AbstractSessionState from "../AbstractSessionState";
import ICommunicationClient from "../../communication/ICommunicationClient";
import IEventChannel from "../../communication/IEventChannel";
import ActiveState from "./ActiveState";

export default class InitialState extends AbstractSessionState {

    private static readonly NAME = '[INITIAL]';

    constructor(
        connection,
        communicationClient: ICommunicationClient,
        eventChannel: IEventChannel,
    ) {
        super(InitialState.NAME, connection, communicationClient, eventChannel);
    }

    emitEvent(event: string, payload: any): void {
        if (event === 'AUTH') {
            this.eventChannel.emit('changeState', new ActiveState(
                this.connection,
                this.communicationClient,
                this.eventChannel
            ));
        }
    }

    execute(message: any, cb: Function): void {
        console.log(`[CONN: ${this.connection}] ${this.name} Executed event ${JSON.stringify(message)}`)
        this.emitEvent(message.event, null);
    }
}