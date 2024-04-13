"use client"

import React, { useEffect } from "react";
import Avatar from "@/app/_components/avatar";
import Container from "@/app/_components/container";
import { ActivityLoader } from "../ActivityLoader";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { ApiBlogType, fetchApiData } from "../redux/slices/api-blog-slice";

const ApiBlogPage: React.FC = () => {

    const { apiBlogData, loading } = useSelector((state: RootState) => state.ApiBlog);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchApiData());
    }, []);

    return <Container>
        <ActivityLoader isLoading={loading} />
        <div style={{ padding: "1.25rem" }}>
            {
                apiBlogData?.map((data: ApiBlogType) =>
                    <div key={data.id}>
                        <Avatar name={data.title} picture="/assets/images/user-icon.png" />
                    </div>
                )
            }
        </div>
    </Container>
}

export default ApiBlogPage;