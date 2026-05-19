import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Zap, 
  Layout, 
  Target,
  Search,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  MessageCircle,
  Star
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  );
}

export default function Landing() {
  const containerRef = useRef(null);
  const { hash, pathname } = useLocation();

  // SEO configuration
  const siteUrl = "https://haxza.com";
  const canonicalUrl = `${siteUrl}${pathname}`;

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    { name: "Carlos Eduardo", role: "Clínica de Estética", text: "Antes, recebíamos muita mensagem perguntando só o preço e sumiam. O quiz filtrou esses curiosos. Na primeira semana, fechamos 3 pacotes de alto valor porque só chegamos a falar com quem realmente queria fechar." },
    { name: "Luciana Ferrari", role: "Escritório de Advocacia", text: "Estávamos perdendo clientes para advogados iniciantes simplesmente porque eles respondiam mais rápido. O sistema agendou 5 consultas automáticas no Google no primeiro mês, sem eu precisar olhar o celular." },
    { name: "Roberto Almeida", role: "Instalação de Energia Solar", text: "O site antigo não passava confiança. Reformulamos, e só a cara de 'empresa grande' fez as pessoas pararem de pechinchar. Eles entendem o valor antes mesmo de eu mandar a proposta." },
    { name: "Dra. Mariana Costa", role: "Harmonização Facial", text: "Eu não tinha tempo de cuidar do Instagram. Com a captação direta do Google, o cliente pesquisa, entra no site, sente a autoridade e já clica pra agendar. Economizo horas por dia." },
    { name: "Felipe Mendes", role: "Venda de Imóveis de Alto Padrão", text: "Tráfego desqualificado era meu maior problema. A estrutura da Haxza educa o lead antes de ele falar comigo no WhatsApp. Agora, quando me chamam, a venda já está 80% feita." }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-haxza-bg text-[#e6edf3] font-sans selection:bg-haxza-accent/20 scroll-smooth relative">
      <Helmet>
        <title>Haxza | Digital Intelligence - Site + Captação de Clientes 24h</title>
        <meta name="description" content="A Haxza cria sistemas de captação automática de clientes do Google. Sites de alta conversão e automação de vendas para negócios que buscam escala." />
        <meta name="keywords" content="marketing digital, captação de clientes, google ads, automação de vendas, site para dentista, site para estetica, haxza" />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Haxza | Digital Intelligence - Captação de Clientes 24h" />
        <meta property="og:description" content="Sistemas inteligentes para colocar sua empresa no topo do Google e automatizar seu atendimento." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Haxza Digital Intelligence" />
        <meta property="og:image" content={`${siteUrl}/favicon.png`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Haxza | Digital Intelligence" />
        <meta name="twitter:description" content="Sistemas inteligentes para colocar sua empresa no topo do Google e automatizar seu atendimento." />
        <meta name="twitter:image" content={`${siteUrl}/favicon.png`} />

        {/* JSON-LD Schema Markup para Negócio Local / Agência */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Haxza Digital Intelligence",
            "url": siteUrl,
            "logo": `${siteUrl}/favicon.png`,
            "description": "A Haxza cria sistemas de captação automática de clientes do Google. Sites de alta conversão e automação de vendas para negócios que buscam escala.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "BR"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+55-11-96945-4854",
              "contactType": "customer service"
            },
            "sameAs": [
              "https://www.instagram.com/haxzadigital"
            ]
          })}
        </script>
      </Helmet>

      {/* GitHub-style Gradient Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-haxza-accent/5 to-transparent pointer-events-none z-0" />
      
      <Navigation />

      <main className="w-full">
        {/* BLOCK 1: THE HOOK - DARK */}
        <motion.section 
          id="attention"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-haxza-bg pt-20 lg:pt-32 pb-24 lg:pb-32 relative z-10 overflow-hidden"
        >
          {/* Subtle Grid and Glow Effects */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_10%,#000_70%,transparent_100%)] pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-haxza-accent/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-[1280px] mx-auto px-6 lg:px-20 text-center flex flex-col items-center relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.95] md:leading-[0.9] tracking-[-0.05em] text-white mb-8 lg:mb-12 font-display uppercase italic"
            >
              Seu próximo cliente <br className="hidden md:block" />
              <span className="text-white/40">está no </span>
              <span className="text-haxza-accent drop-shadow-[0_0_30px_rgba(35,134,54,0.3)] inline-flex items-center gap-2 md:gap-4">
                Google
                <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16 inline-block align-middle">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1.02.68-2.33 1.09-3.71 1.09-2.84 0-5.25-1.92-6.11-4.48H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.89 14.17c-.22-.66-.35-1.37-.35-2.17s.13-1.51.35-2.17V7H2.18C1.43 8.55 1 10.23 1 12s.43 3.45 1.18 5L5.89 14.17z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.71 2.84c.86-2.55 3.27-4.53 6.11-4.53z" fill="#EA4335"/>
                </svg>
              </span> agora.
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 lg:space-y-8 mb-16 lg:mb-20 flex flex-col items-center max-w-4xl"
            >
              <p className="text-lg sm:text-xl lg:text-2xl text-white/60 leading-tight font-light font-sans tracking-tight">
                Enquanto você lê isso, pessoas estão pesquisando exatamente o que você vende. <br className="hidden md:block" />
                A pergunta não é se elas vão comprar.
                <span className="block text-white font-medium mt-2">É de quem elas vão comprar — de você ou do seu concorrente.</span>
              </p>
              
              <div className="pt-10 border-t border-white/5 w-full flex flex-col items-center justify-center gap-8">
                <p className="text-lg md:text-xl text-white/50 text-center leading-relaxed font-sans max-w-2xl">
                  Hoje, quem aparece primeiro e responde mais rápido, fecha.
                  <span className="text-haxza-accent font-bold not-italic block mt-1">Quem demora… perde.</span>
                </p>
                <div className="flex items-center gap-4 py-3 px-6 bg-haxza-accent/5 rounded-2xl border border-haxza-accent/20">
                  <span className="text-haxza-accent shrink-0 font-bold">/</span>
                  <p className="text-base text-white/80 font-bold font-sans">Todos os dias, clientes prontos para comprar estão indo embora sem você nem perceber.</p>
                </div>
                <div className="text-xs lg:text-sm font-black uppercase tracking-[0.4em] text-white/40 pt-4">
                  Sistema completo: site + captação + automação de clientes 24h
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-6 lg:gap-10 w-full sm:w-auto mt-4"
            >
              <a href="https://wa.me/5511969454854?text=Ol%C3%A1%20Haxza%2C%20quero%20parar%20de%20perder%20clientes%20agora" target="_blank" rel="noopener noreferrer" className="group relative w-full sm:w-auto px-8 py-5 sm:px-10 sm:py-6 lg:px-12 lg:py-7 bg-[#25D366] hover:bg-[#1ebd5c] text-white font-black rounded-2xl transition-all flex items-center justify-center gap-2 shadow-[0_20px_50px_rgba(37,211,102,0.3)] text-base sm:text-lg lg:text-xl tracking-widest cursor-pointer hover:scale-[1.02] active:scale-95 overflow-hidden no-underline border border-white/20">
                <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.3),transparent)] -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative z-10 flex items-center gap-4 font-display uppercase italic text-center text-balance leading-tight drop-shadow-md">
                  <WhatsAppIcon className="w-6 h-6 lg:w-8 lg:h-8 shrink-0 group-hover:scale-110 transition-transform drop-shadow-sm" /> Parar de Perder Clientes
                </span>
              </a>
            </motion.div>

            {/* Centered Impact Stats */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-24 p-6 sm:p-8 border border-white/5 bg-white/[0.02] rounded-3xl backdrop-blur-sm flex flex-col md:flex-row items-center gap-6 lg:gap-20"
            >
              <div className="flex items-center gap-5">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-14 h-14 rounded-full border-4 border-[#010409] bg-haxza-card overflow-hidden shadow-2xl">
                      <img src={`https://i.pravatar.cc/100?u=${i*33}`} alt="Foto de perfil de um cliente satisfeito com os serviços da Haxza" referrerPolicy="no-referrer" loading="lazy" />
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="text-xl font-black text-white tracking-tight leading-none mb-1">Impacto Real</div>
                  <div className="text-xs text-white/30 uppercase tracking-widest font-mono">+50 empresas escaladas</div>
                </div>
              </div>
              
              <div className="h-px w-20 bg-white/10 hidden md:block" />
              
              <div className="flex items-center gap-4 py-2 bg-red-500/5 px-6 rounded-xl border border-red-500/10">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
                <span className="text-xs font-bold text-red-500 uppercase tracking-[0.2em]">Quem responde primeiro, fecha.</span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* BLOCK 2: THE SOLUTION - PREMIUM SAGE GREEN */}
        <motion.section 
          id="interest"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-haxza-light py-24 lg:py-32 border-y border-haxza-accent/5 relative overflow-hidden text-white"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(35,134,54,0.03)_0%,transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_90%_80%,rgba(35,134,54,0.03)_0%,transparent_50%)]" />

          <div className="max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10">
            <div className="mb-32 w-full lg:max-w-6xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-haxza-accent/10 bg-haxza-accent/5 text-haxza-accent text-[9px] font-black uppercase tracking-[0.5em] mb-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-haxza-accent animate-pulse" />
                  O Problema Real
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-8 lg:mb-12 tracking-tight text-white leading-[1] font-display uppercase italic text-balance">
                  Você não precisa trabalhar mais. <br />
                  Você precisa parar de perder <span className="text-white relative inline-block">
                    oportunidades
                    <svg className="absolute -bottom-2 lg:-bottom-3 left-0 w-full h-2 text-white/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 25 2 50 5 T 100 8" fill="none" stroke="currentColor" strokeWidth="4" />
                    </svg>
                  </span> que já existem.
                </h2>
                
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mt-16">
                  <div className="space-y-8">
                    <p className="text-lg lg:text-2xl text-white/60 font-light leading-relaxed">
                      O sistema Haxza foi criado para resolver um problema simples:
                    </p>
                    
                    <div className="space-y-4 pl-4 border-l-2 border-red-500/30">
                      <div className="text-xl text-white/80 font-medium"><span className="text-red-500/50 mr-2">/</span> clientes interessados chegam…</div>
                      <div className="text-xl text-white/80 font-medium"><span className="text-red-500/50 mr-2">/</span> você demora…</div>
                      <div className="text-xl text-white font-bold"><span className="text-red-500 mr-2">/</span> e eles fecham com outro.</div>
                    </div>
                    
                    <div className="pt-8 border-t border-white/10 mt-8">
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-[2px] bg-haxza-accent/50" />
                        <span className="text-haxza-accent font-black uppercase tracking-[0.2em] text-sm">O Que Muda com o Sistema</span>
                      </div>
                      
                      <div className="space-y-4">
                        {[
                          "Seu cliente encontra você no Google",
                          "Ele entende seu serviço rapidamente",
                          "Ele deixa os dados automaticamente",
                          "E chega até você pronto para fechar"
                        ].map((txt, i) => (
                           <div key={i} className="flex items-start gap-3 text-white/90 font-medium text-lg lg:text-xl">
                             <CheckCircle2 className="text-haxza-accent w-6 h-6 shrink-0 mt-0.5" />
                             {txt}
                           </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 sm:p-8 lg:p-10 bg-haxza-bg/40 backdrop-blur-md border border-haxza-accent/10 rounded-[2rem] shadow-xl shadow-haxza-accent/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-haxza-accent/5 blur-3xl rounded-full" />
                    <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                      <div>
                        <h4 className="text-sm lg:text-lg font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
                          <span className="text-haxza-accent">/</span> <span className="text-white/60">Resultado:</span>
                        </h4>
                        <p className="text-2xl lg:text-3xl text-white leading-[1.1] font-display uppercase italic tracking-tighter">
                          Você para de perder tempo com curiosos <br /> <span className="text-haxza-accent">e começa a falar só com quem já quer comprar.</span>
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-4 text-[10px] font-black tracking-[0.4em] text-white/30 uppercase">
                        <Zap className="w-4 h-4 text-haxza-accent/50" /> Vendas Diretas Limitadas
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="mb-10 flex items-center gap-4">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">Como funciona na prática:</span>
              <div className="h-px flex-1 bg-haxza-accent/10" />
            </div>
            
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-10 items-stretch">
              {[
                { 
                  icon: Layout, 
                  title: "Site de alta conversão", 
                  desc: "Seu serviço apresentado de forma clara, rápida e persuasiva. O cliente entra e já entende por que escolher você.",
                  color: "bg-emerald-500/5"
                },
                { 
                  icon: Target, 
                  title: "Sistema de captura automática", 
                  desc: "Enquanto você trabalha ou descansa, o sistema coleta e organiza os contatos interessados.",
                  color: "bg-haxza-accent/10"
                },
                { 
                  icon: Search, 
                  title: "Presença no Google", 
                  desc: "Você aparece no momento exato em que o cliente precisa.",
                  color: "bg-zinc-900/5"
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="h-full p-6 sm:p-8 lg:p-10 border border-haxza-accent/10 bg-haxza-bg/40 backdrop-blur-md shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group rounded-[2rem] lg:rounded-[2.5rem] relative overflow-hidden flex flex-col"
                >
                  <div className={`w-14 h-14 lg:w-16 lg:h-16 ${item.color} rounded-xl lg:rounded-2xl flex items-center justify-center mb-6 lg:mb-8 group-hover:bg-haxza-accent transition-all duration-700 shadow-inner shrink-0`}>
                    <item.icon className="w-6 h-6 lg:w-7 lg:h-7 text-haxza-accent group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                  </div>
                  <h4 className="font-bold text-lg lg:text-2xl text-white mb-3 lg:mb-4 tracking-tight font-display">
                    {item.title}
                  </h4>
                  <p className="text-white/60 leading-relaxed text-base lg:text-lg font-sans tracking-tight flex-grow">{item.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.section>

        {/* BLOCK 3: IMPACT - DARK SECTION */}
        <motion.section 
          id="desire"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-haxza-bg py-24 lg:py-32 relative overflow-hidden"
        >
          {/* Subtle Glows */}
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-haxza-accent/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-[1280px] mx-auto px-6 lg:px-20 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
              <div className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[9px] font-black text-white/40 uppercase tracking-[0.5em] mb-8 inline-block">
                Eficiência Operacional
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tighter text-white leading-[0.85] font-display uppercase italic">O Resultado <br /> na sua Rotina.</h2>
              <p className="text-lg text-white/40 leading-snug font-light tracking-tight">
                Você deixa de ser reativo e passa a ter controle sobre o <span className="text-white font-bold underline decoration-haxza-accent underline-offset-8">fluxo de clientes.</span>
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 w-full">
              {[
                { title: "Menos mensagens inúteis", detail: "Fim da perda de tempo." },
                { title: "Mais clientes decididos", detail: "Conversas com intenção." },
                { title: "Agenda mais organizada", detail: "Foque no que dá lucro." },
                { title: "Mais previsibilidade", detail: "Segurança de faturamento." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col gap-4 p-6 lg:p-7 bg-haxza-card border border-white/5 rounded-2xl group hover:border-haxza-accent/60 transition-all duration-500 relative overflow-visible h-full"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-haxza-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <CheckCircle2 className="text-haxza-accent w-6 h-6 lg:w-8 lg:h-8 mb-2 lg:mb-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300 shrink-0" />
                  <div className="flex flex-col h-full justify-start relative z-10">
                    <div className="text-lg lg:text-xl font-black text-white uppercase tracking-tight mb-4 leading-tight font-display break-words py-1 pr-2">{item.title}</div>
                    <div className="text-[10px] lg:text-xs text-white/40 font-bold uppercase tracking-[0.2em] font-sans mt-auto">{item.detail}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* SOCIAL PROOF - MANUAL SLIDER */}
        <motion.section 
          id="social-proof"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-haxza-light py-24 lg:py-32 border-t border-haxza-accent/5 overflow-hidden text-white"
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-20 relative">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-12 lg:mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl"
              >
                <div className="flex items-center gap-3 mb-6 text-white">
                   <div className="w-6 h-[2px] bg-white/30" />
                   <span className="text-[10px] font-black uppercase tracking-[0.5em]">Validação Real</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-white leading-[0.9] lg:leading-[0.85] font-display uppercase italic">Resultados <br className="hidden sm:block" /> que falam <br /> por <span className="text-haxza-accent">si.</span></h2>
              </motion.div>
              <div className="max-w-md text-white/60 font-light text-base lg:text-lg lg:text-right">
                Empresas que implementam esse tipo de sistema deixam de depender de indicação e passam a ter entrada constante de clientes. Em poucos dias, já começam a receber contatos diretos que vieram do Google.
              </div>
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 1.02 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full"
                >
                  <div className="w-full min-h-[350px] p-8 pt-10 sm:p-12 lg:p-16 bg-haxza-bg/40 backdrop-blur-md border border-haxza-accent/10 rounded-[2rem] lg:rounded-[3rem] flex flex-col items-center justify-center text-center shadow-2xl shadow-haxza-accent/5 relative overflow-hidden group">
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-haxza-accent/5 blur-[100px] rounded-full pointer-events-none transition-opacity duration-1000 group-hover:opacity-100 opacity-50" />
                    
                    <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
                      <div className="flex gap-1 mb-6 sm:mb-8 lg:mb-10">
                        {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-haxza-accent fill-haxza-accent" />)}
                      </div>
                      <p className="text-base sm:text-xl lg:text-2xl text-white leading-relaxed lg:leading-tight font-light mb-8 sm:mb-10 lg:mb-12 font-sans italic opacity-90 max-w-5xl text-center px-4">
                        "{testimonials[currentTestimonial].text}"
                      </p>
                      <div className="flex flex-col items-center gap-4 lg:gap-5">
                        <div className="h-px w-12 lg:w-16 bg-haxza-accent/30" />
                        <div>
                          <div className="text-lg lg:text-2xl font-bold text-white uppercase tracking-tighter leading-none mb-2 font-display">
                            {testimonials[currentTestimonial].name}
                          </div>
                          <div className="text-[9px] text-white/40 uppercase tracking-[0.4em] font-black font-sans">
                            {testimonials[currentTestimonial].role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="mt-8 sm:mt-0 w-full flex justify-center gap-6 sm:gap-0 sm:absolute sm:top-1/2 sm:-translate-y-1/2 pointer-events-none">
                <button 
                  onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="pointer-events-auto sm:absolute sm:-left-6 z-30 w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-haxza-accent border border-haxza-accent text-white flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 transition-all active:scale-95 cursor-pointer group/btn shadow-[0_10px_30px_rgba(35,134,54,0.3)] shrink-0"
                >
                  <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 sm:group-hover/btn:-translate-x-1 transition-transform" />
                </button>
                
                <button 
                  onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                  className="pointer-events-auto sm:absolute sm:-right-6 z-30 w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-haxza-accent border border-haxza-accent text-white flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 transition-all active:scale-95 cursor-pointer group/btn shadow-[0_10px_30px_rgba(35,134,54,0.3)] shrink-0"
                >
                  <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 sm:group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* FAQ - ACCORDION */}
        <motion.section 
          id="faq"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-haxza-bg py-24 lg:py-32 relative overflow-hidden"
        >
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h2 className="text-4xl lg:text-6xl font-black text-white text-center mb-24 font-display uppercase tracking-tight">Dúvidas Frequentes</h2>
            
            <div className="space-y-6">
              {[
                { 
                  q: "Preciso entender de tecnologia?", 
                  a: "Não. Você recebe tudo pronto. Seu foco continua sendo o seu negócio." 
                },
                { 
                  q: "Demora para ver resultado?", 
                  a: "Não. Assim que o sistema entra no ar, você já começa a receber contatos interessados." 
                },
                { 
                  q: "Isso funciona para meu tipo de negócio?", 
                  a: "Se seus clientes pesquisam no Google antes de comprar, sim." 
                }
              ].map((faq, i) => (
                <div key={i} className="p-8 lg:p-10 bg-white/[0.02] border border-white/5 rounded-3xl group hover:border-haxza-accent/30 transition-all duration-300">
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-4 flex items-center gap-4">
                    <span className="text-haxza-accent font-black text-xl block leading-none">/ 0{i+1}</span>
                    {faq.q}
                  </h3>
                  <p className="text-white/40 leading-relaxed font-sans font-light pl-6 lg:pl-10 text-base lg:text-lg">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* BLOCK 4: CONVERSION - DARK FINISH */}
        <motion.section 
          id="action"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-haxza-light py-24 lg:py-32 relative overflow-hidden"
        >
          {/* Decorative mesh */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(35,134,54,0.08)_0%,transparent_50%)] pointer-events-none" />
          
          <div className="max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-haxza-bg p-8 sm:p-20 lg:p-24 rounded-[3rem] text-center relative overflow-hidden border border-haxza-accent/10 shadow-3xl"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-haxza-accent/40 to-transparent" />
              
              <h3 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-10 lg:mb-14 leading-[0.9] lg:leading-[0.8] tracking-[-0.04em] relative z-10 text-white font-display uppercase italic text-balance">
                Hoje você <br />tem duas opções.
              </h3>
              
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-20 lg:mb-24 text-left h-full">
                <div className="p-8 sm:p-12 border border-white/5 bg-white/[0.01] rounded-[2rem] space-y-8 h-full">
                   <div className="inline-flex items-center gap-3 text-red-500/60 uppercase text-[10px] font-black tracking-[0.4em]">
                     <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                     Continuar como está:
                   </div>
                   <div className="space-y-5">
                     {[
                       "Perdendo clientes por demora",
                       "Dependendo de indicação",
                       "Sem previsibilidade"
                     ].map((text, i) => (
                       <div key={i} className="flex items-start gap-4 text-white/40 font-light text-lg md:text-xl">
                         <div className="w-6 h-6 md:w-7 md:h-7 rounded-full border border-white/10 flex items-center justify-center text-[10px] shrink-0 mt-0.5">✕</div>
                         {text}
                       </div>
                     ))}
                   </div>
                </div>

                <div className="p-8 sm:p-12 bg-haxza-accent/5 border border-haxza-accent/20 rounded-[2rem] space-y-8 relative overflow-hidden group h-full">
                   <div className="absolute -top-10 -right-10 w-40 h-40 bg-haxza-accent/10 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-1000" />
                   
                   <div className="inline-flex items-center gap-3 text-haxza-accent uppercase text-[10px] font-black tracking-[0.4em]">
                     <div className="w-2 h-2 rounded-full bg-haxza-accent animate-pulse" />
                     Estruturar seu sistema:
                   </div>
                   <div className="space-y-5">
                     {[
                       "Clientes chegando com intenção real",
                       "Mais controle sobre sua agenda",
                       "Crescimento mais previsível"
                     ].map((text, i) => (
                       <div key={i} className="flex items-start gap-4 text-white/90 font-medium text-lg md:text-xl">
                         <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-haxza-accent flex items-center justify-center text-[10px] text-white shrink-0 mt-0.5">✓</div>
                         {text}
                       </div>
                     ))}
                   </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-10 lg:gap-12">
                <div className="max-w-3xl">
                  <p className="text-lg sm:text-xl text-white/50 mb-4 font-light tracking-wide uppercase">
                    Seu cliente já está procurando.
                  </p>
                  <h4 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-10 lg:mb-12 tracking-tighter leading-tight font-display uppercase italic text-balance">
                    A única pergunta é: ele vai encontrar você… <span className="text-haxza-accent block mt-2">ou outra empresa mais preparada?</span>
                  </h4>
                  
                  <a 
                    href="https://wa.me/5511969454854?text=Ol%C3%A1%20Haxza%2C%20quero%20come%C3%A7ar%20a%20receber%20clientes%20do%20Google" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full group relative px-6 py-4 sm:px-8 sm:py-6 lg:px-10 lg:py-8 bg-[#25D366] hover:bg-[#1ebd5c] text-white font-black text-base sm:text-lg lg:text-xl tracking-wide sm:tracking-widest transition-all shadow-[0_30px_60px_rgba(37,211,102,0.3)] cursor-pointer overflow-hidden rounded-2xl flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-[0.98] border border-white/20 no-underline"
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.3),transparent)] -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                    <span className="relative z-10 flex items-center justify-center gap-4 text-center text-balance leading-tight uppercase font-display italic drop-shadow-md">
                      <WhatsAppIcon className="w-6 h-6 lg:w-8 lg:h-8 shrink-0 group-hover:scale-110 transition-transform drop-shadow-sm" /> Receber Clientes do Google
                    </span>
                  </a>
                  
                  <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] sm:tracking-[0.6em] text-white/30">
                    <div className="w-8 h-[1px] bg-white/10 hidden sm:block" />
                    Últimas vagas para novos projetos este mês
                    <div className="w-8 h-[1px] bg-white/10 hidden sm:block" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-[1400px] mx-auto px-6 lg:px-20 py-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 text-[10px] text-white/20 font-black uppercase tracking-[0.4em]">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-white tracking-tighter text-2xl font-display">HAXZA</span>
          </div>
          <span className="opacity-20">|</span>
          <span>© {new Date().getFullYear()} Digital Solutions</span>
        </div>
        <div className="flex gap-12">
          <a href="#" className="hover:text-haxza-accent transition-colors">Privacidade</a>
          <a href="#" className="hover:text-haxza-accent transition-colors">Termos</a>
          <a href="#" className="hover:text-haxza-accent transition-colors">Suporte</a>
        </div>
      </footer>
    </div>
  );
}
