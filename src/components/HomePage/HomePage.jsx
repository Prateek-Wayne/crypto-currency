import { Button, Grid, Typography } from '@mui/material';
import React from 'react'
import './HomePage.css';
import { useGetCryptosQuery } from '../../services/cryptoApi';
import Loading from '../Loading/Loading';
import Error from '../Loading/Error';
import millify from 'millify';
import CryptoCurrencies from '../CryptoCurrencies/CryptoCurrencies';
import { Link } from 'react-router-dom';
import News from '../News/News';

const HomePage = () => {
  const { isLoading, isError, isFetching, isSuccess, data } = useGetCryptosQuery(10)
  // console.log(data?.data?.stats);

  return (
    <div className='homepage'>
      <Typography variant="h4">Global Crypto Stats </Typography>
      {
        (isLoading || isFetching) && <Loading />


      }
    <div className='content'>

      {
        isError && <Error />
      }
      {isSuccess &&
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="h6">Total Exchanges: {millify(data?.data?.stats?.totalExchanges)}</Typography>

          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Total Market Cap: {millify(data?.data?.stats?.totalMarketCap)} </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Total 24h Volume:{millify(data?.data?.stats?.total24hVolume)} </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Total Cryptocurrencies:{millify(data?.data?.stats?.totalCoins)} </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Total Markets:{millify(data?.data?.stats?.totalMarkets)} </Typography>
          </Grid>
        </Grid>
      }
    </div>
    <div className='content'>
    <div className='links'>
      <Typography variant='h4'>Top CryptoCurrencies in the World</Typography>
      <Button href='/cryptocurrencies' >Show More...</Button>
    </div>
      <CryptoCurrencies simplified/>
    </div>
    <div className='content'>
    <div className='links'>
      <Typography variant='h4'>Latest News...</Typography>
      <Link to='/news'> <Typography variant='h4'  >Show More ...</Typography></Link>
    </div>
      <News/>
    </div>
    </div>
  )
}

export default HomePage;