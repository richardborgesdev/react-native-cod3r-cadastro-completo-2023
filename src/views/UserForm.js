import React, {useState} from 'react';
import {Text} from 'react';

export default ({route, navigation}) => {
  const [user, setUser] = useState(route.params ? route.params : {});

  return <Text>{user.id}</Text>;
};
