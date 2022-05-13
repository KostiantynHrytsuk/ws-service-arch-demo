import InitialConnect from "./events/InitialConnect";
import WebSocketClientServerSession from "../domain/client-session/sessions/WebSocketClientServerSession";
import ClientServerSocketService from "../service/ClientServerSocketService";
import Auth from "./events/Auth";
import SomeEvent from "./events/SomeEvent";
import Destroy from "./events/Destroy";
import IEventProcessor from "../domain/event-processor/IEventProcessor";
import ClientServerEventProcessor from "../service/ClientServerEventProcessor";

export default class WebSocketController {

    private service = new ClientServerSocketService()
    private processor: IEventProcessor;

    constructor() {
        this.processor = new ClientServerEventProcessor(this.service, this.initStrategies());
    }

    message(message) {
        const { connection, event } = message;
        this.processor.detectStrategy(event).execute({ connection, event })
    }

    private initStrategies() {
        return {
            'INIT': new InitialConnect(this.service, 'INIT'),
            'AUTH': new Auth(this.service, 'AUTH'),
            'OPERATIONS': new SomeEvent(this.service, 'OPERATIONS'),
            'DESTROY': new Destroy(this.service, 'DESTROY'),
        };
    }
}