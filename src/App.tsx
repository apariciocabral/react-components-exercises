import './App.css';

import Q1String from './components/Q1String';
import Q2Uppercase from './components/Q2Uppercase';
import Q3Lowercase from './components/Q3Lowercase';
import Q4StringLength from './components/Q4StringLength';
import Q5FirstChar from './components/Q5FirstChar';
import Q6LastChar from './components/Q6LastChar';
import Q7BothString from './components/Q7BothString';
import Q8RepeatString from './components/Q8RepeatString';
import Q9StringComma from './components/Q9StringComma';
import Q10BiggerText from './components/Q10BiggerText';
import Q11Intersection from './components/Q11Intersection';
import Q12LetAndNum from './components/Q12LetAndNum';
import Q13ChangeChar from './components/Q13ChangeChar';
import Q14OnlyFirstUppercase from './components/Q14OnlyFirstUppercase';
import Q15FirstUppercase from './components/Q15FirstUppercase';
import Q16Sum from './components/Q16Sum';
import Q17Subtraction from './components/Q17Subtraction';
import Q18Multiplication from './components/Q18Multiplication';
import Q19Division from './components/Q19Division';
import Q20ElevatedByTwo from './components/Q20ElevatedByTwo';
import Q21Elevated from './components/Q21Elevated';
import Q22BiggerNumber from './components/Q22BiggerNumber';
import Q23RandomNumber from './components/Q23RandomNumber';
import Q24RandomNum from './components/Q24RandomNum';
import Q25IsPrime from './components/Q25IsPrime';
import Q27Factorial from './components/Q27Factorial';
import Q28OddEven from './components/Q28OddEven';
import Q30ZeroToHundred from './components/Q30ZeroToHundred';
import Q31FiveStar from './components/Q31FiveStar';
import Q32Rectangles from './components/Q32Rectangles';
import Q33Circles from './components/Q33Circles';
import Q36Button from './components/Q36Button';
import Q37ReceiveText from './components/Q37ReceiveText';
import Q38SumInput from './components/Q38SumInput';
import Q39UppercaseText from './components/Q39UppercaseText';
import Q40LowercaseText from './components/Q40LowercaseText';
import Q42AddOneLine from './components/Q42AddOneLine';
import Q44ChangeColorText from './components/Q44ChangeColorText';
import Q43PlusOneNum from './components/Q43PlusOneNum';
import Q46SearchCep from './components/Q46SearchCep';
import Q48Advice from './components/Q48Advice';

const App: React.FC = () => {
    return (
        <div className="container p-5">
            <h1 className="fw-bold mb-3">React Components</h1>

            <h2 className="fs-6">
                1. Crie um componente que recebe uma prop &quot;value&quot;, do
                tipo string, e retorna a mesma prop sem alteração.
            </h2>
            <div className="card p-3 mb-4">
                <Q1String value="Teste" />
            </div>

            <h2 className="fs-6">
                2. Crie um componente que recebe uma prop &quot;value&quot;, do
                tipo string, e retorna em letras maiúsculas.
            </h2>
            <div className="card p-3 mb-4">
                <Q2Uppercase value="Teste" />
            </div>

            <h2 className="fs-6">
                3. Crie um componente que recebe uma prop &quot;value&quot;, do
                tipo string, e retorna em letras minúsculas.
            </h2>
            <div className="card p-3 mb-4">
                <Q3Lowercase value="TESTE" />
            </div>

            <h2 className="fs-6">
                4. Crie um componente que recebe uma prop &quot;value&quot;, do
                tipo string, e retorna um número dizendo a quantidade de
                caracteres contidas nessa string.
            </h2>
            <div className="card p-3 mb-4">
                <Q4StringLength value="Quantidade de caracteres na frase" />
            </div>

            <h2 className="fs-6">
                5. Crie um componente que recebe uma prop &quot;value&quot;, do
                tipo string, e retorna a primeira letra dessa string.
            </h2>
            <div className="card p-3 mb-4">
                <Q5FirstChar value="Teste" />
            </div>

            <h2 className="fs-6">
                6. Crie um componente que recebe uma prop &quot;value&quot;, do
                tipo string, e retorna a última letra dessa string.
            </h2>
            <div className="card p-3 mb-4">
                <Q6LastChar value="Teste" />
            </div>

            <h2 className="fs-6">
                7. Crie um componente que recebe duas props do tipo string e
                retorna uma frase contendo ambas.
                <br />
                Exemplo:
                <br />
                Prop 1: Oi
                <br />
                Prop 2: tudo bem?
                <br />
                Retorno: Oi tudo bem?
            </h2>
            <div className="card p-3 mb-4">
                <Q7BothString value="Eu acho" value1="que é assim!" />
            </div>

            <h2 className="fs-6">
                8. Crie um componente que recebe duas props, uma string e um
                número, e repita essa string pela quantidade do número.
                <br />
                Exemplo:
                <br /> Prop 1: Oi
                <br /> Prop 2: 5.
                <br /> Retorno: OiOiOiOiOi
            </h2>
            <div className="card p-3 mb-4">
                <Q8RepeatString value="Olá" value1={5} />
            </div>

            <h2 className="fs-6">
                9. Crie um componente que recebe duas props, uma string e um
                número, e repita essa string pela quantidade do número,
                separadas por vírgula e espaço.
                <br />
                Exemplo:
                <br /> Prop 1: Oi
                <br /> Prop 2: 5.
                <br /> Retorno: Oi, Oi, Oi, Oi, Oi
            </h2>
            <div className="card p-3 mb-4">
                <Q9StringComma value="Olá" amount={5} />
            </div>

            <h2 className="fs-6">
                10. Crie um componente que recebe duas strings e retorna a que
                tiver mais caracteres.
            </h2>
            <div className="card p-3 mb-4">
                <Q10BiggerText value="Aparicio" value1="Diego Cabral" />
                <Q10BiggerText value="Diego Aparicio" value1="Aparicio" />
            </div>

            <h2 className="fs-6">
                11. Crie um componente que recebe duas strings e retorna
                &quot;Sim&quot; se a segunda estiver contida na primeira. Caso
                contrário, retorna &quot;Não&quot;.
                <br />
                Exemplo:
                <br /> Prop 1: Simplesmente
                <br /> Prop 2: mente
                <br /> Retorno: Sim
            </h2>
            <div className="card p-3 mb-4">
                <Q11Intersection value="Ausente" value1="ente" />
                <Q11Intersection value="Ausente" value1="anta" />
            </div>

            <h2 className="fs-6">
                12. Crie um componente que recebe uma string e um número.
                Retorna a letra que estiver na posição do número. Se o número
                informado for maior do que a quantidade de caracteres da string,
                retorna &quot;Inválido&quot;
                <br />
                Exemplo:
                <br /> Prop 1: Abacaxi
                <br /> Prop 2: 3
                <br /> Retorno: c
            </h2>
            <div className="card p-3 mb-4">
                <Q12LetAndNum position={4} word="Aparicio" />
                <Q12LetAndNum position={15} word="Aparicio" />
                <Q12LetAndNum position={5} word="Aparicio" />
                <Q12LetAndNum position={12} word="Aparicio" />
            </div>

            <h2 className="fs-6">
                13. Crie um componente que recebe 3 strings. Retorna a primeira
                string, substituindo todas as ocorrências da segunda, pela
                terceira.
                <br />
                Exemplo:
                <br /> Prop 1: Banana
                <br /> Prop 2: a
                <br /> Prop 3: X
                <br /> Retorno: BXnXnX
            </h2>
            <div className="card p-3 mb-4">
                <Q13ChangeChar value="Bananas" value1="a" value2="X" />
            </div>

            <h2 className="fs-6">
                14. Crie um componente que recebe uma string e retorna apenas a
                primeira letra maiúscula, todas as outras minúsculas.
                <br />
                Exemplo:
                <br /> Prop 1: MaS QuE LoUcUrA.
                <br /> Retorno: Mas que loucura.
            </h2>
            <div className="card p-3 mb-4">
                <Q14OnlyFirstUppercase value="MaS QuE LoUcUrA." />
                <Q14OnlyFirstUppercase value="m" />
            </div>

            <h2 className="fs-6">
                15. Crie um componente que recebe uma string e retorna a
                primeira letra de cada palavra maiúscula, todas as outras
                minúsculas.
                <br />
                Exemplo:
                <br /> Prop 1: MaS QuE LoUcUrA.
                <br /> Retorno: Mas Que Loucura.
            </h2>
            <div className="card p-3 mb-4">
                <Q15FirstUppercase value="MaS QuE LoUcUrA" />
            </div>

            <h2 className="fs-6">
                16. Crie um componente que recebe dois números e retorna o valor
                da soma entre eles.
            </h2>
            <div className="card p-3 mb-4">
                <Q16Sum value={12} value1={23} />
            </div>

            <h2 className="fs-6">
                17. Crie um componente que recebe dois números e retorna o valor
                da subtração entre eles.
            </h2>
            <div className="card p-3 mb-4">
                <Q17Subtraction value={25} value1={10} />
            </div>

            <h2 className="fs-6">
                18. Crie um componente que recebe dois números e retorna o valor
                da multiplicação entre eles.
            </h2>
            <div className="card p-3 mb-4">
                <Q18Multiplication value={15} value1={5} />
            </div>

            <h2 className="fs-6">
                19. Crie um componente que recebe dois números e retorna o valor
                da divisão entre eles. Se o divisor for zero, retorna
                &quot;Inválido&quot;
            </h2>
            <div className="card p-3 mb-4">
                <Q19Division value={10} value1={2} />
                <Q19Division value={10} value1={0} />
                <Q19Division value={0} value1={2} />
                <Q19Division value={-10} value1={-2} />
                <Q19Division value={10} value1={-2} />
                <Q19Division value={-10} value1={2} />
                <Q19Division value={123.56} value1={4.67} />
            </div>

            <h2 className="fs-6">
                20. Crie um componente que recebe um número e retorna o mesmo
                elevado a 2
            </h2>
            <div className="card p-3 mb-4">
                <Q20ElevatedByTwo value={5} />
            </div>

            <h2 className="fs-6">
                21. Crie um componente que recebe dois números e retorna o
                primeiro elevado pelo segundo
            </h2>
            <div className="card p-3 mb-4">
                <Q21Elevated value={2} value1={3} />
            </div>

            <h2 className="fs-6">
                22. Crie um componente que recebe dois números e retorna o maior
                entre eles
            </h2>
            <div className="card p-3 mb-4">
                <Q22BiggerNumber value={100} value1={20} />
                <Q22BiggerNumber value={100} value1={200} />
            </div>

            <h2 className="fs-6">
                23. Crie um componente que retorna um número inteiro aleatório
                entre 0 e 10
            </h2>
            <div className="card p-3 mb-4">
                <Q23RandomNumber />
            </div>

            <h2 className="fs-6">
                24. Crie um componente que recebe dois números, X e Y, e retorna
                um número inteiro aleatório entre X e Y. Caso X seja maior ou
                igual a Y, retorna &quot;Inválido&quot;
            </h2>
            <div className="card p-3 mb-4">
                <Q24RandomNum min={1} max={3} />
                <Q24RandomNum min={1} max={30} />
                <Q24RandomNum min={10} max={10} />
                <Q24RandomNum min={20} max={10} />
            </div>

            <h2 className="fs-6">
                25. Crie um componente que recebe um número e retorna
                &quot;Sim&quot; se ele for primo. Caso contrário, retorna
                &quot;Não&quot;
            </h2>
            <div className="card p-3 mb-4">
                <Q25IsPrime value={6} />
                <Q25IsPrime value={0} />
                <Q25IsPrime value={1} />
                <Q25IsPrime value={-2} />
                <Q25IsPrime value={5} />
                <Q25IsPrime value={12} />
            </div>

            <h2 className="fs-6">
                26. Crie um componente que recebe um número X e retorna os
                primeiros X números primos
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                27. Crie um componente que recebe um número X e retorna o seu
                fatorial
            </h2>
            <div className="card p-3 mb-4">
                <Q27Factorial value={5} />
            </div>

            <h2 className="fs-6">
                28. Crie um componente que recebe um número X e retorna se ele é
                &quot;Par&quot; ou &quot;Ímpar&quot;
            </h2>
            <div className="card p-3 mb-4">
                <Q28OddEven value={21} />
                <Q28OddEven value={22} />
            </div>

            <h2 className="fs-6">
                29. Crie um componente que recebe dois números, X e Y, retorna
                qual é a porcentagem de X em relação a Y
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                30. Crie um componente que recebe um número de 0 a 9 e retorna o
                número de quantas vezes esse número aparece em uma contagem de
                de 0 a 100
            </h2>
            <div className="card p-3 mb-4">
                <Q30ZeroToHundred value={0} />
                <Q30ZeroToHundred value={1} />
                <Q30ZeroToHundred value={2} />
                <Q30ZeroToHundred value={3} />
                <Q30ZeroToHundred value={4} />
                <Q30ZeroToHundred value={5} />
                <Q30ZeroToHundred value={6} />
                <Q30ZeroToHundred value={7} />
                <Q30ZeroToHundred value={8} />
                <Q30ZeroToHundred value={9} />
            </div>

            <h2 className="fs-6">
                31. Crie um componente que recebe uma pontuação de 0 a 5 e
                retorna de 0 a 5 estrelas amarelas e o restante cinzas (utilize
                um pacote de ícones)
            </h2>
            <div className="card p-3 mb-4">
                <Q31FiveStar score={0} />
                <Q31FiveStar score={1} />
                <Q31FiveStar score={2} />
                <Q31FiveStar score={3} />
                <Q31FiveStar score={4} />
                <Q31FiveStar score={5} />
            </div>

            <h2 className="fs-6">
                32. Crie um componente que recebe (x, width, height, color) e
                retorna X retângulos de largura e altura definidos por{' '}
                <b>width</b> e <b>height</b> respectivamente, e com cor de fundo
                definido por <b>color</b>, alinhados lado a lado
            </h2>
            <div className="card p-3 mb-4">
                <Q32Rectangles x={3} width={50} height={50} color="yellow" />
            </div>

            <h2 className="fs-6">
                33. Crie um componente que recebe (x, size, color) e retorna X
                círculos de diâmetro definido por <b>size</b> e com cor de fundo
                definido por <b>color</b>, alinhados lado a lado
            </h2>
            <div className="card p-34">
                <Q33Circles x={3} size={50} color="red" />
            </div>

            <h2 className="fs-6">
                34. Crie um componente que recebe um array de objetos (label,
                url) e retorna uma lista de links externos que apontem para{' '}
                <b>url</b> e que sejam descritos por <b>label</b>
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                35. Crie um componente que recebe um array de urls de imagens,
                uma segunda prop <b>size</b> e retorna essas imagens em formato
                quadrado do tamanho de <b>size</b>, lado a lado
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                36. Crie um componente que recebe (label, color) e retorne um
                botão com o texto de <b>label</b> e a cor de fundo de{' '}
                <b>color</b>
            </h2>
            <div className="card p-3 mb-4">
                <Q36Button label="Texto" color="yellow" />
            </div>

            <h2 className="fs-6">
                37. Crie um componente que tem um input de texto, um botão e uma
                div vazia. Ao clicar no botão, a div deve receber o texto que
                estiver escrito no input
            </h2>
            <div className="card p-3 mb-4">
                <Q37ReceiveText />
            </div>

            <h2 className="fs-6">
                38. Crie um componente que tem 2 inputs de número, um terceiro
                input do tipo &quot;somente leitura&quot; e um botão. Ao clicar
                no botão o terceiro input deve receber o resultado da soma dos
                dois primeiros
            </h2>
            <div className="card p-3 mb-4">
                <Q38SumInput />
            </div>

            <h2 className="fs-6">
                39. Crie um componente que tem um input de texto, um segundo
                input do tipo &quot;somente leitura&quot; e um botão. Ao clicar
                no botão o segundo input deve receber o valor do primeiro,
                convertido para letras maiúsculas
            </h2>
            <div className="card p-3 mb-4">
                <Q39UppercaseText />
            </div>

            <h2 className="fs-6">
                40. Crie um componente que tem um input de texto, um segundo
                input do tipo &quot;somente leitura&quot; e um botão. Ao clicar
                no botão o segundo input deve receber o valor do primeiro,
                convertido para letras maiúsculas
            </h2>
            <div className="card p-3 mb-4">
                <Q40LowercaseText />
            </div>

            <h2 className="fs-6">
                41. Crie um componente que tem um mapa do Google Maps, 2 inputs
                de texto e um botão. O usuário deve ser capaz de inserir
                coordenadas LAT e LNG nos inputs e, ao clicar no botão, o mapa
                deve exibir um &quot;Pin&quot; e ser recentralizado nessas
                coordenadas
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                42. Crie um componente que tem um input de texto e um botão
                &quot;Enviar&quot;. A cada vez que o usuário clica no botão, o
                texto do input deve ser adicionado uma linha abaixo do texto
                adicionado anteriormente
            </h2>
            <div className="card p-3 mb-4">
                <Q42AddOneLine />
            </div>

            <h2 className="fs-6">
                43. Crie um componente que tem um <b>span</b> com o número zero
                e um botão. A cada vez que o botão for apertado, o número
                contido no <b>span</b> deve receber +1
            </h2>
            <div className="card p-3 mb-4">
                <Q43PlusOneNum />
            </div>

            <h2 className="fs-6">
                44. Crie um componente que tem um <b>span</b> vazio, um input de
                texto e 5 botões. Tudo o que for escrito no input deve ser
                imediatamente também escrito no span. Cada botão representa uma
                cor: Vermelho, Verde, Azul, Amarelo e Preto. Ao clicar em
                qualquer botão, deve-se alterar a cor do texto que está dentro
                do span
            </h2>
            <div className="card p-3 mb-4">
                <Q44ChangeColorText />
            </div>

            <h2 className="fs-6">
                45. Crie um componente que tem um <b>span</b> vazio, um input de
                texto e 5 botões. Tudo o que for escrito no input deve ser
                imediatamente também escrito no span. Cada botão representa uma
                cor: Vermelho, Verde, Azul, Amarelo e Preto. Ao clicar em
                qualquer botão, deve-se alterar a cor do texto que está dentro
                do span
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                46. Crie um componente que tem um input de CEP, um span vazio e
                um botão, ao clicar no botão o componente deve fazer uma
                pesquisa na API de CEP (https://viacep.com.br/ws/XXXXXXXX/json/,
                substituir os X pelo CEP, sem hífen) e escrever o endereço
                encontrado dentro do span (logradouro, bairro, cidade, estado).
                Obs: Deve ser exibido um ícone de loading enquanto a API estiver
                buscando o CEP
            </h2>
            <div className="card p-3 mb-4">
                <Q46SearchCep />
            </div>

            <h2 className="fs-6">
                47. Crie um componente que tem um input de número (dólares), um
                span vazio e um botão, ao clicar no botão o componente deve
                fazer uma pesquisa na API de Cotação de moedas
                (https://economia.awesomeapi.com.br/json/last/USD-BRL) e
                retornar dentro do <b>span</b> o valor que o usuário inseriu no
                input convertido para reais. Deve exibir um loading enquanto
                busca
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                48. Crie um componente que tem um span vazio e um botão, ao
                clicar no botão o componente deve fazer uma pesquisa na API de
                Conselhos (https://api.adviceslip.com/advice) e retornar dentro
                do <b>span</b> um conselho. Exibir um loading enquanto procura
            </h2>
            <div className="card p-3 mb-4">
                <Q48Advice />
            </div>

            <h2 className="fs-6">
                49. Crie um componente que tem um campo do tipo select com 5
                opções de Pokemons e um botão, ao clicar no botão o componente
                deve fazer uma pesquisa na API de Pokemons
                (https://pokeapi.co/api/v2/pokemon/XXXXXX, substituir os X pelo
                nome do pokemon) e retornar a foto do pokemon escolhido no{' '}
                <b>select</b>. Exibir um loading enquanto procura
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>

            <h2 className="fs-6">
                50. Crie um componente que tem um um botão, ao clicar no botão o
                componente deve fazer uma pesquisa na API de fotos de cafés
                (https://coffee.alexflipnote.dev/random.json) e retornar a foto
                do café
            </h2>
            <div className="card p-3 mb-4">{/* Insira a resposta aqui */}</div>
        </div>
    );
};

export default App;
