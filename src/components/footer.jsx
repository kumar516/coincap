import React from "react";
import Container from '@material-ui/core/Container';
import { Grid } from "@material-ui/core";
import "../css/footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
    return (
        <div className="footer_container">
            <Container maxWidth="lg">
                <div className="foo_con">
                    <Grid container spacing={4}>
                        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                            <div className="foo_content">
                                <div className="footer_head">COINCAP.IO</div>
                                <div className="footer_txt">Methodology</div>
                                <div className="footer_txt">About Us</div>
                                <div className="footer_txt">Support</div>
                                <div className="footer_txt">Our API</div>
                                <div className="footer_txt">Rate Comparison</div>
                                <div className="footer_txt">Careers</div>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                            <div className="foo_content">
                                <div className="footer_head">LEGALS</div>
                                <div className="footer_txt">Terms of Service</div>
                                <div className="footer_txt">Privacy Policy</div>
                                <div className="footer_head1">DISCLAIMER</div>
                                <div className="footer_txt1">
                                    Neither ShapeShift AG nor CoinCap are in<br />
                                    any way associated with CoinMarketCap,<br />
                                    LLC or any of its goods and services.
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                            <div className="foo_content">
                                <div className="footer_head">FOLLOW US</div>
                                <div className="icon_container">
                                    <TwitterIcon className="icon" />
                                    <FacebookIcon className="icon" />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                            <div className="foo_content">
                                <div className="footer_head">COINCAP APP AVAILABLE ON</div>
                                <div className="play_con">
                                    <img alt="i" src="https://coincap.io/static/images/stores/google_play.svg"/>
                                </div>
                                <div className="play_con">
                                    <img alt="i" src="	https://coincap.io/static/images/stores/apple_store.svg"/>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}

export default Footer;