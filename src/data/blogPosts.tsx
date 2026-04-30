import React from "react";
import { Zap, MessageCircle, Stethoscope, Calendar, Sparkles, Layout } from "lucide-react";

export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  desc: string;
  titleDisplay: React.ReactNode;
  readingTime: string;
  content: React.ReactNode;
  icon: any;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "como-parar-de-perder-clientes-no-whatsapp",
    category: "Vendas & Estratégia",
    title: "Como parar de perder clientes no WhatsApp",
    desc: "O WhatsApp se tornou o maior canal de vendas, mas sem organização rápida, seu lead conversa com o concorrente.",
    titleDisplay: (
      <>
        Como parar de <br /> perder clientes <br /> no <span className="text-haxza-accent">WhatsApp</span>
      </>
    ),
    readingTime: "10 min",
    icon: MessageCircle,
    image: "/assets/blog/whatsapp.png",
    content: (
      <>
        <p className="text-2xl lg:text-3xl text-zinc-800 font-medium mb-12 leading-snug">
          O WhatsApp se tornou o maior canal de vendas do Brasil, mas também o maior ralo de faturamento para empresas desorganizadas. Se o seu lead demora mais de 5 minutos para ser respondido, ele já está conversando com seu concorrente.
        </p>

        <h2 className="text-3xl lg:text-5xl mt-24 mb-10 uppercase italic">O Silêncio que Mata o Lucro: Por que seus leads não fecham?</h2>
        <p className="text-lg lg:text-xl mb-8">
          Muitos empresários culpam o "mercado" ou a "qualidade dos leads" quando as vendas não acontecem. No entanto, o problema quase sempre reside na <strong>janela de oportunidade</strong>. No ambiente digital, a intenção de compra é volátil. Quando um cliente clica no seu anúncio e envia uma mensagem, ele está no auge do desejo.
        </p>
        <p className="text-lg lg:text-xl mb-8">
          Se essa mensagem cai em um celular sobrecarregado, sem triagem, e leva 30 minutos, 1 hora ou até um dia para ser respondida, o "timing" morreu. O cliente já buscou outra opção, já tirou a dúvida no Google ou simplesmente desistiu. Essa é uma dor universal que afeta desde o pequeno comércio até a grande indústria.
        </p>

        <h3 className="text-2xl lg:text-3xl mt-16 mb-6 font-bold text-zinc-900">A Anatomia da Perda de Vendas</h3>
        <p className="text-lg lg:text-xl mb-8">
          Identificamos que 80% das perdas ocorrem por três motivos principais:
        </p>
        <ul className="list-none space-y-4 mb-12">
          <li className="flex items-start gap-4 text-lg"><span className="text-haxza-accent font-black">01.</span> <strong>Falta de Triagem:</strong> Leads curiosos (sem dinheiro ou sem urgência) tomam o tempo precioso que deveria ser dos leads prontos para comprar.</li>
          <li className="flex items-start gap-4 text-lg"><span className="text-haxza-accent font-black">02.</span> <strong>Atendimento Manual Lento:</strong> A dependência de um humano para dar a "primeira resposta" cria um gargalo instransponível.</li>
          <li className="flex items-start gap-4 text-lg"><span className="text-haxza-accent font-black">03.</span> <strong>Scripts Ineficientes:</strong> Abordagens que parecem interrogatórios em vez de consultas de ajuda.</li>
        </ul>

        <h2 className="text-3xl lg:text-5xl mt-24 mb-10 uppercase italic">A Estratégia Haxza: O Sistema de Filtro Inteligente</h2>
        <p className="text-lg lg:text-xl mb-8">
          Nós não acreditamos em "responder rápido". Nós acreditamos em <strong>responder certo</strong>. O Sistema Haxza implementa uma camada de inteligência antes mesmo do cliente chegar ao seu WhatsApp humano. Imagine seu cliente passando por um filtro onde ele já informa o que quer e quanto pode pagar.
        </p>

        <div className="bg-zinc-50 border border-zinc-100 p-10 lg:p-16 rounded-[3rem] my-16 shadow-inner">
          <h4 className="text-2xl font-black mb-8 uppercase tracking-tighter">O Fluxo que Gera Escala:</h4>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-haxza-bg text-white rounded-lg flex items-center justify-center font-display font-black text-sm">A</div>
              <h5 className="font-bold text-xl">LPs de Qualificação</h5>
              <p className="text-zinc-500 text-base">O cliente passa por uma página ultra-rápida que filtra intenção, orçamento e dor principal antes de chegar no seu consultor.</p>
            </div>
            <div className="space-y-4">
              <div className="w-10 h-10 bg-haxza-bg text-white rounded-lg flex items-center justify-center font-display font-black text-sm">B</div>
              <h5 className="font-bold text-xl">Aquecimento Automático</h5>
              <p className="text-zinc-500 text-base">Antes de falar com o humano, o sistema já enviou provas sociais, vídeos explicativos e tirou dúvidas frequentes.</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl lg:text-5xl mt-24 mb-10 uppercase italic">Resultados Reais e Verificáveis</h2>
        <p className="text-lg lg:text-xl mb-8">
          Empresas que implementaram essa triagem automática relatam um aumento médio de <strong>35% na taxa de fechamento</strong>, mesmo recebendo o mesmo volume de leads. Por quê? Porque a equipe comercial foca 100% do tempo em fechar, não em qualificar curiosos.
        </p>

        <div className="p-10 bg-zinc-900 rounded-3xl text-white my-12 italic border-l-8 border-haxza-accent">
          <p className="text-xl leading-relaxed">"O WhatsApp da clínica era um caos. De 100 mensagens, fechávamos 5. Com o sistema Haxza, agora recebemos os leads qualificados e prontos. Aumentamos o faturamento sem contratar mais ninguém."</p>
          <span className="block mt-6 text-haxza-accent font-black text-xs uppercase">— Carla S., Diretora de Operações</span>
        </div>

        <h2 className="text-3xl lg:text-5xl mt-24 mb-10 uppercase italic">Como Implementar Hoje</h2>
        <p className="text-lg lg:text-xl mb-8">
          Pare de lutar contra as notificações infinitas. Deixe a tecnologia preparar o caminho para o seu time brilhar no fechamento. A pergunta não é se você precisa de automação, mas quanto dinheiro você vai continuar perdendo até decidir ativá-la.
        </p>
      </>
    )
  },
  {
    slug: "site-para-dentista",
    category: "Odontologia de Alto Valor",
    title: "Site para dentista em sua cidade",
    desc: "Seu site parece um cardápio datado? Aprenda a transmitir a autoridade necessária para fechar procedimentos de alto ticket.",
    titleDisplay: (
      <>
        O <span className="text-haxza-accent">Site que Vende</span> <br /> Procedimentos de <br /> Alto Valor
      </>
    ),
    readingTime: "8 min",
    icon: Stethoscope,
    image: "/assets/blog/dentist.png",
    content: (
      <>
        <p className="text-2xl lg:text-3xl text-zinc-800 font-medium mb-12 leading-snug">
          Se o seu site parece um cardápio de serviços datado, você está perdendo pacientes de Implante e Invisalign para clínicas que entenderam o jogo da autoridade digital.
        </p>

        <h2 className="text-3xl lg:text-5xl mt-24 mb-10 uppercase italic">A busca do paciente começa no Google</h2>
        <p className="text-lg lg:text-xl mb-8">
          Um dentista que busca pacientes qualificados precisa entender que o Google é a maior fonte de autoridade local. Quando alguém digita <strong>"Melhor dentista em [sua cidade]"</strong>, ela está em busca de uma solução urgente e profissional. Se o seu site não transmite essa confiança de imediato, o paciente clica no próximo resultado.
        </p>

        <h3 className="text-2xl lg:text-3xl mt-16 mb-6 font-bold text-zinc-900">O Problema do Site que Não Converte</h3>
        <p className="text-lg lg:text-xl mb-8">
          Muitos dentistas investem em tráfego, mas mandam o paciente para um site que "não fala com o problema". O paciente entra, vê uma foto de um banco de imagens, não entende o processo e sai. Falta estrutura, falta autoridade e, principalmente, falta uma <strong>clara rota de agendamento</strong>.
        </p>

        <div className="grid md:grid-cols-2 gap-8 my-16">
          <div className="p-8 bg-zinc-50 border border-zinc-100 rounded-2xl">
            <Zap className="text-haxza-accent mb-4" />
            <h5 className="font-bold text-lg mb-2">Abandono de Página</h5>
            <p className="text-zinc-500 text-sm">Sites lentos ou confusos fazem com que 70% dos pacientes potenciais abandonem a página em menos de 5 segundos.</p>
          </div>
          <div className="p-8 bg-zinc-50 border border-zinc-100 rounded-2xl">
            <Zap className="text-haxza-accent mb-4" />
            <h5 className="font-bold text-lg mb-2">Falta de Mobile-First</h5>
            <p className="text-zinc-500 text-sm">90% dos agendamentos começam pelo celular. Se o seu site trava no mobile, sua agenda trava também.</p>
          </div>
        </div>

        <h2 className="text-3xl lg:text-5xl mt-24 mb-10 uppercase italic">O Método Haxza para Clínicas Odontológicas</h2>
        <p className="text-lg lg:text-xl mb-8">
          Criamos sites focados em <strong>Conversão e Autoridade Local</strong>. Nosso sistema garante que sua clínica seja a primeira opção visual e prática para quem procura tratamentos de ticket alto, como Lentes de Contato e Ortodontia Digital.
        </p>

        <ul className="list-none space-y-6 my-12">
          <li className="flex items-start gap-4 text-xl"><span className="text-haxza-accent font-black">✓</span> <strong>Design de Autoridade:</strong> Layouts que focam em fotos reais, história e excelência clínica.</li>
          <li className="flex items-start gap-4 text-xl"><span className="text-haxza-accent font-black">✓</span> <strong>SEO Local Dominante:</strong> Estratégias para você ser o primeiro nome que o paciente vê na sua região.</li>
          <li className="flex items-start gap-4 text-xl"><span className="text-haxza-accent font-black">✓</span> <strong>Filtro de Procedimento:</strong> Direcione o paciente para o especialista certo antes mesmo dele mandar mensagem.</li>
        </ul>

        <div className="p-12 bg-zinc-900 rounded-[3rem] text-white my-16">
          <h4 className="text-2xl font-black mb-6 uppercase tracking-tighter">Impacto na Agenda</h4>
          <p className="text-zinc-400 text-lg italic">"Antes o site era um custo. Com a Haxza, ele se tornou nosso principal canal de captação de pacientes de implantes. A qualidade visual atrai quem não está preocupado apenas com preço."</p>
          <span className="block mt-6 text-haxza-accent font-black text-xs uppercase">— Dr. Arnaldo, Reabilitação Oral</span>
        </div>

        <h2 className="text-3xl lg:text-5xl mt-24 mb-10 uppercase italic">Seja a Referência da sua Região</h2>
        <p className="text-lg lg:text-xl mb-8">
          O mercado odontológico é competitivo, mas a profissionalização digital ainda é baixa. Saia na frente agora.
        </p>
      </>
    )
  },
  {
    slug: "sistema-de-agendamento-online-para-clinicas",
    category: "Automação Médica",
    title: "Sistema de agendamento online para clínicas",
    desc: "O erro humano e o esquecimento de pacientes prejudicam lucros. Descubra como a digitalização automatiza re-confirmações e elimina faltas.",
    titleDisplay: (
      <>
        Acabe com a <br /> <span className="text-haxza-accent">Agenda Manual</span> <br /> e as Faltas
      </>
    ),
    readingTime: "9 min",
    icon: Calendar,
    image: "/assets/blog/scheduling.png",
    content: (
      <>
        <p className="text-2xl lg:text-3xl text-zinc-800 font-medium mb-12 leading-snug">
          O erro humano no agendamento e o esquecimento do paciente são os maiores inimigos do seu faturamento mensal. É hora de digitalizar a porta de entrada da sua clínica.
        </p>

        <h2 className="text-3xl lg:text-5xl mt-24 mb-10 uppercase italic">Por que a Agenda por Telefone está morrendo?</h2>
        <p className="text-lg lg:text-xl mb-8">
          A verdade é dura: o paciente moderno não quer ligar. Ele quer conveniência. Se ele precisar esperar a recepção abrir às 8h da manhã para agendar uma consulta que ele lembrou às 22h, as chances dele procurar outra clínica que tenha <strong>agendamento online 24h</strong> são imensas.
        </p>

        <h3 className="text-2xl lg:text-3xl mt-16 mb-6 font-bold text-zinc-900">O Custo Oculto da Bagunça</h3>
        <p className="text-lg lg:text-xl mb-8">
          Agenda manual gera erro de horário, duplicidade e, o pior de todos: falta de lembrete. O No-show (falta sem aviso) é lucro que escorre pelas mãos. Um sistema automatizado não apenas agenda, ele <strong>confirma e re-confirma</strong>.
        </p>

        <div className="space-y-6 my-16">
          {[
            { t: "Disponibilidade 24/7", d: "Capture pacientes no momento exato do desejo, mesmo fora do horário comercial." },
            { t: "Lembretes via WhatsApp", d: "Envio automático de lembretes que reduzem faltas em até 40%." },
            { t: "Sincronização com Profissionais", d: "Cada médico ou especialista vê sua agenda em tempo real, em qualquer dispositivo." }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 p-8 bg-zinc-50 rounded-3xl border border-zinc-100 items-center">
              <div className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center text-haxza-accent shrink-0">
                <Calendar className="w-8 h-8" />
              </div>
              <div>
                <h5 className="font-bold text-xl">{item.t}</h5>
                <p className="text-zinc-500">{item.d}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl lg:text-5xl mt-24 mb-10 uppercase italic">Dados que Valem Dinheiro</h2>
        <p className="text-lg lg:text-xl mb-8">
          Com o Sistema de Agendamento Haxza, você não tem apenas horários marcados. Você tem relatórios. Você sabe qual médico gera mais retorno, qual o tempo médio de consulta e qual a taxa de fidelização dos seus pacientes. 
        </p>

        <div className="p-10 border border-haxza-accent/10 rounded-3xl bg-emerald-50/10 flex gap-6 items-start my-12">
          <Zap className="w-12 h-12 text-haxza-accent shrink-0" />
          <div>
            <p className="text-zinc-800 text-lg font-medium italic">"A automação da agenda nos permitiu reduzir a equipe de recepção e focar em vendas de procedimentos maiores. Foi a mudança de chave que faltava."</p>
            <span className="block mt-4 text-zinc-400 text-xs uppercase font-black">— Adm. Clínica Vida</span>
          </div>
        </div>

        <h2 className="text-3xl lg:text-5xl mt-24 mb-10 uppercase italic">O Futuro da sua Clínica é Digital</h2>
        <p className="text-lg lg:text-xl mb-8">
          Não lute contra o progresso. Use-o a seu favor para criar uma experiência de paciente impecável e uma gestão sem estresse.
        </p>
      </>
    )
  },
  {
    slug: "como-captar-clientes-para-clinica-estetica",
    category: "Estética & Escala",
    title: "Como captar clientes para clínica estética",
    desc: "Pare de perder tempo com 'curiosos de preço'. Entenda a diferença entre tráfego desqualificado e o método de Qualificação Educativa Haxza.",
    titleDisplay: (
      <>
        Agenda Cheia: <br /> <span className="text-haxza-accent">Captação</span> para <br /> Clínica de Estética
      </>
    ),
    readingTime: "11 min",
    icon: Sparkles,
    image: "/assets/blog/aesthetics.png",
    content: (
      <>
        <p className="text-2xl lg:text-3xl text-zinc-800 font-medium mb-12 leading-snug">
          O mercado de estética não sofre por falta de interessados, mas sim por falta de processos que transformam "curiosos de preço" em "procedimentos realizados".
        </p>

        <h2 className="text-3xl lg:text-5xl mt-24 mb-10 uppercase italic">O Grande Erro do Tráfego Pago na Estética</h2>
        <p className="text-lg lg:text-xl mb-8">
          A maioria das clínicas gasta fortunas com anúncios no Instagram que mandam o cliente direto para o WhatsApp. O resultado? Uma recepção entupida de mensagens de pessoas que não têm a menor ideia do valor do serviço e só perguntam "quanto custa?". Isso não é captação, é desperdício de tempo e dinheiro.
        </p>

        <h3 className="text-2xl lg:text-3xl mt-16 mb-6 font-bold text-zinc-900">O Problema não é o Tráfego, é o Processo</h3>
        <p className="text-lg lg:text-xl mb-8">
          Na Haxza, acreditamos na <strong>Qualificação Educativa</strong>. Antes do lead falar com sua secretária, ele deve passar por uma jornada visual e informativa que remove as objeções básicas (preço, dor, tempo de recuperação) e eleva o nível de desejo pelo seu trabalho.
        </p>

        <div className="my-16 grid lg:grid-cols-2 gap-10">
          <div className="p-10 bg-zinc-950 rounded-[3rem] text-white">
            <h5 className="text-haxza-accent font-black uppercase text-xs mb-6 tracking-widest">Cenário Comum</h5>
            <p className="text-lg font-light italic">"Lead chega frio → Pergunta preço → Acha caro → Desaparece. Sua clínica vira um leilão."</p>
          </div>
          <div className="p-10 bg-haxza-accent rounded-[3rem] text-white">
             <h5 className="text-white/40 font-black uppercase text-xs mb-6 tracking-widest">Cenário Haxza</h5>
             <p className="text-lg font-bold italic">"Lead passa por LP Premium → Entende os benefícios → Vê resultados → Chega qualificado para fechar."</p>
          </div>
        </div>

        <h2 className="text-3xl lg:text-5xl mt-24 mb-10 uppercase italic">Dominando o Processo de Venda Estética</h2>
        <p className="text-lg lg:text-xl mb-8">
          O segredo está em usar o <strong>Google Ads</strong> para intenção e o <strong>Instagram</strong> para desejo. Nosso sistema integra ambos, filtrando quem realmente tem condições de investir nos seus tratamentos premium.
        </p>

        <ul className="list-none space-y-6 my-12">
          <li className="flex items-start gap-4 text-xl"><Zap className="text-haxza-accent shrink-0 mt-1" /> <strong>Filtro de Intenção:</strong> Bloqueie curiosos através de perguntas estratégicas antes do contato humano.</li>
          <li className="flex items-start gap-4 text-xl"><Zap className="text-haxza-accent shrink-0 mt-1" /> <strong>Autoridade Visual Impecável:</strong> Se você vende beleza, seu sistema deve ser belo e rápido.</li>
          <li className="flex items-start gap-4 text-xl"><Zap className="text-haxza-accent shrink-0 mt-1" /> <strong>Lead Tracking:</strong> Saiba exatamente de qual anúncio veio o faturamento que entrou no caixa.</li>
        </ul>

        <div className="p-12 border border-zinc-100 rounded-[3rem] bg-zinc-50/50 my-16 text-center">
          <h4 className="text-2xl font-black mb-6 uppercase">Opinião de Especialista</h4>
          <p className="text-xl text-zinc-500 font-light max-w-2xl mx-auto italic">"O sistema da Haxza nos deu o filtro que precisávamos. Paramos de ser uma clínica de informativos de preço para ser uma clínica de procedimentos realizados."</p>
          <span className="block mt-8 text-haxza-accent font-black text-xs uppercase">— Mariana K., CEO Estética Advanced</span>
        </div>

        <h2 className="text-3xl lg:text-5xl mt-24 mb-10 uppercase italic">Construa uma Máquina de Agendamento</h2>
        <p className="text-lg lg:text-xl mb-8">
          A estética é um negócio de confiança e resultados. Sua tecnologia deve refletir isso em cada etapa.
        </p>
      </>
    )
  },
  {
    slug: "crm-para-empreendedores-saude",
    category: "Gestão & Dados",
    title: "CRM para empreendedores de saúde",
    desc: "Memória não escala uma clínica. Entenda como o CRM integrado gerencia automaticamente os retornos dos clientes, elevando seus lucros.",
    titleDisplay: (
      <>
        Profissionalize sua <br /> <span className="text-haxza-accent">Clínica</span> com <br /> CRM Inteligente
      </>
    ),
    readingTime: "12 min",
    icon: Layout,
    image: "/assets/blog/crm.png",
    content: (
      <>
        <p className="text-2xl lg:text-3xl text-zinc-800 font-medium mb-12 leading-snug">
          Se você ainda usa planilhas ou, pior, a memória para gerenciar seus pacientes, sua clínica atingiu um teto de crescimento. O CRM é o cérebro que permite a escala.
        </p>

        <h2 className="text-3xl lg:text-5xl mt-24 mb-10 uppercase italic">A Bagunça que impede o seu Crescimento</h2>
        <p className="text-lg lg:text-xl mb-8">
          Muitos donos de clínicas acreditam que "gestão" é apenas pagar contas. Na verdade, a gestão que dá lucro é a <strong>gestão de relacionamento</strong>. Quantos pacientes antigos sua secretária ligou hoje para oferecer um novo tratamento? Se o CRM não avisar, ela provavelmente não ligou para ninguém.
        </p>

        <h3 className="text-2xl lg:text-3xl mt-16 mb-6 font-bold text-zinc-900">O CRM Haxza: O fim da Perda de Retorno</h3>
        <p className="text-lg lg:text-xl mb-8">
          Nosso CRM foi desenhado para médicos e donos de clínicas que não têm tempo a perder. Ele é integrado nativamente à sua fonte de leads (Google/Instagram) e ao seu agendamento. Sem trabalho manual de inserção de dados.
        </p>

        <div className="grid md:grid-cols-3 gap-8 my-16">
          <div className="p-8 border border-zinc-100 rounded-3xl hover:bg-zinc-50 transition-colors">
            <h5 className="font-bold text-lg mb-4">Pipeline Simples</h5>
            <p className="text-zinc-500 text-sm">Visualize em que etapa cada paciente está e nunca deixe um orçamento "esfriar" sem um retorno.</p>
          </div>
          <div className="p-8 border border-zinc-100 rounded-3xl hover:bg-zinc-50 transition-colors">
            <h5 className="font-bold text-lg mb-4">Histórico Completo</h5>
            <p className="text-zinc-500 text-sm">Todas as interações, fotos e orçamentos em um só lugar, acessível em qualquer dispositivo.</p>
          </div>
          <div className="p-8 border border-zinc-100 rounded-3xl hover:bg-zinc-50 transition-colors">
            <h5 className="font-bold text-lg mb-4">Automação de Follow-up</h5>
            <p className="text-zinc-500 text-sm">O sistema cria tarefas automáticas para sua equipe entrar em contato no momento certo do ciclo de compra.</p>
          </div>
        </div>

        <h2 className="text-3xl lg:text-5xl mt-24 mb-10 uppercase italic">Dados são o novo Petróleo</h2>
        <p className="text-lg lg:text-xl mb-8">
          No Sistema Haxza, você tem acesso a dashboards que mostram o ROI real das suas campanhas. Você para de "achar" que o marketing funciona e passa a <strong>saber qual canal coloca dinheiro no seu bolso</strong>.
        </p>

        <div className="bg-zinc-950 text-white p-12 lg:p-20 rounded-[4rem] my-16 shadow-2xl relative overflow-hidden text-center">
          <div className="absolute top-0 left-0 w-full h-2 bg-haxza-accent" />
          <h4 className="text-3xl font-black mb-8 italic uppercase tracking-tighter">O Fim da Incerteza</h4>
          <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">"O CRM integrado nos permitiu abrir a segunda unidade com total segurança dos nossos números. É impossível gerenciar uma clínica grande sem essa tecnologia."</p>
          <span className="block mt-10 text-haxza-accent font-black text-sm uppercase tracking-widest">— Rodrigo M., Gestor Clínico</span>
        </div>

        <h2 className="text-3xl lg:text-5xl mt-24 mb-10 uppercase italic">Assuma o Controle Único</h2>
        <p className="text-lg lg:text-xl mb-8">
          Pare de ser refém da sorte ou da memória da recepção. Tenha uma empresa profissional e escalável com dados reais.
        </p>
      </>
    )
  }
];
