export default interface IEventStrategy {
    execute(payload): void;
    getName(): string;
}