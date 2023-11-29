import { useSearchParams } from "next/navigation";
import kor from "./kor";
import eng from "./eng";

export const useTranslate = () => {
    const requestParams = useSearchParams();
    const isEng = requestParams.get("lang") === "eng";
    const t = (key: keyof typeof kor) => isEng ? eng[key] : kor[key];

    return { t }
}