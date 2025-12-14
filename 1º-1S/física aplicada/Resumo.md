# Capítulo 1: Diodos Semicondutores
## 1.1 Fundamentos Físicos e Materiais
A eletrônica de estado sólido moderna fundamenta-se nas propriedades intrínsecas de materiais semicondutores. A transição histórica das válvulas a vácuo para os dispositivos de estado sólido foi impulsionada pela necessidade de miniaturização, eficiência energética e confiabilidade. A análise dos materiais revela que o comportamento elétrico é ditado pela estrutura atômica e pelas ligações covalentes.
Comparação de Materiais: Ge, Si e GaAs
A escolha do material base é crítica para o desempenho do dispositivo. Historicamente, o Germânio (Ge) foi o primeiro a ser amplamente utilizado devido à facilidade de refinamento. Contudo, a indústria migrou predominantemente para o Silício (Si) devido à sua estabilidade térmica superior e abundância. Mais recentemente, o Arsenieto de Gálio (GaAs) emergiu como material preferencial para aplicações de alta velocidade.1
A tabela abaixo compara as características fundamentais desses materiais, essenciais para compreender suas aplicações específicas:
Característica
Germânio (Ge)
Silício (Si)
Arsenieto de Gálio (GaAs)
Impacto no Projeto
Tensão de Joelho ($V_K$)
$\cong 0.3 \text{ V}$
$\cong 0.7 \text{ V}$
$\cong 1.2 \text{ V}$
Determina o ponto de condução inicial e a queda de tensão no circuito.
Mobilidade ($\mu_n$)
Alta
Média
Muito Alta
A alta mobilidade do GaAs (aprox. 5x a do Si) permite operações em frequências de micro-ondas.
Energy Gap ($E_g$)
$0.67 \text{ eV}$
$1.1 \text{ eV}$
$1.43 \text{ eV}$
Gaps maiores (GaAs) permitem emissão de luz visível e maior estabilidade térmica.
Portadores Intrínsecos ($n_i$)
$2.5 \times 10^{13}$
$1.5 \times 10^{10}$
$1.7 \times 10^6$
O Ge tem alta corrente de fuga devido ao alto $n_i$; o GaAs tem a menor corrente de fuga.

1
Níveis de Energia e Ligação Covalente
A condutividade é explicada pela teoria de bandas. Em isolantes, a banda de valência e a de condução estão separadas por um grande gap de energia ($E_g > 5 \text{ eV}$), impedindo o fluxo de elétrons. Em condutores, essas bandas se sobrepõem. Nos semicondutores, o gap é superável através de excitação térmica ou óptica. A unidade de energia utilizada é o elétron-volt (eV), onde $1 \text{ eV} = 1.6 \times 10^{-19} \text{ Joules}$, representando a energia necessária para mover um elétron através de uma diferença de potencial de 1 volt.1
A dopagem altera essas propriedades. Materiais tipo-n (dopados com impurezas pentavalentes como Antimônio) introduzem níveis doadores próximos à banda de condução. Materiais tipo-p (dopados com impurezas trivalentes como Boro) introduzem níveis aceitadores próximos à banda de valência. Isso reduz a energia necessária para a condução, permitindo o controle preciso da resistividade do material.1
## 1.2 O Diodo Semicondutor: Operação e Modelagem Matemática
A junção pn é o bloco construtivo fundamental. Sem polarização externa, forma-se uma região de depleção devido à difusão de portadores majoritários, criando uma barreira de potencial.
A Equação de Shockley e Análise Térmica
O comportamento da corrente no diodo não é linear. A equação de Shockley descreve a corrente $I_D$ em função da tensão aplicada $V_D$ e da temperatura:

$$I_D = I_s (e^{V_D/nV_T} - 1)$$
Onde a tensão térmica $V_T$ é definida por:


$$V_T = \frac{kT}{q}$$

Com $k = 1.38 \times 10^{-23} \text{ J/K}$ (constante de Boltzmann) e $T_K = T_C + 273^\circ$.
Esta relação exponencial implica que pequenas variações na tensão $V_D$ (após superar o potencial de barreira) resultam em grandes variações na corrente. O termo $-1$ é relevante apenas na polarização reversa, onde a corrente se aproxima de $-I_s$ (corrente de saturação reversa). A temperatura ($T$) desempenha um papel duplo: aumenta a geração de pares elétron-lacuna (aumentando $I_s$) e altera a tensão térmica $V_T$, exigindo considerações cuidadosas de projeto térmico para evitar fuga térmica.1
Resistências do Diodo
Diferente de um resistor linear, o diodo apresenta diferentes resistências dependendo do tipo de sinal aplicado:
Resistência DC ($R_D$): Definida pelo ponto de operação estático ($Q$). $R_D = V_D / I_D$. É baixa na região de condução e muito alta na reversa.
Resistência AC ($r_d$): Relevante para pequenos sinais que oscilam em torno do ponto Q. É derivada da inclinação da curva característica:

$$r_d = \frac{26 \text{ mV}}{I_D}$$

Esta equação demonstra que a resistência dinâmica é inversamente proporcional à corrente de polarização DC. Quanto maior a corrente DC, menor a resistência oferecida ao sinal AC.1
Resistência AC Média ($r_{av}$): Utilizada para grandes variações de sinal, calculada ponto a ponto na curva: $r_{av} = \Delta V_d / \Delta I_d$.
## 1.3 Capacitância e Tempos de Recuperação
O diodo não é um dispositivo ideal de comutação instantânea.
Capacitância de Transição ($C_T$): Dominante na polarização reversa, causada pela largura variável da região de depleção, que age como um dielétrico entre as cargas. Isso permite o uso de diodos como varactores (capacitores controlados por tensão).
Capacitância de Difusão ($C_D$): Dominante na polarização direta, associada ao armazenamento de portadores minoritários injetados na junção.
Tempo de Recuperação Reverso ($t_{rr}$): É o tempo necessário para o diodo passar do estado de condução para o de bloqueio. Este parâmetro limita a frequência máxima de operação em circuitos de retificação e chaveamento.1
## 1.4 Diodos Especiais: Zener e LED
Diodo Zener: Projetado para operar na região de avalanche. A estabilidade da tensão Zener ($V_Z$) é parametrizada pelo coeficiente de temperatura ($T_C$), que pode ser positivo ou negativo dependendo da tensão de ruptura. A equação $T_C = (\Delta V_Z / V_Z) / (T_1 - T_0) \times 100\%$ quantifica essa estabilidade, essencial para fontes de referência de precisão.1
LED (Diodo Emissor de Luz): A cor da luz emitida depende do gap de energia do material ($E_g$). Ao contrário do Si e Ge, onde a recombinação gera calor (fônons), em materiais como GaAsP, a recombinação gera fótons. A tensão direta dos LEDs varia conforme o material (e cor), sendo tipicamente superior à dos diodos de retificação.1
# Capítulo 2: Aplicações de Diodos
## 2.1 Análise de Carga e Pontos de Operação
A análise de circuitos com diodos exige determinar se o dispositivo está conduzindo ou bloqueado. A "reta de carga" é uma ferramenta gráfica poderosa que sobrepõe a equação linear do circuito externo à curva característica não linear do dispositivo. A interseção define o Ponto Quiescente (Ponto Q).
Para um circuito série simples com fonte $E$ e resistência $R$, a reta de carga intercepta o eixo vertical em $I_D = E/R$ (diodo em curto) e o eixo horizontal em $V_D = E$ (diodo aberto). Embora precisa, a análise gráfica é frequentemente substituída por modelos simplificados (modelo de queda constante $V_K$) para agilizar o projeto sem perda significativa de precisão em aplicações de grande sinal.1
## 2.2 Retificação: A Conversão AC-DC
A retificação explora a unidirecionalidade do diodo. A eficiência da conversão é medida pelo nível DC da tensão de saída em relação ao pico da entrada AC ($V_m$).
Análise Comparativa de Retificadores
Tipo de Retificador
Tensão DC de Saída (Vdc​)
Frequência de Ondulação
Tensão de Pico Inversa (PIV)
Eficiência de Tensão
Meia Onda
$0.318 V_m$
$f_{in}$
$\ge V_m$
Baixa (utiliza apenas 50% do ciclo)
Onda Completa (Ponte)
$0.636 V_m$
$2f_{in}$
$\ge V_m$
Alta (utiliza 100% do ciclo)
Onda Completa (Trafo Central)
$0.636 V_m$
$2f_{in}$
$\ge 2V_m$
Alta, mas exige transformador maior

1
A diferença de fator 2 no PIV entre a ponte e o transformador com tap central é um fator crucial de design. Em altas tensões, a ponte é preferível para reduzir as exigências de especificação dos diodos.
## 2.3 Processamento de Sinal: Ceifadores e Grampeadores
Além da retificação de potência, diodos são usados para modelar sinais.
Ceifadores (Clippers)
Configurações série ou paralelo que limitam a excursão do sinal. A análise requer a determinação da tensão de transição onde o diodo muda de estado. Fontes DC auxiliares podem ser usadas para deslocar o nível de ceifamento. A análise precisa deve incluir a queda $V_K$ do diodo, que "suaviza" o corte ideal, arredondando as bordas da forma de onda ceifada.1
Grampeadores (Clampers)
Estes circuitos deslocam o nível DC do sinal sem alterar sua forma de onda (pico-a-pico). O princípio de operação baseia-se na carga e descarga de um capacitor.
Mecanismo: Durante o semiciclo em que o diodo conduz, o capacitor carrega-se rapidamente para a tensão de pico da entrada (menos $V_K$).
Constante de Tempo: Durante o semiciclo de não condução, o capacitor deve manter sua carga. Para isso, a constante de tempo de descarga $\tau = RC$ deve ser muito maior que o período do sinal ($T$). A regra prática é $5\tau \gg T/2$, garantindo que o capacitor atue como uma bateria temporária, fornecendo o deslocamento DC necessário.1
## 2.4 Multiplicadores de Tensão e Regulação Zener
Multiplicadores: Cascatas de circuitos grampeadores e retificadores permitem gerar tensões DC muito altas (dobradores, triplicadores) a partir de transformadores de baixa tensão, essenciais em aplicações como tubos de raios catódicos e equipamentos de alta tensão de baixa corrente.1
Regulação Zener: O Zener atua como um regulador shunt. A análise do circuito Zener envolve dois estados possíveis: "ligado" (regulação ativa) ou "desligado" (tensão insuficiente). A potência dissipada pelo Zener ($P_Z = V_Z I_Z$) é crítica; se a corrente de carga $I_L$ diminui, a corrente no Zener $I_Z$ aumenta para manter a queda constante no resistor série, arriscando sobreaquecimento.
# Capítulo 3: Transistores de Junção Bipolar (BJTs)
## 3.1 Estrutura e Operação do Transistor
O BJT é um dispositivo controlado por corrente de três camadas (npn ou pnp). A operação na região ativa requer que a junção Base-Emissor (BE) seja diretamente polarizada e a junção Base-Coletor (BC) seja reversamente polarizada.
A física subjacente envolve a injeção de portadores do emissor para a base. Como a base é muito fina e levemente dopada, a maioria desses portadores não se recombina na base, mas difunde-se até a região de depleção da junção BC, onde o campo elétrico reverso os varre para o coletor.
As correntes são estritamente relacionadas:


$$I_E = I_C + I_B$$

Como a recombinação na base é mínima, $I_C \cong I_E$, e $I_B$ é uma fração muito pequena da corrente total.1
## 3.2 Parâmetros Alfa e Beta
A eficiência do transistor é descrita por dois parâmetros adimensionais fundamentais:
Alfa ($\alpha_{dc}$): Relaciona a corrente de coletor com a de emissor na configuração base-comum.

$$\alpha_{dc} = \frac{I_C}{I_E}$$

Idealmente $\alpha = 1$, mas na prática varia entre 0.90 e 0.998. A corrente de coletor inclui uma componente de fuga minoritária ($I_{CBO}$), tal que $I_C = \alpha I_E + I_{CBO}$.1
Beta ($\beta_{dc}$): Relaciona a corrente de coletor com a de base na configuração emissor-comum, sendo o parâmetro de ganho de corrente mais importante para amplificadores.

$$\beta_{dc} = \frac{I_C}{I_B}$$

As relações de conversão são vitais para a análise:

$$\alpha = \frac{\beta}{\beta + 1} \quad \text{e} \quad \beta = \frac{\alpha}{1 - \alpha}$$

.1
A corrente de fuga na configuração emissor-comum ($I_{CEO}$) é muito maior que na base-comum ($I_{CBO}$) devido ao efeito amplificador do transistor sobre a própria corrente de fuga: $I_{CEO} = I_{CBO} / (1 - \alpha) \cong \beta I_{CBO}$.1
## 3.3 Configurações e Características
Cada configuração oferece impedâncias e ganhos distintos, adequando-se a diferentes etapas de um sistema:
Configuração
Impedância de Entrada (Zi​)
Impedância de Saída (Zo​)
Ganho de Tensão (Av​)
Ganho de Corrente (Ai​)
Aplicação Típica
Base Comum
Muito Baixa ($\Omega$)
Muito Alta ($M\Omega$)
Alto
$< 1$
Alta frequência, RF
Emissor Comum
Média ($k\Omega$)
Média ($k\Omega$)
Alto
Alto ($\beta$)
Amplificação Geral
Coletor Comum
Alta ($k\Omega - M\Omega$)
Baixa ($\Omega$)
$\approx 1$
Alto
Casamento de Impedância (Buffer)

1
Limites de Operação
A operação segura é delimitada pela curva de dissipação de potência máxima ($P_{C_{max}} = V_{CE}I_C$), que forma uma hipérbole no gráfico de saída. Operar acima desta curva, ou exceder $V_{CEO}$ (tensão de ruptura) ou $I_{C_{max}}$, resulta na destruição do dispositivo.
# Capítulo 4: Polarização DC - BJTs
## 4.1 A Importância da Estabilidade do Ponto Q
O objetivo da polarização é estabelecer um ponto de operação (Q) estável na região ativa linear, permitindo excursão simétrica do sinal AC. A instabilidade surge porque os parâmetros do transistor, especialmente $\beta$ e $V_{BE}$, são sensíveis à temperatura e variam entre componentes do mesmo lote.
## 4.2 Análise de Circuitos de Polarização
Polarização Fixa
A corrente de base é fixada por $R_B$:


$$I_B = \frac{V_{CC} - V_{BE}}{R_B}$$

Esta configuração é altamente instável. Como $I_C = \beta I_B$, qualquer variação em $\beta$ (por temperatura ou substituição do transistor) altera diretamente $I_C$, movendo o ponto Q perigosamente em direção à saturação ou corte. O fator de estabilidade é péssimo: $S(I_{CO}) = \beta + 1$.1
Polarização Estabilizada no Emissor
A introdução de um resistor de emissor ($R_E$) cria uma realimentação negativa DC crucial.
Mecanismo: Se $I_C$ aumenta (devido a temperatura, por exemplo), a tensão em $R_E$ ($V_E = I_E R_E$) aumenta. Como $V_{BE} = V_B - V_E$, o aumento de $V_E$ reduz $V_{BE}$, o que por sua vez reduz $I_B$ e traz $I_C$ de volta ao valor original.
Equação: $I_B = (V_{CC} - V_{BE}) / (R_B + (\beta + 1)R_E)$. O termo $(\beta + 1)R_E$ reflete a impedância refletida do emissor para a base, tornando o circuito menos dependente de $\beta$.1
Divisor de Tensão (Voltage-Divider)
Esta é a configuração padrão da indústria para estabilidade. A tensão de base $V_B$ é fixada por um divisor resistivo ($R_1, R_2$).
Método Exato: Utiliza o equivalente de Thévenin na base ($R_{Th}, E_{Th}$).
Método Aproximado: Válido se a impedância de entrada vista na base for muito maior que o resistor do divisor ($\beta R_E \ge 10 R_2$). Neste caso, $V_B \cong R_2 V_{CC} / (R_1 + R_2)$. Isso desacopla quase totalmente o ponto Q do ganho $\beta$ do transistor.1
Realimentação de Tensão (Collector Feedback)
Conecta o resistor de base ao coletor. Se $I_C$ aumenta, $V_C$ diminui, reduzindo a corrente de base. Isso fornece estabilidade tanto para variações de $\beta$ quanto para variações na carga.
## 4.3 Fatores de Estabilidade ($S$)
A estabilidade é quantificada matematicamente pela sensibilidade de $I_C$ a variações nos parâmetros de instabilidade. O objetivo do projeto é minimizar esses fatores (idealmente para 1).
$S(I_{CO}) = \Delta I_C / \Delta I_{CO}$: Mede a amplificação da corrente de fuga. Para o divisor de tensão, este fator é significativamente reduzido em comparação à polarização fixa:

$$S(I_{CO}) = \frac{(\beta + 1)(1 + R_{Th}/R_E)}{1 + \beta + R_{Th}/R_E}$$

.1
$S(V_{BE})$: Crítico para variações de temperatura ($V_{BE}$ cai -2.5 mV/°C).
$S(\beta)$: Crítico para trocas de componentes.
## 4.4 Transistores de Chaveamento
Em circuitos digitais, o BJT alterna entre corte e saturação. A velocidade é limitada por capacitâncias parasitas.
$t_{on}$ (Tempo de Ligação): Soma do tempo de atraso ($t_d$) e tempo de subida ($t_r$).
$t_{off}$ (Tempo de Desligamento): Soma do tempo de armazenamento ($t_s$) e tempo de descida ($t_f$). O $t_s$ é o tempo necessário para remover portadores saturados da base, sendo frequentemente o fator limitante na velocidade de chaveamento.1
# Capítulo 5: Análise AC de BJTs
## 5.1 Modelagem de Pequenos Sinais
Para analisar a resposta AC, o transistor é linearizado em torno do ponto Q. As fontes DC são "zeradas" (aterradas). Dois modelos dominam a análise:
O Modelo $r_e$
Baseia-se no comportamento físico do diodo emissor. O parâmetro central é a resistência dinâmica do emissor:


$$r_e = \frac{26 \text{ mV}}{I_E}$$

Este modelo é intuitivo e conecta diretamente as condições de polarização DC ($I_E$) com o ganho AC. A impedância de entrada na base é $\beta r_e$, refletindo a amplificação da resistência vista pela fonte.1
O Modelo Híbrido ($\pi$)
Utiliza parâmetros h ($h_{ie}, h_{fe}, h_{re}, h_{oe}$) frequentemente encontrados em datasheets.
$h_{ie} \cong \beta r_e$ (Impedância de entrada)
$h_{fe} \cong \beta_{ac}$ (Ganho de corrente direto)
$h_{oe} = 1/r_o$ (Admitância de saída)
As equações de conversão (Página 2 do snippet) permitem transitar entre o modelo $r_e$ e o híbrido, garantindo flexibilidade na análise.
## 5.2 Análise Comparativa de Topologias AC
Emissor Comum (CE)
Ganho de Tensão ($A_v$): $A_v = -R_C / r_e$ (para polarização fixa). O sinal negativo indica inversão de fase de 180°. Se $r_e$ for pequeno, o ganho pode ser muito alto (ex: centenas).
Efeito de $r_o$: A resistência de saída do transistor ($r_o$) aparece em paralelo com $R_C$, reduzindo ligeiramente o ganho: $A_v = -(R_C |
| r_o) / r_e$.1
Emissor Comum com $R_E$ (Com e Sem Bypass)
Com Capacitor de Bypass ($C_E$): Em frequências AC, $R_E$ é curto-circuitado. O ganho é alto ($A_v \cong -R_C/r_e$).
Sem Bypass: O resistor $R_E$ aparece na análise AC. Isso causa realimentação negativa AC. A impedância de entrada aumenta drasticamente para $Z_b \cong \beta(r_e + R_E)$, mas o ganho de tensão cai para $A_v \cong -R_C / R_E$. Essa troca (trade-off) é usada para aumentar a linearidade e a largura de banda em troca de ganho.1
Seguidor de Emissor (CC)
A tensão de saída no emissor segue a tensão da base.
Ganho: $A_v \cong 1$.
Impedância: Transforma alta impedância de entrada em baixa impedância de saída. Essencial para isolar estágios de amplificação (buffer). A impedância de saída é $Z_o \cong r_e + (R_{sig}/\beta)$, mostrando como a impedância da fonte é "dividida" pelo ganho do transistor.1
Base Comum (CB)
Características: Baixíssima impedância de entrada ($Z_i \cong r_e$) e ganho de tensão positivo (sem inversão). Usada em amplificadores de RF para casar impedâncias de cabos coaxiais (50-75 $\Omega$).
## 5.3 Sistemas em Cascata
Na conexão em cascata, o ganho total é o produto dos ganhos individuais. No entanto, o carregamento (loading effect) é crítico: a impedância de entrada do segundo estágio atua como carga para o primeiro estágio, reduzindo seu ganho efetivo. A análise deve ser feita estágio a estágio, calculando $Z_i$ e $Z_o$ carregados.
Conexão Darlington e Par de Realimentação
Darlington: Dois transistores em cascata CC. O ganho de corrente é superlativo ($\beta_D = \beta_1 \beta_2$). A impedância de entrada é altíssima, mas a tensão $V_{BE}$ é dupla ($1.4 \text{ V}$), exigindo maior tensão de acionamento.
Cascode: Combinação CE-CB. Oferece alta impedância de saída e largura de banda estendida, minimizando o efeito Miller (capacitância parasita).1
# Capítulo 6: Transistores de Efeito de Campo (FETs)
## 6.1 Distinções Fundamentais: BJT vs. FET
Enquanto o BJT é um dispositivo controlado por corrente ($I_C = \beta I_B$), o FET é controlado por tensão ($V_{GS}$ controla $I_D$). Isso implica que a corrente de entrada no gate é virtualmente zero ($I_G \cong 0$), resultando em impedâncias de entrada extremamente altas ($M\Omega$ a $G\Omega$).
## 6.2 JFET (Junction FET)
O controle da corrente de dreno ($I_D$) é feito pela variação da largura da região de depleção do canal através da tensão reversa $V_{GS}$.
Equação de Shockley para FET: A relação de transferência não é linear (como no BJT), mas quadrática:

$$I_D = I_{DSS} \left( 1 - \frac{V_{GS}}{V_P} \right)^2$$

Onde $I_{DSS}$ é a corrente máxima de saturação e $V_P$ é a tensão de pinch-off (bloqueio). Esta não-linearidade torna a análise gráfica ou o uso de equações quadráticas indispensáveis.1
## 6.3 MOSFETs: A Evolução Isolada
O Metal-Oxide-Semiconductor FET introduz uma camada isolante ($\text{SiO}_2$) entre o gate e o canal.
D-MOSFET (Depleção): Pode operar nos modos de depleção (reduzindo $I_D$) e intensificação (aumentando $I_D$ acima de $I_{DSS}$). A equação de Shockley ainda se aplica.
E-MOSFET (Intensificação): Normalmente desligado. Requer uma tensão de gate $V_{GS}$ maior que um limiar ($V_T$ ou $V_{GS(Th)}$) para formar o canal. A equação muda para:

$$I_D = k (V_{GS} - V_{GS(Th)})^2$$

Onde $k$ é uma constante de condutividade determinada pela geometria e materiais do dispositivo. Esta é a base da tecnologia CMOS usada em processadores digitais.1
VMOS/UMOS: Estruturas verticais que permitem maiores correntes e potências, superando as limitações de corrente dos FETs planos tradicionais.
# Capítulo 7: Polarização de FETs
## 7.1 Estratégias de Polarização
A polarização de FETs apresenta desafios únicos devido à variação quadrática.
Polarização Fixa
Utiliza uma bateria $V_{GG}$ para fixar o gate.


$$V_{GS} = -V_{GG}$$

Simples, mas requer duas fontes. A corrente de dreno é calculada inserindo este $V_{GS}$ fixo na equação de Shockley.1
Autopolarização (Self-Bias)
Elimina a fonte $V_{GG}$ usando um resistor de fonte $R_S$. A corrente de dreno fluindo por $R_S$ eleva a tensão da fonte $V_S$. Como $V_G = 0$, $V_{GS} = -I_D R_S$.
Análise Gráfica: A solução é a interseção entre a curva parabólica de transferência do dispositivo e a reta definida por $V_{GS} = -I_D R_S$. Esta técnica de feedback negativo estabiliza o ponto Q contra variações nos parâmetros do dispositivo.1
Divisor de Tensão
Fixa $V_G$ em um valor positivo. A equação da malha de entrada torna-se:


$$V_{GS} = V_G - I_D R_S$$

Esta configuração oferece a melhor estabilidade e permite ajustar o ponto Q independentemente das variações de $I_{DSS}$ e $V_P$ entre dispositivos.
## 7.2 Curva Universal de Polarização
Para simplificar o projeto, normalizam-se as equações usando parâmetros $m$ e $M$ (relacionados a $V_P$ e $I_{DSS} R_S$). A Curva Universal JFET permite resolver visualmente qualquer configuração de polarização (fixa, auto, divisor) em um único gráfico normalizado, facilitando a comparação de soluções e o design.1
# Capítulo 8: Amplificadores FET
## 8.1 Transcondutância e Modelo AC
A amplificação no FET é descrita pela transcondutância ($g_m$), que mede a eficiência da tensão de gate em controlar a corrente de dreno:
$$g_m = \frac{\Delta I_D}{\Delta V_{GS}}$$Diferente do $\beta$ do BJT que é relativamente constante, o $g_m$ varia com o ponto de polarização:

$$g_m = g_{m0} \left( 1 - \frac{V_{GS}}{V_P} \right)$$

O valor máximo $g_{m0}$ ocorre quando $V_{GS} = 0$. O modelo AC equivalente do FET é mais simples que o do BJT: uma impedância de entrada aberta (infinita) e uma fonte de corrente $g_m V_{gs}$ na saída em paralelo com uma resistência de saída $r_d$.1
## 8.2 Análise de Configurações FET
Fonte Comum (Common-Source)
Análoga ao Emissor Comum.
Impedância de Entrada: Altíssima ($Z_i = R_G$).
Ganho: $A_v = -g_m (R_D |
| r_d)$.
Bypass: Se $R_S$ não tiver bypass, o ganho cai drasticamente para $A_v \cong -g_m R_D / (1 + g_m R_S)$ devido à realimentação negativa local, mas a linearidade melhora.1
Seguidor de Fonte (Common-Drain)
Análoga ao Seguidor de Emissor.
Ganho: Menor que 1 ($A_v \cong g_m R_S / (1 + g_m R_S)$).
Impedância de Saída: Baixa ($Z_o \cong R_S |
| 1/g_m$). Ideal para casar a alta impedância de entrada do FET com cargas de baixa impedância.
Porta Comum (Common-Gate)
Análoga à Base Comum.
Impedância de Entrada: Baixa ($Z_i \cong 1/g_m$).
Aplicação: Amplificadores de alta frequência e osciladores, onde a baixa impedância de entrada é útil para casamento com linhas de transmissão de 50 ohms.
# Capítulo 9: Resposta de Frequência de BJT e JFET
## 9.1 A Escala Logarítmica e Decibéis
A resposta de frequência abrange faixas vastas (de Hz a MHz), tornando a escala linear impraticável. A escala logarítmica e o uso de decibéis (dB) são fundamentais.
Ganho de Potência: $G_{dB} = 10 \log_{10} (P_2/P_1)$
Ganho de Tensão: $G_{dB} = 20 \log_{10} (V_2/V_1)$
O conceito de frequência de corte (half-power frequency) é definido onde o ganho cai 3 dB (ou a potência cai para 50%) em relação ao ganho médio.1
## 9.2 Resposta em Baixa Frequência
Em baixas frequências, os capacitores externos ($C_S, C_C, C_E$) determinam a resposta. Eles não podem mais ser considerados curto-circuitos.
A reatância $X_C = 1/2\pi fC$ aumenta conforme a frequência cai.
Cada capacitor forma um filtro passa-alta RC com a resistência equivalente vista por ele.
A frequência de corte inferior ($f_L$) é determinada pelo capacitor que introduz o polo mais alto. Exemplo para BJT na entrada: $f_{L_s} = 1 /$. O sistema global é limitado pelo "elo mais fraco" (maior $f_L$).1
## 9.3 Efeito Miller e Alta Frequência
Em altas frequências, as capacitâncias parasitas internas (entre terminais) e de fiação dominam, curto-circuitando o sinal para o terra.
Efeito Miller: A capacitância de feedback entre entrada e saída (ex: $C_{bc}$ no BJT ou $C_{gd}$ no FET) é amplificada pelo ganho do estágio ($A_v$). A capacitância de entrada equivalente Miller é:

$$C_{M_i} = (1 - A_v) C_f$$

Este efeito reduz drasticamente a largura de banda, pois uma pequena capacitância parasita de poucos pF pode aparecer como centenas de pF na entrada, derrubando a frequência de corte superior ($f_H$).
Produto Ganho-Largura de Banda ($f_T$): Para BJTs, $f_T = \beta_{mid} f_\beta$. Este parâmetro é uma figura de mérito constante; aumentar o ganho reduz a largura de banda proporcionalmente.1
## 9.4 Teste de Onda Quadrada
Uma técnica prática para diagnosticar a resposta de frequência sem varredura completa.
Tilt (Inclinação): A queda no topo da onda quadrada indica má resposta em baixa frequência ($f_{L_o}$ inadequado).
Tempo de Subida ($t_r$): Bordas arredondadas indicam má resposta em alta frequência. A relação é direta: $f_{H} = 0.35 / t_r$. Isso permite estimar a largura de banda de um amplificador ou osciloscópio observando apenas a resposta ao degrau.1
# Capítulo 10: Amplificadores Operacionais
## 10.1 O Ideal vs. Real
O Amplificador Operacional (Op-Amp) é a pedra angular da eletrônica analógica.
Ideal: Ganho de tensão infinito ($A = \infty$), impedância de entrada infinita ($Z_i = \infty$), impedância de saída zero ($Z_o = 0$) e largura de banda infinita.
Conceito de Terra Virtual: Em circuitos com realimentação negativa, a diferença de potencial entre as entradas inversora e não-inversora tende a zero. Como a corrente de entrada é zero, isso simplifica drasticamente a análise de circuitos complexos.
## 10.2 Modos e Parâmetros de Desempenho
CMRR (Razão de Rejeição de Modo Comum): Mede a capacidade do Op-Amp de amplificar a diferença entre as entradas ($A_d$) enquanto rejeita sinais comuns a ambas ($A_c$, como ruído eletromagnético).

$$\text{CMRR} = 20 \log_{10} (A_d / A_c)$$

Um CMRR alto é vital em instrumentação biomédica e industrial.
Slew Rate (SR): A taxa máxima de variação da tensão de saída ($\Delta V_o / \Delta t$). Limita a capacidade do Op-Amp de responder a sinais de grande amplitude e alta frequência sem distorção.
## 10.3 Circuitos Básicos de Op-Amp
A análise baseia-se nas regras de ouro (corrente de entrada zero, diferença de tensão zero).
Inversor: $V_o = -(R_f / R_1) V_1$. Ganho negativo ajustável.
Não-Inversor: $V_o = (1 + R_f / R_1) V_1$. Ganho sempre positivo e $\ge 1$. A impedância de entrada é altíssima (próxima à do próprio Op-Amp).
Seguidor Unitário: $V_o = V_1$. Buffer perfeito com ganho 1.1
# Capítulo 11: Aplicações de Amplificadores Operacionais
## 11.1 Computação Analógica
O Op-Amp permite realizar operações matemáticas em tempo real.
Somador: Uma extensão do amplificador inversor onde múltiplas entradas são somadas, cada uma ponderada por seu resistor de entrada.

$$V_o = - \left( \frac{R_f}{R_1}V_1 + \frac{R_f}{R_2}V_2 + \dots \right)$$

Utilizado em mixagem de áudio e computadores analógicos.
Integrador: Substituindo o resistor de feedback por um capacitor, a corrente constante (gerada pela tensão de entrada em $R_1$) carrega o capacitor linearmente. A saída é a integral do tempo da entrada: $v_o(t) = -(1/R_1 C_1) \int v_1 dt$. Essencial para converter ondas quadradas em triangulares e em circuitos de controle PID.
## 11.2 Filtros Ativos
Os Op-Amps eliminam a necessidade de indutores (que são volumosos e caros em baixas frequências) para construir filtros.
Filtro Passa-Baixa: Um capacitor em paralelo com o resistor de feedback no amplificador inversor reduz o ganho em altas frequências. A frequência de corte é $f_{oH} = 1 / 2\pi R_1 C_1$.
Filtro Passa-Alta: Um capacitor em série com a entrada bloqueia DC e baixas frequências.
A combinação destes permite criar filtros passa-banda para seleção de canais em telecomunicações, oferecendo ganho e filtragem em um único estágio, algo impossível com filtros passivos RLC.
