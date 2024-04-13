import React from "react";
import Container from "@/app/_components/container";
import Classes from '../nextjs-skills.module.scss'
import Image from "next/image";

const ImageComponent: React.FC = () => {

    return <Container>
        <picture className={Classes['img-block']}>
            <source media="(min-width:1440px)" srcSet="../../assets/images/img_1920.jpg" />
            <source media="(min-width:1024px)" srcSet="../../assets/images/img_1440.jpg" />
            <source media="(min-width:768px)" srcSet="../../assets/images/img_960.jpg" />
            <source media="(min-width:300px)" srcSet="../../assets/images/img_480.jpg" />
            <img src="../../assets/images/img_480.jpg" alt="Image Component" />
        </picture>

        <div className={Classes['grid']}>
            <div className={Classes['images']}>
                <h2>Placeholder Image:</h2>
                <Image
                    src="/../../assets/images/coder.jpg"
                    alt="Placeholder image"
                    width={500}
                    height={300}
                    blurDataURL="/../../assets/images/coder_blur.jpg"
                    placeholder="blur"
                />
            </div>
            <div className={Classes['images']}>
                <h2>Unoptimized Image:</h2>
                <Image
                    src="/../../assets/images/coder.jpg"
                    alt="A sample image"
                    width={500}
                    height={300}
                    unoptimized
                />
            </div>
            <div className={Classes['images']}>
                <h2>Priority Loading:</h2>
                <Image
                    src="/../../assets/images/coder.jpg"
                    alt="A sample image"
                    width={500}
                    height={300}
                    loading="eager"
                />
            </div>
        </div>
    </Container>
}

export default ImageComponent;