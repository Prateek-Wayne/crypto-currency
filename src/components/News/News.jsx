import React from "react";
import { useGetNewsQuery } from "../../services/cryptoNews";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import Loading from "../Loading/Loading";
import Error from "../Loading/Error";
import InfoIcon from "@mui/icons-material/Info";

const News = ({ simplified }) => {
  const { isLoading, isFetching, isError, isSuccess, data } = useGetNewsQuery();
  const newsData = simplified ? data?.news.slice(0, 12) : data?.news;

  return (
    <div className="data">
      {(isLoading || isFetching) && <Loading />}
      {isError && <Error />}
      {isSuccess && (
        <Grid container spacing={3}>
          {newsData?.map((news, index) => (
            <Grid item xs={4} key={index}>
              <Card>
                <CardHeader
                  avatar={
                    <Tooltip title={news?.source}>
                      <Avatar alt={news?.image} src={news?.image}>
                        {news?.source[0]}
                      </Avatar>
                    </Tooltip>
                  }
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {news?.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Source: {news?.source} | Date: {news?.date}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href={news?.url}
                    startIcon={<InfoIcon />}
                  >
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

export default News;
