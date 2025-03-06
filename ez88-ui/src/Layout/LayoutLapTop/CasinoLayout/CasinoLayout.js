import { useState } from "react";
import { CucTele } from "../CucTele";
import { TaiXiuBetModal } from "../TaiXiuBetModal";

function CasinoLayout() {
    const [isBetModalOpen, setIsBetModalOpen] = useState(false);

    return (
        <div className="bestgame_container">
            <CucTele />
            <div className="titlesection_container">
                <p className="titlesection_name">Casino</p>
            </div>
            <div className="gridcolumn_container gridcolumn_col6 gridcolumn_sm">
                {/* 🏆 Click vào đây để mở modal đặt cược Tài Xỉu */}
                <div className="gotogame_container" onClick={() => setIsBetModalOpen(true)}>
                    <div className="cardgame_container">
                        <img
                            width={200}
                            height={200}
                            src="/images/aesexy.webp"
                            alt="TaiXiu"
                            className="cardgame_img"
                        />
                        <div className="textthethao">Tài Xỉu</div>
                    </div>
                </div>

                {/* Các trò chơi khác */}
                <div className="gotogame_container">
                    <div className="cardgame_container">
                        <img
                            width={200}
                            height={200}
                            src="/images/agassia.webp"
                            alt="AG Asia"
                            className="cardgame_img"
                        />
                        <div className="textthethao">AG Asia</div>
                    </div>
                </div>

                <div className="gotogame_container">
                    <div className="cardgame_container">
                        <img
                            width={200}
                            height={200}
                            src="/images/evolution.webp"
                            alt="Evolution"
                            className="cardgame_img"
                        />
                        <div className="textthethao">Evolution</div>
                    </div>
                </div>

                {/* Các game còn lại */}
                <div className="gotogame_container">
                    <div className="cardgame_container">
                        <img
                            width={200}
                            height={200}
                            src="/images/sagaming.webp"
                            alt="SA Gaming"
                            className="cardgame_img"
                        />
                        <div className="textthethao">SA Gaming</div>
                    </div>
                </div>

                <div className="gotogame_container">
                    <div className="cardgame_container">
                        <img
                            width={200}
                            height={200}
                            src="/images/wmcasino.webp"
                            alt="WM Casino"
                            className="cardgame_img"
                        />
                        <div className="textthethao">WM Casino</div>
                    </div>
                </div>

                <div className="gotogame_container">
                    <div className="cardgame_container">
                        <img
                            width={200}
                            height={200}
                            src="/images/dreamgaming.webp"
                            alt="Dream Gaming"
                            className="cardgame_img"
                        />
                        <div className="textthethao">Dream Gaming</div>
                    </div>
                </div>
            </div>
            <TaiXiuBetModal isOpen={isBetModalOpen} onClose={() => setIsBetModalOpen(false)} />
        </div>
    );
}

export default CasinoLayout;
