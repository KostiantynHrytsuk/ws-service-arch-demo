import {EventEmitter2} from "eventemitter2";
import IEventChannel from "../domain/communication/IEventChannel";

export default class SomeEventChannel extends EventEmitter2 implements IEventChannel {
    reducers: Function | Object;

    subscribe(uid: string): void {
    }

    unsubscribe(uid: string): void {
    }
}