import { axiosClient } from "@/main";

export function getFetch(url: string, params: object) {
    return axiosClient.get(url, {
        params,
    });
}
