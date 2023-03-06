import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type Theme = "dark" | "light";

interface ThemeState {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

const useThemeStore = create<ThemeState>()(
    devtools(
        persist(
            (set) => ({
                theme: "dark",
                setTheme: (chosenTheme) => set(() => ({ theme: chosenTheme })),
            }),
            {
                name: "theme-storage",
            }
        )
    )
);

export default useThemeStore