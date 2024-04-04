import { Map } from "../common/naverMap";
import { headers } from "next/headers";
import styles from "./main.module.scss";
import KakaoMap from "../common/kakaoMap";
export default async function Main() {
    const data = await fetchImage();
    console.log("data: ", data);

    return (
        <div className={styles.mainPage}>
            <KakaoMap />
        </div>
    );
}
export async function fetchImage(): Promise<any> {
    const host = headers().get("host");
    const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
    try {
        const response = await fetch(`${protocol}://${host}/api/basket`, { cache: "force-cache" });
        return response.json();
    } catch (error) {
        console.error("Error fetching basket:", error);
    }
}
