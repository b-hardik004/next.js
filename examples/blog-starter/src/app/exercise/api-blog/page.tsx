"use client"

import React, { useEffect, useState } from "react";
import { APIService } from "../services/apiService";
import { URL_GET_ALBUMS } from "../constant/constants";
import Avatar from "@/app/_components/avatar";
import Container from "@/app/_components/container";
import { ActivityLoader } from "../ActivityLoader";

type ApiBlogType = {
    userId: number,
    id: number,
    title: string
}

const ApiBlogPage: React.FC = () => {

    const [blogsData, setBlogsData] = useState<ApiBlogType[]>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        callDataApi();
    }, []);

    function callDataApi() {
        APIService.get(URL_GET_ALBUMS).then((data: any) => {
            if (data?.data !== '') {
                setBlogsData(data.data);
                setLoading(false);
            }
        });
    };

    return <Container>
        <ActivityLoader isLoading={loading} />
        <div style={{ padding: "1.25rem" }}>
            {
                blogsData && blogsData.map(data =>
                    <div key={data.id}>
                        <Avatar name={data.title} picture="/assets/images/user-icon.png" />
                    </div>
                )
            }
        </div>
    </Container>
}

export default ApiBlogPage;