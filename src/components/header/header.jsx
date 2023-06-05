import styles from "./header.module.scss";
const Header = ()=>{
    return (
        <>
        <header className={styles.header}>
            <div className={styles.left}>
                <div className={styles.hamburger_menu}>
                    <img src="images/menu.png" alt="menu" />
                </div>
                <div className={styles.email_logo}>
                    <img src="images/email_logo.png" alt="email logo" />
                </div>
            </div>
            <div className={styles.middle}>
                <div className={styles.search_input}>
                    <div className={styles.search_icon}>
                        <img src="images/search.svg" alt="search icon"  />
                    </div>
                    <div className={styles.input}>
                        <input type="text" />
                    </div>
                </div>
                <div className={styles.filter_icon}>
                    <img src="images/filter.svg" alt="filter"/>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.support_icon}>
                    <img src="images/support.svg" alt="support icon" />
                </div>
                <div className={styles.settings_icon}>
                    <img src="images/settings.svg" alt="settings icon" />
                </div>
                <div className={styles.nine_dots_icon}>
                    <img src="images/dots.png" alt="nine dots" />
                </div>

            </div>

        </header>
        </>
    );

}
export default Header;