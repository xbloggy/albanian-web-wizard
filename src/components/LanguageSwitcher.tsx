import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "sq" : "en")}
      className="gap-2"
    >
      <Globe className="h-4 w-4" />
      {language === "en" ? "EN" : "SQ"}
    </Button>
  );
};
