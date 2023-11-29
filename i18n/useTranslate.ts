import { useSearchParams } from "next/navigation";
import kor from "./kor";
import eng from "./eng";

export const useTranslate = () => {
    const requestParams = useSearchParams();
    const isEng = requestParams.get("lang") === "eng";
    const t = <K extends keyof typeof kor>(key: K) => isEng ? eng[key] : kor[key];

    return { t }
}