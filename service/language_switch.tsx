import { useRouter } from 'next/router';

export default function UseLanguageService() {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  const changeLanguage = (newLocale: string) => {
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const headers = {
    "Content-Type": "application/json",
    locale: locale || "fr",
  };

  return {
    locale,
    changeLanguage,
    headers,
  };
}
