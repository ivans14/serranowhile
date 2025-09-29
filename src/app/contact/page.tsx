"use client";
import { useContext, useRef, useState } from "react";
import { Language, LanguageContext } from "../comps/context";
import {
  CheckCircle2Icon,
  X,
  Mail,
  MapPin,
  Phone,
  CircleX,
  Loader2,
} from "lucide-react";
import { WhatsApp } from "@mui/icons-material";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertTitle } from "@/components/ui/alert";

const translations = {
  ES: {
    details: {
      title: (
        <h2 className="text-text-secondary w-full text-center md:text-left">
          Detalles de contacto
        </h2>
      ),
      phone: (
        <div className="flex gap-2  md:justify-start">
          <Phone />
          <p>(+34) 684 48 80 17</p>
        </div>
      ),
      whatsapp: (
        <div className="flex gap-2  md:justify-start">
          <WhatsApp />
          <p>(+34) 684 48 80 17</p>
        </div>
      ),
      email: (
        <div className="flex gap-2  md:justify-start">
          <Mail />
          <p>info@serranowhile.com</p>
        </div>
      ),
      location: (
        <div className="flex gap-2  md:justify-start">
          <MapPin />
          <p className="text-left">Avenida Diagonal 449, Barcelona</p>
        </div>
      ),
    },
    formTitle: (
      <h2 className="text-text-secondary text-center md:text-left">
        Escríbenos
      </h2>
    ),
    formDesc: (
      <p className="text-left">
        Rellena el siguiente formulario y te contactaremos lo antes posible
      </p>
    ),
    formParams: [
      { id: "name", name: "Nombre" },
      { id: "surname", name: "Apellidos" },
      { id: "email", name: "Email" },
      { id: "phone", name: "Teléfono" },
    ],
    message: "Mensaje",
    check: (
      <p className="text-sm">
        He leído y acepto la{" "}
        <span className="underline hover:cursor-pointer text-primary">
          Política de Privacidad
        </span>{" "}
        de Serrano While.
      </p>
    ),
    submitButton: "Enviar",
  },

  CAT: {
    details: {
      title: (
        <h2 className="w-full text-center md:text-left">Detalls de contacte</h2>
      ),
      phone: (
        <div className="flex gap-2  md:justify-start">
          <Phone />
          <p>(+34) 684 48 80 17</p>
        </div>
      ),
      whatsapp: (
        <div className="flex gap-2  md:justify-start">
          <WhatsApp />
          <p>(+34) 684 48 80 17</p>
        </div>
      ),
      email: (
        <div className="flex gap-2  md:justify-start">
          <Mail />
          <p>info@serranowhile.com</p>
        </div>
      ),
      location: (
        <div className="flex gap-2  md:justify-start">
          <MapPin />
          <p>Avinguda Diagonal 449, Barcelona</p>
        </div>
      ),
    },
    formTitle: <h2 className="text-center md:text-left">Escriu-nos</h2>,
    formDesc: (
      <p className="text-left">
        Omple el següent formulari i et contactarem el més aviat possible
      </p>
    ),
    formParams: [
      { id: "name", name: "Nom" },
      { id: "surname", name: "Cognoms" },
      { id: "email", name: "Email" },
      { id: "phone", name: "Telèfon" },
    ],
    message: "Missatge",
    check: (
      <p className="text-sm">
        He llegit i accepto la{" "}
        <span className="underline hover:cursor-pointer text-primary">
          Política de Privacitat
        </span>{" "}
        de Serrano While.
      </p>
    ),
    submitButton: "Enviar",
  },
  ENG: {
    details: {
      title: (
        <h2 className="text-text-secondary w-full text-center md:text-left">
          Contact Details
        </h2>
      ),
      phone: (
        <div className="flex gap-2  md:justify-start">
          <Phone />
          <p>(+34) 684 48 80 17</p>
        </div>
      ),
      whatsapp: (
        <div className="flex gap-2  md:justify-start">
          <WhatsApp />
          <p>(+34) 684 48 80 17</p>
        </div>
      ),
      email: (
        <div className="flex gap-2  md:justify-start">
          <Mail />
          <p>info@serranowhile.com</p>
        </div>
      ),
      location: (
        <div className="flex gap-2  md:justify-start">
          <MapPin />
          <p className="text-left">Avenida Diagonal 449, Barcelona</p>
        </div>
      ),
    },
    formTitle: (
      <h2 className="text-text-secondary text-center md:text-left">
        Write to us
      </h2>
    ),
    formDesc: (
      <p className="text-left">
        Fill out the following form and we will contact you as soon as possible
      </p>
    ),
    formParams: [
      { id: "name", name: "Name" },
      { id: "surname", name: "Surname" },
      { id: "email", name: "Email" },
      { id: "phone", name: "Phone" },
    ],
    message: "Message",
    check: (
      <p className="text-sm">
        I have read and accept the{" "}
        <span className="underline hover:cursor-pointer text-primary">
          Privacy Policy
        </span>{" "}
        of Serrano While.
      </p>
    ),
    submitButton: "Send",
  },
};

export default function Contacto() {
  const { language } = useContext(LanguageContext);
  const t = translations[language as Language];
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertErrorVisible, setAlertErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loadingSend, setLoadingSend] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const Icons = {
    spinner: Loader2,
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoadingSend(true);

      // Get form data
      const formData = new FormData(e.currentTarget);
      const formObject = Object.fromEntries(formData.entries());

      formObject["language"] = language;

      // Send form data as JSON
      const res = await fetch("api/mail/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formObject),
      });

      setLoadingSend(false);

      if (!res.ok) {
        const errorData = await res.json();
        setErrorMessage(errorData.message);
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      console.log("Form submitted successfully");
      setAlertVisible(true);

      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      setLoadingSend(false);
      console.error("Error submitting form:", error);
      setAlertErrorVisible(true);
    }
  };

  return (
    <div className="relative flex-1 flex-col md:flex-row max-w-[1200px] p-5 px-10 md:px-20 md:pt-12 pb-20 flex items-start text-center md:text-left gap-10">
      <div className="flex flex-col gap-10 flex-2 w-full">
        {t.details.title}
        {t.details.phone}
        {t.details.whatsapp}
        {t.details.email}
        {t.details.location}
      </div>

      <Separator
        orientation="horizontal"
        className="bg-border w-full h-px block md:hidden"
      />
      <Separator
        orientation="vertical"
        className="bg-border self-stretch w-px hidden md:block"
      />

      <div className="flex flex-col gap-5 flex-3 w-full">
        <div className="flex flex-col gap-5">
          {t.formTitle}
          {t.formDesc}
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          {t.formParams.map((param, i) => (
            <div key={i} className="grid w-full max-w-full items-center gap-3">
              <Label htmlFor={param.name}>{param.name}</Label>
              <Input
                id={param.id}
                name={param.id}
                placeholder={param.name}
                required
                className="w-full"
              />
            </div>
          ))}
          <div className="grid w-full max-w-full items-center gap-3">
            <Label htmlFor={t.message}>{t.message}</Label>
            <Textarea
              id={t.message}
              name={"message"}
              placeholder={t.message}
              rows={4}
              required
              className="w-full"
            />
          </div>
          <div className="flex gap-2 items-center text-left">
            <Checkbox required />
            {t.check}
          </div>
          <div className="w-full flex justify-center">
            <Button
              variant={"outline"}
              type="submit"
              className="hover:cursor-pointer w-[80px]"
              disabled={loadingSend}
            >
              {!loadingSend ? (
                t.submitButton
              ) : (
                <Icons.spinner className="h-4 w-4 animate-spin" />
              )}
            </Button>
          </div>
        </form>
      </div>
      {alertVisible ? (
        <div className="absolute bottom-2 left-0 w-full flex justify-center">
          <Alert variant="default" className="w-fit flex gap-2 bg-green-100">
            <CheckCircle2Icon color="green" />

            <AlertTitle>
              {language == "ES"
                ? "Tu mensaje se ha enviado correctamente"
                : "El teu missatge s'ha enviat correctament"}
            </AlertTitle>
            <X
              className="hover:cursor-pointer"
              onClick={() => setAlertVisible(false)}
            />
          </Alert>
        </div>
      ) : null}
      {alertErrorVisible ? (
        <div className="absolute bottom-2 left-0 w-full flex justify-center">
          <Alert variant="default" className="w-fit flex gap-2 bg-red-100">
            <CircleX color="red" />

            <AlertTitle> {errorMessage}</AlertTitle>
            <X
              className="hover:cursor-pointer"
              onClick={() => setAlertErrorVisible(false)}
            />
          </Alert>
        </div>
      ) : null}
    </div>
  );
}
