import React, {useState} from 'react';
import {Text} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

export default ({route, navigation}) => {
  const [user, setUser] = useState(route.params ? route.params : {});

  return (
    <View>
      <Text>Name</Text>
      <TextInput
        style={style.input}
        onChangeText={name => setUser({...user, name})}
        placeholder="Informe o Nome"
        value={user.name}
      />
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
  },
});
