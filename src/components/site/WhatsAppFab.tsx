import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, MessageSquareQuote } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { NovaAiAssistant } from "./NovaAiAssistant";

// Authentic Official WhatsApp SVG Icon
function OfficialWhatsAppIcon({ size = 30 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function WhatsAppFab() {
  const [isAiOpen, setIsAiOpen] = useState(false);

  return (
    <>
      {/* Floating Interactive AI Assistant Dialog */}
      <NovaAiAssistant isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />

      {/* Floating Action Buttons Dock */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {/* ================= 1. ASK AI BUTTON ================= */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 220 }}
          className="relative group flex items-center"
        >
          {/* Tooltip / Badge */}
          <span className="hidden sm:inline-flex absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#12131a] border border-gold/40 px-3.5 py-1.5 text-xs font-medium text-gold shadow-elegant opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none items-center gap-1.5">
            <Sparkles size={12} className="text-gold animate-spin" />
            <span>Ask Nova AI • فوری سوال پوچھیں</span>
          </span>

          <motion.button
            onClick={() => setIsAiOpen((prev) => !prev)}
            aria-label="Ask Nova AI Assistant"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className={`relative flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-full shadow-xl border transition-all duration-300 backdrop-blur-md ${
              isAiOpen
                ? "bg-gold text-primary-foreground border-gold shadow-gold ring-2 ring-gold/40"
                : "bg-gradient-to-r from-[#181a24] to-[#0f1016] text-gold border-gold/50 hover:border-gold shadow-gold/20"
            }`}
          >
            {/* Glowing background aura */}
            <span className="absolute inset-0 rounded-full bg-gold/20 blur-md -z-10 group-hover:opacity-100 transition-opacity" />

            {isAiOpen ? (
              <>
                <X size={17} className="stroke-[2.5]" />
                <span className="text-xs font-bold tracking-wide">Close AI</span>
              </>
            ) : (
              <>
                <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-gold-gradient text-primary-foreground">
                  <Sparkles size={13} className="text-primary-foreground" />
                </div>
                <span className="text-xs font-semibold text-foreground flex items-center gap-1">
                  Ask <span className="text-gold-gradient font-bold">AI</span>
                </span>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
              </>
            )}
          </motion.button>
        </motion.div>

        {/* ================= 2. OFFICIAL WHATSAPP BUTTON ================= */}
        <motion.a
          href={BRAND.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on official WhatsApp"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="relative group"
        >
          {/* Pulsing radar wave */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 blur-md animate-ping" />

          {/* Official WhatsApp Green Action Circle */}
          <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl ring-4 ring-[#25D366]/20 transition-transform">
            <OfficialWhatsAppIcon size={30} />
          </span>

          {/* Tooltip */}
          <span className="hidden sm:inline-flex absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#12131a] border border-[#25D366]/40 px-3.5 py-1.5 text-xs font-medium text-white shadow-elegant opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>Chat on WhatsApp (0323 4362864)</span>
          </span>
        </motion.a>
      </div>
    </>
  );
}
