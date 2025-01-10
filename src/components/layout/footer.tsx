import Link from "next/link";
import Image from "next/image";
import FooterForm from "../common/forms/footer-form";
import logo from "@/assets/svg/logo.svg";
import UnderlineText from "../common/underline-text";
import clsx from "clsx";
import { EMAIL, SOCIAL_MEDIA } from "@/assets/content/common";
import Logo from "../common/logo";

const Footer = () => {
  return (
    <div className="z-[2] max-w-1920 mx-auto px-4 md:px-5 2xl:px-8 mt-20 md:mt-[100px] 2xl:mt-[120px]">
      <div className="bg-white rounded-[21px] px-4 lg:px-[40px] pt-[50px] pb-[0]">
        {/* Create Design Section */}
        <section className="w-full hidden md:flex items-center justify-center pb-9 pt-3">
          <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <span className="text-sm lg:text-lg 2xl:text-2xl font-normal">
                LET&apos;S
              </span>
            </div>
            <div className="relative">
              <h1 className="text-[40px] lg:text-6xl 2xl:text-[80px]  font-normal tracking-tight">
                CREATE
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm lg:text-lg 2xl:text-2xl font-normal">
                YOUR
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm lg:text-lg 2xl:text-2xl font-normal">
                <UnderlineText>UNIQUE</UnderlineText>
              </span>
            </div>
            <div className="relative">
              <h1 className="text-[40px] lg:text-6xl 2xl:text-[80px]  font-normal tracking-tight">
                DESIGN
              </h1>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <FooterForm />
        </section>

        {/* Footer */}
        <footer className="py-8">
          <div className="flex items-center gap-[3%] xl:gap-[6%] justify-between flex-wrap">
            {/* Logo */}
            <Logo className="-mt-2.5" />
            <Link
              href={`mailto:${EMAIL}`}
              aria-label="Nova Pixels Homepage"
              className="lg:hidden flex-1 text-right whitespace-nowrap"
            >
              [ {EMAIL} ]
            </Link>

            {/* Social Links */}
            <span className="w-full lg:w-auto lg:flex-1 inline-flex justify-between flex-wrap">
              {SOCIAL_MEDIA.map(({ href, label, id }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={`Visit Nova Pixels on ${label}`}
                  className={`hover:text-cyan-400 transition-colors odd:basis-1/2 sm:odd:basis-auto ${
                    id === "email" ? "hidden lg:inline" : ""
                  }`}
                >
                  [ {label} ]
                </Link>
              ))}
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
