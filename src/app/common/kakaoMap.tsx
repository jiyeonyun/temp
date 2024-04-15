"use client";

import React, { useEffect } from "react";

const KakaoMap = ({ basketInfo }: any) => {
    console.log("basketInfo: ", basketInfo);
    useEffect(() => {
        const kakaoMapScript = document.createElement("script");
        kakaoMapScript.async = false;
        kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&autoload=false`;
        document.head.appendChild(kakaoMapScript);

        const onLoadKakaoAPI = () => {
            window.kakao.maps.load(() => {
                var container = document.getElementById("map");
                var options = {
                    center: new window.kakao.maps.LatLng(37.541, 126.986),
                    level: 8,
                };

                var map = new window.kakao.maps.Map(container, options);

                basketInfo.forEach((item: any) => {
                    let imageSrc = "/images/mapmark.png";
                    let imageSize = new window.kakao.maps.Size(60, 60);
                    let markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);
                    let markerPosition = new window.kakao.maps.LatLng(Number(item.y), Number(item.x));
                    let marker = new window.kakao.maps.Marker({
                        position: markerPosition,
                        image: markerImage,
                    });
                    marker.setMap(map);
                });

                // var zoomControl = new window.kakao.maps.ZoomControl();
                // map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
            });
        };

        kakaoMapScript.addEventListener("load", onLoadKakaoAPI);
    }, []);

    return <div id="map" style={{ width: "100%", height: "100%" }} />;
};

export default KakaoMap;
