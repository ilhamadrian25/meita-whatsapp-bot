"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const whatsapp_web_js_1 = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const startWhatsapp = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = new whatsapp_web_js_1.Client({ authStrategy: new whatsapp_web_js_1.NoAuth() });
        client.on("qr", (qr) => {
            qrcode.generate(qr, { small: true });
        });
        client.on("authenticated", (session) => {
            console.log("Authenticated");
        });
        client.on("ready", () => {
            console.log("Client is ready!");
        });
        client.on('message', (message) => {
            if (message.body === '!ping') {
                message.reply('pong');
            }
        });
        yield client.initialize();
    }
    catch (error) {
        console.error("Error starting WhatsApp:", error);
    }
});
startWhatsapp();
