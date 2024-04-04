"use client";

import React, { useEffect } from "react";

const KakaoMap = () => {
    useEffect(() => {
        const kakaoMapScript = document.createElement("script");
        kakaoMapScript.async = false;
        kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&autoload=false`;
        document.head.appendChild(kakaoMapScript);

        const onLoadKakaoAPI = () => {
            window.kakao.maps.load(() => {
                var container = document.getElementById("map");
                var options = {
                    center: new window.kakao.maps.LatLng(37.5217284, 127.0481926),
                    level: 4,
                };

                var map = new window.kakao.maps.Map(container, options);
                // var imageSrc = "/images/ic_zentropy_main.png"; // 마커이미지의 주소입니다
                // var imageSize = new window.kakao.maps.Size(30, 37);
                // var markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);
                var markerPosition = new window.kakao.maps.LatLng(37.5217284, 127.0481926);
                /**마커 이미지 변경 필요 */

                var marker = new window.kakao.maps.Marker({
                    position: markerPosition,
                    // image: markerImage,
                });
                var zoomControl = new window.kakao.maps.ZoomControl();
                map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
                marker.setMap(map);
            });
        };

        kakaoMapScript.addEventListener("load", onLoadKakaoAPI);
    }, []);

    return <div id="map" style={{ width: "100%", height: "100%" }} />;
};

export default KakaoMap;
