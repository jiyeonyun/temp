import React from "react";
import styles from "./main.module.scss";
import Image from "next/image";

const BasketList = ({ basketInfo }: any) => {
    return (
        <div className={styles.basketList}>
            <div className={styles.basketinnerWrapper}>
                {basketInfo.map((item: any, i: number) => {
                    return (
                        <div className={styles.basketCard}>
                            <img src={item.imgurl} alt={""} />
                            <h3>
                                {i + 1}.{item.placenm}
                            </h3>
                            <p>{item.payatnm}</p>
                            <p>
                                {item.v_min}~{item.v_max}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default BasketList;
