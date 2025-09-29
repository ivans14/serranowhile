"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useContext } from "react";
import { Language, LanguageContext } from "../comps/context";
import { useRouter } from "next/navigation";

const translations = {
  ES: {
    title: "¿Quiénes somos?",
    subtitle: (
      <span>
        <span className="font-bold text-text-secondary">Serrano While</span> es
        una firma boutique compuesta por una red de profesionales
        multidisciplinares, expertos en distintas áreas clave del mundo
        empresarial y jurídico.
      </span>
    ),
    description: (
      <span>
        Gracias a esta diversidad, ofrecemos un enfoque
        <span className="text-text-secondary"> integral y transversal</span>,
        aportando soluciones a medida para cada cliente desde una{" "}
        <span className="text-text-secondary">
          visión holística del negocio
        </span>{" "}
        .
      </span>
    ),
    button: "Nuestros Servicios",
    officeLocation: (
      <span>
        Ubicados en{" "}
        <span className="font-bold text-text-secondary">
          Avenida Diagonal 449 (Barcelona)
        </span>
        , operamos tanto a nivel local como nacional, con capacidad de acompañar
        a empresas, ejecutivos y particulares en sus decisiones estratégicas,
        fiscales y organizativas.
      </span>
    ),
  },

  CAT: {
    title: "Qui som?",
    subtitle: (
      <span>
        <span className="font-bold text-text-secondary">Serrano While</span> és
      </span>
    ),
    description: (
      <span>
        Gràcies a aquesta diversitat, oferim un enfocament
        <span className="text-text-secondary"> integral i transversal</span> a
        les necessitats dels nostres clients, aportant solucions a mida per a
        cada situació.
      </span>
    ),

    button: "Els nostres serveis",
    officeLocation: (
      <span>
        Ubicats a{" "}
        <span className="font-bold text-text-secondary">
          Avinguda Diagonal 449 (Barcelona)
        </span>
        , operem tant a nivell local com nacional, amb capacitat de acompanyar a
        empreses, executius i particulars en les seves decisions estratègiques,
        fiscals i organitzatives.
      </span>
    ),
  },
  ENG: {
    title: "Who are we?",
    subtitle: (
      <span>
        <span className="font-bold text-text-secondary">Serrano While</span> is
        a boutique firm made up of a network of multidisciplinary professionals,
        experts in different key areas of the business and legal world.
      </span>
    ),
    description: (
      <span>
        Thanks to this diversity, we offer a
        <span className="text-text-secondary">
          {" "}
          comprehensive and cross-cutting
        </span>
        approach, providing tailored solutions for each client from a{" "}
        <span className="text-text-secondary">
          holistic view of the business
        </span>{" "}
        .
      </span>
    ),
    button: "Our Services",
    officeLocation: (
      <span>
        Located at{" "}
        <span className="font-bold text-text-secondary">
          Avenida Diagonal 449 (Barcelona)
        </span>
        , we operate both locally and nationally, with the capacity to support
        companies, executives, and individuals in their strategic, tax, and
        organizational decisions.
      </span>
    ),
  },
};

export default function Equipo() {
  const { language } = useContext(LanguageContext);
  const t = translations[language as Language];
  const router = useRouter();

  return (
    <div className="flex-1 max-w-[1000px] p-5 px-10 md:px-20 md:pt-12 pb-20 flex flex-col items-center text-left gap-15">
      <div className="flex flex-col gap-5">
        <h1>{t.title}</h1>
      </div>
      <div className="w-[100%] text-left flex flex-col gap-5">
        {t.subtitle}
        <p>{t.description}</p>
      </div>
      <Button variant={"outline"} onClick={() => router.push("/servicios")}>
        {t.button}
      </Button>
      <Image alt="pic-divorce-1" width={435} height={290} src="/sign.png" />
      <div className="flex flex-col md:flex-row items-start gap-5">
        <p className="flex-1 text-left">{t.officeLocation}</p>
      </div>
    </div>
  );
}
