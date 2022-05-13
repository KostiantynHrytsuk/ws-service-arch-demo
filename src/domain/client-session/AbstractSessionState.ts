import ISessionState from "./ISessionState";
import ICommunicationClient from "../communication/ICommunicationClient";
import IEventChannel from "../communication/IEventChannel";

export default abstract class AbstractSessionState implements ISessionState {

    protected name: string;
    protected connection;
    protected communicationClient: ICommunicationClient;
    protected eventChannel: IEventChannel;

    protected constructor(
        name: string,
        connection,
        communicationClient: ICommunicationClient,
        eventChannel: IEventChannel,
    ) {
        this.name = name;
        this.connection = connection;
        this.communicationClient = communicationClient;
        this.eventChannel = eventChannel;
    }

    public setConnection(connection): void {
        this.connection = connection;
    }

    public getState():string {
        return this.name;
    }

    public abstract emitEvent(event: string, payload: any): void;
    public abstract execute(message: any, cb?: Function): void;
}