import styles from "./Nav.module.css";
import Image from "next/image";
import { Button } from '../index'

const Nav = () => {
    return (
        <>
            <div className={styles.nav}>
                <div className={styles.avatar}>
                    {/* <Image
                        loader=""
                        src="https://avatars.githubusercontent.com/u/67497021?v=4"
                        alt="Avatar Image"
                        width={70}
                        height={70}
                        style={{ borderRadius: "100%", position: "absolute" }}
                        unoptimized={true}
                    /> */}
                    NJVC LOGO
                </div>
                <div className={styles.nav_buttons}>
                    <ul>
                        <Button href_link={'/'} btn_title='About Me' />
                        <Button href_link={'/contact'} btn_title='Contact' />
                        <Button href_link={'/project'} btn_title="Projects" />
                        <Button href_link={"/resume"} btn_title='Resume' />
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Nav;
