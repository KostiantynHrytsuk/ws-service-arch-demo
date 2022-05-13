"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WebSocketController_1 = __importDefault(require("./controller/WebSocketController"));
const event1 = { event: 'INIT', connection: '1' };
const event2 = { event: 'AUTH', connection: '1' };
const event3 = { event: 'OPERATIONS', connection: '1' };
const event4 = { event: 'DESTROY', connection: '1' };
const otherEvent1 = { event: 'INIT', connection: '2' };
const otherEvent2 = { event: 'AUTH', connection: '2' };
const otherEvent3 = { event: 'OPERATIONS', connection: '2' };
const otherEvent4 = { event: 'DESTROY', connection: '2' };
const run = () => {
    const controller = new WebSocketController_1.default();
    controller.message(event1);
    controller.message(event2);
    controller.message(otherEvent1);
    controller.message(event3);
    controller.message(event3);
    controller.message(otherEvent2);
    controller.message(otherEvent3);
    controller.message(event3);
    controller.message(otherEvent3);
    controller.message(event3);
    controller.message(event4);
    controller.message(otherEvent3);
    controller.message(otherEvent4);
};
run();
//# sourceMappingURL=index.js.map