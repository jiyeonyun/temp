import React, { useState } from "react";
import styles from "./main.module.scss";
import Image from "next/image";

const BasketList = ({ basketInfo, setCenter, setZoom }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div style={{ display: "flex" }}>
            <div className={isOpen ? styles.basketOuterWrapperOpen : styles.basketOuterWrapperClose}>
                <span
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                    className={styles.headerButton}
                >
                    {isOpen ? "➡️" : "⬅️"}
                </span>
            </div>

            <div className={isOpen ? styles.basketListOpen : styles.basketListClose}>
                <div className={styles.basketinnerWrapper}>
                    {basketInfo.map((item: any, i: number) => {
                        return (
                            <div
                                onClick={() => {
                                    setCenter([Number(item.y), Number(item.x)]);
                                    setZoom(4);
                                }}
                                className={styles.basketCard}
                            >
                                <img src={item.imgurl} alt={""} />
                                <h3>
                                    {i + 1}.{item.placenm}
                                </h3>
                                <p>{item.payatnm}</p>
                                <p>
                                    {item.v_min}~{item.v_max}
                                </p>
                                <p>{item.telno}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BasketList;
