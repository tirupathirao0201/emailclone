import "./header.scss";
const Header = ()=>{
    return (
        <>
        <header className="header">
            <div className="left">
                <div className="hamburger_menu">
                    <img src="images/menu.png" alt="menu" />
                </div>
                <div className="email_logo">
                    <img src="images/email_logo.png" alt="email logo" />
                </div>
            </div>
            <div className="middle">
                <div className="search_input">
                    <div className="search_icon">
                        <img src="images/search.svg" alt="search icon"  />
                    </div>
                    <div className="input">
                        <input type="text" />
                    </div>
                </div>
                <div className="filter_icon">
                    <img src="images/filter.svg" alt="filter"/>
                </div>
            </div>
            <div className="right">
                <div className="support_icon">
                    <img src="images/support.svg" alt="support icon" />
                </div>
                <div className="settings_icon">
                    <img src="images/settings.svg" alt="settings icon" />
                </div>
                <div className="nine_dots_icon">
                    <img src="images/dots.png" alt="nine dots" />
                </div>

            </div>

        </header>
        </>
    );

}
export default Header;