import { motion } from "motion/react";
import { Navigation } from "../components/Navigation";
import { Zap, Clock, User, ArrowLeft, Send, ChevronRight, MessageCircle } from "lucide-react";
import { Link, useParams, useLocation } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

export default function Blog() {
  const { slug } = useParams();
  const { pathname } = useLocation();
  const post = blogPosts.find(p => p.slug === slug);

  // SEO configuration
  const siteUrl = "https://www.haxzadigital.com.br"; // Consider making this dynamic if needed
  const canonicalUrl = `${siteUrl}${pathname}`;
  
  const seoData = post ? {
    title: `${post.title} | Blog Haxza`,
    description: post.desc,
    type: "article",
    keywords: `${post.category}, marketing digital, automação de vendas, haxza digital`
  } : {
    title: "Blog Oficial | Haxza Digital Intelligence",
    description: "Estratégias de elite para captação de clientes, automação de alta performance e escala digital para negócios que dominam o mercado.",
    type: "website",
    keywords: "marketing digital, automação, captação de clientes, escala digital, haxza"
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug, post]);

  if (slug && !post) {
    return (
      <div className="min-h-screen bg-haxza-bg text-white flex flex-col items-center justify-center p-6 sm:p-10 text-center">
        <h1 className="text-4xl font-black mb-6">Página não encontrada</h1>
        <Link to="/blog" className="text-haxza-accent font-black uppercase tracking-widest no-underline">Voltar para o Blog</Link>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-haxza-accent/10 scroll-smooth">
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content={seoData.type} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Haxza Digital Intelligence" />
        <meta property="og:image" content={`${siteUrl}/favicon.png`} />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={`${siteUrl}/favicon.png`} />
      </Helmet>

      <div className="bg-haxza-bg text-white">
        <Navigation />
      </div>
      
      {!post ? (
        <main className="max-w-[1400px] mx-auto px-6 lg:px-20 py-20 lg:py-32">
          <header className="mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-haxza-accent/10 border border-haxza-accent/20 rounded-full text-[9px] font-black text-haxza-accent uppercase tracking-[0.4em] mb-10">
              Conteúdo & Estratégia
            </div>
            <h1 className="text-5xl lg:text-8xl font-black leading-[0.85] tracking-tighter text-zinc-900 mb-10 font-display uppercase italic text-balance">
              Intelligence <br /> <span className="text-haxza-accent">Journal</span>
            </h1>
            <p className="text-xl lg:text-3xl text-zinc-600 max-w-3xl font-light leading-snug">
              Estratégias de elite para captação de clientes, automação de alta performance e escala digital para negócios que dominam o mercado.
            </p>
          </header>

          <div className="grid lg:grid-cols-3 gap-x-12 gap-y-16 border-t border-zinc-200 pt-16">
            {blogPosts.map((item, i) => {
              const isFeatured = i === 0;
              return (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`group ${isFeatured ? "lg:col-span-3 pb-16 border-b border-zinc-200" : "border-b pb-12 lg:border-none lg:pb-0 border-zinc-200"}`}
                >
                  <Link to={`/blog/${item.slug}`} className={`no-underline flex h-full ${isFeatured ? "flex-col lg:flex-row gap-8 lg:gap-16" : "flex-col gap-6"}`}>
                    
                    {/* Visual Placeholder for News Image */}
                    <div className={`bg-zinc-50 border border-zinc-200 overflow-hidden relative flex-shrink-0 flex items-center justify-center ${isFeatured ? "w-full lg:w-3/5 aspect-video" : "w-full aspect-[4/3]"} group-hover:bg-zinc-100 transition-colors duration-500`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(35,134,54,0.05)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <item.icon className={`text-zinc-300 ${isFeatured ? "w-32 h-32" : "w-16 h-16"} group-hover:scale-110 group-hover:text-haxza-accent/80 transition-all duration-700`} />
                    </div>

                    <div className="flex flex-col justify-center flex-grow">
                      <div className="flex items-center gap-4 mb-4 lg:mb-6">
                        <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-haxza-accent bg-haxza-accent/10 px-3 py-1">
                          {item.category}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-zinc-500 flex items-center gap-1.5">
                          <Clock className="w-3 h-3" /> {item.readingTime}
                        </span>
                      </div>

                      <h3 className={`${isFeatured ? "text-4xl lg:text-5xl border-l-[3px] border-haxza-accent pl-4 lg:pl-6" : "text-2xl sm:text-3xl"} font-black text-zinc-900 leading-[1.1] lg:leading-[1.05] tracking-tighter uppercase italic mb-4 group-hover:text-haxza-accent transition-colors`}>
                        {item.title}
                      </h3>
                      
                      {isFeatured && (
                         <p className="text-zinc-600 text-lg lg:text-xl font-light leading-relaxed mb-8 max-w-2xl pl-4 lg:pl-6">
                           {item.desc}
                         </p>
                      )}

                      <div className={`mt-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-zinc-900 transition-colors ${isFeatured ? "pl-4 lg:pl-6" : ""}`}>
                        Ler Artigo completo <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Index CTA */}
          <section className="mt-40 p-8 sm:p-14 lg:p-32 bg-zinc-950 rounded-[3rem] lg:rounded-[6rem] relative overflow-hidden text-center border border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-haxza-accent)_0%,transparent_70%)] opacity-5" />
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-7xl font-black text-white mb-10 lg:mb-12 font-display uppercase italic tracking-tighter leading-[0.85]">Escale seu <br className="hidden sm:block" /> faturamento.</h2>
              <p className="text-lg lg:text-3xl text-zinc-400 font-light mb-12 lg:mb-16 leading-tight max-w-2xl mx-auto">
                Não somos apenas uma agência. Somos a inteligência por trás dos negócios que mais crescem no digital.
              </p>
              <a 
                href="https://wa.me/5511969454854?text=Ol%C3%A1%20Haxza%2C%20li%20o%20Journal%20e%20quero%20escalar%20meu%20lucro" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-6 lg:gap-8 px-12 py-8 lg:px-16 lg:py-10 bg-haxza-accent text-white font-black text-xl lg:text-3xl hover:bg-emerald-500 transition-all rounded-[2rem] lg:rounded-3xl uppercase tracking-widest no-underline shadow-[0_40px_80px_rgba(35,134,54,0.4)] hover:scale-105 active:scale-95"
              >
                Ativar Haxza <Send className="w-6 h-6 lg:w-8 lg:h-8 fill-current" />
              </a>
            </div>
          </section>
        </main>
      ) : (
        <main className="max-w-[1400px] mx-auto px-6 lg:px-20 py-20">
          {/* Article Header with Back Button */}
          <div className="max-w-5xl mx-auto flex justify-between items-center mb-16 lg:mb-24">
            <Link to="/blog" className="inline-flex items-center gap-3 text-zinc-900 text-[10px] font-black uppercase tracking-[0.4em] hover:text-haxza-accent transition-colors no-underline group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Journal Index
            </Link>
            <div className="text-[10px] font-black text-zinc-400 tracking-[0.5em] uppercase hidden sm:block">Haxza © 2026</div>
          </div>
  
          <article className="max-w-5xl mx-auto">
            {/* Header Area */}
            <header className="mb-16 lg:mb-24 border-b border-zinc-200 pb-16 lg:pb-20">
              <div className="inline-flex items-center gap-4 mb-10 lg:mb-12">
                <span className="px-4 py-1.5 lg:px-5 lg:py-2 bg-haxza-accent text-white text-[8px] lg:text-[9px] font-black uppercase tracking-[0.4em] rounded-full">
                  {post.category}
                </span>
                <span className="w-8 lg:w-12 h-px bg-zinc-300" />
                <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">Strategy Report</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.9] lg:leading-[0.85] tracking-tighter text-zinc-900 mb-12 lg:mb-20 font-display uppercase italic">
                {post.titleDisplay}
              </h1>
              
              <div className="grid md:grid-cols-3 gap-8 md:gap-16 border-t border-zinc-200 pt-10 lg:pt-12">
                <div className="space-y-2">
                  <span className="block text-[8px] font-black text-zinc-500 uppercase tracking-widest">Author</span>
                  <div className="flex items-center gap-3 text-[10px] lg:text-[11px] font-black uppercase tracking-widest text-zinc-900">
                    <User className="w-4 h-4 text-haxza-accent" /> Haxza Lab
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="block text-[8px] font-black text-zinc-500 uppercase tracking-widest">Reading Time</span>
                  <div className="flex items-center gap-3 text-[10px] lg:text-[11px] font-black uppercase tracking-widest text-zinc-900">
                    <Clock className="w-4 h-4 text-haxza-accent" /> {post.readingTime}
                  </div>
                </div>
                <div className="space-y-2 text-left md:text-left">
                  <span className="block text-[8px] font-black text-zinc-500 uppercase tracking-widest">Date</span>
                  <div className="flex items-center gap-3 text-[10px] lg:text-[11px] font-black uppercase tracking-widest text-zinc-900">
                    <Calendar className="w-4 h-4 text-haxza-accent" /> April 25, 2026
                  </div>
                </div>
              </div>
            </header>
  
            {/* Detailed Content */}
            <div className="prose prose-zinc prose-lg lg:prose-2xl max-w-none text-zinc-700 font-normal leading-relaxed prose-headings:text-zinc-900 prose-headings:font-black prose-headings:font-display prose-headings:tracking-tighter prose-headings:uppercase prose-headings:italic prose-p:mb-8 lg:prose-p:mb-10 prose-strong:text-[#186026] prose-strong:bg-haxza-accent/10 prose-strong:px-1.5 prose-strong:py-0.5 prose-strong:rounded-md prose-strong:font-bold prose-a:text-haxza-accent prose-a:font-black prose-a:no-underline hover:prose-a:underline">
              {post.content}
  
              {/* Bottom Subscription/CTA Section */}
              <div className="mt-32 lg:mt-40 p-8 lg:p-24 bg-zinc-950 rounded-[3rem] lg:rounded-[4rem] text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-haxza-accent/5" />
                <h3 className="text-4xl lg:text-7xl font-black text-white mb-10 font-display uppercase tracking-tight relative z-10 italic leading-none text-balance">Acelere seu <br /> Crescimento</h3>
                <p className="text-zinc-400 text-lg lg:text-2xl font-light mb-12 lg:mb-16 max-w-2xl mx-auto relative z-10 leading-snug">
                  Não somos apenas uma solução técnica. Somos seu parceiro de faturamento. Ative o sistema que vai mudar seu jogo.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
                  <a 
                    href="https://wa.me/5511969454854?text=Ol%C3%A1%20Haxza%2C%20quero%20parar%20de%20perder%20clientes%20agora" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 sm:gap-6 px-8 py-5 sm:px-12 sm:py-8 lg:px-14 bg-haxza-accent text-white font-black text-base sm:text-lg lg:text-2xl hover:bg-emerald-500 transition-all rounded-2xl lg:rounded-3xl uppercase tracking-widest no-underline shadow-[0_30px_60px_rgba(35,134,54,0.3)] hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Ativar Agora <Send className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 fill-current shrink-0" /> 
                  </a>
                </div>
              </div>

              {/* Related Posts */}
              <div className="mt-32 lg:mt-40 border-t border-zinc-200 pt-16 lg:pt-20">
                <div className="flex justify-between items-center mb-12 lg:mb-16">
                  <h4 className="text-xl lg:text-4xl font-black uppercase italic tracking-tighter text-zinc-900">Artigos Relacionados</h4>
                  <Link to="/blog" className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.4em] text-haxza-accent hover:text-zinc-900 transition-colors no-underline">Ver todos</Link>
                </div>
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 pt-8">
                  {relatedPosts.map(rp => (
                    <Link key={rp.slug} to={`/blog/${rp.slug}`} className="group no-underline border-t-2 border-zinc-100 pt-8 hover:border-haxza-accent transition-colors">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-haxza-accent block mb-4">{rp.category}</span>
                        <h5 className="text-2xl lg:text-3xl font-black uppercase italic tracking-tighter mb-6 text-zinc-900 group-hover:text-haxza-accent transition-colors leading-[1.05]">
                          {rp.title}
                        </h5>
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-900 transition-colors">
                          Ler artigo completo <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </main>
      )}

      {/* Footer */}
      <footer className="w-full max-w-[1400px] mx-auto px-6 lg:px-20 py-24 flex flex-col md:flex-row justify-between items-center gap-12 text-[10px] text-zinc-500 font-bold uppercase tracking-[0.4em]">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-zinc-900 tracking-tighter text-2xl font-display no-underline">HAXZA</Link>
          <span className="opacity-10">|</span>
          <span>© {new Date().getFullYear()} Digital Solutions</span>
        </div>
        <div className="flex gap-12">
          <a href="#" className="text-zinc-500 hover:text-haxza-accent transition-colors no-underline">Privacidade</a>
          <a href="#" className="text-zinc-500 hover:text-haxza-accent transition-colors no-underline">Termos</a>
          <a href="#" className="text-zinc-500 hover:text-haxza-accent transition-colors no-underline">Suporte</a>
        </div>
      </footer>
    </div>
  );
}

function Calendar(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}
