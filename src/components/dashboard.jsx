import React, { useEffect, useState } from "react";
import Container from '@material-ui/core/Container';
import { Grid } from "@material-ui/core";
import "../css/dashboard.css";
import { connect } from 'react-redux';
import { getData } from '../actions/dashboardActions';
import Button from '@material-ui/core/Button';

const Dashboard = (props) => {
    const [list, setList] = useState([])
    useEffect(() => {
        props.getData()
    }, [])

    useEffect(() => {
        if (props.list != undefined) {
            if (props.list.length) {
                if (props.list.length > 50) {
                    setList(props.list.slice(0, 50))
                }
                else {
                    setList(props.list)
                }
            }
        }
    }, [props.list])

    const getPrice = (p) => {
        let value = parseFloat(p).toFixed(2)
        let Value = new Intl.NumberFormat('en-IN', {
            style: 'decimal',
            currency: 'INR'
        }).format(value)
        return Value;
    }

    const getCap = (p) => {
        let value = parseFloat(p / 1000000000).toFixed(2)
        let Value = new Intl.NumberFormat('en-IN', {
            style: 'decimal',
            currency: 'INR'
        }).format(value)
        return Value;
    }

    const getSupply = (p) => {
        let value = parseFloat(p / 1000000).toFixed(2)
        let Value = new Intl.NumberFormat('en-IN', {
            style: 'decimal',
            currency: 'INR'
        }).format(value)
        return Value;
    }

    const getImg = (i) => {
        let imgUrl = `https://assets.coincap.io/assets/icons/${i.toLowerCase()}@2x.png`
        return imgUrl;
    }

    const onViewMore = () => {
        if (props.list != undefined) {
            let no = list.length + 50
            if (no < props.list.length) {
                setList(props.list.splice(0, no))
            }
            else {
                setList(props.list)
            }
        }
    }

    return (
        <div className="dashboard_container">
            <div className="dashboard_main_con">
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid className="grid_main" item xs={4} sm={4} md={2} lg={2} xl={2}>
                            <div className="main_txt">MARKET CAP</div>
                            <div className="main_value">$1.33T</div>
                        </Grid>
                        <Grid className="grid_main" item xs={4} sm={4} md={2} lg={2} xl={2}>
                            <div className="main_txt">EXCHANGE VOL</div>
                            <div className="main_value">$93.65B</div>
                        </Grid>
                        <Grid className="grid_main" item xs={4} sm={4} md={2} lg={2} xl={2}>
                            <div className="main_txt">ASSETS</div>
                            <div className="main_value">2,118</div>
                        </Grid>
                        <Grid className="grid_main" item xs={4} sm={4} md={2} lg={2} xl={2}>
                            <div className="main_txt">EXCHANGES</div>
                            <div className="main_value">78</div>
                        </Grid>
                        <Grid className="grid_main" item xs={4} sm={4} md={2} lg={2} xl={2}>
                            <div className="main_txt">MARKETS</div>
                            <div className="main_value">13,314</div>
                        </Grid>
                        <Grid className="grid_main" item xs={4} sm={4} md={2} lg={2} xl={2}>
                            <div className="main_txt">BTC DOM INDEX</div>
                            <div className="main_value">45.4%</div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className="table_container">
                <Container maxWidth="lg">
                    <div className="table">
                        <table>
                            <thead>
                                <tr>
                                    <th className="center">Rank</th>
                                    <th className="start">Name</th>
                                    <th className="end">Price</th>
                                    <th className="end">Market Cap</th>
                                    <th className="end">VWAP (24Hr)</th>
                                    <th className="end">Supply</th>
                                    <th className="end">Volume (24Hr)	</th>
                                    <th className="end">Change (24Hr)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {list != undefined && list.map(res =>
                                    <tr key={res.rank}>
                                        <td className="center">{res.rank}</td>
                                        <td className="start">
                                            <div className="name_con">
                                                <img src={getImg(res.symbol)} alt="img" />
                                                <div className="name_txt">
                                                    <div className="name">{res.name}</div>
                                                    <div className="symbol">{res.symbol}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="end">${getPrice(res.priceUsd)}</td>
                                        <td className="end">${getCap(res.marketCapUsd)}b</td>
                                        <td className="end">${getPrice(res.vwap24Hr)}</td>
                                        <td className="end">${getSupply(res.supply)}m</td>
                                        <td className="end">${getCap(res.volumeUsd24Hr)}b</td>
                                        <td className={res.changePercent24Hr.includes("-")?"red end":"green end"}>
                                            {getPrice(res.changePercent24Hr)}%
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </Container>
            </div>
            {props.list != undefined ? list.length < props.list.length ?
                <div className="view_btn">
                    <Button onClick={onViewMore} variant="contained" className="btn_container">
                        <div className="btn_txt">View More</div>
                    </Button>
                </div> : null : null}
        </div>
    )
}

const mapStateToProps = state => ({
    list: state.list
})

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(getData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);