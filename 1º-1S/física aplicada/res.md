Análise Aprofundada de Dispositivos Eletrónicos e Teoria de Circuitos: Capítulos 1 a 11
Capítulo 1: Díodos Semicondutores
A eletrónica moderna fundamenta-se na física dos materiais semicondutores, cuja condutividade se situa num intervalo intermédio entre condutores e isolantes. A análise destes materiais inicia-se com a compreensão da estrutura atómica e dos níveis de energia. Os materiais mais comuns na indústria são o Silício (Si), o Germânio (Ge) e o Arsenieto de Gálio (GaAs), cada um apresentando características térmicas e elétricas distintas que determinam a sua aplicação.
1.1 Materiais Semicondutores e Ligações Covalentes
Os átomos de silício e germânio possuem quatro eletrões de valência, permitindo-lhes formar uma estrutura cristalina através de ligações covalentes. Nestas ligações, os eletrões são partilhados entre átomos adjacentes, conferindo estabilidade à estrutura. A $0\,K$ (zero absoluto), estes materiais comportam-se como isolantes perfeitos, pois todos os eletrões estão presos nas ligações. Com o aumento da temperatura, a energia térmica absorvida pelos eletrões de valência é suficiente para quebrar algumas destas ligações, gerando portadores de carga livres (eletrões) e deixando para trás lacunas (ausência de eletrão). Este processo define os semicondutores intrínsecos.
A distinção entre materiais é quantificada pela largura da banda proibida (energy gap, $E_g$), que representa a energia necessária para um eletrão saltar da banda de valência para a banda de condução:
$E_g \approx 1,1\,eV$ para o Silício.
$E_g \approx 0,67\,eV$ para o Germânio.
$E_g \approx 1,43\,eV$ para o Arsenieto de Gálio.
Esta diferença energética explica porque o Ge é mais sensível à temperatura e possui uma corrente de fuga mais elevada que o Si.1
1.2 Materiais Extrínsecos: Tipo-n e Tipo-p
Para alterar a condutividade, introduzem-se impurezas no cristal, um processo denominado dopagem.
Material Tipo-n (Negativo): Cria-se ao dopar o silício com elementos pentavalentes (como Antimónio, Arsénio ou Fósforo). Estes átomos possuem cinco eletrões de valência; quatro ligam-se ao silício, sobrando um eletrão livre. Neste material, os eletrões são os portadores maioritários e as lacunas os minoritários.
Material Tipo-p (Positivo): Resulta da dopagem com elementos trivalentes (como Boro, Gálio ou Índio). Com apenas três eletrões de valência, cria-se uma lacuna na estrutura covalente que aceita eletrões. Aqui, as lacunas são os portadores maioritários.
1.3 A Junção p-n e Operação do Díodo
A união física de um material tipo-n e um tipo-p forma uma junção p-n. Na interface, ocorre uma difusão inicial: eletrões do lado n movem-se para o lado p e recombinam-se com lacunas. Este movimento deixa iões positivos fixos no lado n e iões negativos no lado p, criando uma região de depleção (ou carga espacial) isenta de portadores livres. Gera-se assim um campo elétrico interno e uma barreira de potencial ($V_b$) que impede difusão adicional.2
A operação do díodo é descrita pelas condições de polarização:
Sem Polarização ($V_D = 0\,V$): O dispositivo está em equilíbrio. A corrente líquida é nula.
Polarização Inversa ($V_D < 0\,V$): O potencial positivo é aplicado ao material n e o negativo ao p. A região de depleção alarga-se, aumentando a barreira de potencial. Flui apenas uma corrente de saturação inversa extremamente pequena ($I_s$), tipicamente na ordem dos nanoamperes para o silício, resultante da geração térmica de portadores minoritários.
Polarização Direta ($V_D > 0\,V$): O potencial positivo é aplicado ao material p. A região de depleção estreita-se e a barreira de potencial reduz-se. Quando a tensão externa supera a tensão de joelho ($V_K$), a condução aumenta exponencialmente.
A equação de Shockley modela matematicamente este comportamento:


$$I_D = I_s (e^{V_D/nV_T} - 1)$$

Onde $n$ é o fator de idealidade (entre 1 e 2) e $V_T$ é a tensão térmica ($V_T = kT/q \approx 26\,mV$ a $25^{\circ}C$).2
1.4 Níveis de Resistência e Circuitos Equivalentes
Dada a não linearidade da curva I-V do díodo, definem-se diferentes tipos de resistência para análise de circuitos:
Resistência DC ou Estática ($R_D$): Aplicável a sinais contínuos. É a razão entre a tensão total e a corrente num ponto de operação ($Q$). $R_D = V_D / I_D$. É baixa na condução e alta no corte.
Resistência AC ou Dinâmica ($r_d$): Aplicável a pequenos sinais alternados. É o inverso do declive da tangente à curva no ponto Q. Derivando a equação de Shockley, obtém-se $r_d \approx 26\,mV / I_D$.
Resistência AC Média ($r_{av}$): Usada para grandes oscilações de sinal, calculada pela variação ponto a ponto ($\Delta V_d / \Delta I_d$).
Tipo de Resistência
Fórmula
Aplicação
DC (Estática)
$R_D = V_D / I_D$
Ponto de operação DC fixo
AC (Dinâmica)
$r_d = 26\,mV / I_D$
Pequenos sinais AC
AC Média
$r_{av} = \Delta V_d / \Delta I_d$
Grandes sinais AC

O circuito equivalente do díodo pode ser:
Ideal: Curto-circuito em condução, circuito aberto em bloqueio.
Simplificado: Fonte de tensão $V_K$ em série com um díodo ideal.
Por Peças (Piecewise-Linear): Adiciona uma resistência média $r_{av}$ em série com a fonte $V_K$.
1.5 Díodos Especiais: Zener e LED
Díodo Zener: Projetado com dopagem elevada para operar na região de rutura inversa. A rutura ocorre a uma tensão específica ($V_Z$) devido ao efeito Zener (campo elétrico intenso) ou avalanche (colisões). A sua principal característica é manter $V_Z$ constante para uma vasta gama de correntes, tornando-o ideal para regulação de tensão. O coeficiente de temperatura ($T_C$) indica a variação de $V_Z$ com a temperatura.2
LED (Díodo Emissor de Luz): Em semicondutores de gap direto (como GaAsP), a recombinação de portadores na junção liberta energia sob a forma de fotões. A cor da luz depende do $E_g$ do material.
Glossário do Capítulo 1
Díodo Retificador: Dispositivo semicondutor de dois terminais que permite o fluxo de corrente predominantemente num sentido.
Símbolo: Triângulo a apontar para uma barra (o sentido da seta indica o sentido convencional da corrente).
Subtipos: Díodo de Sinal (pequena potência), Díodo de Potência (alta corrente).
Díodo Zener: Componente desenhado para operar na região de rutura inversa com uma tensão estável.
Propriedade Fundamental: Tensão Zener ($V_Z$), ex: $5,1\,V$, $12\,V$.
Resistência (Componente): Limita o fluxo de corrente. Identificada por anéis coloridos.
Exemplo de Leitura: Amarelo (4), Violeta (7), Vermelho ($\times 10^2$), Ouro ($\pm 5\%$) = $4700\,\Omega$ ou $4,7\,k\Omega$.
Valores e Unidades:
Tensão ($V$): Volt (V). Ex: Tensão de joelho do Silício $\approx 0,7\,V$.
Corrente ($I$): Ampere (A). Comum em eletrónica: $mA$ ($10^{-3}$ A).
Energia ($W$): Joule (J) ou eletrão-volt (eV). $1\,eV = 1,6 \times 10^{-19}\,J$.
Alfabeto Grego:
$\eta$ (Eta): Fator de idealidade na equação do díodo.
$\Delta$ (Delta): Variação de uma grandeza (ex: $\Delta V$).
Fórmulas Importantes:
Lei de Ohm (Local): $R_{D} = V_D / I_D$.
Tensão Térmica: $V_T = k T_K / q$.
Equação do Díodo: $I_D = I_s(e^{V_D/nV_T}-1)$.
Capítulo 2: Aplicações de Díodos
Este capítulo transita da teoria física para a aplicação prática dos díodos em circuitos, focando-se na conversão de energia, proteção e processamento de sinal. A análise de circuitos com díodos exige determinar primeiro o estado do dispositivo (LIGADO ou DESLIGADO) para substituir pelo modelo equivalente apropriado.
2.1 Análise da Reta de Carga
A análise da reta de carga é uma técnica gráfica fundamental para visualizar a interação entre um dispositivo não linear (o díodo) e o circuito linear externo. Considere um circuito série simples com uma fonte $E$, uma resistência $R$ e um díodo.
Pela Lei de Kirchhoff das Tensões (KVL):


$$E - V_D - I_D R = 0 \Rightarrow I_D = -\frac{1}{R} V_D + \frac{E}{R}$$

Esta é a equação de uma reta ($y = mx + b$) traçada no plano $I_D$ vs $V_D$.
Interseção Vertical ($V_D = 0\,V$): $I_D = E/R$.
Interseção Horizontal ($I_D = 0\,A$): $V_D = E$.
O ponto de interseção desta reta com a curva característica do díodo é o Ponto Quiescente (Ponto Q), que define a tensão e corrente reais de operação do circuito.3
2.2 Configurações Série e Paralelo
Na análise prática sem gráficos, utilizamos o modelo de tensão constante:
Se o díodo estiver LIGADO (polarização direta com $V > V_K$): Substitui-se por uma fonte de tensão de $0,7\,V$ (Si), $0,3\,V$ (Ge) ou $1,2\,V$ (GaAs).
Se o díodo estiver DESLIGADO (polarização inversa): Substitui-se por um circuito aberto ($I = 0\,A$).
Configuração Série: A mesma corrente flui por todos os elementos. O díodo conduz se a tensão da fonte for suficiente para superar a barreira de potencial.
Configuração Paralelo: A tensão é igual em todos os ramos. Se díodos de materiais diferentes (ex: Si e Ge) estiverem em paralelo, o díodo com menor $V_K$ (Ge) conduz primeiro e fixa a tensão em $0,3\,V$, impedindo o díodo de Si ($0,7\,V$) de conduzir significativamente.
2.3 Retificação
A conversão de AC para DC é essencial para a maioria dos equipamentos eletrónicos.
Retificador de Meia-Onda:
Utiliza um díodo para bloquear o semiciclo negativo da entrada sinusoidal.
Valor DC (Médio): $V_{dc} = 0,318 V_m$ (para díodo ideal) ou $V_{dc} \approx 0,318 (V_m - V_K)$ (prático).
Frequência de saída: Igual à frequência de entrada.
Retificador de Onda Completa (Transformador com Tomada Central):
Utiliza dois díodos e um transformador com tomada central. Cada díodo conduz num semiciclo, combinando-se na carga para uma saída unidirecional contínua.
Valor DC: $V_{dc} = 0,636 V_m$.
Retificador de Onda Completa em Ponte:
Utiliza quatro díodos numa configuração de ponte. Não necessita de transformador com tomada central e sujeita os díodos a uma tensão inversa de pico (PIV) menor que o retificador de tomada central.
Valor DC: $V_{dc} \approx 0,636 (V_m - 2V_K)$ (devido à condução de dois díodos em série a cada semiciclo).
2.4 Ceifadores (Clippers) e Fixadores (Clampers)
Ceifadores: Circuitos que "cortam" partes do sinal acima ou abaixo de um nível de referência, sem distorcer a parte restante.
Série: O díodo está em série com a carga.
Paralelo: O díodo está em paralelo com a carga. Fontes DC adicionais podem ajustar o nível de corte.
Fixadores: Adicionam um nível DC a um sinal AC, deslocando-o verticalmente. O circuito deve conter um condensador, um díodo e uma resistência. O condensador carrega-se durante a condução do díodo e atua como uma bateria durante o resto do ciclo. A constante de tempo $\tau = RC$ deve ser grande (geralmente $5\tau > T/2$) para manter a carga do condensador.
2.5 Díodos Zener em Aplicações
Os Zeners são usados como reguladores e referências de tensão.
Regulação: Quando $V_{in}$ varia ou a carga $R_L$ varia, o Zener ajusta a sua corrente para manter $V_L = V_Z$ constante, desde que opere na região de rutura ($I_Z > I_{ZK}$ e $P_Z < P_{Zmax}$).
Proteção: Dois Zeners em oposição (back-to-back) podem limitar a tensão de um sinal AC.
2.6 Multiplicadores de Tensão
Circuitos (duplicadores, triplicadores) que geram tensões DC elevadas a partir de transformadores de baixa tensão, usando redes de díodos e condensadores em cascata. O duplicador de tensão de meia-onda carrega um condensador para $V_m$ num semiciclo e transfere essa carga mais a da fonte para um segundo condensador no ciclo seguinte, totalizando $2V_m$.4
Glossário do Capítulo 2
Ponte Retificadora: Componente com 4 terminais contendo 4 díodos internamente ligados para retificação de onda completa.
Condensador (Capacitor): Componente que armazena carga elétrica. Essencial em filtros e fixadores.
Símbolo: Duas placas paralelas.
Unidade: Farad (F).
PIV (Peak Inverse Voltage): Tensão Inversa de Pico. A tensão máxima reversa que um díodo suporta antes de entrar em avalanche. Num retificador de meia-onda, $PIV \ge V_m$.
Alfabeto Grego:
$\tau$ (Tau): Constante de tempo ($RC$) em circuitos de fixação.
$\omega$ (Omega): Frequência angular ($2\pi f$).
Fórmulas Importantes:
Lei das Malhas (KVL): $\sum V = 0$.
Valor Médio (Meia-Onda): $V_{dc} = 0,318 V_m$.
Valor Médio (Onda Completa): $V_{dc} = 0,636 V_m$.
Constante de Tempo: $\tau = R \times C$.
Capítulo 3: Transístores de Junção Bipolar (BJT)
O BJT é um dispositivo semicondutor de três camadas capaz de amplificação de corrente e tensão. A sua invenção revolucionou a eletrónica, substituindo as válvulas de vácuo.
3.1 Construção e Símbolos
O BJT consiste em três regiões dopadas:
Emissor (E): Fortemente dopado, injeta portadores de carga.
Base (B): Muito fina e levemente dopada, controla o fluxo de portadores.
Coletor (C): Moderadamente dopado, recolhe os portadores.
Existem dois tipos:
npn: Emissor (n), Base (p), Coletor (n). A corrente principal é de eletrões.
pnp: Emissor (p), Base (n), Coletor (p). A corrente principal é de lacunas.
Esquema ASCII dos Símbolos:

Fragmento do código


      C                 C

| |
    /                 /
  B| (npn)         B| (pnp)
    \ v               \ ^

| |
      E                 E
 (Seta para fora)   (Seta para dentro)


3.2 Operação do Transístor
Para operar na Região Ativa Linear (amplificação):
A junção Base-Emissor (JBE) deve estar polarizada diretamente.
A junção Base-Coletor (JBC) deve estar polarizada inversamente.
No transístor npn, a polarização direta da JBE faz com que eletrões sejam injetados do emissor para a base. Como a base é muito fina e pouco dopada, poucos eletrões se recombinam com lacunas (originando uma pequena corrente de base $I_B$). A grande maioria difunde-se através da base até à região de depleção da JBC, onde são atraídos pelo campo elétrico positivo do coletor, constituindo a corrente de coletor $I_C$.5
3.3 Relações de Corrente e Parâmetros
A relação fundamental das correntes, baseada na Lei dos Nós de Kirchhoff (KCL), é:


$$I_E = I_C + I_B$$

Como $I_B$ é muito pequena, $I_C \approx I_E$.
Parâmetros de Ganho:
Alfa ($\alpha_{dc}$): Relaciona $I_C$ e $I_E$ na configuração base-comum.

$$\alpha_{dc} = \frac{I_C}{I_E}$$

O valor de $\alpha$ é sempre menor que 1, tipicamente entre 0,90 e 0,998.
Beta ($\beta_{dc}$): Relaciona $I_C$ e $I_B$ na configuração emissor-comum.

$$\beta_{dc} = \frac{I_C}{I_B}$$

O valor de $\beta$ é muito maior que 1, variando tipicamente de 50 a 400.
Conversão entre $\alpha$ e $\beta$:


$$\beta = \frac{\alpha}{1-\alpha} \quad ; \quad \alpha = \frac{\beta}{\beta+1}$$
3.4 Configurações e Curvas Características
Base-Comum (CB): Entrada no Emissor, saída no Coletor.
Ganho de corrente $\approx 1$. Ganho de tensão elevado.
Curvas de saída: $I_C$ vs $V_{CB}$ para vários $I_E$. Mostra uma corrente de coletor quase constante (fonte de corrente ideal) independente de $V_{CB}$ na região ativa.6
Emissor-Comum (CE): Entrada na Base, saída no Coletor.
Configuração mais usual. Elevados ganhos de corrente e tensão.
Curvas de saída: $I_C$ vs $V_{CE}$ para vários $I_B$. Apresenta uma inclinação ascendente devido ao efeito Early.
Coletor-Comum (CC): Entrada na Base, saída no Emissor (Seguidor de Emissor).
Ganho de tensão $\approx 1$, impedância de entrada muito alta.
3.5 Limites de Operação
Cada transístor tem limites máximos especificados no datasheet:
$V_{CE_{max}}$: Tensão máxima coletor-emissor.
$I_{C_{max}}$: Corrente máxima de coletor.
$P_{C_{max}}$: Dissipação máxima de potência ($P_D = V_{CE} I_C$).
A operação deve ocorrer dentro da Área de Operação Segura (SOA) definida por estes limites para evitar a destruição do dispositivo.
Glossário do Capítulo 3
BJT (Bipolar Junction Transistor): Transístor que utiliza tanto eletrões como lacunas como portadores de carga.
$I_{CEO}$: Corrente de fuga Coletor-Emissor com a Base em aberto. Sensível à temperatura.
$h_{FE}$: Termo híbrido equivalente ao $\beta_{dc}$. Encontrado frequentemente em datasheets.
Saturação: Estado onde o transístor conduz fortemente ($V_{CE} \approx 0,2\,V$) e $I_C$ é limitado pelo circuito externo, não pela base.
Corte (Cutoff): Estado onde o transístor não conduz ($I_C \approx 0$).
Valores e Unidades:
$\beta$ (Beta): Adimensional (ganho).
Potência ($P$): Watt (W).
Fórmulas Importantes:
Lei dos Nós: $I_E = I_C + I_B$.
Corrente Coletor: $I_C = \beta I_B$.
Potência: $P_C = V_{CE} I_C$.
Capítulo 4: Polarização DC de BJTs
A polarização (biasing) é o processo de estabelecer tensões e correntes DC fixas no transístor para definir um ponto de operação (Ponto Q) na região ativa linear. O objetivo é garantir que o sinal AC possa ser amplificado sem distorção (ceifamento) e que o ponto Q seja estável face a variações de temperatura e do parâmetro $\beta$.
4.1 Configuração de Polarização Fixa
A configuração mais simples aplica uma corrente de base fixa através de uma resistência $R_B$ ligada a $V_{CC}$.
Análise da Malha Base-Emissor:


$$V_{CC} - I_B R_B - V_{BE} = 0 \Rightarrow I_B = \frac{V_{CC} - V_{BE}}{R_B}$$
Análise da Malha Coletor-Emissor:

$$V_{CC} - I_C R_C - V_{CE} = 0 \Rightarrow V_{CE} = V_{CC} - I_C R_C$$

Esta configuração tem má estabilidade. Como $I_C = \beta I_B$, qualquer variação em $\beta$ (com a temperatura ou troca de componente) altera diretamente $I_C$ e o ponto Q, podendo levar o transístor à saturação ou corte.2
4.2 Configuração de Polarização Estabilizada no Emissor
A introdução de uma resistência no emissor ($R_E$) melhora drasticamente a estabilidade.
Mecanismo de Estabilidade: Se $I_C$ aumentar (devido a temperatura), a corrente de emissor $I_E$ também aumenta. Isto aumenta a queda de tensão em $R_E$ ($V_E = I_E R_E$). Como a tensão da base $V_B$ é relativamente fixa, o aumento de $V_E$ reduz a tensão base-emissor ($V_{BE} = V_B - V_E$). A redução de $V_{BE}$ diminui $I_B$, o que por sua vez reduz $I_C$, contrariando o aumento inicial.
Equação de $I_B$: A impedância vista da base aumenta.


$$I_B = \frac{V_{CC} - V_{BE}}{R_B + (\beta+1)R_E}$$

A estabilidade melhora, mas o ganho de tensão AC pode ser reduzido se $R_E$ não tiver um condensador de bypass.
4.3 Configuração de Divisor de Tensão
Esta é a configuração mais utilizada e estável, tornando o ponto Q praticamente independente de $\beta$. Utiliza um divisor resistivo ($R_1$ e $R_2$) para fixar a tensão na base.
Método Exato (Thévenin):
Substitui-se o circuito de entrada pelo equivalente de Thévenin:
$$R_{Th} = R_1 |
| R_2 \quad ; \quad E_{Th} = \frac{R_2}{R_1 + R_2}V_{CC}$$


$$I_B = \frac{E_{Th} - V_{BE}}{R_{Th} + (\beta+1)R_E}$$

Método Aproximado:
Válido se a resistência de entrada vista na base ($\beta R_E$) for muito maior que $R_2$ (regra prática: $\beta R_E \ge 10 R_2$). Assume-se que $I_B \approx 0$.


$$V_B \approx \frac{R_2}{R_1 + R_2} V_{CC}$$

$$V_E = V_B - V_{BE} \quad \Rightarrow \quad I_C \approx I_E = \frac{V_E}{R_E}$$

Neste método, $I_C$ depende apenas de resistências externas e $V_{CC}$, sendo independente de $\beta$.8
4.4 Outras Configurações e Estabilidade
Realimentação de Coletor: A resistência de base $R_B$ é ligada ao coletor e não a $V_{CC}$. Proporciona feedback negativo DC, melhorando a estabilidade em relação à polarização fixa.
Fatores de Estabilidade ($S$): Quantificam a variação de $I_C$ em relação a parâmetros instáveis.
$S(I_{CO}) = \Delta I_C / \Delta I_{CO}$
$S(V_{BE}) = \Delta I_C / \Delta V_{BE}$
$S(\beta) = \Delta I_C / \Delta \beta$
Quanto menor o fator S (idealmente 1), mais estável é o circuito.2
Glossário do Capítulo 4
Ponto Q (Quiescent Point): O ponto de operação DC ($I_{CQ}, V_{CEQ}$) no gráfico das características de saída. Deve situar-se no centro da reta de carga para máxima excursão de sinal.
Reta de Carga DC: Linha reta traçada sobre as curvas características que representa todas as soluções possíveis para o circuito externo (Lei de Kirchhoff).
Saturação ($I_{Csat}$): A corrente máxima possível no circuito, limitada apenas pelas resistências externas ($V_{CE} \approx 0$).
Estabilidade: Medida da capacidade do circuito em manter o ponto Q fixo face a variações de temperatura e dispersão de parâmetros dos componentes.
Fórmulas Importantes:
Divisor de Tensão (Base): $V_B \approx \frac{R_2}{R_1+R_2}V_{CC}$.
Corrente de Saturação (Emissor-Comum): $I_{Csat} = \frac{V_{CC}}{R_C + R_E}$.
Capítulo 5: Análise AC de BJTs
Após estabelecer a polarização DC, analisa-se a resposta do transístor a pequenos sinais AC. O objetivo é determinar parâmetros como ganho de tensão ($A_v$), ganho de corrente ($A_i$) e impedâncias de entrada ($Z_i$) e saída ($Z_o$).
5.1 Modelação do Transístor
Para análise linear, substitui-se o transístor por um modelo de circuito equivalente. Os condensadores de acoplamento e bypass são considerados curto-circuitos (reatância nula) e as fontes DC são ligadas à terra (potencial AC nulo).
O Modelo $r_e$:
É o modelo mais direto e intuitivo.
O emissor é substituído por uma resistência dinâmica $r_e$, que depende da corrente DC de polarização:

$$r_e = \frac{26\,mV}{I_E (DC)}$$
O coletor é modelado como uma fonte de corrente controlada: $I_c = \beta I_b$ ou $\alpha I_e$.
A base "vê" resistências no emissor multiplicadas por $(\beta+1)$.
5.2 Análise das Configurações Principais (Modelo $r_e$)
1. Emissor-Comum (Polarização Fixa e Divisor de Tensão com Bypass):
O emissor está ligado à terra em AC (via condensador de bypass).
Impedância de Entrada ($Z_i$): $R_{bias} |
| \beta r_e$.
Impedância de Saída ($Z_o$): $R_C |
| r_o$ (onde $r_o$ é a resistência interna de saída do transístor, geralmente muito alta e ignorada).
Ganho de Tensão ($A_v$):
$$A_v = -\frac{R_C |
| r_o}{r_e} \approx -\frac{R_C}{r_e}$$
O sinal negativo indica uma defasagem de $180^{\circ}$ entre entrada e saída.
2. Emissor-Comum com $R_E$ (Sem Bypass):
A resistência $R_E$ permanece no circuito AC.
Impedância de Entrada: Aumenta significativamente. $Z_b \approx \beta(r_e + R_E) \approx \beta R_E$.
Ganho de Tensão: Reduz-se, mas torna-se muito mais estável e linear.

$$A_v \approx -\frac{R_C}{R_E}$$
3. Seguidor de Emissor (Coletor-Comum):
O sinal entra na base e sai no emissor.
Ganho de Tensão: $A_v \approx 1$ (ligeiramente menor). Sem inversão de fase.
Impedância de Entrada: Muito alta ($Z_i \approx \beta R_E$).
Impedância de Saída: Muito baixa ($Z_o \approx r_e$).
Aplicação: Buffer (isolador) e casamento de impedâncias.
4. Base-Comum:
O sinal entra no emissor e sai no coletor.
Impedância de Entrada: Muito baixa ($Z_i \approx r_e$).
Ganho de Tensão: Elevado e positivo (em fase). $A_v \approx R_C/r_e$.
Aplicação: Amplificadores de alta frequência.
5.3 Sistemas em Cascata
Quando amplificadores são ligados em série (cascata), o ganho total é o produto dos ganhos individuais.


$$A_{v_{total}} = A_{v1} \cdot A_{v2} \cdot \dots$$

Ponto Crítico: A impedância de entrada do segundo estágio atua como carga ($R_L$) para o primeiro estágio, reduzindo o seu ganho efetivo. O cálculo deve ser feito sequencialmente da saída para a entrada ou considerando o efeito de carga.9
Configuração Darlington:
Dois transístores ligados (emissor do primeiro à base do segundo) para atuar como um único transístor com $\beta$ super elevado ($\beta_D \approx \beta_1 \cdot \beta_2$). Proporciona impedância de entrada altíssima.2
Glossário do Capítulo 5
$r_e$: Resistência dinâmica do diodo base-emissor. Fundamental no cálculo de ganhos.
Modelo Híbrido: Modelo alternativo usando parâmetros h ($h_{ie}, h_{fe}, h_{re}, h_{oe}$). Mais comum em datasheets.
$h_{fe} = \beta_{ac}$.
$h_{ie} \approx \beta r_e$.
Impedância ($Z$): Oposição total à corrente AC (Resistência + Reatância), em Ohms ($\Omega$).
Fórmulas Importantes:
Resistência AC: $r_e = 26\,mV / I_E$.
Ganho de Tensão (CE): $A_v = -R_C / r_e$.
Ganho de Tensão (com $R_E$): $A_v \approx -R_C / R_E$.
Capítulo 6: Transístores de Efeito de Campo (FETs)
Os FETs são dispositivos controlados por tensão, ao contrário dos BJTs que são controlados por corrente. Isto confere-lhes uma impedância de entrada extremamente alta, tornando-os ideais para interfaces com sensores sensíveis.
6.1 JFET (Junction Field-Effect Transistor)
O JFET possui um canal condutor (tipo n ou p) ladeado por regiões de porta (Gate) de dopagem oposta.
Operação:
A aplicação de uma tensão inversa na junção Porta-Fonte ($V_{GS}$) cria uma região de depleção que estreita o canal, controlando o fluxo de corrente Dreno-Fonte ($I_D$).
$I_G \approx 0\,A$: A corrente de porta é virtualmente nula.
$V_P$ (Pinch-off): A tensão $V_{GS}$ que fecha completamente o canal ($I_D = 0$).
$I_{DSS}$: A corrente máxima de dreno quando $V_{GS} = 0\,V$.
A relação de transferência é dada pela Equação de Shockley (quadrática):


$$I_D = I_{DSS} \left( 1 - \frac{V_{GS}}{V_P} \right)^2$$
6.2 MOSFET (Metal-Oxide-Semiconductor FET)
Nestes dispositivos, a porta é isolada eletricamente do canal por uma camada fina de dióxido de silício ($SiO_2$).
MOSFET Tipo Depleção (D-MOSFET):
Possui um canal físico construído. Pode operar em modo de depleção (como o JFET) ou em modo de enriquecimento (atraindo mais portadores para o canal). Segue a equação de Shockley.
MOSFET Tipo Enriquecimento (E-MOSFET):
Não possui canal físico inicial. O canal é induzido apenas quando $V_{GS}$ excede uma tensão de limiar ($V_{GS(Th)}$ ou $V_T$). É o transístor base da lógica digital moderna.
Equação de Corrente:

$$I_D = k (V_{GS} - V_{GS(Th)})^2$$

Onde $k$ é uma constante dependente da construção do dispositivo ($k = \frac{I_{D(on)}}{(V_{GS(on)} - V_{GS(Th)})^2}$).2
Glossário do Capítulo 6
Transcondutância ($g_m$): Parâmetro chave para amplificação. Relaciona a variação da corrente de saída com a tensão de entrada: $g_m = \Delta I_D / \Delta V_{GS}$. Unidade: Siemens (S).
CMOS (Complementary MOS): Tecnologia que usa pares de p-MOS e n-MOS. Consome potência quase nula em estado estático.
Símbolos:
JFET: Seta na porta (Gate) indica junção PN.
MOSFET: A linha da porta é separada do canal (indicando o isolante). E-MOSFET tem linha de canal tracejada (canal descontínuo).
Capítulo 7: Polarização de FETs
A polarização de FETs foca-se em estabelecer um $V_{GS}$ estável para definir o ponto Q. Devido à relação não linear (quadrática), a análise gráfica é frequentemente utilizada.
7.1 Configuração de Polarização Fixa
Utiliza uma fonte de tensão DC ($V_{GG}$) ligada diretamente à porta.


$$V_{GS} = -V_{GG}$$

O ponto Q é a interseção desta linha vertical com a curva de transferência de Shockley. O $V_{DS}$ é determinado pela malha de saída: $V_{DS} = V_{DD} - I_D R_D$.
7.2 Configuração de Autopolarização (Self-Bias)
Elimina a necessidade de duas fontes de alimentação. Uma resistência $R_S$ é colocada no terminal da fonte (Source). A corrente de dreno $I_D$ flui por $R_S$, criando uma tensão $V_S = I_D R_S$. Como a porta está ligada à terra através de $R_G$ (e $I_G=0$), a tensão Porta-Fonte é:


$$V_{GS} = V_G - V_S = 0 - I_D R_S = -I_D R_S$$

Esta equação define uma reta que passa na origem. O ponto Q é a interseção desta reta com a curva de transferência.2 Esta configuração estabiliza o ponto de operação contra variações nos parâmetros do dispositivo.
7.3 Divisor de Tensão
Similar aos BJTs, fixa a tensão na porta $V_G$ através de um divisor resistivo ($R_1, R_2$).
$$V_G = \frac{R_2}{R_1 + R_2} V_{DD}$$A equação da malha de entrada torna-se:

$$V_{GS} = V_G - I_D R_S$$

A análise gráfica envolve traçar esta reta (que interseta o eixo horizontal em $V_G$ e o vertical em $V_G/R_S$) sobre a curva de transferência.
7.4 Polarização de E-MOSFETs
Para E-MOSFETs, $V_{GS}$ deve ser maior que o limiar $V_T$.
Realimentação de Dreno: Uma resistência elevada liga o Dreno à Porta. Como $I_G=0$, não há queda de tensão na resistência, logo $V_G = V_D$ e $V_{GS} = V_{DS}$. O ponto Q obtém-se intersetando a curva característica do dispositivo com a reta $V_{DS} = V_{DD} - I_D R_D$ (substituindo $V_{DS}$ por $V_{GS}$).
Glossário do Capítulo 7
Método Gráfico: Técnica essencial para resolver circuitos FET. Traça-se a reta definida pelo circuito (reta de carga ou viés) sobre a curva de transferência do dispositivo (Shockley).
Reta de Carga DC (Output): Reta no gráfico $I_D$ vs $V_{DS}$ que representa $V_{DS} = V_{DD} - I_D R_D$. Define os limites de operação.
Fórmulas Importantes:
Autopolarização: $V_{GS} = -I_D R_S$.
Divisor de Tensão: $V_{GS} = V_G - I_D R_S$.
Capítulo 8: Amplificadores FET
A análise de pequenos sinais em FETs utiliza o modelo AC equivalente. Embora o ganho de tensão dos FETs seja geralmente menor que o dos BJTs, a impedância de entrada extremamente elevada é uma vantagem crucial.
8.1 Modelo AC de Pequenos Sinais
O FET é modelado por:
Um circuito aberto na entrada (Gate-Source), refletindo $Z_{in} \approx \infty$.
Uma fonte de corrente controlada na saída: $I_d = g_m V_{gs}$.
Uma resistência de saída interna: $r_d$ (ou $1/y_{os}$), que representa a inclinação das curvas de saída.
Cálculo da Transcondutância ($g_m$):
É a derivada da equação de Shockley no ponto Q:


$$g_m = \frac{2 I_{DSS}}{|V_P|} \left( 1 - \frac{V_{GSQ}}{V_P} \right) = g_{m0} \left( 1 - \frac{V_{GSQ}}{V_P} \right)$$

Onde $g_{m0}$ é o valor máximo de transcondutância.10
8.2 Configuração Fonte-Comum (CS)
Análoga ao Emissor-Comum. Sinal entra na Porta, sai no Dreno.
Impedância de Entrada ($Z_i$): $R_G$ (Resistência de polarização da porta). Como $I_G=0$, esta resistência pode ser muito elevada (Megohms).
Impedância de Saída ($Z_o$): $R_D |
| r_d$.
Ganho de Tensão ($A_v$):
$$A_v = -g_m (R_D |
| r_d)$$
Se $r_d$ for muito grande ($r_d \ge 10 R_D$), simplifica-se para $A_v \approx -g_m R_D$.
O sinal negativo indica inversão de fase de $180^{\circ}$.
Efeito de $R_S$ não by-passada: Se a resistência de fonte $R_S$ não tiver condensador de bypass, ocorre realimentação negativa local. O ganho reduz-se para:

$$A_v = \frac{-g_m R_D}{1 + g_m R_S}$$
8.3 Configuração Dreno-Comum (CD) ou Seguidor de Fonte
Sinal entra na Porta, sai na Fonte.
Ganho de Tensão: Sempre menor que 1, mas próximo da unidade.

$$A_v = \frac{g_m R_S}{1 + g_m R_S}$$
Impedância de Entrada: Extremamente alta.
Impedância de Saída: Baixa ($Z_o \approx 1/g_m |
| R_S$).
Aplicação: Excelente buffer de impedância.
8.4 Configuração Porta-Comum (CG)
Sinal entra na Fonte, sai no Dreno.
Impedância de Entrada: Baixa ($Z_i \approx 1/g_m$).
Ganho de Tensão: Positivo (não inversor) e moderado/alto ($A_v \approx g_m R_D$).
Aplicação: Amplificadores de alta frequência e adaptação de impedância de linhas de baixa impedância.
Glossário do Capítulo 8
$g_m$ (Transcondutância): Parâmetro AC fundamental do FET. Unidade: Siemens (S) ou Mho ($\mho$). Indica a eficiência de amplificação.
$r_d$ (Resistência de Saída AC): Resistência interna do FET vista nos terminais de dreno-fonte. $r_d = \Delta V_{DS} / \Delta I_D$.
Modelo T de Alta Frequência: Variante do modelo usada para análises mais complexas ou em Porta-Comum.
Tabela Resumo de Ganhos:
Configuração
Ganho de Tensão (Av​)
Impedância Entrada (Zi​)
Impedância Saída (Zo​)
Fonte-Comum
Alto ($>10$), Invertido
Alta ($R_G$)
Moderada ($R_D$)
Seguidor de Fonte
$\approx 1$, Não Invertido
Muito Alta
Baixa
Porta-Comum
Alto, Não Invertido
Baixa ($1/g_m$)
Moderada ($R_D$)

Capítulo 9: Resposta em Frequência de BJT e JFET
Até agora, as análises assumiram que os condensadores eram curto-circuitos ideais (análise de banda média). Na realidade, o ganho de um amplificador varia com a frequência. Este capítulo introduz os conceitos de largura de banda e frequências de corte.
9.1 Escalas Logarítmicas e Decibéis
Devido à vasta gama de frequências (Hz a MHz) e ganhos, utilizam-se escalas logarítmicas.
Decibel (dB): Unidade logarítmica de ganho.
Ganho de Potência: $G_{dB} = 10 \log_{10}(P_{out}/P_{in})$.
Ganho de Tensão: $G_{dB} = 20 \log_{10}(V_{out}/V_{in})$.
Ponto de Meia-Potência (-3dB): A frequência onde o ganho cai para $0,707$ do seu valor máximo. Neste ponto, a potência é reduzida para metade.12
9.2 Resposta em Baixa Frequência
A resposta em baixa frequência é dominada pelos condensadores de acoplamento ($C_S, C_C$) e bypass ($C_E$). Estes formam filtros passa-alto com as resistências do circuito. À medida que a frequência diminui, a reatância $X_C = 1/(2\pi f C)$ aumenta, causando queda de tensão e reduzindo o ganho.
Para cada condensador, calcula-se a frequência de corte:


$$f_L = \frac{1}{2\pi R_{eq} C}$$

Onde $R_{eq}$ é a resistência equivalente vista pelos terminais do condensador. A frequência de corte inferior do sistema é determinada pela maior destas frequências individuais.
9.3 Resposta em Alta Frequência
A resposta em alta frequência é limitada pelas capacidades parasitas internas do transístor ($C_{be}, C_{bc}$, etc.) e capacidades de cablagem ($C_{W}$). Estas capacidades, sendo muito pequenas, comportam-se como circuitos abertos em baixas frequências, mas a altas frequências atuam como curto-circuitos para a terra, desviando o sinal e reduzindo o ganho (filtros passa-baixo).
Efeito Miller:
Este fenómeno é crítico em altas frequências. Qualquer capacidade ligada entre a entrada e a saída de um amplificador inversor (como $C_{bc}$ num BJT CE) vê o seu efeito multiplicado pelo ganho do amplificador.
Capacidade Miller de Entrada: $C_{M_i} = (1 - A_v) C_f$.
Como $A_v$ é negativo e grande, $C_{M_i}$ torna-se enorme, reduzindo drasticamente a frequência de corte superior e a largura de banda.2
9.4 Largura de Banda e Produto Ganho-Banda
A largura de banda ($BW$) é a diferença entre a frequência de corte superior ($f_H$) e a inferior ($f_L$).


$$BW = f_H - f_L$$

Para um dado amplificador, o produto do Ganho pela Largura de Banda (GBW) tende a ser constante. Se aumentarmos o ganho através de feedback, a largura de banda diminui proporcionalmente.
Glossário do Capítulo 9
Gráfico de Bode: Representação gráfica da resposta em frequência utilizando escalas logarítmicas. Mostra a magnitude (em dB) e a fase em função da frequência.
Década: Um intervalo de frequências onde o valor final é 10 vezes o inicial (ex: $1\,kHz$ a $10\,kHz$). O ganho cai tipicamente $20\,dB/d\acute{e}cada$ após a frequência de corte.
Oitava: Intervalo onde a frequência duplica. O declive é $6\,dB/oitava$.
$f_T$ (Frequência de Transição): Frequência onde o ganho de corrente do transístor cai para 1 ($0\,dB$). É uma figura de mérito da velocidade do dispositivo.
Fórmulas Importantes:
Ganho Tensão dB: $20 \log_{10}(A_v)$.
Frequência de Corte RC: $f_c = \frac{1}{2\pi RC}$.
Capítulo 10: Amplificadores Operacionais
O Amplificador Operacional (Op-Amp) é um circuito integrado fundamental na eletrónica analógica. É um amplificador diferencial de ganho extremamente elevado.
10.1 O Básico do Op-Amp
O Op-Amp ideal possui:
Ganho de Tensão Infinito ($A_{OL} = \infty$).
Impedância de Entrada Infinita ($Z_{in} = \infty$): Não consome corrente nas entradas.
Impedância de Saída Nula ($Z_{out} = 0$).
Largura de Banda Infinita.
Possui dois terminais de entrada e um de saída:
Entrada Inversora (-): Sinais aplicados aqui aparecem invertidos ($180^{\circ}$) na saída.
Entrada Não-Inversora (+): Sinais aparecem em fase na saída.
10.2 Modos de Operação
Modo Diferencial: O amplificador amplifica a diferença de potencial entre as duas entradas ($V_d = V_+ - V_-$). A saída é $V_o = A_d V_d$.
Modo Comum: Se o mesmo sinal for aplicado a ambas as entradas (como ruído eletromagnético), um Op-Amp ideal rejeita-o completamente ($V_o = 0$). Na prática, existe um pequeno ganho de modo comum ($A_c$).
CMRR (Common-Mode Rejection Ratio): Mede a qualidade do Op-Amp em rejeitar ruído comum.

$$CMRR = 20 \log_{10} \frac{A_d}{A_c}$$

Valores típicos excedem $90\,dB$.13
10.3 Circuitos Básicos com Op-Amp
A operação em malha aberta é instável devido ao ganho excessivo. Utiliza-se quase sempre realimentação negativa para definir o ganho com precisão através de resistências externas.
Amplificador Inversor:
O sinal entra na porta inversora através de $R_1$, com realimentação por $R_f$.
Conceito de Terra Virtual: Como o ganho é infinito e $V_o$ é finito, a diferença de tensão entre as entradas deve ser zero. Como a entrada (+) está na terra, a entrada (-) está virtualmente na terra ($0\,V$).
Ganho: $A_v = -\frac{R_f}{R_1}$.
Amplificador Não-Inversor:
O sinal entra diretamente na porta não-inversora (+). A realimentação vai para a inversora.
Ganho: $A_v = 1 + \frac{R_f}{R_1}$.
Seguidor de Tensão (Buffer):
Caso especial do não-inversor onde $R_f = 0$ (curto) e $R_1 = \infty$ (aberto).
Ganho: $A_v = 1$. $V_o = V_{in}$.
Usado para isolar estágios devido à sua alta impedância de entrada e baixa de saída.14
Glossário do Capítulo 10
Slew Rate (SR): A taxa máxima de variação da tensão de saída por unidade de tempo ($V/\mu s$). Define a rapidez com que o Op-Amp pode responder a grandes variações de sinal.
Tensão de Offset de Entrada ($V_{IO}$): Pequena tensão DC necessária entre as entradas para forçar a saída a zero (corrige imperfeições de fabrico).
Corrente de Bias de Entrada: A corrente média que flui nos terminais de entrada (necessária para polarizar os transístores internos).
Terra Virtual: Um ponto no circuito que está a $0\,V$ mas não está fisicamente ligado à terra. Ocorre na entrada inversora do amplificador inversor.
Símbolo ASCII do Op-Amp:

Fragmento do código


      V+ (Alimentação Positiva)
|
|
|\ |
| \ |
| \ |
| - \__|_______ Saída (Vo)
| / |
| / |
| / |
|/ |
|
|
      V- (Alimentação Negativa)
Entradas à esquerda (+ e -)


Capítulo 11: Aplicações de Op-Amps
Este capítulo expande o uso de Op-Amps para processamento de sinal analógico e filtragem.
11.1 Circuitos de Soma e Subtração
Amplificador Somador: Uma extensão do amplificador inversor com múltiplas resistências de entrada ligadas ao ponto de terra virtual. A saída é a soma ponderada invertida das entradas.

$$V_o = - \left( \frac{R_f}{R_1}V_1 + \frac{R_f}{R_2}V_2 + \dots \right)$$

É fundamental em misturadores de áudio e conversores Digital-Analógico (DAC).
11.2 Integrador e Diferenciador
Substituindo resistências por condensadores na malha de realimentação, realizam-se operações de cálculo.
Integrador: Um condensador $C$ no lugar de $R_f$. A saída é proporcional ao integral do tempo da entrada.

$$V_o(t) = -\frac{1}{RC} \int V_{in}(t) dt$$

Uma entrada constante (degrau) gera uma rampa linear na saída.
Diferenciador: Um condensador na entrada. A saída é proporcional à taxa de variação da entrada. É suscetível a ruído de alta frequência.
11.3 Filtros Ativos
Os filtros ativos usam Op-Amps para criar filtros seletivos de frequência sem indutores (que são volumosos em baixas frequências) e com ganho.
Passa-Baixo: Deixa passar baixas frequências e atenua altas. O condensador é colocado em paralelo com $R_f$ no amplificador inversor.

$$f_c = \frac{1}{2\pi R_f C_f}$$
Passa-Alto: Deixa passar altas frequências. O condensador é colocado em série com a resistência de entrada.
Passa-Banda: Combinação de filtros para selecionar uma faixa específica.
11.4 Fontes Controladas e Instrumentação
Fontes de Corrente Controladas por Tensão: Usam o Op-Amp para manter uma corrente constante numa carga, independentemente da tensão da carga. Útil para controlo de processos.
Amplificador de Instrumentação: Uma configuração robusta de três Op-Amps que fornece altíssima impedância de entrada em ambos os terminais e um CMRR excecional. É o padrão para medir pequenos sinais de sensores em ambientes ruidosos.15
Glossário do Capítulo 11
Filtro Ativo: Circuito de filtragem que utiliza componentes ativos (Op-Amps) para fornecer ganho e isolamento, ao contrário dos filtros passivos (R, L, C) que apenas atenuam.
Comparador: Um Op-Amp usado em malha aberta para comparar duas tensões. A saída satura em $+V_{CC}$ ou $-V_{CC}$ indicando qual entrada é maior.
Conversor DAC (Digital-to-Analog): Circuito (frequentemente um somador ponderado) que converte bits digitais numa tensão analógica.
Histerese: Técnica usada em comparadores (Schmitt Trigger) onde se aplica realimentação positiva para criar limiares de comutação distintos para subida e descida, imunizando o circuito contra ruído.
Fórmulas:
Somador: $V_o = -(V_1 + V_2 + \dots)$ (para resistências iguais).
Integrador: Rampa de saída $V = -\frac{1}{RC} \times V_{in} \times t$.
