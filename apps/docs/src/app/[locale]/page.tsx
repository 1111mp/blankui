import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export default async function IndexPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = await getTranslations("Hello");

  return <main className="mx-auto w-full max-w-7xl">{t("title")}</main>;
}
