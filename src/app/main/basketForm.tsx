"use client";
import React from "react";
import { useState } from "react";
import KakaoMap from "../common/kakaoMap";
import BasketList from "./basketList";

const BasketForm = ({ data }: any) => {
    const [center, setCenter] = useState([37.541, 126.986]);
    const [zoom, setZoom] = useState(8);
    return (
        <>
            <KakaoMap basketInfo={data} center={center} zoom={zoom} />
            <BasketList basketInfo={data} setCenter={setCenter} setZoom={setZoom} />
        </>
    );
};

export default BasketForm;
