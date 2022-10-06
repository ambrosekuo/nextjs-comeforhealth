import { en } from "src/languageService/translations/en";
import { cn } from "src/languageService/translations/cn";

export function getTranslation(language, key) {
  if (language == "en") {
    return en[key];
  } else if (language == "cn") {
    return cn[key];
  }
}
