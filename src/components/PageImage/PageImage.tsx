import { Image } from "@chakra-ui/react";

export default function PageImage({ imageSource }: { imageSource: string }) {
    return (
        <Image width={["200px", "300px", "350px", "450px", "480px"]} margin="auto" height={300} aria-hidden="true" loading="lazy" alt="Infinity about image" className="w-full" src={imageSource} />
    )
}
