import React from 'react';

import { Grid } from './styles';

import ServerList from '../ServerList';
import ServerName from '../ServerName'
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList'

// import { Container } from './styles';

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList/>
      <ServerName/>
      <ChannelInfo/>
      <ChannelList/>
    </Grid>
  )
}

export default Layout;