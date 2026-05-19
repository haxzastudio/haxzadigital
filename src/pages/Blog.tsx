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

        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(
            post ? {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": post.title,
              "image": [`${siteUrl}${post.image}`],
              "datePublished": new Date().toISOString(), // Idealmente viria do post
              "author": [{
                  "@type": "Organization",
                  "name": "Haxza Digital Intelligence",
                  "url": siteUrl
              }]
            } : {
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": seoData.title,
              "description": seoData.description,
              "url": canonicalUrl
            }
          )}
        </script>
      </Helmet>

      <div className="bg-haxza-bg text-white">
        <Navigation />
      </div>
      
      {!post ? (
        <main className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 lg:py-20">
          <header className="mb-16 border-b-4 border-zinc-900 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-[9px] font-black uppercase tracking-[0.3em] rounded-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Live
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                  {new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </div>
              <h1 className="text-6xl lg:text-8xl font-black leading-[0.85] tracking-tighter text-zinc-900 font-display uppercase italic text-balance">
                Haxza <span className="text-haxza-accent">Jornal</span>
              </h1>
            </div>
            <p className="text-lg lg:text-xl text-zinc-600 max-w-md font-medium leading-snug text-right hidden md:block">
              Estratégias avançadas, inteligência de mercado e automação para escalar seu faturamento.
            </p>
          </header>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Featured Post */}
            {blogPosts.length > 0 && (() => {
              const item = blogPosts[0];
              return (
                <div className="lg:col-span-8 group relative cursor-pointer">
                  <Link to={`/blog/${item.slug}`} className="no-underline block h-full">
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-900 mb-6 rounded-3xl">
                      <img src={item.image} alt={item.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      <div className="absolute bottom-0 left-0 p-8 lg:p-12 w-full">
                        <span className="inline-block px-4 py-1.5 bg-haxza-accent text-white text-[10px] font-black uppercase tracking-[0.3em] mb-4 shadow-lg">
                          Destaque Editorial
                        </span>
                        <h3 className="text-3xl lg:text-5xl font-black text-white leading-[1.05] tracking-tighter uppercase italic mb-4 group-hover:text-haxza-accent transition-colors text-balance">
                          {item.title}
                        </h3>
                        <p className="text-white/80 text-lg font-light leading-relaxed max-w-3xl hidden md:block">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })()}

            {/* Sidebar Posts */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              <div className="flex items-center gap-3 border-b-2 border-zinc-200 pb-3 mb-2">
                <div className="w-2 h-2 bg-haxza-accent" />
                <h4 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-900">Últimas Análises</h4>
              </div>
              
              {blogPosts.slice(1, 4).map((item, i) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group border-b border-zinc-200 pb-8 last:border-0"
                >
                  <Link to={`/blog/${item.slug}`} className="no-underline grid grid-cols-3 gap-6 h-full items-center">
                    <div className="col-span-1 aspect-square bg-zinc-50 overflow-hidden relative border border-zinc-200 rounded-xl">
                       <img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="col-span-2 flex flex-col justify-center">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-haxza-accent mb-2">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-black text-zinc-900 leading-[1.1] tracking-tighter uppercase italic group-hover:text-haxza-accent transition-colors line-clamp-3">
                        {item.title}
                      </h3>
                      <div className="mt-3 flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-zinc-400">
                        <Clock className="w-3 h-3" /> {item.readingTime}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Posts Grid */}
          {blogPosts.length > 4 && (
            <div className="mt-16 pt-16 border-t-4 border-zinc-200">
              <div className="grid md:grid-cols-3 gap-10">
                {blogPosts.slice(4).map((item, i) => (
                   <motion.div key={item.slug} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="group">
                      <Link to={`/blog/${item.slug}`} className="no-underline flex flex-col gap-6">
                        <div className="w-full aspect-[16/9] overflow-hidden bg-zinc-50 border border-zinc-200 rounded-2xl">
                          <img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div>
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-3 block">
                            {item.category}
                          </span>
                          <h3 className="text-2xl font-black text-zinc-900 leading-[1.05] tracking-tighter uppercase italic group-hover:text-haxza-accent transition-colors">
                            {item.title}
                          </h3>
                        </div>
                     </Link>
                   </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Index CTA */}
          <section className="mt-32 p-10 sm:p-16 bg-zinc-900 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 border-l-8 border-haxza-accent">
            <div className="absolute top-0 right-0 w-64 h-64 bg-haxza-accent/10 blur-[100px] pointer-events-none" />
            <div className="relative z-10 max-w-2xl">
              <div className="text-haxza-accent text-[10px] font-black uppercase tracking-[0.4em] mb-4">Solução Corporativa</div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 font-display uppercase italic tracking-tighter leading-[0.9]">Escale seu faturamento com inteligência.</h2>
              <p className="text-lg text-zinc-400 font-light leading-snug">
                Sistemas automatizados de captação para empresas que não podem perder leads.
              </p>
            </div>
              <a 
                href="https://wa.me/5511969454854?text=Ol%C3%A1%20Haxza%2C%20li%20o%20Jornal%20e%20quero%20escalar%20meu%20lucro" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative z-10 whitespace-nowrap inline-flex items-center gap-4 px-10 py-6 bg-[#25D366] text-white font-black text-lg hover:bg-[#1ebd5c] transition-all uppercase tracking-widest no-underline shadow-[0_20px_40px_rgba(37,211,102,0.3)] hover:scale-105 active:scale-95"
              >
              Ativar Haxza <Send className="w-5 h-5 fill-current" />
            </a>
          </section>
        </main>
      ) : (
        <main className="w-full bg-white">
          {/* Article Hero Header */}
          <div className="w-full bg-zinc-950 relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden flex items-end min-h-[60vh]">
            <img src={post.image} alt={post.title} loading="eager" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
            
            <div className="max-w-[1000px] mx-auto px-6 w-full relative z-10">
              <Link to="/blog" className="inline-flex items-center gap-3 text-zinc-400 text-[10px] font-black uppercase tracking-[0.4em] hover:text-white transition-colors no-underline group mb-12">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Voltar ao Jornal
              </Link>

              <div className="inline-flex items-center gap-4 mb-8">
                <span className="px-4 py-1.5 bg-haxza-accent text-white text-[9px] font-black uppercase tracking-[0.4em]">
                  {post.category}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Análise Especial</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tighter text-white mb-10 font-display uppercase italic text-balance">
                {post.titleDisplay}
              </h1>

              <div className="flex flex-wrap items-center gap-6 lg:gap-10 border-t border-white/10 pt-8 mt-12">
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                  <User className="w-4 h-4 text-haxza-accent" /> Redação Haxza
                </div>
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                  <Clock className="w-4 h-4 text-haxza-accent" /> Leitura: {post.readingTime}
                </div>
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                  <Calendar className="w-4 h-4 text-haxza-accent" /> Atualizado Hoje
                </div>
              </div>
            </div>
          </div>
  
          {/* Article Body */}
          <article className="max-w-[800px] mx-auto px-6 py-16 lg:py-20">
            <div className="text-zinc-800 text-lg lg:text-xl leading-normal tracking-normal font-sans [&_h2]:text-zinc-950 [&_h4]:text-zinc-950 [&_strong]:text-zinc-950">
              {/* Fake "Dropcap" style for first paragraph if possible, or just standard render */}
              <div className="text-xl lg:text-2xl font-light text-zinc-600 mb-12 leading-relaxed border-l-4 border-haxza-accent pl-6 italic">
                {post.desc}
              </div>

              {post.content}
            </div>
  
            {/* Share / Tags */}
            <div className="mt-20 pt-8 border-t-2 border-zinc-200 flex items-center justify-between">
               <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                 Tags: <span className="text-zinc-900">{post.category}, Estratégia, Conversão</span>
               </div>
            </div>

            {/* Bottom Subscription/CTA Section */}
            <div className="mt-24 p-10 lg:p-16 bg-zinc-950 text-center relative overflow-hidden border-t-8 border-haxza-accent shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(35,134,54,0.15)_0%,transparent_70%)]" />
              <h3 className="text-3xl lg:text-5xl font-black text-white mb-6 font-display uppercase tracking-tighter relative z-10 italic leading-none">Domine o seu mercado.</h3>
              <p className="text-zinc-400 text-lg font-light mb-10 max-w-xl mx-auto relative z-10">
                A tecnologia não espera. Ative o sistema da Haxza e pare de perder faturamento para concorrentes menos qualificados que você.
              </p>
              <div className="relative z-10">
                <a 
                  href="https://wa.me/5511969454854?text=Ol%C3%A1%20Haxza%2C%20li%20a%20not%C3%ADcia%20e%20quero%20escalar%20meu%20faturamento" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-4 px-10 py-5 bg-[#25D366] text-white font-black text-lg hover:bg-[#1ebd5c] transition-all uppercase tracking-widest no-underline shadow-[0_20px_40px_rgba(37,211,102,0.3)] hover:scale-105 active:scale-[0.98]"
                >
                  Ativar Automação <Send className="w-5 h-5 fill-current" /> 
                </a>
              </div>
            </div>

            {/* Related Posts */}
            <div className="mt-32">
              <div className="flex items-center gap-4 mb-12 border-b-2 border-zinc-200 pb-4">
                <div className="w-3 h-3 bg-haxza-accent" />
                <h4 className="text-2xl font-black uppercase italic tracking-tighter text-zinc-900">Leia a Seguir</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-10">
                {relatedPosts.map(rp => (
                  <Link key={rp.slug} to={`/blog/${rp.slug}`} className="group no-underline flex flex-col gap-4">
                    <div className="aspect-[16/9] overflow-hidden bg-zinc-50 border border-zinc-200 rounded-2xl">
                      <img src={rp.image} alt={rp.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div>
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-haxza-accent block mb-2">{rp.category}</span>
                      <h5 className="text-xl font-black uppercase italic tracking-tighter text-zinc-900 group-hover:text-haxza-accent transition-colors leading-[1.1]">
                        {rp.title}
                      </h5>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </article>
        </main>
      )}

      {/* Footer */}
      <footer className="w-full max-w-[1400px] mx-auto px-6 lg:px-20 py-24 flex flex-col md:flex-row justify-between items-center gap-12 text-[10px] text-zinc-400 font-bold uppercase tracking-[0.4em]">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-zinc-900 tracking-tighter text-2xl font-display no-underline">HAXZA DIGITAL</Link>
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
