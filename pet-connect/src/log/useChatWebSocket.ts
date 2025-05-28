// hooks/useChatWebSocket.ts
import { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";
import { Client, IMessage } from "@stomp/stompjs";

export function useChatWebSocket(roomId: string, currentUser: string) {
  const [messages, setMessages] = useState<any[]>([]);
  const stompClient = useRef<Client | null>(null);

  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/chat");

    const client = new Client({
      webSocketFactory: () => socket as WebSocket,
      reconnectDelay: 5000,
      onConnect: () => {
        console.log("✅ Conectado ao WebSocket");

        // 1. Inscrição no canal da sala de chat
        client.subscribe(`/topic/chat/${roomId}`, (message: IMessage) => {
          const body = JSON.parse(message.body);
          console.log("💬 Mensagem recebida:", body);
          setMessages((prev) => [...prev, body]);
        });

        // 2. Inscrição no canal pessoal para notificações
        client.subscribe(`/topic/chat/${currentUser}`, (message: IMessage) => {
          const body = JSON.parse(message.body);
          console.log("🔔 Notificação recebida:", body);

          if (body.type === "NOTIFICATION") {
            // Aqui você pode mostrar um toast, alerta ou atualizar a lista de conversas
            // Exemplo:
            alert(`Nova conversa iniciada com você por usuário ${body.sender}`);
          } else {
            setMessages((prev) => [...prev, body]);
          }
        });

        // 3. Registro do usuário
        client.publish({
          destination: "/app/chat.register",
          body: JSON.stringify({ sender: currentUser }),
        });
      },
      onStompError: (frame) => {
        console.error("❌ Erro STOMP:", frame.headers["message"]);
      },
    });

    client.activate();
    stompClient.current = client;

    return () => {
      client.deactivate();
    };
  }, [roomId, currentUser]);

  function sendMessage(content: string, receiver: string) {
    if (stompClient.current?.connected) {
      const msg = {
        sender: currentUser,
        receiver,
        content,
        type: "CHAT",
      };
      stompClient.current.publish({
        destination: "/app/chat.send",
        body: JSON.stringify(msg),
      });
    }
  }

  return { messages, sendMessage };
}
