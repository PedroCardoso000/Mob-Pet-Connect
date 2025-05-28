// chatSocket.ts
import { Client, IMessage } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { ApiConfig } from '../api/api-config';

let stompClient: Client | null = null;

export function connectChat(userId: number, onMessage: (msg: any) => void, onNotification?: (notification: any) => void) {
  const socket = new SockJS(ApiConfig.baseURL + "/chat");

  stompClient = new Client({
    webSocketFactory: () => socket,
    debug: (str) => console.log(str),
    reconnectDelay: 5000,
    onConnect: () => {
      console.log("✅ Conectado ao WebSocket");

      // Registra o usuário
      stompClient?.publish({
        destination: "/app/chat.register",
        body: JSON.stringify({ sender: userId })
      });

      // Subscreve ao canal pessoal (mensagens + notificações)
      stompClient?.subscribe(`/topic/chat/${userId}`, (message: IMessage) => {
        const data = JSON.parse(message.body);

        if (data.type === "NOTIFICATION" && onNotification) {
          onNotification(data);
        } else {
          onMessage(data);
        }
      });
    },
    onStompError: (frame) => {
      console.error('❌ Erro STOMP: ', frame.headers['message']);
      console.error('Detalhes: ', frame.body);
    },
  });

  stompClient.activate();
}

export function sendMessage(sender: number, receiver: number, content: string) {
  if (stompClient && stompClient.connected) {
    stompClient.publish({
      destination: "/app/chat.send",
      body: JSON.stringify({
        sender,
        receiver,
        content,
        type: "CHAT"
      })
    });
  } else {
    console.warn("⚠️ Cliente WebSocket não conectado.");
  }
}

export function sendNotification(sender: number, receiver: number, message: string) {
  if (stompClient && stompClient.connected) {
    stompClient.publish({
      destination: "/app/chat.send",
      body: JSON.stringify({
        sender,
        receiver,
        content: message,
        type: "NOTIFICATION"
      })
    });
  } else {
    console.warn("⚠️ Cliente WebSocket não conectado.");
  }
}

export function disconnectChat() {
  stompClient?.deactivate();
}
