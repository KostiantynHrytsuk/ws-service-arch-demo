import AbstractEventProcessor from "../domain/event-processor/AbstractEventProcessor";

export default class ClientServerEventProcessor extends  AbstractEventProcessor {

    constructor(service, strategies) {
        super(service, strategies);
    }

    execute(payload): void {
        this.strategy.execute(payload);
    }
}