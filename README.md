# Consultador de CEP - CDC

<!-- Link para página do projeto -->
> Visite a página clicando [aqui](https://zkd-consultador-de-cep.netlify.app/ "Visitar página").

### Sobre o projeto:

Nesse projeto foi criado um site que consegue consultar qualquer **CEP do Brasil** e retornar dados referentes ao CEP consultado, nele foi utilizado uma [API](https://viacep.com.br/ "Visitar site da API") que faz a consulta e retorna os dados em formato **JSON**. 
Caso ainda não tenha visto a página, clique [aqui](https://zkd-consultador-de-cep.netlify.app/ "Visitar página").

---
<!-- Estado de desenvolvimento -->
 ### Estado: Completo ✅ 
***
 ### Tecnologias usadas:
 * HTML
 * CSS
 * JavaScript
 * SASS
 * Gulp
---
### Sobre as Tecnologias:

#### HTML
O ***HTML***(HyperText Markup Language) é uma linguagem utilizada para construir a estrutura da uma página, como links, textos, fomulários e etc. Ele faz isso através de **Tags** que são envolvidas por **<>**. O navegador utiliza essa linguagem para interpretar a ***estrutura e semântica*** da página, a **semântica** está relacionada as divisões da página, como por exemplo as tags ***header(cabeçalho), main(principal), section(seção) e footer(rodapé***), cada uma dessas tags, ajuda o navegador interpretar onde fica cada elemento da página. Já a **estrutura**, são os elementos presentes na página que estão ligados com a semântica, por exemplo um título **H1** que é o título principal de uma página.

#### CSS
O ***CSS***(Cascading Style Sheets) é uma linguagem utilizada para construir o design de uma página em si. Enquanto o HTML coloca seus elementos na página, o CSS organiza eles para ficarem mais atrativos ao usuário, ademais o CSS permite criar páginas animadas e dinâmicas. Para usar o CSS, temos que usar os ***seletores, propriedades e valores***. Os **seletores** podem ser definidos por ***Tags, IDs e Classes***, de modo geral, o **seletor é o item(Tag) que vai ser alterado**. As **propriedades** são utilizadas para causar os efeitos, por exemplo '***font-size***', essa propriedade é utilizada para alterar o tamanho da fonte de textos. Já os **valores**, são o efeito em sí, para uma propriedade funcionar ela precisa de um valor para se basear, no mesmo exemplo de antes, digamos que temos o '**font-size**' assim: ***font-size: 16px;***, isso quer dizer que a propriedade ***font-size*** vai ter o valor de ***16px***, ou seja o seletor que contém essa informação vai ter o(s) texto(s) no tamanho de 16px.

#### JavaScript 
O ***JavaScript*** é um ***linguagem de programação*** com o principal foco em desenvolvimento de páginas web, com esse tipo linguagem é possível **criar sistemas complexos** como ***validações de formulário***, adicionar conteúdo através de ***APIs***, ***criar animações*** e etc. Na programação de sites, o JavaScript utiliza uma ferramenta que é ***proporcionada pelo próprio navegador***, o **DOM(Document Object Model)**, através desta ferramenta é possível acessar elementos HTML e manipular eles da forma que você quiser, por exemplo, fazer uma validação para ver se uma ***Tag 'input'*** foi preenchida ou não.

#### SASS
O **_SASS_** é um pré-processador de CSS que auxília na contrução e entendimento do código CSS. Com sua sintaxe é possível utilizar **Seletores dentro do código de outros Seletores**, assim ajudando a interpretar melhor o código e ficando com uma maior performace.
Com o SASS é possível utilizar ferramentas que não estão presentes no CSS, como por exemplos **_Módulos_**, **_Funções_**, **_Variáveis_**, **_Mixins_** e etc. O **Módulo** é um arquivo que contém códigos CSS que você pode ser importado em um único ou mais 
arquivos, assim, criando um sistema mais fácil de gerenciamento, pois é possível dividir o código em partes. Já as **Funções**, permitem que adicione uma lógica de programação no código, por exemplo, criar um **Função** que converte **Pixels(px)** em **EMs**,
assim deixando o código flexível e fazendo o desenvolvimento ficar mais prático e rápido, pois, o programador não vai precisar ficar fazendo o cálculo de conversão de cabeça, ademais, isso garante que o cálculo sempre seja certeiro. As **Variáveis** permitem 
guardar um código CSS que pode ser importado em vários arquivos, por exemplo, imagine que você desenvolveu um página que possuía uma cor principal em vários elementos do sites, como botões, background, textos e etc, no entanto, logo quando você terminou a 
construção, o cliente decide mudar a cor principal do site, no modo convencional seria preciso mudar trecho por trecho onde possuía determinada cor, no entanto, se caso estivesse sendo usado variáveis, bastaria você alterar a cor embutida/presa/presente/ligada 
a variável, assim você economizaria tempo para fazer outros afazeres. Os **Mixin** são construídos de forma semelhante as **Funções**, eles servem para reutilizar códigos CSS que estão sendo usados em algumas ou várias partes do código, por exemplo, imagine que 
você tenha dois elementos HTML que possuem algumas características em comum, como **_font-size_**, **_color_** e **_padding_**, para resolver isso, bastaria você criar um **Mixin** que possua os mesmos códigos desses elementos, e após isso, substituir o códigos 
semelhantes pelo **Mixin**. Até o momento, apenas expliquei algumas coisas do **SASS** para mostrar sua importância, mas caso estudar ou apenas ler sobre o SASS, clique [aqui](https://sass-lang.com/documentation/ "Documentação do SASS")

#### Gulp
o **_Gulp_** é uma ferramenta de automatização de tarefas que utiliza JavaScript e Node.js para ser executado. Com o Gulp possível criar tarefas para serem processadas a partir de funções JavaScript, como por exemplo a compilação do próprio SASS, no entanto, quando o código CSS sair/ser compilado,
ele vai estar em um tamanho comprimido, ou seja, em apenas uma linha, o que facilita a leitura do código CSS para o navegador. O **Gulp** também permite realizar as tarefas de forma serial(síncrona) ou paralela(assíncrona), quando se fala da forma serial, as tarefas vão ser executadas seguindo uma ordem que tem início e fim,
por exemplo, digamos que exista uma tarefa A e outra tarefa B, se a execução for no estilo serial, a tarefa B só vai começar a ser executada após o termino da tarefa anterior que nesse caso é a A, o modo serial deve ser utilizado quando uma tarefa depende da outra, por exemplo quando
é necessário **minificar** e **redimencionar** uma **imagem de 23mb(Megabytes)**, se as duas tarefas forem executadas ao mesmo tempo, o ganho de perda de Megabytes seria menor, pois o redimencionamento iria impedir que a minificação tivesse mais efetividade. Já quando se fala
da forma paralela, as tarefa vão ser executadas ao mesmo tempo, por exemplo a tarefa A e B seriam iniciadas ao mesmo tempo, esse modelo de execução de ser usado quando as tarefas são independentes umas das outras, por exemplo a minificação de uma imagem e a compilação do SASS.
Para usar o Gulp é necessário conhecer a sintaxe dele e conhecer plugins que podem favorecer o seu código, caso queira ver, ler ou estudar sobre essa ferramenta, clique [aqui](https://gulpjs.com/docs/en/getting-started/quick-start "Documentação do Gulp").

---

# Changelog

Abaixo estão as mudanças de cada versão do site(página).

## [0.0.1] - 14-09-2024
### Added
- ./src/index.html - construção completa do HTML da página.
- ./src/styles - pasta que contém arquivos .scss que estilizam a págiana.
- ./src/scripts - pasta que contém arquivo .js que faz a consulta e retorna o resultado.
- ./gulpfile.js - arquivo que faz a automatização das tarefas, como compilar JavaScript, Sass e HTML.
---
