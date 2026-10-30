import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  X,
  Send,
  RotateCcw,
  ExternalLink,
  MessageCircle,
  HelpCircle,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { findBestAnswer, KnowledgeTopic } from "@/lib/ai-knowledge";
import { BRAND } from "@/lib/brand";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
  topic?: KnowledgeTopic;
  action?: {
    label: string;
    url: string;
    isExternal?: boolean;
  };
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "welcome",
    sender: "ai",
    text: `خوش آمدید! Welcome to **Nova Formation Ltd** AI Consultant.\n\nI can answer all your questions about **UK LTD Formation**, **US LLC Formation**, **Business Banking (Wise, Stripe, Mercury)**, **Pricing Packages**, and **Tax Compliance**.\n\nHow can I help your business today?`,
    timestamp: "Just now",
  },
];

const QUICK_PROMPTS = [
  "UK LTD Formation & Pricing 🇬🇧",
  "US LLC Formation & State Fees 🇺🇸",
  "Stripe & Wise Business Banking 💳",
  "What documents are required? 📋",
  "Chat on WhatsApp 💬",
];

export function NovaAiAssistant({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [suggestedQuestions, setSuggestedQuestions] = useState<string[]>(QUICK_PROMPTS);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [isOpen, messages, isTyping]);

  const handleSend = (userText: string) => {
    const textToSend = userText.trim();
    if (!textToSend) return;

    const userMsg: Message = {
      id: "u-" + Date.now(),
      sender: "user",
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate smart AI response thinking delay
    setTimeout(() => {
      const answer = findBestAnswer(textToSend);
      const aiMsg: Message = {
        id: "a-" + Date.now(),
        sender: "ai",
        text: answer.text,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        topic: answer.topic,
        action: answer.topic?.action,
      };

      setMessages((prev) => [...prev, aiMsg]);
      setSuggestedQuestions(answer.suggestedQuestions);
      setIsTyping(false);
    }, 450);
  };

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
    setSuggestedQuestions(QUICK_PROMPTS);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-24 right-4 sm:right-6 z-50 w-[94vw] sm:w-[420px] max-w-[450px] h-[580px] max-h-[82vh] flex flex-col rounded-2xl border border-gold/30 bg-[#0c0d12]/95 backdrop-blur-xl shadow-2xl shadow-black/80 overflow-hidden text-foreground"
        >
          {/* Header */}
          <div className="relative px-4 py-3 bg-gradient-to-r from-card/90 via-[#181a24] to-card/90 border-b border-border/50 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-gold-gradient shadow-gold text-primary-foreground font-bold">
                <Sparkles size={18} />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-background rounded-full" />
              </div>
              <div>
                <h3 className="text-sm font-semibold flex items-center gap-1.5 leading-tight">
                  <span className="text-gold-gradient font-bold">Nova AI</span>
                  <span className="text-silver-gradient text-xs">Consultant</span>
                </h3>
                <p className="text-[11px] text-muted-foreground flex items-center gap-1">
                  <CheckCircle2 size={10} className="text-emerald-400" />
                  Live Official Knowledge Engine
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                title="Restart chat"
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-card/60 transition-colors"
              >
                <RotateCcw size={15} />
              </button>
              <button
                onClick={onClose}
                title="Close chat"
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-card/60 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 scrollbar-thin text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-4 py-2.5 shadow-sm text-xs sm:text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-gold-gradient text-primary-foreground font-medium rounded-br-xs"
                      : "bg-card/70 border border-border/70 text-foreground/90 rounded-bl-xs"
                  }`}
                >
                  <div className="whitespace-pre-wrap font-sans">
                    {msg.text.split("\n").map((line, idx) => {
                      // simple bold renderer
                      const parts = line.split(/(\*\*.*?\*\*)/g);
                      return (
                        <p key={idx} className={line === "" ? "h-2" : "mb-1 last:mb-0"}>
                          {parts.map((p, pIdx) => {
                            if (p.startsWith("**") && p.endsWith("**")) {
                              return (
                                <strong key={pIdx} className="font-semibold text-gold">
                                  {p.slice(2, -2)}
                                </strong>
                              );
                            }
                            return p;
                          })}
                        </p>
                      );
                    })}
                  </div>

                  {/* Optional Action CTA */}
                  {msg.action && (
                    <div className="mt-2.5 pt-2 border-t border-border/40 flex flex-wrap gap-2">
                      <a
                        href={msg.action.url}
                        target={msg.action.isExternal ? "_blank" : undefined}
                        rel={msg.action.isExternal ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold-gradient text-primary-foreground text-xs font-semibold shadow-gold hover:opacity-90 transition-opacity"
                      >
                        {msg.action.label}
                        <ExternalLink size={12} />
                      </a>
                      <a
                        href={BRAND.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20ba59] transition-colors"
                      >
                        <MessageCircle size={12} />
                        WhatsApp
                      </a>
                    </div>
                  )}
                </div>
                <span className="text-[10px] text-muted-foreground mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-card/50 border border-border/50 text-xs text-muted-foreground w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce [animation-delay:0.4s]" />
                <span className="ml-1 text-[11px]">Nova AI is preparing details...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions Chips */}
          <div className="px-3 py-1.5 bg-background/50 border-t border-border/40 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {suggestedQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full text-[11px] bg-card hover:bg-gold/20 hover:text-gold border border-border/60 hover:border-gold/40 text-muted-foreground transition-colors shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="p-3 bg-card/80 border-t border-border/60 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything (LLC, UK LTD, Pricing, Banking)..."
              className="flex-1 bg-background/80 border border-border/70 rounded-full px-3.5 py-2 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/40 transition-all"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-gold-gradient text-primary-foreground disabled:opacity-40 hover:scale-105 active:scale-95 transition-transform shrink-0 shadow-gold"
            >
              <Send size={15} />
            </button>
          </form>

          {/* Footer Live WhatsApp Help Note */}
          <div className="px-3 py-1 bg-background/90 text-center border-t border-border/30">
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-muted-foreground hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
            >
              <span>Prefer speaking to a human agent?</span>
              <strong className="text-emerald-400 font-semibold underline">
                WhatsApp 0323 4362864
              </strong>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
