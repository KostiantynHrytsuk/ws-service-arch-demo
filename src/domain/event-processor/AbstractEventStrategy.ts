import IEventStrategy from "./IEventStrategy";
import ISessionService from "../client-session/ISessionService";

export default abstract class AbstractEventStrategy implements IEventStrategy {

    protected name: string;
    protected sessionService: ISessionService;

    protected constructor(service: ISessionService, name: string) {
        this.sessionService = service;
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    abstract execute(payload): void;
}