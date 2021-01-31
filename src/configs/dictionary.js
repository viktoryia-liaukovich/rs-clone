import variables from "../global/variables";
import dict_en from "./dicts/dict_en";

const langMap = {
  en: dict_en,
  ru: dict_en,
  by: dict_en
}

export default langMap[variables.lang];