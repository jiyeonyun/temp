import React from "react";
import styles from "./common.module.scss";
import Image from "next/image";
const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <Image src={"/images/Logo.png"} width={120} height={60} alt={""} />
            </nav>
        </header>
    );
};

export default Header;
