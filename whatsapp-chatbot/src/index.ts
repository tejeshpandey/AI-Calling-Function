import dotenv from 'dotenv';
import { Client, LocalAuth } from 'whatsapp-web.js';
import WebSocket, { WebSocketServer } from 'ws';
import { summarize, translate } from './aiFunctions';

// Load environment variables
dotenv.config();

// Initialize WhatsApp client
const client = new Client({
    authStrategy: new LocalAuth(),
});

// Initialize WebSocket server
const wss = new WebSocketServer({ port: Number(process.env.WS_PORT) || 8080 });

// WhatsApp client event listeners
client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('WhatsApp Client is ready!');
});

client.on('message', async (msg) => {
    console.log('MESSAGE RECEIVED', msg.body);
    let responseText = 'Sorry, I didn\'t understand that request.';

    if (msg.body.startsWith('summarize:')) {
        const textToSummarize = msg.body.replace('summarize:', '').trim();
        responseText = await summarize(textToSummarize);
    } else if (msg.body.startsWith('translate to')) {
        const [_, targetLang, ...textParts] = msg.body.split(' ');
        const textToTranslate = textParts.join(' ').trim();
        responseText = await translate(textToTranslate, targetLang);
    }

    msg.reply(responseText);
});

// WebSocket server event listeners
wss.on('connection', (ws: WebSocket) => {
    console.log('WebSocket connection established');
    
    ws.on('message', (message: string) => {
        console.log('Received from WebSocket:', message);
        // Here we will handle incoming WebSocket messages
    });
});

// Start the WhatsApp client
client.initialize(); 