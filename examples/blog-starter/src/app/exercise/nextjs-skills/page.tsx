"use client";

import React, { useEffect, useMemo, useState } from "react";
import { APIService } from "../services/apiService";
import { URL_GET_PHOTOS } from "../constant/constants";
import Container from "@/app/_components/container";
import Classes from './nextjs-skills.module.scss'
import { ActivityLoader } from "../ActivityLoader";

type NextJsSkillPageType = {
    albumId: number,
    id: number,
    thumbnailUrl: string,
    title: string,
    url: string
}

const NextJsSkillPage: React.FC = () => {

    const [blogsPhotos, setBlogsPhotos] = useState<NextJsSkillPageType[]>();
    const [imgObject, setimgObject] = useState<NextJsSkillPageType>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        callDataApi();
    }, []);

    const callDataApi = () => {
        APIService.get(URL_GET_PHOTOS).then((data: any) => {
            const respData = data?.data;
            if (respData !== '') {
                setBlogsPhotos(respData);
                setimgObject(respData[0]);
                setLoading(false);
            }
        });
    };

    const generateRandomImage = () => {
        return Math.floor(Math.random() * blogsPhotos!.length);
    };

    const imageComponent = useMemo(() => {
        if (!blogsPhotos) return null;
        return <img
            src={imgObject?.url}
            alt={imgObject?.title}
            className={Classes['blog-img']} />;
    }, [imgObject]);

    const getShuffleImg = () => {
        setimgObject(blogsPhotos && blogsPhotos[generateRandomImage()]);
    };

    return <Container>
        <ActivityLoader isLoading={loading} />
        <div className={Classes['img-shuffle-btn']}>
            <button onClick={getShuffleImg}>Click To shuffle</button>
        </div>
        {imageComponent}
    </Container>
}

export default NextJsSkillPage;