export default interface ISessionState {
    execute(message: any, cb?: Function):void;
    emitEvent(event: string, payload: any): void;
    setConnection(connection):void;
    getState(): string;
}