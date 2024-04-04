import { useState, useCallback } from "react";

import type { NaverMap, Coordinates } from "../types/map";

export const INITIAL_CENTER: Coordinates = [37.5262411, 126.99289439];
export const INITIAL_ZOOM = 10;

const useMap = () => {
    const [map, setMap] = useState<NaverMap | null>(null);

    const initializeMap = useCallback((mapInstance: NaverMap) => {
        setMap(mapInstance);
    }, []);

    const resetMapOptions = useCallback(() => {
        if (map) {
            map.morph(new naver.maps.LatLng(...INITIAL_CENTER), INITIAL_ZOOM);
        }
    }, [map]);

    const getMapOptions = useCallback(() => {
        let center: Coordinates = INITIAL_CENTER;
        let zoom: number = INITIAL_ZOOM;

        if (map) {
            const mapCenter = map.getCenter();
            center = [mapCenter.lat(), mapCenter.lng()];
            zoom = map.getZoom();
        }

        return { center, zoom };
    }, [map]);

    return {
        initializeMap,
        resetMapOptions,
        getMapOptions,
    };
};

export default useMap;
