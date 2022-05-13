import IEventStrategy from "./IEventStrategy";

export default interface IEventProcessor {
    detectStrategy(event: string): IEventProcessor;
    execute(payload): void;
    setStrategy(strategy: IEventStrategy):void;
}