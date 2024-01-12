import { Client, NoAuth } from "whatsapp-web.js";
const qrcode = require("qrcode-terminal");

const startWhatsapp = async () => {
    try {
        const client = new Client({ authStrategy: new NoAuth() });

        client.on("qr", (qr) => {
            qrcode.generate(qr, { small: true });
        });

        client.on("authenticated", (session) => {
            console.log("Authenticated");
        });

        client.on("ready", () => {
            console.log("Client is ready!");
        });

        client.on('message', (message: any) => {
            if(message.body === '!ping') {
                message.reply('pong');
            }
        });
         

        await client.initialize();
    } catch (error) {
        console.error("Error starting WhatsApp:", error);
    }
};

startWhatsapp();
