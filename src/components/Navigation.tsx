import { Link } from "react-router-dom";
import { Zap, Menu, X, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  );
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { to: "/", label: "Início" },
    { to: "/#interest", label: "Sistema" },
    { to: "/#desire", label: "Vantagens" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <>
      <nav className="px-6 lg:px-20 py-4 lg:py-6 flex justify-between items-center bg-haxza-bg/80 backdrop-blur-3xl sticky top-0 z-[100] border-b border-white/5">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer no-underline relative z-[120]">
          <span className="text-xl lg:text-3xl font-black tracking-tighter text-white font-display">HAXZA DIGITAL</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
          {navLinks.map((link) => (
            <Link 
              key={link.to} 
              to={link.to} 
              className="hover:text-haxza-accent transition-colors no-underline"
            >
              {link.label}
            </Link>
          ))}
          <a 
            href="https://wa.me/5511969454854?text=Ol%C3%A1%20Haxza%2C%20quero%20parar%20de%20perder%20clientes%20agora" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-6 py-3 bg-[#25D366] text-white rounded-xl hover:bg-[#1ebd5c] transition-all shadow-[0_10px_30px_rgba(37,211,102,0.3)] font-black no-underline flex items-center gap-2"
          >
            <WhatsAppIcon className="w-5 h-5" /> Começar Hoje
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative z-[120] w-12 h-12 flex flex-col items-center justify-center text-white transition-colors"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          <div className="flex flex-col gap-1.5 items-end">
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 7.5, width: "32px" } : { rotate: 0, y: 0, width: "32px" }}
              className="h-1 bg-current rounded-full" 
            />
            <motion.span 
              animate={isOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
              className="w-6 h-1 bg-current rounded-full" 
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -7.5, width: "32px" } : { rotate: 0, y: 0, width: "20px" }}
              className="h-1 bg-current rounded-full" 
            />
          </div>
        </button>
      </nav>

      {/* Mobile Overlay Menu - Rendered at root fragment level */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-haxza-bg z-[110] lg:hidden flex flex-col items-center justify-center p-8 overflow-hidden touch-none"
            style={{ height: "100dvh" }}
          >
            {/* Background Accents */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(35,134,54,0.1)_0%,transparent_50%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(35,134,54,0.1)_0%,transparent_50%)] pointer-events-none" />
            
            <div className="flex flex-col gap-12 w-full items-center relative z-10 max-h-full overflow-y-auto pt-20 pb-10">
              <div className="flex flex-col gap-8 w-full items-center">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + (0.05 * i), duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full text-center"
                  >
                    <Link 
                      to={link.to} 
                      onClick={() => setIsOpen(false)}
                      className="text-5xl sm:text-7xl font-black uppercase tracking-[-0.04em] text-white hover:text-haxza-accent transition-all no-underline italic font-display"
                    >
                      <span className="block hover:scale-105 transition-transform duration-300">
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-12 w-full max-w-xs"
                >
                  <a 
                    href="https://wa.me/5511969454854?text=Ol%C3%A1%20Haxza%2C%20quero%20parar%20de%20perder%20clientes%20agora" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full inline-flex items-center justify-center gap-4 px-8 py-5 sm:px-10 sm:py-8 bg-[#25D366] hover:bg-[#1ebd5c] transition-colors text-white rounded-[2rem] sm:rounded-[2.5rem] font-black text-lg sm:text-2xl uppercase tracking-wider sm:tracking-widest no-underline shadow-[0_20px_40px_rgba(37,211,102,0.4)]"
                  >
                    Ativar Agora <WhatsAppIcon className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" />
                  </a>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-20 text-center"
              >
                <div className="w-20 h-px bg-white/10 mx-auto mb-10" />
                <p className="text-[10px] font-black uppercase tracking-[0.8em] text-white/20 mb-8">Intelligence Labs</p>
                <div className="flex justify-center gap-12 text-white/40 text-[11px] font-black uppercase tracking-[0.4em]">
                  <a href="#" className="hover:text-haxza-accent transition-colors no-underline">Insta</a>
                  <a href="https://wa.me/5511969454854" className="hover:text-haxza-accent transition-colors no-underline">Whats</a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
