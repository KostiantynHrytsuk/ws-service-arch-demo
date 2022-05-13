import IActiveSession from "./IActiveSession";
import ISessionState from "./ISessionState";
import DestroyState from "./states/DestroyState";
import ICommunicationClient from "../communication/ICommunicationClient";
import IEventChannel from "../communication/IEventChannel";
import InitialState from "./states/InitialState";

export default abstract class AbstractSocketSession  implements IActiveSession {

    protected state: ISessionState;
    protected connection;
    protected communicationClient: ICommunicationClient;
    protected eventChannel: IEventChannel;

    protected constructor(connection, communicationClient, eventChannel) {
        this.connection = connection;
        this.communicationClient = communicationClient;
        this.eventChannel = eventChannel;
        this.state = new InitialState(connection, communicationClient, eventChannel);

        this.eventChannel.on('changeState', this.switchState.bind(this))
    }

    destroy(reason: string): void {
        this.switchState(new DestroyState(
            this.connection,
            this.communicationClient,
            this.eventChannel,
        ))
    }

    abstract execute(message): void;

    getState(): ISessionState {
        return this.state;
    }

    switchState(state: ISessionState): void {
        this.state = state;
        console.log(`[CONN: ${this.connection}] State was changed to ${state.getState()}`);
    }

    syncReconnect(newConnection): void {
        this.connection = newConnection;
        this.state.setConnection(newConnection);
    }
}