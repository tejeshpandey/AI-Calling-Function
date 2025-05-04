"# AI-Clling-Function" 

# How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/tejeshpandey/AI-Calling-Function.git
   cd AI-Calling-Function

2.set up environment variable 
OPENAI_API_KEY=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
WS_PORT=8080 

3.If you're not already in the whatsapp-chatbot directory, navigate to it:
cd path/to/whatsapp-chatbot
4. install dependencies
npm install
5. Run the Application:
Use ts-node-dev to run the application with hot-reloading:
  npx ts-node-dev src/index.ts
6. Now qr code generated in text format use that and generate qr code using qrcodegenerator 
7. scan using your whatsapp 
8. send message by using -
summarize: my name is Tejesh
translate to french: my name is tejesh
9- bot will translate it to french


# problem faced
connecting whatsapp via qr code and making bot reply but fixed that by making changes -
Add Debugging Logs:
Add console.log statements in your message handling code to verify if the message is being received.
Verify Message Handling Logic:
Ensure your index.ts file has the correct logic to handle incoming messages. It should look for the keywords summarize: and translate to.
Check AI Function Calls:
Ensure that the AI functions (summarize and translate) are correctly implemented and accessible.
Verify API Key:
Ensure your OpenAI API key is correctly set in your environment variables. Check your .env file for the correct key.
Restart the Application:
Stop the application and restart it to see if the issue resolves

# assumptions made
WhatsApp Web Client

The bot uses whatsapp-web.js, which requires scanning a QR code to establish a session.

Only one WhatsApp session is expected to run at a time.

Message Format Requirements

The bot only responds to explicit command formats, such as:

summarize: <text>

translate to <lang>: <text>

Freeform or unclear messages are ignored or receive a fallback reply.

OpenAI Function Call Compatibility

AI function calling is expected to respond with valid tool calls (summarize, translate) as per the schema defined in openai.ts.

Environment Configuration

The .env file must contain a valid OPENAI_API_KEY before starting the app.

The key must have access to GPT-4 models that support function calling.

Message Handling

Only text messages are processed — media, stickers, or unsupported types are ignored.

The WebSocket and WhatsApp clients are assumed to be running and connected continuously.

App Lifecycle

Restarting the app is necessary after any .env or schema change.

Session persistence is not yet implemented — scanning the QR code may be required on each restart.

Debugging and Logging

Console logs are used to trace message flow, AI decisions, and function execution.

No external logging or error reporting service is connected yet.
  

