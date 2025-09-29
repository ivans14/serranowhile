"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Globe } from "lucide-react";
import { Language, LanguageContext } from "./context";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./Sidebar";

const translations = {
  ES: {
    equipo: "Quiénes somos",
    servicios: "Servicios",
    contacto: "Contacto",
  },
  CAT: {
    equipo: "Qui som",
    servicios: "Serveis",
    contacto: "Contacte",
  },
  ENG: {
    equipo: "Who we are",
    servicios: "Services",
    contacto: "Contact",
  },
};

function Navbar() {
  const router = useRouter();
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <div className="static top-0 bg-background h-[100px] flex justify-between text-foreground w-[100%] p-10">
      <div className="flex md:items-center items-baseline hover:cursor-pointer">
        <Image
          src={"/logo.png"}
          width={226}
          height={43}
          alt={"logo"}
          onClick={() => router.push("/")}
        />
      </div>
      <div className="md:flex hidden flex-row items-center gap-5">
        <Link href="/equipo">{translations[language as Language].equipo}</Link>
        <Link href="/servicios">
          {translations[language as Language].servicios}
        </Link>
        <Button onClick={() => router.push("contact")}>
          {translations[language as Language].contacto}
        </Button>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Globe strokeWidth={1.3} />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink
                  onClick={() => setLanguage("ES")}
                  className={language == "ES" ? "bg-accent" : ""}
                >
                  Español
                </NavigationMenuLink>
                <NavigationMenuLink
                  onClick={() => setLanguage("CAT")}
                  className={language == "CAT" ? "bg-accent" : ""}
                >
                  Català
                </NavigationMenuLink>
                <NavigationMenuLink
                  onClick={() => setLanguage("ENG")}
                  className={language == "ENG" ? "bg-accent" : ""}
                >
                  English
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="right-0 md:hidden flex">
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger />
        </SidebarProvider>
      </div>
    </div>
  );
}

export default Navbar;
