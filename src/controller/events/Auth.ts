import AbstractEventStrategy from "../../domain/event-processor/AbstractEventStrategy";
import ISessionService from "../../domain/client-session/ISessionService";

export default class Auth extends AbstractEventStrategy {
    constructor(service: ISessionService, name: string) {
        super(service, name);
    }

    execute(payload): void {
        this.sessionService.sendMessage({event: 'AUTH'}, payload.connection);
    }
}