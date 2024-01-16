import { Header } from "@/components/header";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { locales } from "@/config";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function LocaleLayout({ children, params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <>
      <Header />
      {children}
    </>
  );
}
