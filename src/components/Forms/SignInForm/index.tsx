import React from 'react';
import { FormControl, Icon, Input } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export function SignInForm() {
  return (
    <FormControl>
      <Input
        w={{
          base: '100%',
          md: '25%',
        }}
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="person" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
        placeholder="Name"
      />
    </FormControl>
  );
}
