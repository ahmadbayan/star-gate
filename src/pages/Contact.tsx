import { useTranslation } from "react-i18next";
import SEO from "../SEO/SEO";
import Layout from "../components/Layout/Layout";
import hala from "../assets/img/hala.jpeg";
import PhoneSvg from "../svg/PhoneSvg";
import MailSvg from "../svg/MailSvg";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <Layout classes="lg:px-0 lg:pt-[8.5rem]">
      <SEO title={t("words.contactPage")} browserUiColor="#fff" />
      <div className="flex h-full w-full flex-col items-center">
        <img src={hala} className="hidden h-80 w-full object-cover lg:block" />
        <h1 className="font-lato-bold text-2xl lg:mt-10">
          {t("pages.contact.title").toUpperCase()}
        </h1>
        <div className="mt-24 flex h-full flex-col gap-20 xs:mt-32 lg:flex-row lg:gap-40">
          <a
            className="font-lato-regular flex w-full flex-col items-center"
            href="tel: +40 123 456 789"
          >
            <PhoneSvg classes="w-12 xs:w-16" />
            +40 123 456 789
          </a>
          <a
            className="font-lato-regular flex w-full flex-col items-center"
            href="mailto: stargate@international.com"
          >
            <MailSvg classes="w-12 xs:w-16" />
            stargate@international.com
          </a>
        </div>
      </div>
    </Layout>
  );
}
