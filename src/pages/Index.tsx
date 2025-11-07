import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { PortfolioLink } from "@/components/PortfolioLink";
import { StatCard } from "@/components/StatCard";
import { TechBadge } from "@/components/TechBadge";
import { Code2, Sparkles, Rocket, Award, Users, Globe2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const { t } = useLanguage();

  const techStack = [
    "HTML5", "CSS3", "JavaScript", "React", "TypeScript", 
    "Tailwind CSS", "Node.js", "Git"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-gradient">
            {t("Portfolio", "Portofoli")}
          </span>
          <LanguageSwitcher />
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-block mb-6 px-5 py-2 glass rounded-full text-sm font-semibold animate-scale-in glow-primary">
            {t("14 Years Old • Albanian Entrepreneur", "14 Vjeç • Sipërmarrës Shqiptar")}
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-gradient animate-fade-in-up leading-tight">
            {t("Building Digital", "Ndërtimi i")}
            <br />
            {t("Experiences", "Përvojave Dixhitale")}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            {t(
              "Passionate web developer from Albania with 2 years of experience crafting beautiful and functional websites that make an impact.",
              "Zhvillues web i pasionuar nga Shqipëria me 2 vjet përvojë në krijimin e faqeve të bukura dhe funksionale që bëjnë ndryshim."
            )}
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16 animate-fade-in">
            <Button size="lg" className="gap-2 text-base px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300">
              {t("View My Work", "Shiko Punën Time")}
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-base px-8 py-6 glass hover:bg-primary/5">
              {t("Get In Touch", "Kontakto")}
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            <div className="flex flex-col items-center gap-3 animate-scale-in" style={{ animationDelay: "200ms" }}>
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center shadow-lg glow-primary">
                <Code2 className="w-10 h-10 text-white" />
              </div>
              <p className="text-sm font-semibold">{t("2 Years Experience", "2 Vjet Përvojë")}</p>
            </div>
            
            <div className="flex flex-col items-center gap-3 animate-scale-in" style={{ animationDelay: "400ms" }}>
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center shadow-lg glow-secondary">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <p className="text-sm font-semibold">{t("Passionate Creator", "Krijues i Pasionuar")}</p>
            </div>
            
            <div className="flex flex-col items-center gap-3 animate-scale-in" style={{ animationDelay: "600ms" }}>
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center shadow-lg glow-primary">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <p className="text-sm font-semibold">{t("Young Entrepreneur", "Sipërmarrës i Ri")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              icon={Award}
              value="2+"
              label={t("Years of Experience", "Vite Përvojë")}
              delay={0}
            />
            <StatCard
              icon={Users}
              value="10+"
              label={t("Happy Clients", "Klientë të Kënaqur")}
              delay={200}
            />
            <StatCard
              icon={Globe2}
              value="15+"
              label={t("Projects Completed", "Projekte të Përfunduara")}
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="glass rounded-3xl p-12 shadow-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gradient">
              {t("About Me", "Rreth Meje")}
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                {t(
                  "At just 14 years old, I've discovered my passion for web development and entrepreneurship. What started as curiosity has evolved into a dedicated journey of creating digital experiences that matter.",
                  "Në moshën vetëm 14 vjeç, kam zbuluar pasionin tim për zhvillimin e faqeve të internetit dhe sipërmarrjen. Ajo që filloi si kuriozitet u zhvillua në një udhëtim të përkushtuar të krijimit të përvojave dixhitale që kanë rëndësi."
                )}
              </p>
              <p>
                {t(
                  "Over the past 2 years, I've been dedicating my time to mastering the art of web development. Every project is an opportunity to push boundaries, learn something new, and create solutions that make a real difference.",
                  "Gjatë 2 viteve të fundit, kam qenë duke i kushtuar kohën time zotërimit të artit të zhvillimit web. Çdo projekt është një mundësi për të tejkaluar kufijtë, për të mësuar diçka të re, dhe për të krijuar zgjidhje që bëjnë ndryshim real."
                )}
              </p>
              <p className="text-foreground font-semibold">
                {t(
                  "From Albania to the world, I'm committed to building digital solutions that inspire and innovate.",
                  "Nga Shqipëria në botë, jam i përkushtuar të ndërtoj zgjidhje dixhitale që frymëzojnë dhe inovojnë."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gradient">
            {t("Tech Stack", "Teknologjitë")}
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            {t(
              "Technologies and tools I use to bring ideas to life",
              "Teknologjitë dhe mjetet që përdor për të sjellë idetë në jetë"
            )}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {techStack.map((tech, index) => (
              <TechBadge key={tech} name={tech} delay={index * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gradient">
            {t("My Work", "Puna Ime")}
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
            {t(
              "A showcase of projects that represent my growth as a developer and commitment to excellence",
              "Një vitrinë projektesh që përfaqëson rritjen time si zhvillues dhe përkushtimin ndaj përsosmërisë"
            )}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <PortfolioLink
              url="#"
              title={t("Project Title 1", "Projekti 1")}
              description={t(
                "Add your website link and description here. Describe what makes this project special and what technologies you used.",
                "Shto linkun dhe përshkrimin e faqes tënde këtu. Përshkruaj çfarë e bën këtë projekt special dhe çfarë teknologjish përdore."
              )}
              delay={0}
            />
            <PortfolioLink
              url="#"
              title={t("Project Title 2", "Projekti 2")}
              description={t(
                "Add your website link and description here. Describe what makes this project special and what technologies you used.",
                "Shto linkun dhe përshkrimin e faqes tënde këtu. Përshkruaj çfarë e bën këtë projekt special dhe çfarë teknologjish përdore."
              )}
              delay={200}
            />
            <PortfolioLink
              url="#"
              title={t("Project Title 3", "Projekti 3")}
              description={t(
                "Add your website link and description here. Describe what makes this project special and what technologies you used.",
                "Shto linkun dhe përshkrimin e faqes tënde këtu. Përshkruaj çfarë e bën këtë projekt special dhe çfarë teknologjish përdore."
              )}
              delay={400}
            />
            <PortfolioLink
              url="#"
              title={t("Project Title 4", "Projekti 4")}
              description={t(
                "Add your website link and description here. Describe what makes this project special and what technologies you used.",
                "Shto linkun dhe përshkrimin e faqes tënde këtu. Përshkruaj çfarë e bën këtë projekt special dhe çfarë teknologjish përdore."
              )}
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="glass rounded-3xl p-12 text-center shadow-xl glow-primary">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              {t("Let's Work Together", "Le të Punojmë Së Bashku")}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t(
                "Have a project in mind? Let's create something amazing together.",
                "Keni një projekt në mendje? Le të krijojmë diçka të mahnitshme së bashku."
              )}
            </p>
            <Button size="lg" className="gap-2 text-lg px-10 py-7 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-2xl transition-all duration-300">
              {t("Start a Project", "Fillo një Projekt")}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4">
            <p className="text-2xl font-bold text-gradient">
              {t("Albanian Young Entrepreneur", "Sipërmarrës i Ri Shqiptar")}
            </p>
            <p className="text-muted-foreground">
              {t(
                "Building the future, one website at a time.",
                "Duke ndërtuar të ardhmen, një faqe në një kohë."
              )}
            </p>
            <p className="text-sm text-muted-foreground pt-4">
              {t(
                "© 2025 All rights reserved. Built with passion from Albania.",
                "© 2025 Të gjitha të drejtat e rezervuara. Ndërtuar me pasion nga Shqipëria."
              )}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
