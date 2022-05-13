import AbstractEventStrategy from "../../domain/event-processor/AbstractEventStrategy";
import ISessionService from "../../domain/client-session/ISessionService";

export default class InitialConnect extends AbstractEventStrategy {
    constructor(service: ISessionService, name: string) {
        super(service, name);
    }

    execute(payload): void {
        this.sessionService.createSession(payload.connection)
    }
}