import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface NavState {
    display: boolean;
    toggle: () => void;
}

const useNavStore = create<NavState>()(
    devtools(
        (set) => ({
            display: false,
            toggle: () =>
                set((state) => ({
                    display: !state.display,
                })),
        }),
        {
            name: "nav-storage",
        }
    )
);

export default useNavStore;
