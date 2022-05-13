import ISessionState from "./ISessionState";

export default interface IActiveSession {
    execute(message):void;
    switchState(state: ISessionState): void;
    getState():ISessionState;
    syncReconnect(newConnection):void;
    destroy(reason: string):void;
}