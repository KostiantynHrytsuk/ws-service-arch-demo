import IEventProcessor from "./IEventProcessor";
import IEventStrategy from "./IEventStrategy";
import ISessionService from "../client-session/ISessionService";

export default abstract class AbstractEventProcessor implements IEventProcessor {

    protected strategies: {[event:string]: IEventStrategy};
    protected strategy: IEventStrategy;
    protected sessionService: ISessionService;

    protected constructor(service, strategies) {
        this.strategies = strategies;
        this.sessionService = service;
    }

    detectStrategy(event: string): IEventProcessor {
        this.strategy = this.strategies[event];
        console.log(`[EVENT PROCESSOR] Detected strategy: ${this.strategy.getName()}`)
        return this;
    }

    setStrategy(strategy: IEventStrategy): void {
        this.strategy = strategy;
    }

    abstract execute(payload): void;
}