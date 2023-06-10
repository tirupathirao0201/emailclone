import "./email.scss"
const EmailOverview = ()=>{
    return (
        <>
        <div className="main_container">
            <div className="container">
                <div className="left">
                    <div className="logo">
                        <img src="images/star.png" alt=" star empty" />
                    </div>
                    <div className="from_address">
                        Siemens Talent Acquisition
                    </div>
                </div>
                <div className="right">
                    <div className="subject">
                        Follow your application status, Tirupathi Rao
                    </div>
                    <div className="actions">
                        <div className="logo">
                            <img src="images/archieve.png" alt="archieve logo" />
                        </div>
                        <div className="logo">
                            <img src="images/delete.png" alt="delete logo"/>
                        </div>
                        <div className="logo">
                            <img src="images/mark_as_read.png" alt="read logo" />
                        </div>
                        <div className="logo">
                            <img src="images/snooze.png" alt="snooze logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
    
    }

export default EmailOverview;