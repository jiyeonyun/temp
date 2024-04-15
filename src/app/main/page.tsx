import { headers } from "next/headers";
import styles from "./main.module.scss";
import BasketForm from "./basketForm";
export default async function Main() {
    const data = await fetchBasket();
    return (
        <div className={styles.mainPage}>
            <BasketForm data={data} />
        </div>
    );
}

export async function fetchBasket(): Promise<any> {
    const host = headers().get("host");
    const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
    try {
        const response = await fetch(`${protocol}://${host}/api/basket`);
        return response.json();
    } catch (error) {
        console.error("Error fetching basket:", error);
    }
}
