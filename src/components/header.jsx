import React from "react";
import "../css/header.css";
import Container from '@material-ui/core/Container';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import Button from '@material-ui/core/Button';

const Header = () => {
    return (
        <div className="container">
            <Container maxWidth="lg" className="main_container">
                <div className="header_container">
                    <div className="fir_section">
                        <div className="header_txt">Coins</div>
                        <div className="header_txt">Exchanges</div>
                        <div className="header_txt">Swap</div>
                    </div>
                    <div className="sec_section">
                        <img src="https://coincap.io/static/logos/black.svg" alt="img" />
                    </div>
                    <div className="thi_section">
                        <div className="icon_container">
                            <SearchIcon className="icon" />
                        </div>
                        <div className="icon_container">
                            <SettingsIcon className="icon" />
                        </div>
                        <Button variant="contained" className="btn_container">
                            <div className="btn_txt">Connect Wallet</div>
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header;