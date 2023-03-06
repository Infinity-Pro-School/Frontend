import { useToggleReturnTypes } from "@/types";
import { useEffect, useState } from "react";

export default function useToggle(defaultValue: boolean = false): useToggleReturnTypes {
    const [value, setValue] = useState<boolean>(defaultValue);
    const toggle = () => setValue(previousValue => !previousValue);
    useEffect(() => {
        console.log(value);
    }, [value]);
    return [value, toggle];
}
