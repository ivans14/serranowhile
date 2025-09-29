"use client";
import { useContext } from "react";
import { LanguageContext, Language } from "./comps/context";
import { useRouter } from "next/navigation";
import Card from "@mui/material/Card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const translations = {
  ES: {
    title: "SERRANO WHILE",
    subtitle:
      "Soluciones profesionales integrales para empresas, directivos y particulares. Consultoría, fiscalidad, procesos y estrategia",
    text1:
      "Unimos conocimiento técnico con comprensión estratégica del negocio",
    text2:
      "Te conectamos con profesionales expertos para brindarte soluciones a medida, según tus necesidades",
    button: "Descúbrenos",
  },
  CAT: {
    title: "SERRANO WHILE",
    subtitle:
      "Solucions professionals integrals per a empreses, directius i particulars. Consultoria, fiscalitat, processos i estratègia",
    text1: "Unim coneixement tècnic amb comprensió estratègica del negoci",
    text2:
      "Et connectem amb professionals experts per oferir-te solucions a mida, segons les teves necessitats",
    button: "Descobreix-nos",
  },
  ENG: {
    title: "SERRANO WHILE",
    subtitle:
      "Comprehensive professional solutions for companies, executives, and individuals. Consulting, taxation, processes, and strategy",
    text1:
      "We combine technical knowledge with strategic business understanding",
    text2:
      "We connect you with expert professionals to provide tailored solutions based on your needs",
    button: "Discover us",
  },
};

export default function Home() {
  const { language } = useContext(LanguageContext);
  const t = translations[language as Language];
  const router = useRouter();

  return (
    <div className="flex-1 max-w-[1000px] py-5 px-10 md:py-10 !pb-20 flex flex-col items-center text-center gap-12">
      <div className="flex flex-col gap-5">
        <h1>{t.title}</h1>
        <h3>{t.subtitle}</h3>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <Card className="h-[300px] w-[250px] sm:w-[350px] md:w-[320px] md:h-[300px] lg:w-[450px] lg:h-[400px] flex flex-col">
          <Image
            className="h-[230px] lg:h-[300px] md:h-[230px] object-cover"
            src={"/graph.png"}
            width={1000}
            height={300}
            alt={"graph"}
          />
          <div className="flex-1 flex items-center text-left px-5">
            <p className="mt-2">{t.text1}</p>
          </div>
        </Card>
        <Card className="h-[300px] w-[250px] sm:w-[350px] md:w-[320px] md:h-[300px] lg:w-[450px] lg:h-[400px] flex flex-col">
          <Image
            className="h-[230px] lg:h-[300px] md:h-[230px] object-cover"
            src={"/review.png"}
            width={1000}
            height={300}
            alt={"review"}
          />
          <div className="flex-1 flex items-center text-left px-5">
            <p className="mt-2">{t.text2}</p>
          </div>
        </Card>
      </div>
      <Button variant="outline" onClick={() => router.push("/equipo")}>
        {t.button}
      </Button>
    </div>
  );
}
