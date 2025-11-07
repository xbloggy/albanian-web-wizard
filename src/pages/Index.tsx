import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { PortfolioLink } from "@/components/PortfolioLink";
import { Code2, Sparkles, Rocket } from "lucide-react";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-end">
          <LanguageSwitcher />
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-accent rounded-full text-accent-foreground text-sm font-medium animate-fade-in">
            {t("14 Years Old • Albanian Entrepreneur", "14 Vjeç • Sipërmarrës Shqiptar")}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-in">
            {t("Building Digital Experiences", "Ndërtimi i Përvojave Dixhitale")}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            {t(
              "Passionate web developer from Albania with 2 years of experience crafting beautiful and functional websites.",
              "Zhvillues web i pasionuar nga Shqipëria me 2 vjet përvojë në krijimin e faqeve të bukura dhe funksionale."
            )}
          </p>

          <div className="flex flex-wrap gap-8 justify-center mt-12">
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
              <p className="text-sm font-medium">{t("2 Years Experience", "2 Vjet Përvojë")}</p>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-secondary" />
              </div>
              <p className="text-sm font-medium">{t("Passionate Creator", "Krijues i Pasionuar")}</p>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <p className="text-sm font-medium">{t("Young Entrepreneur", "Sipërmarrës i Ri")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            {t("About Me", "Rreth Meje")}
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground text-center">
            <p className="text-lg leading-relaxed">
              {t(
                "At just 14 years old, I've discovered my passion for web development and entrepreneurship. Over the past 2 years, I've been dedicating my time to learning and mastering the art of creating websites. Every project is an opportunity to push boundaries and create something meaningful. From Albania to the world, I'm committed to building digital solutions that make a difference.",
                "Në moshën vetëm 14 vjeç, kam zbuluar pasionin tim për zhvillimin e faqeve të internetit dhe sipërmarrjen. Gjatë 2 viteve të fundit, kam qenë duke i kushtuar kohën time mësimit dhe zotërimit të artit të krijimit të faqeve web. Çdo projekt është një mundësi për të tejkaluar kufijtë dhe për të krijuar diçka me kuptim. Nga Shqipëria në botë, jam i përkushtuar të ndërtoj zgjidhje dixhitale që bëjnë ndryshim."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {t("My Work", "Puna Ime")}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t(
              "Here are some of the websites I've created. Each one represents my growth as a developer and my commitment to excellence.",
              "Këtu janë disa nga faqet që kam krijuar. Secila përfaqëson rritjen time si zhvillues dhe përkushtimin tim ndaj përsosmërisë."
            )}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <PortfolioLink
              url="#"
              title={t("Project Title 1", "Projekti 1")}
              description={t(
                "Add your website link and description here",
                "Shto linkun dhe përshkrimin e faqes tënde këtu"
              )}
            />
            <PortfolioLink
              url="#"
              title={t("Project Title 2", "Projekti 2")}
              description={t(
                "Add your website link and description here",
                "Shto linkun dhe përshkrimin e faqes tënde këtu"
              )}
            />
            <PortfolioLink
              url="#"
              title={t("Project Title 3", "Projekti 3")}
              description={t(
                "Add your website link and description here",
                "Shto linkun dhe përshkrimin e faqes tënde këtu"
              )}
            />
            <PortfolioLink
              url="#"
              title={t("Project Title 4", "Projekti 4")}
              description={t(
                "Add your website link and description here",
                "Shto linkun dhe përshkrimin e faqes tënde këtu"
              )}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>
            {t(
              "© 2025 Albanian Young Entrepreneur. Built with passion.",
              "© 2025 Sipërmarrës i Ri Shqiptar. Ndërtuar me pasion."
            )}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
