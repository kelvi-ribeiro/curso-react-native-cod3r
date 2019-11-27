## Comandos Importantes

### Diferenças entre Main axis e cross axis
O eixo principal é definido pela flex-direction, que tem quatro valores possíveis:row, row-reverse,column,column-reverse. o Cross axis será sempre ao contrário do Main axis. Por default, o main axis é row, e o cross axis é column

| Comando | O que faz ?  |
|---|---|
| `react-native run-android` | Com um servidor do app em execução, basta dar esse comando para subir o app numa aplicação emulador android(|
| `react-native init exercicios`  | Comando para criar um projeto com react-native-cli  |

### Anotações rápidas 

A propriedade `flex-direction`, por default é **column**
A propriedade `align-items`, sempre será aplicada no cross axis, enquanto a propriedade `justifyContent` sempre será aplicada no main axis
A propriedade com `flex:${nivelPrioridade:number}` faz com que o container do flex box cresça o máximo que puder, respeitandos os containers, a não ser que o seu nível de prioridade seja maior que a dos outros.
