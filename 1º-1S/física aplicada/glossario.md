# 1. Introdução à Física dos Semicondutores e Dispositivos de Dois Terminais

A génese da eletrónica moderna reside na manipulação precisa das propriedades elétricas de materiais semicondutores. A obra de referência *Electronic Devices and Circuit Theory* estabelece, no seu primeiro capítulo, os alicerces físicos que permitem o funcionamento de todos os dispositivos subsequentes. A compreensão destes fenómenos não é meramente académica; é a base para o design de circuitos robustos e eficientes. 

## 1.1 Estrutura Atómica e Materiais Semicondutores
A distinção fundamental entre condutores, isoladores e semicondutores encontra-se na banda de energia (gap energético) que os eletrões de valência devem transpor para alcançar a banda de condução. 

* **Materiais Intrínsecos:** São semicondutores na sua forma mais pura, refinados para níveis de impureza extremamente baixos (na ordem de 1 parte em $10^{10}$). Nestes materiais, a condução ocorre apenas devido à geração térmica de pares eletrão-lacuna. 
* **Ligação Covalente:** Nos cristais de Silício (Si) e Germânio (Ge), os quatro eletrões de valência de cada átomo formam ligações partilhadas com quatro átomos vizinhos, criando uma estrutura de rede cristalina estável. A rutura destas ligações requer energia externa ($1.1\text{ eV}$ para o Si e $0.67\text{ eV}$ para o Ge). 

**Dopagem e Materiais Extrinsecos**
O processo de dopagem introduz impurezas controladas para alterar drasticamente a condutividade: 
1.  **Material Tipo-n (Negativo):** Criado pela introdução de átomos pentavalentes (doadores), como Antimónio (Sb), Arsénio (As) ou Fósforo (P). Estes átomos possuem 5 eletrões de valência; quatro ligam-se ao silício vizinho, e o quinto fica fracamente ligado, tornando-se um eletrão livre. Aqui, os eletrões são os portadores maioritários e as lacunas os minoritários. 
2.  **Material Tipo-p (Positivo):** Criado pela introdução de átomos trivalentes (aceitadores), como Boro (B), Gálio (Ga) ou Índio (In). Com apenas 3 eletrões de valência, cria-se uma vacância ou "lacuna" na estrutura covalente. As lacunas são os portadores maioritários. 

## 1.2 O Díodo Semicondutor e a Junção P-N
A união física de um material tipo-n e um tipo-p cria uma junção p-n. Na interface, ocorre uma difusão inicial de portadores que gera iões imóveis, criando uma Região de Depleção (ou carga espacial). Esta região atua como uma barreira de potencial que deve ser vencida para haver condução. 


**Modos de Polarização**
O comportamento do díodo é descrito pela sua resposta à tensão externa ($V_D$): 
* **Sem Polarização ($V_D=0\text{V}$):** O equilíbrio térmico impede o fluxo líquido de carga. $I_D=0\text{A}$. 
* **Polarização Inversa ($V_D<0\text{V}$):** O potencial positivo é aplicado ao material tipo-n e o negativo ao tipo-p. Isto atrai os portadores maioritários para longe da junção, alargando a região de depleção e aumentando a barreira. Flui apenas uma minúscula Corrente de Saturação Inversa ($I_s$ ou $I_{CO}$), gerada por portadores minoritários térmicos. 
* **Polarização Direta ($V_D>0\text{V}$):** O potencial externo empurra os portadores em direção à junção, vencendo a barreira de potencial. Quando a tensão supera a tensão de joelho ($V_K$), a corrente aumenta exponencialmente. 

**Tabela Comparativa de Materiais de Diodos**
A escolha do material dita a tensão de ativação e a estabilidade. 

| Material | Símbolo Químico | Tensão de Joelho (VK) Típica | Características e Aplicações |
| :--- | :--- | :--- | :--- |
| Germânio | Ge | $0.3\text{ V}$ | Baixa queda de tensão, mas alta sensibilidade térmica e corrente de fuga elevada. Usado em detetores de precisão. |
| Silício | Si | $0.7\text{V}$ | Padrão da indústria. Excelente estabilidade térmica e baixo custo. |
| Arsenieto de Gálio | GaAs | $1.2\text{V}$ | Alta velocidade de comutação e eficiência em emissão de luz (LEDs). |



**A Equação de Shockley**
O comportamento matemático do díodo é regido pela Equação de Shockley, fundamental para modelação:
$$I_D = I_s \left(e^{\frac{V_D}{n V_T}} - 1 \right)$$
Onde:
* $V_T$ (Tensão Térmica) é dada por $V_T=\frac{k~T_K}{q}$. À temperatura ambiente ($25^\circ\text{C}$), $V_T \approx 26\text{ mV}$.
* $n$ é o fator de idealidade (varia entre 1 e 2 dependendo do material e construção).
* $k$ é a constante de Boltzmann ($1.38 \times 10^{-23}\text{J/K}$).
Esta equação revela que a corrente não é linear; ela explode exponencialmente após $V_K$. 

## 1.3 Resistência no Díodo: Estática vs. Dinâmica
A natureza não linear do díodo implica que a sua "resistência" não é constante (ao contrário da Lei de Ohm para resistores fixos). 

1.  **Resistência DC (Estática) $R_D$:** É a resistência num ponto de operação específico.
    $$R_D = \frac{V_D}{I_D}$$
    Na região de condução, $R_D$ é muito baixa (ohms); na região inversa, é muito alta (mega-ohms). 
2.  **Resistência AC (Dinâmica) $r_d$:** Representa a oposição a uma pequena variação de sinal sinusoidal em torno do ponto Q. É vital para a análise de pequenos sinais. Derivando a equação de Shockley:
    $$r_d = \frac{d V_D}{d I_D} \approx \frac{26\text{ mV}}{I_D}$$
    Esta fórmula indica que quanto maior a corrente contínua ($I_D$), menor a resistência dinâmica oferecida ao sinal AC. 

## 1.4 Zener e LEDs: Variações do Díodo
* **Díodo Zener:** Projetado para operar na região de rutura inversa (Breakdown). Ao controlar a dopagem, a tensão de rutura ($V_Z$) torna-se muito estável, permitindo que o dispositivo funcione como regulador de tensão. 
* **Díodo Emissor de Luz (LED):** Em polarização direta, a recombinação de eletrões e lacunas liberta energia. No silicio, essa energia é calor (fonões), mas em materiais como GaAs ou GaP, é luz (fotões). A cor depende do gap de energia ($E_g$). 

# 2. Aplicações de Díodos: Do Conceito à Prática

O Capítulo 2 transporta a teoria para a engenharia aplicada, demonstrando como a não linearidade do díodo é explorada para manipulação de sinais. 

## 2.1 Análise por Reta de Carga (Load-Line Analysis)
A determinação do ponto de operação (Ponto Q) num circuito com díodo não pode ser resolvida puramente por álgebra linear devido à exponencial. A solução gráfica sobrepõe a característica do díodo com a restrição linear do circuito externo. 
A equação da malha (Kirchhoff) é:
$$E=V_D+I_D~R$$
Para traçar a reta de carga:
1.  Se $V_D = 0\text{V}$, então $I_D=E/R$ (Interseção no eixo vertical).
2.  Se $I_D=0\text{A}$, então $V_D=E$ (Interseção no eixo horizontal).
O ponto onde esta reta cruza a curva do díodo é a solução exata $(V_{DQ}, I_{DQ})$. 

## 2.2 Retificação: A Conversão AC-DC
A aplicação mais ubíqua do díodo é em fontes de alimentação. 

**Retificador de Meia-Onda**
Um único díodo em série com a carga permite a passagem apenas dos semiciclos positivos (ou negativos, dependendo da orientação).
Tensão Média (DC):
$$V_{dc} = 0.318 (V_m - V_K)$$
Onde $V_m$ é a tensão de pico da entrada. O fator $0.318$ corresponde a $1/\pi$. A frequência de saída é igual à de entrada ($f_{out}=f_{in}$). 

**Retificador de Onda Completa**
Aproveita ambos os semiciclos, invertendo a polaridade do negativo para positivo.
1.  **Transformador com Tomada Central (Center-Tap):** Requer dois díodos e um transformador volumoso. Cada díodo conduz em meio ciclo. 
2.  **Ponte de Graetz (Bridge):** Utiliza quatro díodos. Não requer transformador com tomada central. Em cada semiciclo, dois díodos conduzem em série. 


Tensão Média (DC):
$$V_{dc} = 0.636 (V_m - 2V_K)$$
O fator $0.636$ é $2/\pi$. Note-se a subtração de $2V_K$ na ponte, pois o sinal atravessa dois díodos. A frequência de saída é o dobro da entrada ($f_{out}= 2f_{in}$), o que facilita a filtragem. 

## 2.3 Ceifadores (Clippers) e Fixadores (Clampers)
Estes circuitos demonstram a versatilidade do díodo para além da retificação. 

* **Ceifadores (Clippers):** Circuitos que "cortam" o sinal acima ou abaixo de um nível de referência, sem distorcer a parte restante. 
    * **Série:** O díodo está em série com o sinal. Se o díodo estiver inversamente polarizado, o sinal não passa (corte). 
    * **Paralelo:** O díodo está em paralelo. Quando conduz, a tensão de saída fixa-se em $V_K$ (ou $V_K+V_{bateria}$), cortando o topo da onda. São usados para proteção contra sobretensões e modelação de onda. 
* **Fixadores (Clampers):** Deslocam o nível DC de um sinal AC. O circuito deve conter um condensador, um díodo e um resistor.
    * **Mecanismo:** Durante o semiciclo em que o díodo conduz, o condensador carrega-se rapidamente até à tensão de pico ($V_m-V_K$). Quando o díodo corta, o condensador atua como uma bateria em série com o sinal de entrada. A constante de tempo $\tau=RC$ deve ser grande o suficiente ($\tau \gg 5T$) para impedir a descarga do condensador durante o ciclo de não-condução. 

# 3. Transistores de Junção Bipolar (BJT): Construção e Operação

O Capítulo 3 introduz o dispositivo ativo fundamental: o Transistor de Junção Bipolar. O termo "Bipolar" refere-se ao facto de a condução envolver tanto lacunas como eletrões. 

## 3.1 Construção Física: NPN e PNP
O BJT é uma estrutura de três camadas semicondutoras impuras:
* **Emissor (E):** Fortemente dopado para injetar portadores no sistema.
* **Base (B):** Muito fina e levemente dopada. A sua espessura reduzida é crucial para permitir que os portadores atravessem sem se recombinarem excessivamente.
* **Coletor (C):** Moderadamente dopado, desenhado para recolher os portadores e dissipar potência. 

A seta no símbolo esquemático define o tipo:
* **NPN:** Seta aponta para fora (direção convencional da corrente do emissor).
* **PNP:** Seta aponta para dentro. 

## 3.2 Princípio de Amplificação e Regiões de Operação
Para operar como amplificador na região ativa linear, as junções devem ser polarizadas especificamente:
1.  **Junção Base-Emissor (JBE):** Polarização Direta.
2.  **Junção Base-Coletor (JBC):** Polarização Inversa. 


Nesta configuração, os portadores (ex: eletrões no NPN) são injetados do emissor para a base. Como a base é muito fina, a maioria ($>95\%$) não se recombina e é atraída pelo forte campo elétrico da junção inversa do coletor. Assim, uma pequena corrente de base controla uma grande corrente de coletor. 

* **Relação de Correntes (Lei de Kirchhoff):**
    $$I_E=I_C+I_B$$
    Dado que $I_B$ é muito pequena, $I_E \approx I_C$. 

## 3.3 Configurações do Transistor
A orientação do transistor no circuito define as suas características de ganho e impedância. 

**Base Comum (CB)**
* **Configuração:** Entrada no Emissor, Saída no Coletor. Base é o terminal comum.
* **Características:** Baixa impedância de entrada ($Z_i$), alta impedância de saída ($Z_o$).
* **Ganho de Corrente ($\alpha$):**
    $$\alpha_{dc} = \frac{I_C}{I_E}$$
    Como $I_C < I_E$, $\alpha$ é sempre ligeiramente menor que 1 (típico 0.90 a 0.998).
* **Uso:** Amplificadores de alta frequência (RF) devido à baixa capacitância de Miller. 

**Emissor Comum (CE)**
* **Configuração:** Entrada na Base, Saída no Coletor.
* **Características:** Impedância de entrada e saída moderadas. É a única configuração com inversão de fase ($180^\circ$).
* **Ganho de Corrente ($\beta$):**
    $$\beta_{dc} = \frac{I_C}{I_B}$$
    $\beta$ representa o fator de amplificação. Valores típicos variam de 50 a 400.
* **Relação entre $\alpha$ e $\beta$:**
    $$\beta = \frac{\alpha}{1-\alpha} \quad \text{e} \quad \alpha = \frac{\beta}{\beta + 1}$$ 


**Coletor Comum (CC) - Seguidor de Emissor**
* **Configuração:** Entrada na Base, Saída no Emissor.
* **Características:** Alta $Z_i$, muito baixa $Z_o$. Ganho de tensão unitário ($A_v \approx 1$).
* **Uso:** Casamento de impedâncias (Buffer). 

# 4. Polarização DC de BJTs: Estabilidade e Ponto

A polarização (Chapter 4) é a arte de estabelecer um ponto de operação quiescente (Ponto Q) estável nas curvas características do transistor, garantindo que o dispositivo permanece na região ativa linear sob todas as condições de sinal. 

## 4.1 Configurações de Polarização e Equações de Malha

**Polarização Fixa (Fixed-Bias)**
O circuito mais simples, usando um único resistor de base $R_B$ ligado a $V_{CC}$.
* **Equação da Malha de Entrada:** $V_{CC}-I_BR_B-V_{BE}=0 \Rightarrow I_B = \frac{V_{CC} - V_{BE}}{R_B}$.
* **Equação da Malha de Saída:** $V_{CE}=V_{CC}-I_C~R_C$.
* **Problema:** Altamente instável. $I_C = \beta I_B$. Se a temperatura sobe, $\beta$ aumenta, elevando $I_C$ e deslocando o ponto Q para a saturação. 

**Polarização Estabilizada no Emissor (Emitter-Stabilized)**
Introduz um resistor $R_E$ no terminal do emissor.
* **Mecanismo de Estabilidade:** Se $I_C$ aumenta (devido a temperatura ou troca de transistor), a corrente $I_E$ aumenta. Isto eleva a tensão $V_E=I_E~R_E$. Como $V_{BE} =V_B-V_E$, um aumento em $V_E$ reduz $V_{BE}$, o que por sua vez reduz $I_B$ e traz $I_C$ de volta ao valor original. É um feedback negativo DC.
* **Equação de Base:**
    $$I_B = \frac{V_{CC} - V_{BE}}{R_B + (\beta + 1)R_E}$$
    O termo $(\beta+1)R_E$ representa a impedância refletida do emissor para a base, aumentando a impedância de entrada. 

**Divisor de Tensão (Voltage-Divider Bias)**
A configuração padrão da indústria para amplificadores lineares. Utiliza $R_1$ e $R_2$ para fixar a tensão da base, tornando-a independente de $\beta$. 
* **Método Exato (Thévenin):** Reduz o circuito de base a uma fonte $E_{Th}$ e resistência $R_{Th}$.
    $$R_{Th}=R_1 || R_2, \quad E_{Th}=\frac{R_2~V_{CC}}{R_1+R_2}$$ 
* **Método Aproximado:** Válido se a impedância de entrada do transistor for muito maior que o divisor ($\beta R_E \ge 10 R_2$). Neste caso:
    $$V_B \approx \frac{R_2 V_{CC}}{R_1 + R_2}$$
    $$I_E = \frac{V_B-V_{BE}}{R_E}$$
    O ponto Q torna-se virtualmente independente do $\beta$ do transistor. 

## 4.2 Fatores de Estabilidade ($S$)
A estabilidade é quantificada pelos fatores $S$, que medem a sensibilidade de $I_C$ a variações nos parâmetros. 
* $S(I_{CO}) = \Delta I_C/ \Delta I_{CO}$
* $S(V_{BE}) = \Delta I_C/ \Delta V_{BE}$
* $S(\beta) = \Delta I_C/\Delta \beta$
O objetivo do design é minimizar estes fatores. A polarização por divisor de tensão com $R_E$ oferece os menores valores de $S$, garantindo robustez térmica. 

# 5. Análise AC de BJT: Modelação de Pequenos Sinais

No Capítulo 5, o foco muda para a amplificação de sinais alternados. O transistor é substituído por um modelo linear equivalente para calcular ganhos e impedâncias. 

## 5.1 O Modelo $r_e$
Boylestad privilegia o modelo $r_e$ pela sua ligação intuitiva às condições DC. O parâmetro central é a resistência dinâmica do emissor ($r_e$), derivada da física do díodo:
$$r_e = \frac{26\text{ mV}}{I_E (\text{DC})}$$
Isto demonstra que o ganho do amplificador ($A_v \propto 1/r_e$) depende diretamente da corrente de polarização DC. 

## 5.2 Parâmetros de Duas Portas
Qualquer amplificador é caracterizado por:
1.  **Impedância de Entrada ($Z_i$):** Resistência vista pela fonte.
2.  **Impedância de Saída ($Z_o$):** Resistência vista pela carga (com $v_i=0$).
3.  **Ganho de Tensão ($A_v$):** $V_o/V_i$. 

**Análise das Configurações Principais**

| Configuração | Impedância de Entrada ($Z_i$) | Impedância de Saída ($Z_o$) | Ganho de Tensão ($A_v$) | Notas Práticas |
| :--- | :--- | :--- | :--- | :--- |
| **Emissor Comum (Fixa)** | $\beta r_e$ | $R_C$ | $-R_C/r_e$ | Ganho alto, $Z_i$ moderada. Inversão de fase. |
| **Divisor de Tensão** | $R_1 \| R_2 \| \beta r_e$ | $R_C$ | $-R_C/r_e$ | Igual à fixa em AC, mas estável em DC. |
| **Emissor Comum com $R_E$** | $R_B \| \beta(r_e + R_E)$ | $R_C$ | $\approx -R_C/R_E$ | $R_E$ não desacoplado reduz o ganho mas aumenta a linearidade e $Z_i$. |
| **Seguidor de Emissor (CC)** | $R_B \| \beta(r_e + R_E)$ | $r_e \| R_E \approx r_e$ | $\approx 1$ | "Buffer". Transforma alta impedância em baixa. Sem inversão. |
| **Base Comum** | $R_E \| r_e$ | $R_C$ | $R_C/r_e$ | $Z_i$ muito baixa. Ótimo para RF. |

Nota: O sinal negativo em $A_v$ indica inversão de fase de $180^\circ$. 

## 5.3 Sistemas em Cascata e Darlington
* **Darlington:** Dois transistores ligados (coletor comum a coletor comum, emissor 1 a base 2) para fornecer um $\beta$ super-elevado ($\beta_D \approx \beta_1 \beta_2$). Resulta numa impedância de entrada altíssima. 
* **Cascode:** Combinação CE-CB usada para alta frequência, reduzindo o efeito Miller. 

# 6. Transistores de Efeito de Campo (FET): Teoria e Construção

Ao contrário do BJT (controlado por corrente), o FET é um dispositivo unipolar controlado por tensão. O campo elétrico gerado pela tensão de entrada modula a condutividade de um canal. A impedância de entrada é extremamente elevada ($M\Omega$ a $G\Omega$), uma vantagem crucial. 

## 6.1 JFET (Junction FET)
Construído com um canal (n ou p) e uma porta (Gate) que forma uma junção p-n inversa com o canal.
* **Operação:** Aplicar uma tensão inversa $V_{GS}$ alarga a região de depleção, estreitando o canal e reduzindo a corrente de dreno ($I_D$).
* **Equação de Shockley para JFET:**
    $$I_D = I_{DSS} \left(1-\frac{V_{GS}}{V_P} \right)^2$$
    * $I_{DSS}$: Corrente de saturação (máxima corrente quando $V_{GS}=0$).
    * $V_P$: Tensão de Pinch-off (corte), onde o canal fecha e $I_D=0$. 


## 6.2 MOSFET (Metal-Oxide-Semiconductor FET)
A Gate é isolada do canal por uma fina camada de dióxido de silício ($SiO_2$), eliminando a corrente de Gate ($I_G \approx 0$). 

* **D-MOSFET (Depleção):** Possui um canal físico. Pode operar em modo de depleção (como JFET) ou intensificação (atraindo mais portadores para o canal). Segue a mesma equação de Shockley do JFET. 
* **E-MOSFET (Intensificação):** Não tem canal físico inicial. Requer uma tensão $V_{GS}$ superior a um limiar ($V_T$ ou $V_{GS(Th)}$) para induzir um canal. A equação de corrente difere:
    $$I_D = k (V_{GS} - V_T)^2$$
    Onde $k$ é uma constante construtiva ($A/V^2$). 

# 7. Polarização de FETs

Dada a não linearidade quadrática dos FETs, a análise gráfica é a ferramenta preferencial no Capítulo 7. 

## 7.1 Métodos de Polarização para JFET e D-MOSFET
* **Polarização Fixa:** Uma fonte $V_{GG}$ fixa $V_{GS}$. Simples, mas requer duas fontes.
* **Autopolarização (Self-Bias):** Elimina a fonte $V_{GG}$. Um resistor $R_S$ na fonte cria a queda de tensão necessária.
    $$V_{GS} = -I_DR_S$$
    Esta equação linear é traçada sobre a curva de transferência (Shockley) para encontrar o ponto Q. 
* **Divisor de Tensão:** Similar ao BJT, fixa a tensão na Gate ($V_G$). A equação da malha é $V_{GS}=V_G-I_D~R_S$. 

## 7.2 Polarização de E-MOSFET
Requer $V_{GS} > V_T$.
* **Realimentação de Dreno (Drain-Feedback):** O resistor de Gate liga-se ao Dreno. Como $I_G=0$, $V_{GS}=V_{DS}$. Isto cria um ponto de operação estável, pois $V_{DS}$ ajusta-se automaticamente. 

# 8. Amplificadores FET

A análise de pequenos sinais para FETs (Capítulo 8) utiliza o parâmetro de transcondutância ($g_m$), que relaciona a saída de corrente com a entrada de tensão. 

## 8.1 Modelo AC e Transcondutância
O ganho do FET depende de $g_m$, que é a inclinação da curva de transferência no ponto Q:
$$g_m = \frac{\Delta I_D}{\Delta V_{GS}} \bigg|_Q$$
Matematicamente, para JFET/D-MOSFET:
$$g_m = g_{m0} \left(1-\frac{V_{GSQ}}{V_P} \right)$$
Onde $g_{m0}=\frac{2~I_{DSS}}{|V_P|}$ é o valor máximo. 

## 8.2 Análise das Configurações
* **Fonte Comum (CS):** Análogo ao Emissor Comum.
    * Ganho de Tensão: $A_v = -g_m (r_d || R_D)$.
    * Características: Alta $Z_i$ ($R_G$), inversão de fase de $180^\circ$. 
* **Seguidor de Fonte (Dreno Comum - CD):** Análogo ao Seguidor de Emissor.
    * Ganho de Tensão: $A_v=\frac{g_m~R_S}{1+g_m~R_S}<1$.
    * Uso: Buffer de impedância com $Z_i$ extremamente alta e baixa $Z_o$. 
* **Porta Comum (CG):**
    * Ganho de Tensão: $A_v=g_m R_D$ (Positivo).
    * Características: Baixa $Z_i$ ($1/g_m$). Usado para amplificação de alta frequência e estabilidade. 

# 9. Resposta em Frequência

Nenhum amplificador tem ganho constante para todas as frequências. O Capítulo 9 analisa os limites de banda. 

## 9.1 Baixa Frequência: Condensadores de Acoplamento
Em baixas frequências, a reatância dos condensadores externos ($C_S, C_C, C_E$) aumenta ($X_C=\frac{1}{2\pi~fC}$), bloqueando o sinal ou reduzindo o ganho (no caso do $C_E$). Cada condensador forma um filtro passa-alto com uma frequência de corte $f_L$. A maior destas frequências determina o limite inferior da largura de banda ($f_{L_{sistema}}$). 

## 9.2 Alta Frequência e Efeito Miller
Em altas frequências, os condensadores parasitas internos do transistor ($C_{be}, C_{bc}$, etc.) começam a desviar o sinal para a terra. 
* **Efeito Miller:** A capacitância de feedback entre entrada e saída ($C_{bc}$ no BJT ou $C_{gd}$ no FET) é amplificada pelo ganho do dispositivo.
    $$C_{M_{in}} = (1 - A_v) C_f$$
    Como $A_v$ é geralmente negativo e grande, $C_{M_{in}}$ torna-se enorme, criando um filtro passa-baixo na entrada que destrói a resposta em alta frequência. Este é o fator limitante principal em amplificadores de fonte/emissor comum. 

## 9.3 Gráficos de Bode
Ferramenta gráfica (dB vs. log frequência) usada para visualizar a resposta. As assíntotas caem a uma taxa de -20 dB/década (ou -6 dB/oitava) por cada polo no circuito. 

# 10. Amplificadores Operacionais (Op-Amps)

O Op-Amp (Capítulo 10) representa a evolução para circuitos integrados analógicos. É um amplificador diferencial de ganho extremamente elevado. 

## 10.1 Características
* **Ideal:** Ganho infinito ($A_{OL}$), Impedância de entrada infinita ($Z_i$), Impedância de saída zero ($Z_o$). 
* **Prático:** Ganho $\approx 100.000$, $Z_i$ em $M\Omega$. 
* **CMRR (Common-Mode Rejection Ratio):** A capacidade de rejeitar ruído presente em ambas as entradas. $\text{CMRR}=A_d/A_c$. Em dB, valores típicos > 90dB. 
* **Slew Rate (SR):** A velocidade máxima com que a saída pode variar ($\text{V}/\mu\text{s}$). Limita a amplitude em altas frequências. 

# 11. Aplicações de Amplificadores Operacionais

O Capítulo 11 explora como a realimentação negativa "domestica" o ganho infinito do Op-Amp para realizar funções precisas. 

## 11.1 Configurações Básicas
* **Inversor:** $A_v=-R_f/R_1$. A entrada não-inversora está na terra, criando uma "terra virtual" na entrada inversora. 
* **Não-Inversor:** $A_v=1+(R_f/R_1)$. A impedância de entrada é altíssima. 
* **Somador:** $V_o=-(\frac{R_f}{R_1}V_1+\frac{R_f}{R_2}V_2)$. Mistura sinais de áudio ou sensores. 
* **Seguidor de Tensão (Buffer):** $V_O=V_{in}$. Usado para isolar estágios de circuitos. 


## 11.2 Filtros Ativos
Combinando Op-Amps com R e C, criam-se filtros seletivos de frequência sem indutores.
* **Passa-Baixo/Alto de 1ª Ordem:** Frequência de corte definida por $f_c=\frac{1}{2\pi~R C}$.
    O Op-Amp fornece ganho e isolamento, permitindo o cascateamento de filtros para ordens superiores (decadência de -40, -60 dB/década). 

# Referência Técnica Auxiliar

## Glossário de Variáveis e Símbolos Gregos

| Símbolo | Nome | Significado no Contexto do Livro |
| :--- | :--- | :--- |
| $\alpha$ (alfa) | Alfa | Ganho de corrente em base comum ($I_C/I_E \approx 1$). |
| $\beta$ (beta) | Beta | Ganho de corrente em emissor comum ($I_C/I_B$). |
| $\Delta$ (delta) | Delta | Variação incremental (ex: $\Delta I_C$ na análise AC). |
| $\theta$ (teta) | Teta | Resistência térmica ou ângulo de fase. |
| $\mu$ (micro) | Micro | Prefixo $10^{-6}$ ou mobilidade de portadores ($\mu_n$). |
| $\omega$ (ómega) | Ómega | Frequência angular ($2\pi f$). |
| $\eta$ (eta) | Eta | Eficiência de conversão de potência. |

## Código de Cores de Resistores e Exemplo Prático
A leitura correta de resistores é pré-requisito para os exercícios do livro. 

| Cor | Valor | Multiplicador | Tolerância |
| :--- | :--- | :--- | :--- |
| Preto | 0 | $10^0$ | |
| Castanho | 1 | $10^1$ | $\pm 1\%$ |
| Vermelho | 2 | $10^2$ | $\pm 2\%$ |
| Laranja | 3 | $10^3$ | |
| Amarelo | 4 | $10^4$ | |
| Verde | 5 | $10^5$ | $\pm 0.5\%$ |
| Azul | 6 | $10^6$ | $\pm 0.25\%$ |
| Violeta | 7 | $10^7$ | $\pm 0.1\%$ |
| Cinzento | 8 | $10^8$ | |
| Branco | 9 | $10^9$ | |
| Ouro | | $0.1$ | $\pm 5\%$ |
| Prata | | $0.01$ | $\pm 10\%$ |

**Exemplo de Cálculo:** Um resistor com as faixas Amarelo, Violeta, Laranja, Ouro.
1.  Amarelo $=4$
2.  Violeta $=7$
3.  Laranja (Multiplicador) $=10^3$ ($1\text{k}$)
4.  Ouro (Tolerância) = $\pm 5\%$
**Resultado:** $47 \times 10^3 \Omega = 47\text{k}\Omega$ com tolerância de $\pm 5\%$. 

## Aplicação da Lei de Ohm e Kirchhoff em Transistores
A análise de circuitos (Caps 4 e 7) depende destas leis fundamentais. 

* **Lei de Ohm ($V=IR$):** Usada para calcular a tensão aos terminais do emissor. Se $I_E = 2\text{ mA}$ e $R_E = 1\text{ k}\Omega$, então $V_E= 2\text{V}$. 
* **Lei das Tensões de Kirchhoff (LTK):** Fundamental para derivar as equações de polarização.
    * Exemplo na Malha Base-Emissor: $\sum V=0 \Rightarrow V_{CC} - I_BR_B - V_{BE} - I_ER_E =0$.
    * Esta soma de quedas de tensão permite isolar $I_B$ e resolver o ponto Q do transistor. 