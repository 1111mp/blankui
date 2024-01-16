import { useTranslations } from "next-intl";

export const Code: React.FC<{}> = () => {
  const t = useTranslations("Button");

  return <p>{t("desc")}</p>;
};
