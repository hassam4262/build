import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";

interface MessagingModalProps {
  isOpen: boolean;
  onClose: () => void;
  vendorName: string;
  vendorPhone: string;
}

interface Message {
  id: number;
  sender: "user" | "vendor";
  text: string;
  time: string;
}

export function MessagingModal({ isOpen, onClose, vendorName, vendorPhone }: MessagingModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "vendor",
      text: "Hello! Thank you for your inquiry. How can I help you?",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "user",
      text: "I need information about your services.",
      time: "10:32 AM",
    },
    {
      id: 3,
      sender: "vendor",
      text: "Sure! We provide comprehensive construction services. What specifically are you looking for?",
      time: "10:35 AM",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      sender: "user",
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages([...messages, userMessage]);
    setNewMessage("");

    setTimeout(() => {
      const vendorReply: Message = {
        id: messages.length + 2,
        sender: "vendor",
        text: "Thanks for your message! I'll get back to you soon with more details.",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, vendorReply]);
    }, 1000);

    toast.success("Message sent!");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            {vendorName}
          </DialogTitle>
          <p className="text-sm text-muted-foreground mt-2">{vendorPhone}</p>
        </DialogHeader>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto space-y-4 py-4 px-4 bg-secondary/20 rounded-lg">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground rounded-br-none"
                    : "bg-secondary text-foreground rounded-bl-none"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs opacity-70 mt-1">{message.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="flex gap-2 border-t pt-4">
          <Input
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            data-testid="input-message"
          />
          <Button
            size="sm"
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            data-testid="button-send-message"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
