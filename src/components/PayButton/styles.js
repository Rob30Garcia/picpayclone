import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Button = styled(LinearGradient).attrs({
  colors: ['#00fc6c', '#00ac4a'],
})`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: ${({focused}) => focused ? '#000': '#fff'};
`;