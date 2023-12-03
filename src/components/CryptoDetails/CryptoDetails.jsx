import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetCryptoQuery } from "../../services/cryptoApi";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import NumbersIcon from "@mui/icons-material/Numbers";
import BoltIcon from "@mui/icons-material/Bolt";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import MoneyIcon from "@mui/icons-material/Money";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import BlockIcon from "@mui/icons-material/Block";
import CheckIcon from "@mui/icons-material/Check";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import BlurCircularIcon from "@mui/icons-material/BlurCircular";
import FunctionsIcon from "@mui/icons-material/Functions";
import millify from "millify";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useGetHistoryQuery } from "../../services/cryptoApi";
import Loading from "../Loading/Loading";
import Error from "../Loading/Error";

import "./CryptoDetails.css";
import LineChart from "../LineChart/LineChart";
const CryptoDetails = () => {
  const coinID = useParams();
  const { isLoading, isSuccess, isFetching, isError, data } = useGetCryptoQuery(
    coinID.id,
  );
  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];
  const [timePeriod, setTimePeriod] = useState("3h");
  const { data: historyData } = useGetHistoryQuery({
    id: coinID.id,
    time: timePeriod,
  });
  const cryptoDetails = data?.data?.coin;
  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <MonetizationOnIcon />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <NumbersIcon /> },
    {
      title: "24h Volume",
      value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`,
      icon: <BoltIcon />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <AttachMoneyIcon />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <EmojiEventsRoundedIcon />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <MoneyIcon />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <CurrencyExchangeIcon />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? <CheckIcon /> : <BlockIcon />,
      icon: <LibraryAddCheckIcon />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <FunctionsIcon />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <BlurCircularIcon />,
    },
  ];
  return (
    <>
      {" "}
      {(isLoading || isFetching) && <Loading />}
      {isError && <Error />}
      {isSuccess && (
        <div className="conatiner">
          <Grid container spacing={2} style={{ margin: "20px" }}>
            <Grid xs={12}>
              <div className="heading">
                <Avatar src={cryptoDetails?.iconUrl} />
                <Typography variant="h4">
                  {cryptoDetails?.name} ({cryptoDetails?.symbol}) Price
                </Typography>
                <Typography variant="body1">
                  {cryptoDetails?.name} live price in US Dollar (USD). View
                  value statistics, market cap and supply
                </Typography>
              </div>
            </Grid>
            <Grid xs={11}>
              <div className="grid">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="body1">
                    Current {cryptoDetails?.name} Price: ${" "}
                    {millify(cryptoDetails?.price)}
                  </Typography>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    defaultValue="3h"
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(e.target.value)}
                    helperText="Please select time Period"
                  >
                    {time.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <LineChart historyData={historyData} />
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={5}>
              <div className="grid">
                <Card>
                  <CardHeader title={cryptoDetails?.name} />
                  <CardContent>
                    <Typography variant="body1">
                      {cryptoDetails?.name} Value Statistics
                    </Typography>
                    <p>
                      An overview showing the statistics of{" "}
                      {cryptoDetails?.name}, such as the base and quote
                      currency, the rank, and trading volume.
                    </p>
                    {stats.map(({ title, value, icon }, index) => (
                      <Grid container spacing={2} key={index}>
                        <Grid item xs={2}>
                          <Typography variant="body2">{icon}</Typography>
                        </Grid>
                        <Grid item xs={5}>
                          <Typography variant="body2">{title}</Typography>
                        </Grid>
                        <Grid item xs={5}>
                          <Typography variant="body2">{value}</Typography>
                        </Grid>
                      </Grid>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
              <div className="grid">
                <Card>
                  <CardHeader title=" Other Stats Info" />
                  <CardContent>
                    <Avatar alt="img" src={cryptoDetails?.iconUrl} />
                    {genericStats.map(({ title, value, icon }, index) => (
                      <Grid container spacing={2} key={index}>
                        <Grid item xs={2}>
                          <Typography variant="body2">{icon}</Typography>
                        </Grid>
                        <Grid item xs={5}>
                          <Typography variant="body2">{title}</Typography>
                        </Grid>
                        <Grid item xs={5}>
                          <Typography variant="body2">{value}</Typography>
                        </Grid>
                      </Grid>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};

export default CryptoDetails;
