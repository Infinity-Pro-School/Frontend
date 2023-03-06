import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type User = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

interface UserState {
    users: User[];
}

const useNavStore = create<UserState>()(
    devtools(
        (set) => ({
            users: [],
        }),
        {
            name: "user-storage",
        }
    )
);

export default useNavStore;
