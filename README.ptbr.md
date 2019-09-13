# Conteúdo
* [Sobre](#react-native-responsive-screen)
* [Instalação](#instalação)
* [Utilização](#utilização)
* [Exemplos](#exemplos)
* [Como eu sei que funciona em todos os dispositivos ?](#exemplos)
* [Licença](#licença)
* [Pull Requests](#pull)

# react-native-responsive-screen

[![versão npm](https://badge.fury.io/js/react-native-responsive-screen.svg)](https://www.npmjs.com/package/react-native-responsive-screen)
[![npm](https://img.shields.io/npm/dm/react-native-responsive-screen.svg)]()

<i>react-native-responsive-screen</i> é uma pequena biblioteca que provê 2 métodos simples para que desenvolvedores React Native possam criar componentes completamente responsivos. Nenhuma media query é necessária.

A biblioteca entrega também um terceiro método opcional para detectar a orientação da tela e renderizar as novas dimensões automaticamente em caso de mudança.

Faça um teste e deixe sua vida mais fácil! 

Veja [este artigo no medium (em inglês)](https://medium.com/react-native-training/build-responsive-react-native-views-for-any-device-and-support-orientation-change-1c8beba5bc23) para conhecer o poder da biblioteca! 🚀

<img src="https://cdn-images-1.medium.com/max/800/1*BWpx3uRPlWByahoXA6M-BQ.jpeg" />

# Instalação

`npm install react-native-responsive-screen --save`

# Utilização
* Depois da instalação da dependência, quando a aplicação é iniciada (em dispositivos reais e/ou emulador), largura e altura da tela são detectados. I.e. para o modelo Samsung A5 2017 é detectado `width: 360DP` e `height: 640DP` (estes valores não levam em consideração o fator de escala do dispositivo).
* O pacote expõe 2 métodos básicos: `widthPercentageToDP` e `heightPercentageToDP`. Estes nomes significam que você pode prover uma string "como porcentagem" para cada método e será retornado o DP (pixel independente) que corresponde a porcentagem indicada, da altura e da largura da tela. I.e. para Samsung A5 2017, se for indicado CSS box: `width: widthPercentageToDP('53%')`, o estilo renderizado será `width: 190.8` DP. Veja o exemplo número 1 para saber como utilizar.
* Os métodos `widthPercentageToDP` e `heightPercentageToDP` podem ser usados para qualquer propriedade de estilo (CSS) que aceita DP como valor. Valores DP são aqueles de  tipo `number` mencionados na documentação do RN: [Veja propriedades de estilo](https://facebook.github.io/react-native/docs/view-style-props.html), [para Texto](https://facebook.github.io/react-native/docs/text-style-props.html), [para Imagem](https://facebook.github.io/react-native/docs/image-style-props.html), [para Layout](https://facebook.github.io/react-native/docs/layout-props.html) e [para Sombra](https://facebook.github.io/react-native/docs/shadow-props.html). Use os métodos expostos para todas as propriedades do tipo `number` em seu app para deixa-la totalmente responsiva em todos os tamanhos de tela.
* Você também pode indicar números decimais para estes métodos, i.e. `font-size: widthPercentageToDP('3.75%')`.
* Estes métodos podem ser utilizados com ou sem flex, dependendo do que você precisa fazer e como você opta por implementar.
* A maneira sugerida é começar o desenvolvimento para telas maiores (i.e. tablets). Desta maneira você estará menos sujeito a esquecer de adicionar valores responsivos para todas as propriedades do tipo `number`. De qualquer maneira, quando você tiver terminado, você deve testar com uma grande gama de dispositivos com diferentes tamanhos de tela, como mostrado abaixo em [Como eu sei que funciona em todos os dispositivos ?](#exemplos).
* Existem ainda dois métodos para serem utilizados se você deseja suportar responsividade na mudança de orientação de telas. Estes são `listenOrientationChange` e `removeOrientationListener`. Para saber como utiliza-los, veja o exemplo número 3.
* Você pode usar este pacote conjuntamente com `styled-components`. Veja como fazer isso no exemplo número 2.

# Updates 🚀
* `widthPercentageToDP` e `heightPercentageToDP` aceitam valores numéricos a partir da versão 1.2.1. Isto significa que uma largura de 53% pode ser indicata tanto como `width: widthPercentageToDP('53%')` quanto `width: widthPercentageToDP(53)`.

# Exemplos

## 1. Como usar com StyleSheet.create() sem suporte para mudança de orientação da tela 
```javascript
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textWrapper}>
          <Text style={styles.myText}>Login</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  textWrapper: {
    height: hp('70%'), // 70% da altura da tela
    width: wp('80%')   // 80% da largura da tela
  },
  myText: {
    fontSize: hp('5%') // Resultado final indicado no mock-up disponível
  }
});

export default Login;
```
Você encontra um exemplo funcional no [repositório de exemplos](https://github.com/marudy/react-native-responsive-screen/blob/master/examples/responsive-screen/README.md)


## 2. Como utilizar com StyleSheet.create() e suporte a mudança de orientação de tela
Veja o README do [repositório de exemplos](https://github.com/marudy/react-native-responsive-screen/blob/master/examples/responsive-screen-orientation-change/README.md)


## 3. Como utiliar com componentes estilizados
Veja o README do [repositório de exemplos](https://github.com/marudy/react-native-responsive-screen/blob/master/examples/responsive-screen-styled-components/README.md)


# Como eu sei que funciona em todos os dispositivos ?

Como indicado no artigo ["Como desenvolver UI responsiva com React Native (em inglês)"](https://medium.com/building-with-react-native/how-to-develop-responsive-uis-with-react-native-1x03-a448097c9503), esta solução já se encontra em aplicativos em produção e foi testada com uma gama de dispositivos Android e iOS com diferentes especificações de telas, para verificar que o mesmo resultado é sempre alcançado.

## Exemplo:
Os quatro ladrilhos azuis na metade inferior da tela devem ocupar 98% da largura da tela em dp e 10% da altura da tela em dp:

### Smartphones
<img src="https://cdn-images-1.medium.com/max/800/1*aoIGDVNrcvIw_4NRqRtHTA.png" />
<img src="https://cdn-images-1.medium.com/max/800/1*Yl9k-Lxg9jxJ9g00qmRlIA.png" />
<img src="https://cdn-images-1.medium.com/max/800/1*rE43O18nt4_ECUvXr_fSZA.png" />

### Tablets
<img src="https://cdn-images-1.medium.com/max/800/1*3uJUPxITidUJAokwB8BokQ.png" />

# Licença

MIT

# Pull

Pull requests são bem-vindos! Por favor, mande o PR para a branch `development`, e não para a `master`. Obrigado.
