import {GeneralEventEmitter, ListenToOptions} from "eventemitter2";

export default interface IEventChannel extends ListenToOptions {
    subscribe(uid: string): void;
    unsubscribe(uid: string): void;
    emit(event, payload): void;
}