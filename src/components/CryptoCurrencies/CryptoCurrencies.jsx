import React, { useEffect } from "react";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import "./CryptoCurrencies.css";
import millify from "millify";
import Error from "../Loading/Error";
import Loading from "../Loading/Loading";
import { useState } from "react";

const CryptoCurrencies = ({ simplified }) => {
  const count = simplified ? 12 : 100;
  const [searchTerm, setSearchTerm] = useState("");
  const { isLoading, isFetching, isSuccess, isError, data } =
    useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(data?.data?.coins);
  useEffect(() => {
    setCryptos(data?.data?.coins);
  }, [isSuccess, data]);
  useEffect(() => {
    const filteredData = data?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setCryptos(filteredData);
  }, [searchTerm]);

  return (
    <div className="data">
      {(isLoading || isFetching) && <Loading />}
      {isError && <Error />}
      {isSuccess && count === 100 && (
        <div
          style={{ display: "flex", justifyContent: "center", margin: "5px" }}
        >
          <TextField
            id="outlined-search"
            label="Search here"
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      {isSuccess && (
        <Grid container spacing={4}>
          {cryptos?.map((coin) => (
            <Grid item xs={3} key={coin.uuid}>
              <Card>
                <CardHeader
                  avatar={<Avatar alt={coin?.iconUrl} src={coin?.iconUrl} />}
                  title={coin?.name}
                />
                <CardContent>
                  <Typography variant="body2">
                    Price : {millify(coin?.price)}
                  </Typography>
                  <Typography variant="body2">
                    MarketCap : {millify(coin?.marketCap)}
                  </Typography>
                  <Typography variant="body2">
                    DailyExchange : {millify(coin?.change)}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href={`/crypto/${coin.uuid}`}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default CryptoCurrencies;
