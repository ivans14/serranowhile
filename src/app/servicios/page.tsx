"use client";
import { useContext } from "react";
import { Language, LanguageContext } from "../comps/context";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const translations = {
  ES: {
    title: "Nuestros servicios",
    services: [
      {
        title: <h2>Trámites administrativos</h2>,
        desc: (
          <p className="flex flex-col text-left gap-5">
            <span>Solicitud de Certificado Digital</span>
            <span>Presentación de impuestos para no residentes</span>
            <span>
              Gestión de Ley Beckham (Régimen fiscal aplicable a los
              trabajadores desplazados a territorio español, art. 93 Ley
              35/2006, de 28 de noviembre, del Impuesto sobre la Renta de las
              Personas Físicas y otras normas tributarias.)
            </span>
            <span>
              Asistencia en compraventa de inmuebles por No Residentes
            </span>
          </p>
        ),
      },
      {
        title: <h2>Fiscalidad y gestión de impuestos</h2>,
        desc: (
          <p className="flex flex-col text-left gap-5">
            <span>Asesoría y gestión de impuestos</span>
            <span>Presentación de declaraciones y obligaciones</span>
            <span>Regularización de situaciones fiscales complejas</span>
          </p>
        ),
      },
      {
        title: <h2>Consultoría estratégica y de organización</h2>,
        desc: (
          <p className="flex flex-col text-left gap-5">
            <span>Consultoría estratégica y transformación de negocio</span>
            <span>
              Externalización de procesos (outsourcing de funciones internas)
            </span>
            <span>Planes de igualdad</span>
            <span>Rediseño organizativo (estructura, perfiles, roles)</span>
          </p>
        ),
      },
      {
        title: <h2>Empresa familiar y continuidad</h2>,
        desc: (
          <p className="flex flex-col text-left gap-5">
            <span>Planificación e implantación del cambio generacional</span>
            <span>Organización y eficiencia en la estructura familiar</span>
            <span>Acompañamiento en la continuidad del negocio</span>
          </p>
        ),
      },
      {
        title: <h2>Asesoría legal y derecho empresarial</h2>,
        desc: (
          <p className="flex flex-col text-left gap-5">
            <span>Derecho mercantil, societario, civil y procesal</span>
            <span>Planificación y reestructuración tributaria</span>
            <span>Fusiones y adquisiciones (M&A)</span>
            <span>Procedimientos tributarios</span>
          </p>
        ),
      },
    ],
  },

  CAT: {
    title: "Els nostres serveis",
    services: [
      {
        title: <h2>Tràmits administratius</h2>,
        desc: (
          <p className="flex flex-col text-left gap-5">
            <span>Sol·licitud de Certificat Digital</span>
            <span>Presentació d&apos;impostos per a no residents</span>
            <span>
              Gestió de la Llei Beckham (Règim fiscal aplicable als treballadors
              desplaçats a territori espanyol, art. 93 Llei 35/2006, de 28 de
              novembre, de l&apos;Impost sobre la Renda de les Persones Físiques
              i altres normes tributàries.)
            </span>
            <span>
              Assistència en compravenda d&apos;immobles per a No Residents
            </span>
          </p>
        ),
      },
      {
        title: <h2>Fiscalitat i gestió d&apos;impostos</h2>,
        desc: (
          <p className="flex flex-col text-left gap-5">
            <span>Assessorament i gestió d&apos;impostos</span>
            <span>Presentació de declaracions i obligacions</span>
            <span>Regularització de situacions fiscals complexes</span>
          </p>
        ),
      },
      {
        title: <h2>Consultoria estratègica i d&apos;organització</h2>,
        desc: (
          <p className="flex flex-col text-left gap-5">
            <span>Consultoria estratègica i transformació de negoci</span>
            <span>
              Externalització de processos (outsourcing de funcions internes)
            </span>
            <span>Plans d&apos;igualtat</span>
            <span>Redisseny organitzatiu (estructura, perfils, rols)</span>
          </p>
        ),
      },
      {
        title: <h2>Empresa familiar i continuïtat</h2>,
        desc: (
          <p className="flex flex-col text-left gap-5">
            <span>Planificació i implantació del canvi generacional</span>
            <span>Organització i eficiència en l&apos;estructura familiar</span>
            <span>Acompanyament en la continuïtat del negoci</span>
          </p>
        ),
      },
      {
        title: <h2>Assessoria legal i dret empresarial</h2>,
        desc: (
          <p className="flex flex-col text-left gap-5">
            <span>Dret mercantil, societari, civil i processal</span>
            <span>Planificació i reestructuració tributària</span>
            <span>Fusiones i adquisicions (M&A)</span>
            <span>Procediments tributaris</span>
          </p>
        ),
      },
    ],
  },
};

export default function Servicios() {
  const { language } = useContext(LanguageContext);
  const t = translations[language as Language];

  return (
    <div className="flex-1 max-w-[1000px] w-full p-5 px-10 md:px-20 md:pt-12 pb-20 flex flex-col items-center text-center gap-10 md:gap-15">
      <div className="flex flex-col gap-5">
        <h1>{t.title}</h1>
      </div>
      <Accordion type="multiple" className="w-full gap-5">
        {t.services.map((service, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="w-full text-left py-3 px-5 rounded-md">
              {service.title}
            </AccordionTrigger>
            <AccordionContent className="py-3 px-5 flex">
              {service.desc}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
