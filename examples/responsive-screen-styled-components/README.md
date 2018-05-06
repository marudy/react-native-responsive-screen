This is an example repository that contains a sample setup of react-native-responsive-screen package with use of styled components.

# Usage

```javascript
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styled from 'styled-components';

class Login extends Component {
  render() {
    return (
      <Container>
        <TextWrapper>
          <Login>Login</Login>
        </TextWrapper>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
`;

const TextWrapper = styled.View`
  height: ${hp('70%')};
  width: ${wp('80%')};
`;

const Login = styled.Text`
  font-size: ${hp('5%')};
`;

export default Login;
```
