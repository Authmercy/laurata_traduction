import  { useRouter } from "next/router";





export default function UseActuService() {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;


  const changeLanguage = (newLocale: any) => {

    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return {

    locale,
    changeLanguage


  }
}