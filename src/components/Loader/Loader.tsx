import { Box } from "@chakra-ui/react";
import { PuffLoader } from "react-spinners";

export default function Loader() {
    return (
        <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
            <PuffLoader size={200} />
        </Box>
    )
}
