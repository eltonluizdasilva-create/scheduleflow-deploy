import { Clock, TrendingUp, Expand, CheckCircle } from "lucide-react";

export default function MissionSection() {
  const benefits = [
    {
      icon: Clock,
      title: "Atendimento 24h",
      description: "Automático e inteligente"
    },
    {
      icon: TrendingUp,
      title: "Redução de 40%",
      description: "Nos custos operacionais"
    },
    {
      icon: Expand,
      title: "Escalabilidade",
      description: "Sem contratar mais pessoas"
    },
    {
      icon: CheckCircle,
      title: "100% Consistente",
      description: "Sem erro humano"
    }
  ];

  return (
    <section id="missao" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Nossa <span className="gradient-text">Missão</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Acreditamos no poder da automação inteligente para transformar negócios. Nossa missão é capacitar empresas, oferecendo soluções personalizadas que otimizam operações, economizam tempo e recursos, e permitem que você se concentre no crescimento e na inovação.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col items-center text-center space-y-3" data-testid={`benefit-${index}`}>
                  <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
