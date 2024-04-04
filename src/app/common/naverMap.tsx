"use client";
import Script from "next/script";
import { useEffect, useRef } from "react";
import { Coordinates, NaverMap } from "../types/map";

type Props = {
    mapId?: string;
    initialCenter?: Coordinates;
    initialZoom?: number;
    onLoad?: (map: NaverMap) => void;
};

export const Map = ({ mapId = "map", onLoad }: Props) => {
    const mapRef = useRef<NaverMap | null>(null);

    const initializeMap = () => {
        const mapOptions = {
            center: new window.naver.maps.LatLng(37.5262411, 126.99289439),
            zoom: 10,
            minZoom: 9,
            scaleControl: false,
            mapDataControl: false,
            logoControlOptions: {
                position: naver.maps.Position.BOTTOM_LEFT,
            },
        };
        //새로운 네이버 맵 인스턴스 생성
        const map = new window.naver.maps.Map(mapId, mapOptions);
        mapRef.current = map;

        if (onLoad) {
            onLoad(map);
        }
    };

    //맵이 unmount되었을 때 맵 인스턴스 destory하기
    useEffect(() => {
        return () => {
            mapRef.current?.destroy();
        };
    }, []);

    return (
        <>
            <Script
                strategy="afterInteractive"
                type="text/javascript"
                src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}
                onReady={initializeMap}
            />
            <div id={mapId} style={{ width: "100%", height: "100%" }} />
        </>
    );
};
