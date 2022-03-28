export default function Footer() {
    return(
        <div>
            <div className="containers footers mt-20">
                <div className="col-15"></div>
                <div className="col-70 border-t-blue mb-10">
                    <div className="containers text-right">
                                <div className="col-50 mt-10">
                                    <ul>
                                        <li><img src="https://i.ibb.co/QHBCh3D/icons8-discord-30.png" className="inline-block"/> <a>Discord</a></li>
                                        <li><img src="https://i.ibb.co/0XCV5Md/icons8-telegram-app-30.png" className="inline-block"/><a>Telegram</a></li>
                                        <li><img src="https://i.ibb.co/xD21bCD/icons8-facebook-30.png" className="inline-block"/><a>Facebook</a></li>
                                        <li><img src="https://i.ibb.co/9nv5Pdz/icons8-twitter-30.png" className="inline-block"/><a>Twitter</a></li>
                                    </ul>
                                </div>
                                <div className="col-50 justify-center ">
                                    <img src="https://i.ibb.co/YLG5NLF/mascota.png" className="mascot mt-14"/>
                                </div>
                    </div>
                </div>
                <div className="col-15"></div>
            </div>
        </div>
    )
}