# Capítulo 1: Díodos Semicondutores

## 1.1 Introdução
O estudo da eletrónica moderna fundamenta-se na física dos materiais semicondutores. A transição histórica das válvulas de vácuo para os dispositivos de estado sólido marcou uma revolução tecnológica, impulsionada pela miniaturização, eficiência energética e fiabilidade. O diodo semicondutor representa a unidade funcional mais elementar desta nova era, servindo como o bloco construtor para transistores e circuitos integrados complexos. A compreensão do seu funcionamento exige uma análise detalhada das propriedades atómicas e térmicas dos materiais envolvidos.

## 1.2 Materiais Semicondutores: Ge, Si e GaAs
Os semicondutores definem-se pela sua condutividade elétrica, que se situa entre a dos condutores metálicos e a dos isoladores. A escolha do material base é crítica para as características finais do dispositivo.

* **Germânio (Ge):** Historicamente, foi o primeiro material a ser amplamente explorado na produção de transístores e díodos. A sua baixa tensão de joelho ($V_K \cong 0,3\text{ V}$) torna-o atrativo para aplicações de baixa tensão, mas a sua elevada sensibilidade térmica e corrente de fuga (corrente de saturação inversa) limitam a sua aplicação em ambientes de alta temperatura ou circuitos de precisão modernos.
* **Silício (Si):** Atualmente, é o material dominante na indústria. A sua abundância na crosta terrestre e a capacidade de formar óxidos estáveis ($SiO_2$) para isolamento em circuitos integrados são vantagens inigualáveis. O silicio apresenta uma tensão de joelho superior ($V_K \cong 0,7\text{ V}$), o que lhe confere maior imunidade ao ruído e maior estabilidade térmica em comparação com o germânio.
* **Arsenieto de Gálio (GaAs):** Este composto semicondutor destaca-se pela mobilidade dos seus eletrões, que é significativamente superior à do Si ou Ge. Esta característica permite que dispositivos de GaAs operem a frequências muito mais elevadas (gama dos GHz), sendo essenciais em optoeletrónica e sistemas de comunicação de alta velocidade. A sua tensão de joelho é a mais elevada dos três ($V_K \cong 1,2\text{ V}$), refletindo um maior gap de energia.

| Parâmetro | Germânio (Ge) | Silício (Si) | Arsenieto de Gálio (GaAs) |
| :--- | :--- | :--- | :--- |
| **Tensão de Joelho ($V_K$)** | $\cong 0,3\text{ V}$ | $\cong 0,7\text{ V}$ | $\cong 1,2\text{V}$ |
| **Estabilidade Térmica** | Baixa | Elevada | Muito Elevada |
| **Velocidade de Operação** | Média | Alta | Muito Alta |
| **Aplicação Principal** | Rádio AM, Detetores | CI, Eletrónica Geral | LEDs, Micro-ondas |

## 1.3 Ligação Covalente e Materiais Intrínsecos
A estrutura cristalina dos semicondutores puros (intrínsecos) é mantida por ligações covalentes. No silício e no germânio, átomos tetravalentes (4 eletrões de valência) partilham eletrões com quatro átomos vizinhos, formando uma rede estável.
A temperatura desempenha um papel crucial na condutividade. Ao contrário dos metais, que possuem um coeficiente de temperatura positivo (a resistência aumenta com a temperatura), os semicondutores possuem um coeficiente de temperatura negativo. O aumento da temperatura fornece energia térmica suficiente para quebrar ligações covalentes, libertando eletrões e criando "lacunas", aumentando assim a concentração de portadores de carga livres e diminuindo a resistência do material.

## 1.4 Níveis de Energia
A condução elétrica é explicada através da teoria das bandas de energia.
1.  **Banda de Valência:** Contém os eletrões que participam nas ligações covalentes e estão energeticamente presos à estrutura atómica.
2.  **Gap de Energia ($E_g$):** É a barreira energética proibida entre as bandas. Para um eletrão conduzir, ele deve ganhar energia suficiente ($W=QV$) para saltar este fosso.
    * No Silício, $E_g \approx 1,1\text{ eV}$.
    * No Germânio, $E_g \approx 0,67\text{ eV}$.
    * No GaAs, $E_g \approx 1,43\text{ eV}$.
3.  **Banda de Condução:** O nível energético onde os eletrões estão livres para se moverem sob a influência de um campo elétrico externo.

A unidade de energia utilizada é o eletrão-volt (eV), onde $1\text{ eV}=1,6 \times 10^{-19}\text{ Joules}$. A diferença nos valores de $E_g$ explica por que o GaAs é utilizado em LEDs (a energia libertada na recombinação cai no espectro visível) e por que o Ge é mais instável termicamente (menor energia necessária para gerar portadores térmicos indesejados).

## 1.5 Materiais Tipo-n e Tipo-p
Para tornar os semicondutores úteis, altera-se a sua condutividade através da dopagem (adição controlada de impurezas).

* **Materiais Tipo-n (Negativo):** Criam-se dopando o silicio com impurezas pentavalentes (Grupo V da tabela periódica), como Antimónio (Sb), Arsénio (As) ou Fósforo (P). Estes átomos formam quatro ligações covalentes com o silício, deixando o quinto eletrão fracamente ligado. Este eletrão torna-se um eletrão livre na banda de condução.
    * Portadores Maioritários: Eletrões.
    * Portadores Minoritários: Lacunas (geradas termicamente).
* **Materiais Tipo-p (Positivo):** Criam-se dopando com impurezas trivalentes (Grupo III), como Boro (B), Índio (In) ou Gálio (Ga). Com apenas três eletrões de valência, forma-se uma estrutura incompleta, criando uma vaga ou "lacuna" na rede covalente. Esta lacuna comporta-se como uma carga positiva móvel.
    * Portadores Maioritários: Lacunas.
    * Portadores Minoritários: Eletrões.

## 1.6 O Díodo Semicondutor e a Equação de Shockley
A união física de um material tipo-p e um tipo-n cria uma junção pn. Na ausência de polarização externa ($V_D=0\text{V}$), ocorre uma difusão inicial de portadores através da junção, criando uma região de depleção (ou carga espacial) isenta de portadores livres. Esta região gera uma barreira de potencial que impede a continuação da difusão.

A corrente através do díodo sob qualquer condição de polarização é descrita matematicamente pela equação de Shockley:
$$I_D=I_s(e^{V_D/nV_T}-1)$$

Onde:
* $I_s$: Corrente de saturação inversa (corrente de fuga), tipicamente na ordem dos nanoamperes ou microamperes. Esta corrente duplica aproximadamente a cada $10^\circ\text{C}$ de aumento na temperatura.
* $V_D$: Tensão aplicada aos terminais do díodo.
* $n$: Fator de idealidade (varia entre 1 e 2, dependendo das condições de fabrico e nível de corrente).
* $V_T$: Tensão térmica, dada por $V_T=\frac{kT}{q}$. À temperatura ambiente ($25^\circ\text{C}$ ou $298\text{K}$), $V_T \approx 26\text{ mV}$.
* $k$: Constante de Boltzmann ($1,38 \times 10^{-23}\text{ J/K}$).
* $T$: Temperatura absoluta em Kelvin ($T_K=T_C+273$).
* $q$: Carga do eletrão ($1,6 \times 10^{-19}\text{C}$).

**Polarização Inversa ($V_D < 0$):** O termo exponencial torna-se desprezável e $I_D \approx -I_s$. A região de depleção alarga-se, comportando-se como um condensador.
**Polarização Direta ($V_D > 0$):** O termo exponencial domina. Quando $V_D$ excede o potencial de barreira ($V_K$), a corrente cresce exponencialmente.

## 1.7 Ideal Versus Prático
A modelagem de circuitos exige simplificações.
* **Modelo Ideal:** O díodo é um interruptor perfeito. Fechado (curto-circuito, $0\text{ V}$) em polarização direta; Aberto (corrente nula) em polarização inversa.
* **Modelo Prático:** Inclui a queda de tensão da barreira. O díodo é modelado como uma fonte de tensão de $0,7\text{V}$ (para Si) em série com um interruptor ideal. A corrente só flui se a tensão da fonte externa for superior a $0,7\text{V}$.

## 1.8 Níveis de Resistência
A natureza não linear do díodo implica que a sua resistência não é um valor fixo (lei de Ohm simples $V=IR$ não se aplica diretamente como num resistor fixo), mas depende do ponto de operação.

1.  **Resistência DC ou Estática ($R_D$):** Utilizada quando se aplica uma tensão constante. É a resistência geométrica no ponto de operação Q.
    $$R_D = \frac{V_D}{I_D}$$
    Na região de condução, $R_D$ é baixa; na região inversa, $R_D$ é muito elevada (Megohms).
2.  **Resistência AC ou Dinâmica ($r_d$):** Utilizada quando um sinal alternado de pequena amplitude oscila em torno de um ponto Q. É definida pela tangente à curva característica no ponto Q.
    $$r_d = \frac{26\text{ mV}}{I_D} \quad (\text{à temperatura ambiente})$$
    Esta fórmula deriva da diferenciação da equação de Shockley. Quanto maior a corrente DC ($I_D$), menor a resistência dinâmica oferecida ao sinal AC.
3.  **Resistência AC Média ($r_{av}$):** Utilizada para grandes variações de sinal que percorrem uma secção considerável da curva característica. Calcula-se pela inclinação da reta secante entre os dois extremos da excursão do sinal.
    $$r_{av} = \frac{\Delta V_d}{\Delta I_d} \bigg|_{\text{ponto a ponto}}$$

## 1.9 Circuitos Equivalentes
Para simulação e análise manual precisa, utilizam-se circuitos equivalentes que combinam componentes lineares:
* **Equivalente Linear por Segmentos:** Inclui a barreira de potencial ($V_K$), a resistência média do corpo do semicondutor ($r_{av}$) e o díodo ideal. A tensão aos terminais durante a condução é $V_D=V_K+I_D~r_{av}$.
* **Equivalente Simplificado:** Despreza a resistência interna ($r_{av}=0$). O modelo resume-se a uma fonte de tensão de $0,7\text{ V}$ (Si) em série com um díodo ideal. Este é o modelo padrão para a maioria das análises de engenharia geral.

## 1.10 Capacitância de Transição e Difusão
O comportamento dinâmico do díodo é afetado por capacitâncias parasitas que limitam a frequência de operação.
* **Capacitância de Transição ($C_T$):** Predominante na polarização inversa. A região de depleção atua como um dielétrico entre as regiões p e n (placas condutoras). O aumento da tensão inversa alarga a região de depleção, diminuindo a capacitância ($C = \epsilon A/d$). Este efeito é explorado nos díodos Varicap (Capítulo 16).
* **Capacitância de Difusão ($C_D$):** Predominante na polarização direta. Resulta do armazenamento de portadores de carga minoritários injetados perto da junção. Esta capacitância é diretamente proporcional à corrente direta $I_D$ e limita a velocidade de comutação do díodo.

## 1.11 Tempo de Recuperação Inversa ($t_{rr}$)
Quando um díodo passa do estado de condução (ON) para o estado de corte (OFF) instantaneamente, a corrente não cai para zero de imediato. Existe um período transitório, $t_{rr}$, durante o qual a corrente inverte o sentido momentaneamente para remover os portadores de carga armazenados na junção.
* $t_{rr}=t_s+t_t$ onde $t_s$ é o tempo de armazenamento e $t_t$ é o tempo de transição.
* Em aplicações de alta frequência (comutação rápida), díodos com $t_{rr}$ muito baixo (como os Schottky) são essenciais.

## 1.12 Folhas de Especificações (Datasheets)
Os engenheiros devem interpretar parâmetros críticos fornecidos pelos fabricantes:
* $V_{F}$: Tensão direta a uma corrente específica.
* $I_R$: Corrente de fuga inversa a uma dada temperatura e tensão.
* $P_D$: Dissipação de potência máxima ($P_D = V_DI_D$).
* $V_{RRM}$: Tensão inversa de pico repetitiva (tensão de rutura).

## 1.15 Díodos Zener
O díodo Zener é projetado para operar na região de rutura (breakdown) inversa. Ao contrário dos díodos retificadores que se destruiriam nesta região, o Zener mantém uma tensão estável ($V_Z$) através de uma vasta gama de correntes ($I_{ZK}$ a $I_{ZM}$).
* **Mecanismos:** Rutura Zener (efeito de campo quântico, para $V_Z < 5\text{ V}$) e Rutura por Avalanche (multiplicação de portadores por impacto, para $V_Z > 5\text{ V}$).
* **Coeficiente de Temperatura ($T_C$):** Define a variação da tensão Zener com a temperatura:
    $$T_C = \frac{\Delta V_Z/V_Z}{T_1-T_O} \times 100\%/^\circ\text{C}$$
    Zeners abaixo de 5V têm $T_C$ negativo; acima de 5V têm $T_C$ positivo.

## 1.16 Díodos Emissores de Luz (LED)
Os LEDs emitem energia luminosa (fotões) durante a recombinação de eletrões e lacunas na polarização direta. A cor da luz depende do gap de energia ($E_g$) do material semicondutor utilizado (ex: GaAsP, GaP). Ao contrário dos díodos de retificação que dissipam energia como calor, os LEDs convertem essa energia em luz visível ou infravermelha. A tensão de operação típica varia entre $1,8\text{ V}$ e $4\text{ V}$, dependendo da cor e material.

# Capítulo 2: Aplicações de Díodos

## 2.1 Introdução
A análise de circuitos com diodos exige a determinação do estado (ON/OFF) do dispositivo. A regra fundamental é: substituir o díodo por um circuito aberto e verificar a polaridade da tensão resultante. Se o ânodo for mais positivo que o cátodo (por um valor superior a $V_K$), o díodo conduz.

## 2.2 Análise da Reta de Carga
A reta de carga é uma ferramenta gráfica que sobrepõe a restrição linear do circuito externo à curva característica não linear do díodo. A interseção define o Ponto Quiescente (Q) de operação ($I_{DQ}, V_{DQ}$).
* Equação da malha: $E - V_DI_D R = 0 \Rightarrow I_D = -\frac{1}{R}V_D + \frac{E}{R}$.
* Interseção no eixo vertical ($V_D=0$): $I_D=E/R$.
* Interseção no eixo horizontal ($I_D=0$): $V_D=E$.

## 2.3 Configurações de Díodos em Série
A corrente é constante em todo o circuito.
* **Análise:** Assume-se o estado dos díodos. Se a análise indicar uma corrente no sentido da seta do símbolo, a assunção "ON" é validada.
* **Lei das Malhas de Kirchhoff (KVL):** Essencial para determinar $V_o$. Em circuitos com díodos de Si, subtrai-se $0,7\text{ V}$ por cada díodo em condução na malha.

## 2.4 Configurações Paralelas e Série-Paralelo
Em paralelo, a tensão é a mesma.
* Se um diodo de Si ($0,7\text{ V}$) estiver em paralelo com um de Ge ($0,3\text{ V}$), o díodo de Ge entrará em condução primeiro e limitará a tensão a $0,3\text{ V}$. O díodo de Si nunca atingirá os $0,7\text{ V}$ necessários para ligar, comportando-se como um circuito aberto.

## 2.5 Portas Lógicas AND/OR
Díodos simples podem implementar lógica digital:
* **OR:** A saída segue o nível lógico alto se qualquer entrada for alta (díodo conduz).
* **AND:** A saída é alta apenas se todas as entradas forem altas. Se uma entrada for baixa ($0\text{V}$), o díodo correspondente conduz e "puxa" a saída para um nível baixo (aprox. $0,7\text{ V}$).

## 2.6 Entradas Sinusoidais; Retificação de Meia Onda
O processo de retificação converte AC em DC. Na meia onda, o díodo conduz apenas durante um semiciclo (positivo ou negativo) da entrada sinusoidal.
* **Valor Médio (DC):** O nível DC de saída é dado por:
    $$V_{dc}=0,318(V_m-V_K)$$
    Onde $V_m$ é o pico da onda de entrada e $V_K$ a queda no díodo.
* **PIV (Peak Inverse Voltage):** O díodo deve suportar, no mínimo, a tensão de pico $V_m$ quando está inversamente polarizado.

## 2.7 Retificação de Onda Completa
Utiliza ambos os semiciclos, duplicando a frequência de saída e melhorando a eficiência.
1.  **Ponte de Graetz (4 Díodos):** Durante o semiciclo positivo, dois díodos conduzem; no negativo, os outros dois conduzem. A tensão na carga é sempre pulsante positiva.
    $$V_{dc} = 0,636 (V_m - 2V_K)$$
    O PIV de cada díodo é aproximadamente $V_m$.
2.  **Transformador com Tomada Central (2 Díodos):** Exige um transformador especializado. Cada díodo conduz alternadamente. O PIV exigido é $2V_m$.

## 2.8 Ceifadores (Clippers)
Circuitos desenhados para limitar ou "ceifar" partes do sinal acima ou abaixo de um nível de referência, sem distorcer a forma de onda restante.
* **Ceifadores Série:** O díodo está em série com a carga.
* **Ceifadores Paralelo:** O díodo está em paralelo com a carga.
* **Nível de Referência:** Pode ser ajustado adicionando uma fonte DC ($V$) em série com o díodo. O corte ocorre em $V+V_K$.

## 2.9 Grampeadores (Clampers)
Deslocam a forma de onda verticalmente, adicionando-lhe uma componente DC, sem alterar a variação pico-a-pico do sinal.
* **Componentes:** Condensador, Díodo, Resistência.
* **Funcionamento:** Durante o intervalo em que o díodo conduz, o condensador carrega-se rapidamente até à tensão de pico da entrada (menos $V_K$). Durante o intervalo em que o díodo corta, o condensador atua como uma bateria em série com a fonte de sinal. A constante de tempo $RC$ deve ser suficientemente grande ($\tau \gg T/2$) para impedir a descarga do condensador durante o ciclo de não-condução.

## 2.10 Redes com Fontes DC e AC
Utiliza-se o Teorema da Sobreposição ou a linearização do díodo no ponto Q. O sinal AC vê a resistência dinâmica $r_d$, enquanto a polarização DC vê a resistência estática $R_D$.

## 2.11 Díodos Zener
Funcionam como reguladores de tensão.
* **Modelo:** Fonte $V_Z$ em série com resistência dinâmica $r_z$.
* **Análise:** Verifica-se se a tensão de entrada é suficiente para ligar o Zener ($V_{in} \ge V_Z$). Se ligado, a tensão na carga paralela é fixada em $V_Z$.
* **Potência:** A corrente máxima $I_{ZM}$ é limitada pela potência máxima: $P_{Zmax} = V_Z I_{ZM}$.

## 2.12 Circuitos Dobradores de Tensão
Geram altas tensões DC a partir de baixas tensões AC sem transformadores elevadores de alta tensão (que seriam volumosos).
* **Dobrador de Meia Onda:** Um condensador carrega no semiciclo negativo até $V_m$; no semiciclo positivo, a fonte soma-se ao condensador, carregando um segundo condensador até $2V_m$.
* **Triplicadores e Quadruplicadores:** Extensões lógicas utilizando mais andares de diodo-condensador em cascata.

# Capítulo 3: Transistores de Junção Bipolar (BJTs)

## 3.1 Introdução
O transistor bipolar é um dispositivo de três terminais capaz de amplificar corrente, tensão ou potência. É a base da eletrónica analógica e digital clássica.

## 3.2 Construção do Transistor
Consiste em três camadas semicondutoras dopadas alternadamente:
* **npn:** Uma camada tipo-p fina (Base) entre duas camadas tipo-n (Emissor e Coletor).
* **pnp:** Uma camada tipo-n fina entre duas camadas tipo-p.
A junção Emissor-Base é fortemente dopada para maximizar a injeção de portadores. A Base é muito fina para minimizar a recombinação.

## 3.3 Operação do Transistor
Para operar na região ativa (amplificação):
1.  A junção Base-Emissor (JBE) é polarizada diretamente.
2.  A junção Base-Coletor (JBC) é polarizada inversamente.

No transistor npn, os eletrões são injetados do emissor para a base. Como a base é fina e levemente dopada, poucos eletrões se recombinam com lacunas (originando a pequena corrente de base $I_B$). A grande maioria difunde-se até à região de depleção da junção base-coletor, onde são arrastados pelo campo elétrico forte em direção ao coletor, constituindo $I_C$.

**Equações Fundamentais de Corrente:**
$$I_E = I_C + I_B$$
$$I_C = I_{C_{\text{maioritário}}} + I_{CO_{\text{minoritário}}}$$
A corrente $I_{CO}$ é a corrente de fuga inversa, sensível à temperatura.

## 3.4 Configuração Base-Comum
A base é o terminal comum às entradas e saídas.
* **Ganho Alfa ($\alpha$):** Relaciona as correntes de saída e entrada ($I_C$ e $I_E$).
    $$\alpha_{dc} = \frac{I_C}{I_E} \quad \text{e} \quad \alpha_{ac} = \frac{\Delta I_C}{\Delta I_E}$$
    Como $I_C < I_E$ (devido à perda em $I_B$), $\alpha$ é sempre ligeiramente menor que 1 (tipicamente 0,90 a 0,998).
* **Características:** Impedância de entrada muito baixa, impedância de saída muito alta. Não tem ganho de corrente, mas tem alto ganho de tensão.

## 3.5 Configuração Emissor-Comum
A configuração mais utilizada para amplificação de potência e tensão. O emissor está ligado ao terra.
* **Ganho Beta ($\beta$):** Relaciona a corrente de coletor com a de base.
    $$\beta_{dc} = \frac{I_C}{I_B} \quad \text{e} \quad \beta_{ac} = \frac{\Delta I_C}{\Delta I_B}$$
    Valores típicos de $\beta$ variam de 50 a 400.
* **Relação entre $\alpha$ e $\beta$:**
    $$\beta = \frac{\alpha}{1-\alpha} \quad \text{e} \quad \alpha = \frac{\beta}{\beta+1}$$
* **Corrente de Corte:** $I_{CEO} = \frac{I_{CBO}}{1-\alpha} \approx \beta I_{CBO}$. A corrente de fuga é amplificada pelo fator beta quando a base está em aberto.

## 3.6 Configuração Coletor-Comum (Seguidor de Emissor)
Usada para adaptação de impedâncias (Buffer). Alta impedância de entrada e baixa impedância de saída. Ganho de tensão ligeiramente inferior a 1.
* A corrente de emissor é a corrente de saída: $I_E=(\beta+1)I_B$.

## 3.7 Limites de Operação
Para evitar a destruição do componente, deve-se respeitar a Área de Operação Segura (SOA), delimitada por:
1.  Corrente Máxima de Coletor ($I_{C_{max}}$).
2.  Tensão Máxima Coletor-Emissor ($V_{CE_{max}}$).
3.  Dissipação de Potência Máxima ($P_{C_{max}}$):
    $$P_{C_{max}}=V_{CE}I_C$$
    Esta equação define uma hipérbole no gráfico $I_C$ vs $V_{CE}$. O ponto de operação deve estar sempre abaixo desta curva.

## 3.8 Folha de Dados (Specification Sheet)
Documento crucial que lista valores máximos absolutos, características elétricas ($h_{FE}$ para $\beta_{dc}$), características térmicas e gráficas de resposta.

# Capítulo 4: Polarização DC - BJTS

## 4.1 Introdução
A polarização DC estabelece um ponto de operação fixo (Ponto Quiescente ou Ponto Q) nas curvas características do transístor. O objetivo é garantir que o transistor opere na região linear (ativa) para amplificação, prevenindo distorções onde o sinal excursiona para as regiões de corte ou saturação.

## 4.2 Ponto de Operação
* **Região Ativa:** JBE direta, JBC inversa. Amplificação linear.
* **Saturação:** JBE direta, JBC direta. $V_{CE} \approx 0,2\text{V}$. $I_C$ limitado pelo circuito externo.
* **Corte:** JBE inversa, JBC inversa. $I_C \approx 0$.

## 4.3 Configuração de Polarização Fixa
É o circuito mais simples, usando um único resistor na base ($R_B$).
* **Equação da Base:** $I_B = \frac{V_{CC} - V_{BE}}{R_B}$.
* **Equação do Coletor:** $V_{CE}=V_{CC}-I_C~R_C$.
* **Corrente de Saturação:** $I_{C_{sat}} = \frac{V_{CC}}{R_C}$.
* **Desvantagem:** Péssima estabilidade. Como $I_C = \beta I_B$, qualquer variação em $\beta$ (devido à temperatura ou substituição do transistor) altera drasticamente o ponto Q.

## 4.4 Configuração de Polarização Estabilizada no Emissor
Introduz um resistor no emissor ($R_E$) para fornecer realimentação negativa DC.
* **Equação da Base:**
    $$I_B=\frac{V_{CC}-V_{BE}}{R_B+(\beta+1)R_E}$$
* **Resistência Refletida:** A resistência vista da base para o emissor é ampliada pelo fator $(\beta+1)$. A impedância de entrada é $R_i=(\beta+1)R_E$.
* **Estabilidade:** Se $I_C$ aumenta (por temperatura), a tensão em $R_E$ aumenta, diminuindo $V_{BE}$ e consequentemente $I_B$, o que contraria o aumento inicial de $I_C$.

## 4.5 Configuração de Divisor de Tensão
Utiliza um divisor resistivo ($R_1, R_2$) para fixar a tensão na base, tornando o ponto Q praticamente independente de $\beta$.
* **Análise Exata (Thévenin):**
    * $R_{Th} = R_1 || R_2$.
    * $E_{Th} = \frac{R_2~V_{CC}}{R_1+R_2}$.
    * $I_B=\frac{E_{Th}-V_{BE}}{R_{Th}+(\beta+1)R_E}$.
* **Análise Aproximada:** Válida se $\beta R_E \ge 10 R_2$ (a impedância de entrada vista da base é muito maior que $R_2$, não carregando o divisor).
    * $V_B \approx \frac{R_2 V_{CC}}{R_1 + R_2}$.
    * $V_E = V_B - V_{BE}$.
    * $I_C \cong I_E = \frac{V_E}{R_E}$.

## 4.6 Polarização com Realimentação de Tensão (DC)
O resistor de polarização da base ($R_B$) é ligado ao coletor e não à fonte de alimentação.
* **Equação:** $I_B = \frac{V_{CC} - V_{BE}}{R_B + \beta(R_C + R_E)}$.
* **Mecanismo:** Se $I_C$ aumenta, a tensão no coletor diminui. Como a base é alimentada pelo coletor, $I_B$ diminui, estabilizando o circuito.

## 4.9 Circuitos de Comutação (Transistores)
Em computadores e lógica digital, o BJT opera apenas em Saturação (ON) e Corte (OFF).
* **Tempos de Comutação:** A velocidade é limitada pelas capacitâncias internas e tempos de trânsito de carga.
    * $t_{on} = t_r + t_d$ (Tempo de subida + atraso).
    * $t_{off}=t_s+t_f$ (Tempo de armazenamento + descida). O tempo de armazenamento ($t_s$) é crítico, pois representa o tempo necessário para remover a saturação de carga da base.

## 4.10 Estabilidade de Polarização (Fatores S)
A estabilidade de um circuito define a sua sensibilidade a variações de parâmetros. Definem-se fatores de estabilidade $S$ para $I_{CO}$, $V_{BE}$ e $\beta$. O ideal é que $S$ seja o menor possível (mínimo 1).
* **Estabilidade da Corrente de Fuga ($I_{CO}$):** $S(I_{CO}) = \frac{\Delta I_C}{\Delta I_{CO}}$.
    * Polarização Fixa: $S(I_{CO}) = \beta + 1$ (Muito instável).
    * Divisor de Tensão: $S(I_{CO}) = \frac{(\beta+1)(1 + R_{Th}/R_E)}{1 + \beta + R_{Th}/R_E}$ (Muito estável, próximo de 1 se $R_{Th}/R_E$ for pequeno).
* **Estabilidade de $V_{BE}$:** $S(V_{BE}) = \frac{\Delta I_C}{\Delta V_{BE}}$. Importante porque $V_{BE}$ diminui $2,5\text{ mV /^\circ\text{C}}$.
    * Polarização Fixa: $S(V_{BE}) = -\beta/R_B$.
    * Divisor de Tensão: $S(V_{BE}) = \frac{-\beta}{R_{Th} + (\beta+1)R_E}$.
* **Estabilidade de $\beta$:** $S(\beta) = \frac{\Delta I_C}{\Delta \beta}$. Mede a variação de $I_C$ quando se troca o transistor por outro com $\beta$ diferente.

# Capítulo 5: Análise AC de BJT

## 5.1 e 5.2 Modelação do Transistor
Para analisar a resposta do transistor a sinais AC de pequena amplitude, substitui-se o dispositivo físico por um circuito equivalente linear. Os condensadores de acoplamento e bypass são considerados curto-circuitos, e as fontes DC são curto-circuitadas para terra (análise de sinal zero).

## 5.4 O Modelo $r_e$
O modelo $r_e$ é intuitivo e baseia-se nas características reais do díodo emissor. O parâmetro central é a resistência dinâmica do emissor:
$$r_e = \frac{26\text{ mV}}{I_E}$$
Onde $I_E$ é a corrente DC de polarização.

## 5.5 Configuração Emissor-Comum (CE) - Polarização Fixa
Nesta configuração, o emissor está à terra.
* **Impedância de Entrada ($Z_i$):** A base "vê" a resistência $r_e$ amplificada por $\beta$. $Z_i \cong \beta r_e$.
* **Impedância de Saída ($Z_o$):** Aproximadamente igual ao resistor de coletor, $Z_o \cong R_C$ (assumindo $r_o \to \infty$).
* **Ganho de Tensão ($A_v$):**
    $$A_v = -\frac{R_C}{r_e}$$
    O sinal negativo indica uma defasagem de 180° entre entrada e saída.

## 5.6 Polarização por Divisor de Tensão (AC)
A resistência do divisor ($R_1 || R_2$) aparece em paralelo com a entrada do transistor.
* $Z_i = R_1 || R_2 || \beta r_e$.
* $A_v = -\frac{R_C}{r_e}$ (idêntico à polarização fixa, pois o capacitor de bypass elimina $R_E$ em AC).

## 5.7 Configuração CE com Polarização de Emissor (Sem Bypass)
Se o resistor de emissor $R_E$ não tiver um capacitor de bypass, ele causa realimentação negativa em AC, estabilizando o ganho mas reduzindo o seu valor.
* **Impedância de Entrada:** Aumenta substancialmente. $Z_i \cong R_B || \beta(r_e+R_E) \cong R_B || \beta R_E$ (se $R_E \gg r_e$).
* **Ganho de Tensão:** Torna-se dependente da relação de resistências externas, não dos parâmetros internos do transistor.
    $$A_v \cong-\frac{R_C}{R_E}$$

## 5.8 Configuração Seguidor de Emissor (Coletor-Comum)
O sinal entra na base e sai no emissor. Não inverte a fase.
* **Ganho de Tensão:** $A_v \cong 1$.
* **Impedância de Entrada:** Muito alta ($Z_i \cong \beta R_E$).
* **Impedância de Saída:** Muito baixa.
    $$Z_o=R_E || (r_e + \frac{R_g + R_B}{\beta}) \approx r_e$$
    Ideal para "buffers" de impedância.

## 5.9 Configuração Base-Comum
* **Impedância de Entrada:** Extremamente baixa ($Z_i \cong r_e$).
* **Impedância de Saída:** $Z_o \cong R_C$.
* **Ganho de Tensão:** Elevado e positivo ($A_v \cong R_C/r_e$).
* Utilizado em aplicações de alta frequência.

## 5.10 e 5.11 Configurações com Realimentação de Coletor
O resistor de realimentação $R_F$ liga o coletor à base.
* $Z_i \cong \frac{r_e}{1/\beta + R_C/R_F}$.
* O efeito Miller divide $R_F$ em resistências equivalentes na entrada e saída, reduzindo o ganho e a impedância de entrada.

## 5.12 a 5.15 Efeitos de Carga ($R_L$) e Fonte ($R_s$)
Um amplificador real não opera isolado.
* **Efeito de Carga:** $R_L$ em paralelo com $Z_o$ (geralmente $R_C$) reduz o ganho efetivo.
    $$A_v = A_{v_{NL}} \frac{R_L}{R_L + R_o}$$
    Onde $A_{v_{NL}}$ é o ganho sem carga (No-Load).
* **Efeito da Fonte:** A resistência interna da fonte ($R_s$) forma um divisor de tensão com $Z_i$ do amplificador, atenuando o sinal à entrada.
    $$A_{v_s} = \frac{V_o}{V_s} = \frac{Z_i}{Z_i + R_s} A_{v_{NL}}$$

## 5.16 Sistemas em Cascata
Conexão de múltiplos estágios para aumentar o ganho total.
* $A_{v_{Total}} = A_{v1} \cdot A_{v2} \cdot \dots$
* A impedância de entrada do estágio 2 ($Z_{i2}$) atua como carga ($R_L$) para o estágio 1. Este "efeito de carregamento" é crucial no cálculo do ganho do primeiro estágio.

## 5.17 Conexão Darlington
Consiste em dois transistores ligados em cascata direta (coletores comuns) num único invólucro.
* **Beta Composto:** $\beta_D = \beta_1 \beta_2$. Permite ganhos de corrente na ordem dos milhares.
* **Aplicação:** Usado em seguidores de emissor para obter impedâncias de entrada extremamente elevadas.

## 5.19 Modelo Híbrido Equivalente
Utiliza os parâmetros-h ($h_{ie}, h_{fe}, h_{re}, h_{oe}$), comuns em datasheets.
* $h_{ie} \equiv \beta r_e$ (Impedância de entrada).
* $h_{fe} \equiv \beta_{ac}$ (Ganho de corrente direto).
* $h_{oe} \equiv 1/r_o$ (Admitância de saída).
Este modelo é matematicamente robusto para análises mais complexas que incluam a realimentação interna do transistor ($h_{re}$).

# Capítulo 6: Transistores de Efeito de Campo (FETs)

## 6.1 Introdução
Os FETs distinguem-se dos BJTs por serem dispositivos controlados por tensão e unipolares (a corrente depende apenas de um tipo de portador, eletrões ou lacunas). A sua impedância de entrada é extremamente elevada ($I_G \approx 0$).

## 6.2 JFET (Junction Field-Effect Transistor)
* **Estrutura:** Um canal de material semicondutor (tipo-n ou tipo-p) com terminais de Dreno (D) e Fonte (S). Uma região de porta (Gate) com dopagem oposta envolve o canal.
* **Operação:** A aplicação de uma tensão inversa na junção Porta-Canal ($V_{GS}$) alarga a região de depleção, estreitando o canal e controlando a corrente $I_D$.

## 6.3 Características de Transferência (Equação de Shockley)
A relação entre a entrada ($V_{GS}$) e a saída ($I_D$) não é linear, mas quadrática. É definida pela equação de Shockley:
$$I_D = I_{DSS} \left(1-\frac{V_{GS}}{V_P} \right)^2$$
* $I_{DSS}$: Corrente de dreno máxima (com $V_{GS}=0\text{V}$).
* $V_P$ (Pinch-off Voltage): Tensão de estrangulamento onde a corrente cessa ($I_D=0$).
* Pontos notáveis para traçar a curva:
    * Se $V_{GS}=V_P/2 \Rightarrow I_D=I_{DSS}/4$.
    * Se $V_{GS} \approx 0,3 V_P \Rightarrow I_D=I_{DSS}/2$.

## 6.7 MOSFET tipo Depleção (D-MOSFET)
Possui um canal físico e uma camada isolante de dióxido de silício ($SiO_2$) entre a porta e o canal.
* **Modos de Operação:**
    * **Depleção:** $V_{GS}$ negativo (para canal n) repele eletrões, reduzindo a corrente (como o JFET).
    * **Enriquecimento:** $V_{GS}$ positivo atrai mais eletrões, aumentando a corrente acima de $I_{DSS}$. A equação de Shockley mantém-se válida para ambos os modos.

## 6.8 MOSFET tipo Enriquecimento (E-MOSFET)
Não possui canal físico construído. O canal é induzido pela tensão da porta.
* **Tensão de Limiar ($V_T$):** Corrente $I_D=0$ até que $V_{GS}$ exceda $V_T$.
* **Equação de Corrente:**
    $$I_D = k (V_{GS} - V_T)^2$$
    Onde $k$ é uma constante construtiva dada por $k = \frac{I_{D(on)}}{(V_{GS(on)} - V_T)^2}$.

## 6.10 VMOS e CMOS
* **VMOS (Vertical MOS):** Estrutura em V que permite maiores densidades de corrente e melhor dissipação térmica, usada em aplicações de potência.
* **CMOS (Complementary MOS):** Utiliza pares de p-channel e n-channel MOSFETS. A sua característica principal é o consumo de potência estática quase nulo, sendo a base da lógica digital moderna (microprocessadores, memórias).

# Capítulo 7: Polarização de FET

## 7.1 Introdução
A polarização de FETs pode ser resolvida matematicamente (usando a equação quadrática de Shockley) ou graficamente (interseção da reta de carga com a curva de transferência).

## 7.2 Configuração de Polarização Fixa
Utiliza uma fonte DC ($V_{GG}$) aplicada diretamente à porta.
* **Equação da Malha de Entrada:** $V_{GS}=-V_{GG}$.
* **Equação da Malha de Saída:** $V_{DS}=V_{DD}-I_D~R_D$.
* Como $I_G=0$, não há queda de tensão no resistor de porta $R_G$.

## 7.3 Configuração de Autopolarização (Self-Bias)
Elimina a necessidade da fonte $V_{GG}$. Coloca-se um resistor $R_S$ na fonte. A corrente $I_D$ flui por $R_S$, criando uma tensão $V_S=I_D~R_S$.
* Como $V_G=0$, resulta que $V_{GS}=-I_D~R_S$.
* Este método estabiliza o ponto Q contra variações nos parâmetros do FET (como o espalhamento de $I_{DSS}$ entre componentes).

## 7.4 Polarização por Divisor de Tensão
Utiliza um divisor resistivo na porta ($R_1, R_2$) para fixar $V_G$.
* $V_G = \frac{R_2 V_{DD}}{R_1 + R_2}$.
* $V_{GS} = V_G - I_DR_S$.
* Esta configuração oferece a melhor estabilidade de ponto Q.

## 7.8 Polarização de E-MOSFET
Como o E-MOSFET precisa de $V_{GS}>0$ (canal n), não se pode usar autopolarização simples.
* **Realimentação de Dreno:** O resistor $R_G$ é ligado entre o Dreno e a Porta.
    * Como $I_G=0$, não há queda em $R_G$, logo $V_{GS}=V_{DS}$.
    * Equação da reta de carga: $V_{GS}=V_{DD}-I_D~R_D$.
    * O ponto Q é a interseção desta reta com a curva característica $I_D = k(V_{GS}-V_T)^2$.

## 7.14 Curva Universal de Polarização JFET
O autor Boylestad introduz uma "Curva Universal" normalizada. O eixo vertical é $I_D/I_{DSS}$ e o horizontal é $V_{GS}/V_P$.
* Permite resolver problemas de polarização para qualquer JFET usando uma única curva gráfica, simplificando o design.
* Define-se um parâmetro $m=|V_P|/(I_{DSS}R_S)$ e uma tensão normalizada $M$ para localizar a solução na curva universal.

# Capítulo 8: Amplificadores FET

## 8.2 Modelo de Pequenos Sinais FET
Em AC, o FET é modelado por uma fonte de corrente controlada por tensão.
* **Transcondutância ($g_m$):** O parâmetro chave que relaciona a saída com a entrada.
    $$g_m = \frac{\Delta I_D}{\Delta V_{GS}} = g_{m0} \left(1-\frac{V_{GS_Q}}{V_P} \right)$$
    Onde $g_{m0} = 2I_{DSS}/ |V_P|$. O ganho do FET é determinado por $g_m$, não por um $\beta$ fixo.
* **Resistência de Saída ($r_d$):** Representa a inclinação das curvas de dreno na região de saturação. $r_d=1/y_{os}$.

## 8.3 Configuração Fonte-Comum (CS) - Polarização Fixa
* **Impedância de Entrada:** $Z_i=R_G$ (muito alta).
* **Impedância de Saída:** $Z_o \cong R_D || r_d$.
* **Ganho de Tensão:**
    $$A_v=-g_m (R_D || r_d)$$
    O sinal negativo indica inversão de fase de 180°.

## 8.4 Configuração CS - Autopolarização
Se o resistor de fonte $R_S$ estiver "bypassed" por um condensador, o ganho é igual ao da polarização fixa. Se não estiver (sem bypass), ocorre realimentação negativa:
* **Ganho de Tensão (sem bypass):**
    $$A_v=\frac{-g_m~R_D}{1+g_m~R_S}$$
    O ganho reduz-se, mas a linearidade e a largura de banda aumentam.

## 8.7 Configuração Seguidor de Fonte (Dreno-Comum)
A saída é retirada na fonte.
* **Ganho de Tensão:** $A_v \cong \frac{g_m R_S}{1 + g_m R_S} < 1$.
* **Impedância de Saída:** Baixa, $Z_o \cong R_S || (1/g_m)$.
* Excelente para isolamento e adaptação de impedâncias.

## 8.8 e 8.9 Amplificadores MOSFET
* **D-MOSFET:** Análise idêntica à do JFET.
* **E-MOSFET:** O cálculo de $g_m$ difere: $g_m=2k(V_{GS_Q}-V_T)$.
* **Configuração Divisor de Tensão:** $A_v \cong-g_m R_D$.

## 8.15 Configuração em Cascata
O ganho total é o produto dos ganhos. É comum usar um estágio JFET na entrada (para alta impedância $Z_i$) seguido por estágios BJT (para alto ganho de tensão $A_v$).

## 8.16 Resolução de Problemas (Troubleshooting)
Verificação de pontos DC é o primeiro passo. Se $V_D=V_{DD}$, o FET está em corte ou o resistor de dreno está aberto. Se $V_D$ está muito baixo, o FET pode estar saturado ou em curto.

# Capítulo 9: Resposta em Frequência BJT e JFET

## 9.1 Introdução
Até este ponto, assumiu-se que os condensadores eram curto-circuitos perfeitos em AC e circuitos abertos em DC. Na realidade, a resposta de frequência de um amplificador é limitada:
* Em Baixas Frequências, pelas reatâncias dos condensadores de acoplamento e bypass.
* Em Altas Frequências, pelas capacitâncias parasitas internas do transistor e da cablagem.

## 9.2 e 9.3 Logaritmos e Decibéis
A análise de frequência utiliza escalas logarítmicas (Bode Plots) para abranger vastas gamas de frequência.
* **Ganho de Potência em dB:** $G_{dB}=10~log_{10}(P_2/P_1)$.
* **Ganho de Tensão em dB:** $G_{dB}=20~log_{10}(V_2/V_1)$.
O ganho total de sistemas em cascata em dB é a soma dos ganhos em dB individuais.

## 9.6 Resposta em Baixa Frequência (BJT e FET)
Cada condensador ($C_S, C_C, C_E$) forma um filtro passa-alto com a resistência equivalente de Thévenin vista pelos seus terminais.
* **Frequência de Corte ($f_L$):**
    $$f_L = \frac{1}{2\pi R_{Th} C}$$
* Para um amplificador BJT, calcula-se $f_{L_S}$ (entrada), $f_{L_C}$ (saída) e $f_{L_E}$ (bypass emissor). A frequência de corte inferior do sistema é determinada pelo polo dominante (a maior das frequências $f_L$).

## 9.10 Efeito Miller
Em altas frequências, a capacitância de realimentação entre a entrada e a saída ($C_f$) é amplificada pelo ganho do sistema (Efeito Miller), afetando drasticamente a impedância de entrada.
* **Capacitância Miller de Entrada:**
    $$C_{M_i}=(1-A_v)C_f$$
    Para um amplificador inversor com ganho elevado (ex: $A_v=-100$), uma pequena capacitância de 10 pF transforma-se numa capacitância de entrada de 1010 pF, "matando" a resposta em alta frequência.
* **Capacitância Miller de Saída:** $C_{M_o} \cong C_f$ (se $A_v$ for grande).

## 9.11 Resposta em Alta Frequência
É determinada pelas capacitâncias parasitas ($C_{be}, C_{bc}, C_{ce}$ no BJT; $C_{gs}, C_{gd}, C_{ds}$ no FET) e capacitâncias de cablagem ($C_{Wi}, C_{Wo}$).
* Estas capacitâncias formam filtros passa-baixo com as resistências do circuito. A frequência de corte superior ($f_H$) é determinada pelo circuito RC com a menor constante de tempo ($\tau = R_{Th} C_{eq}$), onde $C_{eq}$ inclui a capacitância de Miller.
* **Produto Ganho-Largura de Banda ($f_T$):** Frequência onde o ganho de corrente beta cai para 1. $f_T = \beta_{mid} f_\beta$.

## 9.14 Teste de Onda Quadrada
Uma onda quadrada é composta por uma fundamental e infinitas harmónicas ímpares. Aplica-se uma onda quadrada ao amplificador.
* **Análise:**
    * Se a saída tem arestas arredondadas $\rightarrow$ deficiência em alta frequência (Filtro Passa-Baixo).
    * Se a saída tem o topo inclinado ("tilt" ou "droop") $\rightarrow$ deficiência em baixa frequência (Filtro Passa-Alto).
    * A relação entre o tempo de subida ($t_r$) e a largura de banda superior é $f_{H} = 0,35/t_r$.

# Capítulo 10: Amplificadores Operacionais (Op-Amps)

## 10.1 Introdução
O Amplificador Operacional é um circuito integrado de alto ganho projetado para realizar operações matemáticas (daí o nome) em computadores analógicos, mas que se tornou o bloco universal da eletrónica analógica.

## 10.2 Amplificador Diferencial
O estágio de entrada de qualquer Op-Amp é um par diferencial.
* **Operação:** Amplifica a diferença entre duas tensões de entrada ($V_d=V_1-V_2$) e rejeita a tensão média ou comum ($V_c$).
* **Rejeição de Modo Comum (CMRR):** É a figura de mérito do Op-Amp.
    $$CMRR = \frac{A_d}{A_c}$$
    Onde $A_d$ é o ganho diferencial (desejado) e $A_c$ é o ganho de modo comum (indesejado, ruído).
    Em dB: $CMRR(dB) = 20 \log (A_d/A_c)$.

## 10.3 Circuitos BIFET, BIMOS e CMOS
A evolução tecnológica levou à mistura de tecnologias no mesmo chip:
* **BIFET:** Entradas JFET (alta impedância) + Amplificação BJT.
* **BIMOS:** Entradas MOSFET + BJT.
* **CMOS:** Baixo consumo, operação "rail-to-rail".

## 10.4 Fundamentos do Op-Amp
O Op-Amp ideal possui:
1.  Ganho de malha aberta infinito ($A_{OL} \to \infty$).
2.  Impedância de entrada infinita ($Z_{in} \to \infty$).
3.  Impedância de saída nula ($Z_{out} \to 0$).
4.  Largura de banda infinita.

## 10.5 Circuitos Práticos com Op-Amp
Devido ao ganho infinito, o Op-Amp é quase sempre usado com realimentação negativa para definir um ganho estável.
* **Amplificador Inversor:** O sinal é aplicado à entrada inversora (-) via $R_1$, com realimentação $R_f$. Ponto de "terra virtual".
    $$A_v = -\frac{R_f}{R_1}$$
* **Amplificador Não-Inversor:** O sinal entra na entrada não-inversora (+).
    $$A_v=1+\frac{R_f}{R_1}$$
* **Seguidor Unitário (Buffer):** $R_f=0, R_1 = \infty$. $V_o = V_1$. Isola a fonte da carga.

## 10.6 Especificações - Parâmetros DC Offset
Na prática, imperfeições de fabrico causam pequenas tensões DC na saída mesmo com entradas a zero.
* **Tensão de Offset de Entrada ($V_{IO}$):** Tensão que deve ser aplicada à entrada para zerar a saída.
* **Corrente de Bias de Entrada ($I_{IB}$):** Média das correntes que entram nos terminais para polarizar os transistores internos.

## 10.7 Parâmetros de Frequência
* **Slew Rate (SR):** A taxa máxima de variação da tensão de saída (volts por microssegundo). Limita a amplitude de sinais de alta frequência. Se o sinal de entrada exigir uma variação mais rápida que o SR, a saída será triangular e distorcida.
    $$SR = \frac{\Delta V_o}{\Delta t}$$

# Capítulo 11: Aplicações de Op-Amp

## 11.1 Multiplicador de Ganho Constante
Utiliza a configuração inversora ou não-inversora para escalar sinais com precisão. O ganho depende apenas das resistências externas, que podem ser de alta precisão (1% ou 0,1%), tornando o circuito independente da temperatura ou variações do chip.

## 11.2 Somador de Tensão
Uma extensão do amplificador inversor. Múltiplas entradas ($V_1, V_2, V_3$) ligam-se ao nó de terra virtual através de resistores ($R_1, R_2, R_3$).
* Equação:
    $$V_o=-\left(\frac{R_f}{R_1}V_1+\frac{R_f}{R_2}V_2+\frac{R_f}{R_3}V_3 \right)$$
    Usado em misturadores de áudio (mixers) e conversores Digital-Analógico (DAC).

## 11.3 Buffer de Tensão
Utilizado para evitar que uma fonte de sinal de alta impedância (ex: um sensor piezoelétrico) seja carregada por uma carga de baixa impedância. O Buffer fornece a corrente necessária à carga sem drenar corrente da fonte.

## 11.4 Fontes Controladas
Op-Amps podem configurar-se para implementar as quatro fontes controladas fundamentais na teoria de circuitos:
* Fonte de Tensão controlada por Tensão (VCVS) - Amplificador padrão.
* Fonte de Corrente controlada por Tensão (VCCS) - Transcondutância (ex: carga no circuito de realimentação).
* Fonte de Tensão controlada por Corrente (CCVS) - Transresistência.
* Fonte de Corrente controlada por Corrente (CCCS).

## 11.5 Circuitos de Instrumentação
* **Amplificador de Instrumentação:** Um circuito de precisão com três Op-Amps. Dois na entrada agem como buffers não-inversores (aumentando a impedância de entrada) e um na saída como diferencial. Possui CMRR extremamente alto, essencial para instrumentação médica (ECG, EEG) e industrial, onde o sinal é fraco e o ruído é alto.

## 11.6 Filtros Ativos
Filtros que utilizam Op-Amps, resistores e condensadores (sem indutores).
* **Passa-Baixo:** Permite passar frequências abaixo de $f_c = 1/2\pi R_1 C_1$.
* **Passa-Alto:** Permite passar frequências acima de $f_c$.
* **Passa-Banda:** Combinação de ambos.
* **Vantagens:** Ganho no próprio filtro, isolamento de carga, tamanho reduzido (sem bobinas).

## 11.7 Integrador e Diferenciador
* **Integrador:** Condensador na malha de realimentação. A saída é a integral da entrada. Usado para gerar rampas a partir de degraus.
    $$v_o(t) = -\frac{1}{RC} \int v_1 dt$$
* **Diferenciador:** Condensador na entrada. A saída é proporcional à taxa de variação da entrada. Suscetível a ruído de alta frequência.