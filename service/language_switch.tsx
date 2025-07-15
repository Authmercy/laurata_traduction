import router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { URLS } from "./url";




export default function UseActuService() {
 const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  
  const changeLanguage = (newLocale:any) => {

    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return {

locale,
changeLanguage


  }
}