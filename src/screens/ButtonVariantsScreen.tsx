import React, {FC} from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';
import Button from '../components/Button';
import buttonVariants from '../constants/buttonVariants';
import Toast from 'react-native-toast-message';

const icon = 'photo';

const ButtonVariantsScreen: FC = () => {
  const handleButtonPress = (variantName: string) => {
    Toast.show({
        type: 'success',
        position: 'bottom',
        text1: `${variantName} Clicked`,
        visibilityTime: 2000,
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {buttonVariants.map((button, index) => (
        <View key={index} style={styles.buttonContainer}>
          <Button
            variant={button.variant}
            label={button.label}
            icon={icon}
            onPress={() => handleButtonPress(button.label)}
          />
        </View>
      ))}
    </ScrollView>
  );
};


export default ButtonVariantsScreen;
