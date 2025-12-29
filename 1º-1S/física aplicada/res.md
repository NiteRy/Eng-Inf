# Capítulo 1: Díodos Semicondutores 

## 1.1 Introdução e Materiais Semicondutores 

A génese da eletrónica moderna reside na compreensão profunda dos materiais semicondutores. A transição das válvulas de vácuo para os dispositivos de estado sólido foi impulsionada pela necessidade de miniaturização, eficiência energética e robustez.  

Os materiais fundamentais explorados na literatura técnica, especificamente na obra de Boylestad e Nashelsky, são o Germânio (Ge), o Silício (Si) e o Arsenieto de Gálio (GaAs). 

O Silicio (Si) emergiu como o material dominante devido à sua abundância na crosta terrestre e à estabilidade térmica superior das suas características. Uma propriedade crucial do silício é a facilidade com que forma óxidos de alta qualidade (dióxido de silício), essenciais para o fabrico de circuitos integrados e dispositivos MOSFET.  

O Germânio (Ge), embora historicamente o primeiro a ser utilizado em transistores, sofre de uma elevada sensibilidade térmica e correntes de fuga significativas em polarização inversa, limitando a sua aplicação moderna a nichos específicos. 

O Arsenieto de Gálio (GaAs), um composto semicondutor III-V, distingue-se pelas velocidades de operação substancialmente superiores (até 5 vezes mais rápidas que o Si) devido à maior mobilidade dos eletrões, sendo vital para aplicações de alta frequência e optoeletrónica. 

A análise energética destes materiais é quantificada pela unidade eletrão-volt (eV), onde $1 \text{ eV} = 1.6 \times 10^{-19} \text{ Joules}$. Esta unidade facilita a compreensão dos saltos de energia entre a banda de valência e a banda de condução. A relação entre a energia ($W$), carga ($Q$) e potencial ($V$) é dada por $W = QV$.   

## 1.2 Ligação Covalente, Materiais Intrínsecos e Níveis de Energia 

A estrutura cristalina dos semicondutores é mantida por ligações covalentes. No zero absoluto ($0 \text{ K}$), um semicondutor intrínseco (puro) comporta-se como um isolador perfeito, pois todos os eletrões de valência estão presos nas ligações.  

À medida que a temperatura aumenta, a energia térmica fornece energia suficiente para que alguns eletrões quebrem estas ligações e saltem para a banda de condução, criando pares eletrão-lacuna. 

A dopagem, processo de introdução controlada de impurezas, altera drasticamente a condutividade: 

* **Tipo-n:** Introdução de átomos pentavalentes (dadores) como o Antimónio ou Fósforo. Estes átomos possuem cinco eletrões de valência; quatro ligam-se ao silício e o quinto fica fracamente ligado, tornando-se um eletrão livre na banda de condução.  
* **Tipo-p:** Introdução de átomos trivalentes (aceitadores) como o Boro ou Gálio. Estes criam uma "lacuna" na estrutura de ligações, que se comporta como uma carga positiva móvel.  

## 1.3 O Díodo Semicondutor e a Equação de Shockley 

A junção de um material tipo-p e um tipo-n cria o díodo semicondutor. Na interface, ocorre a difusão de portadores maioritários, resultando na recombinação de eletrões e lacunas e na formação de uma região de depleção. Esta região, desprovida de portadores livres, estabelece uma barreira de potencial que impede o fluxo contínuo de corrente.  

O comportamento da corrente no díodo sob polarização (directa ou inversa) é descrito matematicamente pela Equação de Shockley: 

$$I_D = I_s (e^{V_D/nV_T}-1)$$ 

Nesta expressão fundamental: 

* $I_D$ representa a corrente através do díodo. 
* $I_s$ (ou $I_x$ nalgumas notações do texto) é a corrente de saturação reversa, tipicamente na ordem dos nanoamperes ou picoamperes, devida aos portadores minoritários gerados termicamente. 
* $V_D$ é a tensão aplicada aos terminais do díodo. 
* $n$ é o fator de idealidade, variando entre 1 e 2 dependendo das condições de fabrico e níveis de corrente. 
* $V_T$ é a tensão térmica, uma variável crítica dependente da temperatura. 

A tensão térmica é definida por:
$$V_T = \frac{kT}{q}$$  

Onde:
* $k$ é a constante de Boltzmann ($1.38 \times 10^{-23} \text{ J/K}$).  
* $T$ é a temperatura absoluta em Kelvin ($T_K=T_C+273^\circ$). 
* $q$ é a magnitude da carga do eletrão ($1.6 \times 10^{-19} \text{ C}$). 

A sensibilidade térmica é uma característica intrínseca. Por exemplo, a corrente de saturação reversa $I_s$ aproximadamente duplica por cada incremento de $10^\circ \text{C}$ na temperatura. 

A tensão de joelho ($V_K$), ou tensão de limiar, é o ponto onde a condução directa se torna significativa. Os valores típicos são:  

* Silicio (Si): $V_K \cong 0.7 \text{V}$
* Germânio (Ge): $V_K \cong 0.3 \text{V}$
* Arsenieto de Gálio (GaAs): $V_K \cong 1.2 \text{V}$  

## 1.4 Níveis de Resistência e Circuitos Equivalentes 

Dada a natureza não linear da curva característica $I-V$ do díodo, a resistência não é um valor fixo, mas sim dependente do ponto de operação. O texto define três tipos distintos de resistência:  

1.  **Resistência DC ou Estática ($R_D$):** Aplica-se a sinais contínuos. É a resistência num ponto específico da curva, definida pela razão da tensão total pela corrente total nesse ponto:  
    $$R_D = \frac{V_D}{I_D}$$ 
    Esta resistência diminui tipicamente com o aumento da corrente ou tensão na região de condução. 

2.  **Resistência AC ou Dinâmica ($r_d$):** Aplica-se a pequenos sinais alternados. Representa a inclinação da tangente à curva no ponto de operação (ponto Q). Derivada da equação de Shockley, a temperatura ambiente ($25^\circ \text{C}$), aproxima-se por:  
    $$r_d = \frac{26 \text{ mV}}{I_D}$$ 
    Esta fórmula revela que a resistência dinâmica é inversamente proporcional à corrente de polarização DC. 

3.  **Resistência AC Média ($r_{av}$):** Utilizada quando o sinal de entrada é suficientemente grande para varrer uma secção considerável da curva não linear. É calculada ponto-a-ponto:  
    $$r_{av} = \frac{\Delta V_d}{\Delta I_d} \bigg|_{pt. a pt.}$$ 

Para efeitos de modelação em circuitos, utilizam-se circuitos equivalentes. O modelo mais simples é o do interruptor ideal. O modelo prático adiciona uma fonte de tensão em série representando $V_K$. O modelo completo inclui a resistência dinâmica $r_{av}$ e a fonte $V_K$.  

A potência dissipada pelo díodo é calculada como $P_D=V_D~I_D$. 

## 1.5 Capacitância e Tempos de Recuperação 

O díodo exibe propriedades capacitivas parasitas que afetam a sua resposta em frequência: 
* **Capacidade de Transição ($C_T$):** Predominante na polarização inversa, devida à variação da largura da região de depleção com a tensão (efeito varactor).
* **Capacidade de Difusão ($C_D$):** Predominante na polarização directa, associada ao armazenamento de carga de portadores minoritários perto da junção. 

O Tempo de Recuperação Inversa ($t_{rr}$) é o tempo necessário para o díodo comutar do estado de condução para o de não-condução. Este parâmetro limita a frequência máxima de operação em retificação e comutação.  

## 1.6 Díodos Zener e Emissores de Luz (LED) 

O Díodo Zener explora a região de rutura reversa. Ao contrário dos díodos convencionais que seriam destruídos, o Zener é projetado para operar nesta região, mantendo uma tensão estável ($V_Z$) através de uma vasta gama de correntes. 

A estabilidade térmica é quantificada pelo Coeficiente de Temperatura ($T_C$): 
$$T_C = \frac{\Delta V_Z/V_Z}{T_1-T_O} \times 100\%/^\circ\text{C}$$ 

Os LEDs emitem luz através da recombinação radiativa de eletrões e lacunas. A cor depende do gap de energia do material (e.g., GaP, GaAsP).  

### Glossário do Capítulo 1 

| Termo/Conceito | Definição Detalhada e Contexto | Exemplo Prático / Valor Típico |
| :--- | :--- | :--- |
| Semicondutor | Material com condutividade entre condutor e isolador, manipulável por dopagem. | Si, Ge, GaAs. |
| Dopagem | Adição de impurezas para alterar propriedades elétricas. | Adicionar Fósforo ao Si para criar tipo-n. |
| Tensão de Joelho ($V_K$) | Potencial de barreira que deve ser vencido para condução directa. | Si: $0.7\text{ V}$; Ge: $0.3\text{ V}$; GaAs: $1.2\text{V}$. |
| $V_T$ (Tensão Térmica) | Tensão equivalente à energia térmica dos portadores. | $V_T=kT/q \approx 26\text{ mV}$ a $25^\circ\text{C}$. |
| $I_s$ (Corrente de Saturação) | Corrente de fuga em polarização inversa devida a minoritários. | Tipicamente $10^{-9}\text{ A}$ a $10^{-12}\text{ A}$. |
| Resistência Dinâmica ($r_d$) | Resistência AC para pequenos sinais ($26\text{ mV}/I_D$). | Se $I_D=26\text{ mA}$, então $r_d=1 \Omega$. |
| Lei de Ohm (Local) | $R=V/I$. Aplicável a resistências estáticas e dinâmicas localmente. | $R_{DC}=0.7\text{ V} / 10\text{ mA} = 70 \Omega$. |
| Símbolo: $\eta$ (Eta) | Fator de idealidade na eq. de Shockley. | $\eta=1$ para Ge; $\eta=2$ para Si (baixa corrente). |
| Unidade: eV | Energia ganha por um eletrão a passar 1V de potencial. | $1\text{ eV} = 1.6 \times 10^{-19}\text{ J}$. |
| Unidade: Kelvin (K) | Unidade de temperatura termodinâmica. | $0^\circ\text{C}=273\text{ K}$. |

 

---

# Capítulo 2: Aplicações de Díodos 

## 2.1 Análise da Reta de Carga 

A análise da reta de carga é uma ferramenta gráfica fundamental para visualizar o ponto de operação de um dispositivo não linear (o díodo) num circuito linear. Considere-se um circuito série com uma fonte DC $E$, uma resistência $R$ e um díodo. A Lei das Malhas de Kirchhoff (KVL) dita que:  

$$E - V_D - I_D R = 0$$ 

Reorganizando para a forma $y=mx+b$, obtemos a equação da reta de carga: 
$$I_D = -\frac{1}{R}V_D + \frac{E}{R}$$ 

A interseção desta reta linear com a curva exponencial característica do díodo determina o Ponto Quiescente (Ponto Q), definindo os valores exatos de $I_{DQ}$ e $V_{DQ}$. 

## 2.2 Configurações Série, Paralelo e Série-Paralelo 

A análise destas configurações exige determinar o estado (ON ou OFF) de cada díodo. 

* **Procedimento de Análise:** Mentalmente substitui-se o díodo por um resistor ou curto-circuito e verifica-se a direção da corrente. Se a corrente fluir na direção da seta do símbolo do díodo, e a tensão aos seus terminais for superior a $V_K$, o díodo está ΟΝ.  
* **Configuração Série:** A corrente é a mesma em todos os componentes. Se a fonte $E > V_K$, a corrente é $I=(E-V_K)/R$.  
* **Configuração Paralelo:** A tensão é a mesma. Se díodos de materiais diferentes (ex: Si e Ge) estiverem em paralelo, o díodo com menor $V_K$ (Ge, $0.3\text{ V}$) "prende" a tensão nesse nível, impedindo o díodo de Si ($0.7\text{V}$) de conduzir corrente significativa, assumindo um modelo idealizado. 

## 2.3 Portas Lógicas (AND/OR) 

Díodos podem implementar lógica booleana simples: 

* **Porta OR:** Saída alta se qualquer entrada for alta (diodo conduz do nível alto para a saída). 
* **Porta AND:** Saída alta apenas se todas as entradas forem altas. Se alguma entrada for baixa, o díodo correspondente conduz para a terra, baixando a tensão de saída.  

## 2.4 Retificação de Meia-Onda e Onda Completa 

A retificação é a conversão de sinais AC (sinusoidais) em sinais pulsantes DC. 

1.  **Retificador de Meia-Onda:** Um único díodo bloqueia o semiciclo negativo da entrada.
    * Valor médio (DC): $V_{dc} = 0.318~V_m$ (onde $V_m$ é o pico da tensão de entrada).  
    * Considerando a queda no díodo: $V_{dc} \approx 0.318(V_m-V_K)$. 

2.  **Retificador de Onda Completa:** Aproveita ambos os semiciclos, invertendo a polaridade do semiciclo negativo. 
    * **Ponte de Graetz:** Usa 4 díodos. Não requer transformador com tomada central.
    * **Transformador com Tomada Central (Center-Tapped):** Usa 2 díodos. 
    * Valor médio (DC): $V_{dc} = 0.636~V_m$. 
    * A frequência do sinal de saída é $2 \times f_{entrada}$. 

## 2.5 Limitadores (Clippers) e Fixadores (Clampers) 

* **Limitadores:** Circuitos desenhados para "ceifar" ou eliminar porções do sinal acima ou abaixo de um nível de referência, sem distorcer a forma de onda restante. Podem ser configurados em série ou paralelo, com ou sem fontes de polarização para ajustar o nível de corte.  
* **Fixadores:** Também conhecidos como restauradores DC. Adicionam um nível DC a um sinal AC, deslocando-o para cima ou para baixo. O circuito requer um condensador, um díodo e uma resistência. A constante de tempo $\tau = RC$ deve ser suficientemente grande ($> 5T$) para que o condensador não descarregue significativamente durante o período de não-condução do díodo, mantendo a tensão de deslocamento constante.  

## 2.6 Díodos Zener e Multiplicadores de Tensão 

* **Regulação Zener:** Em polarização inversa, o Zener mantém $V_Z$ constante desde que a corrente $I_Z$ se mantenha entre $I_{ZK}$ (joelho) e $I_{ZM}$ (máximo). Usado como referência de tensão ou regulador simples em paralelo com a carga.  
* **Multiplicadores de Tensão:** Circuitos (dobrador, triplicador, quadruplicador) que usam redes de díodos e condensadores para gerar altas tensões DC a partir de uma tensão de pico AC menor ($V_m$). O dobrador de meia-onda, por exemplo, carrega um condensador para $V_m$ num semiciclo e soma essa tensão à entrada no próximo, resultando em $2V_m$.  

### Glossário do Capítulo 2 

| Termo/Conceito | Definição Detalhada e Contexto | Exemplo Prático / Fórmula |
| :--- | :--- | :--- |
| Reta de Carga | Representação linear das restrições do circuito ($V=E-iR$) sobreposta à curva do dispositivo. | Interseção = Ponto Q. |
| PIV (Peak Inverse Voltage) | Tensão Inversa de Pico. A máxima tensão reversa que o díodo suporta sem conduzir ou destruir-se. | Num retificador de meia-onda, PIV $\ge V_m$. |
| $V_{dc}$ (Valor Médio) | Componente DC de uma forma de onda. Equivalente à leitura de um voltímetro DC. | Meia-onda: $0.318 V_m$. Onda completa: $0.636 V_m$. |
| Limitador (Clipper) | Circuito que limita a amplitude do sinal. | Proteção de entradas de microcontroladores contra sobretensão. |
| Fixador (Clamper) | Circuito que altera o nível DC do sinal. | Restauradores de nivel de preto em vídeo analógico. |
| Regulação de Tensão | Capacidade de manter a tensão de saída constante apesar de variações na entrada ou na carga. | Fonte Zener básica: $V_L \approx V_Z$. |
| Ponte Retificadora | Configuração de 4 díodos para retificação de onda completa. | Usa-se em quase todas as fontes de alimentação lineares. |
| Lei de Kirchhoff (Tensão) | A soma algébrica das tensões numa malha é zero. | Essencial para derivar equações de clippers e clampers. |


---

# Capítulo 3: Transistores de Junção Bipolar (BJT) 

## 3.1 Construção e Operação do Transistor 

O BJT é um dispositivo semicondutor de três terminais (Emissor, Base, Coletor) e três camadas, existindo nas configurações npn e pnp. A camada central (Base) é fisicamente muito estreita e levemente dopada em comparação com o Emissor (fortemente dopado) e o Coletor.  

A operação na região ativa (amplificação) requer: 
1.  Junção Base-Emissor (JBE) polarizada diretamente. 
2.  Junção Base-Coletor (JBC) polarizada inversamente. 

Nesta configuração, os portadores maioritários são injetados do emissor para a base. Devido à base ser fina, a maioria difunde-se através dela sem se recombinar e é varrida pelo campo elétrico da junção JBC para o coletor.  

As correntes fundamentais relacionam-se por:
$$I_E = I_C + I_B$$  

A corrente de coletor tem duas componentes: a corrente de portadores maioritários e a corrente de fuga de minoritários ($I_{CO}$):
$$I_C = I_{C_{maioritarios}} + I_{CO_{minoritarios}}$$  

## 3.2 Configurações: Base Comum, Emissor Comum e Coletor Comum 

1.  **Base Comum (CB):**
    * Entrada no Emissor, saída no Coletor. 
    * O ganho de corrente $\alpha_{dc}$ é a razão $I_C/I_E$. Como $I_C < I_E$, $\alpha < 1$ (tipicamente 0.90 a 0.998). 
    * Equação: $I_C = \alpha I_E + I_{CBO}$. 
    * Características: Baixa impedância de entrada, alta impedância de saída, excelente resposta em alta frequência. 

2.  **Emissor Comum (CE):** 
    * A configuração mais utilizada para amplificação. Entrada na Base, saída no Coletor. 
    * O ganho de corrente $\beta_{dc}$ é a razão $I_C/I_B$. Valores típicos de $\beta$ variam de 50 a 400. 
    * Equações: $I_C = \beta I_B$ e $I_E = (\beta + 1)I_B$. 
    * Características: Elevado ganho de corrente e tensão, inversão de fase de $180^\circ$. 

3.  **Coletor Comum (CC) / Seguidor de Emissor:** 
    * Entrada na Base, saída no Emissor. 
    * Características: Ganho de tensão $\approx 1$, alta impedância de entrada, baixa impedância de saída. Usado como buffer de impedância. 

## 3.3 Relações Matemáticas entre Parâmetros 

As constantes $\alpha$ e $\beta$ estão intrinsecamente ligadas pelas fórmulas de conversão:
$$\alpha = \frac{\beta}{\beta + 1} \quad \text{e} \quad \beta = \frac{\alpha}{1-\alpha}$$  

A corrente de fuga na configuração emissor comum ($I_{CEO}$) relaciona-se com a da base comum ($I_{CBO}$) por:
$$I_{CEO} = \frac{I_{CBO}}{1-\alpha} = (\beta + 1)I_{CBO}$$  

Isto demonstra porque a estabilidade térmica é crítica em CE: a corrente de fuga é amplificada pelo fator $\beta$.  

## 3.4 Limites de Operação e Especificações 

Cada transistor possui uma Área de Operação Segura (SOA) definida por: 
1.  Corrente máxima de coletor ($I_{C_{max}}$). 
2.  Tensão máxima coletor-emissor ($V_{CE_{max}}$). 
3.  Dissipação máxima de potência ($P_{C_{max}}$), que define uma hipérbole no gráfico $I_C$ vs $V_{CE}$:
    $$P_{C_{max}} = V_{CE} I_C$$  

### Glossário do Capítulo 3 

| Termo/Conceito | Definição Detalhada e Contexto | Exemplo / Símbolo |
| :--- | :--- | :--- |
| BJT | Transistor de Junção Bipolar. "Bipolar" refere-se à condução por lacunas e eletrões. | 2N2222 (npn), 2N2907 (pnp). |
| Alpha ($\alpha$) | Ganho de corrente DC em configuração Base Comum. Eficiência de transferência de corrente E $\to$ C. | $\alpha = 0.99$. |
| Beta ($\beta$ ou $h_{FE}$) | Ganho de corrente DC em configuração Emissor Comum. Fator de amplificação. | $\beta=100$. |
| Corrente de Fuga ($I_{CBO}$) | Corrente Coletor-Base com Emissor aberto. Sensível à temperatura, dobra a cada $10^\circ\text{C}$. | Tipicamente nA ou $\mu\text{A}$. |
| Região Ativa | Zona linear de operação para amplificadores. | $JBE$ direta, $JBC$ inversa. |
| Saturação | Região de "curto-circuito" ($V_{CE} \approx 0.2\text{ V}$). Corrente limitada pelo circuito externo. | Interruptor fechado. |
| Corte (Cutoff) | Região de "circuito aberto" ($I_C \approx 0$). | Interruptor aberto. |
| $V_{CE(sat)}$ | Tensão Coletor-Emissor na saturação. | $\approx 0.2\text{V}$ (Si). |

 

---

# Capítulo 4: Polarização DC de BJTs 

## 4.1 O Ponto de Operação e a Necessidade de Polarização 

A polarização DC tem como objetivo estabelecer um ponto quiescente (Ponto Q) fixo nas curvas características do transistor ($I_{CQ}, V_{CEQ}$), garantindo que o dispositivo opere na região ativa linear. A estabilidade deste ponto contra variações de temperatura e dispersão do parâmetro $\beta$ é o critério principal de design. Assume-se geralmente $V_{BE} = 0.7\text{V}$.  

## 4.2 Configuração de Polarização Fixa 

Esta é a configuração mais simples, mas a mais instável termicamente. 
* Corrente de Base: $I_B = (V_{CC}-V_{BE})/R_B$. 
* Tensão Coletor-Emissor: $V_{CE} = V_{CC}-I_C~R_C$. 
* Corrente de Saturação: $I_{C_{sat}} = V_{CC}/R_C$. 
* Problema: $I_C = \beta I_B$. Como $I_B$ é fixo, qualquer variação em $\beta$ (por temperatura ou troca de componente) altera diretamente $I_C$, deslocando o ponto Q.  

## 4.3 Configuração de Polarização Estabilizada no Emissor 

A introdução de uma resistência no emissor ($R_E$) fornece realimentação negativa DC, melhorando a estabilidade. 
* Corrente de Base:
    $$I_B = \frac{V_{CC}-V_{BE}}{R_B+(\beta+1)R_E}$$ 
* Impedância de Entrada DC: $R_i=(\beta+1)R_E$. A resistência de emissor vista da base parece multiplicada por $(\beta+1)$.  
* Tensão de Saída: $V_{CE} = V_{CC}-I_C(R_C+R_E)$. 
* Saturação: $I_{C_{sat}} = V_{CC}/(R_C+R_E)$. 

## 4.4 Polarização por Divisor de Tensão 

Esta configuração é amplamente utilizada devido à sua elevada estabilidade (independência de $\beta$). Um divisor resistivo ($R_1, R_2$) fixa a tensão na base.  

* **Análise Exata:** Usa o Equivalente de Thévenin. 
    * $R_{Th} = R_1 || R_2$ e $E_{Th} = \frac{R_2 V_{CC}}{R_1 + R_2}$.  
    * $I_B = \frac{E_{Th} - V_{BE}}{R_{Th} + (\beta + 1)R_E}$. 
* **Análise Aproximada:** Válida se a impedância de entrada vista da base for muito maior que a do divisor ($\beta R_E \ge 10 R_2$).  
    * $V_B \approx \frac{R_2 V_{CC}}{R_1 + R_2}$. 
    * $V_E = V_B - V_{BE}$. 
    * $I_C \cong I_E = V_E/R_E$. Aqui, $I_C$ depende quase exclusivamente de resistências externas e $V_{CC}$, não de $\beta$.  

## 4.5 Configurações de Realimentação e Base Comum 

* **Realimentação de Tensão:** O resistor $R_B$ é ligado ao coletor e não à fonte. Se $I_C$ aumenta, $V_C$ diminui, reduzindo a corrente em $R_B$ e contrariando o aumento.  
    * $I_B = \frac{V_{CC}-V_{BE}}{R_B+\beta(R_C+R_E)}$. 
* **Base Comum:** Usada em altas frequências. 
    * $I_B = (V_{EE} - V_{BE}) / R_E$. 

## 4.6 Transistores de Comutação e Fatores de Estabilidade 

Em circuitos digitais, o transistor alterna entre corte e saturação. Os tempos de resposta são críticos: 
* $t_{on} = t_r + t_d$ (tempo de subida + atraso). 
* $t_{off} = t_s + t_f$ (tempo de armazenamento + descida). 

A estabilidade ($S$) é definida pela variação de $I_C$ em relação a parâmetros instáveis:
* $S(I_{CO}) = \Delta I_C/\Delta I_{CO}$. Para polarização fixa, $S(I_{CO}) = \beta+1$ (má estabilidade).  
* Para divisor de tensão, o valor é muito menor (melhor estabilidade). $S(V_{BE})$ e $S(\beta)$ medem a sensibilidade a $V_{BE}$ e $\beta$, respetivamente. 

### Glossário do Capítulo 4 

| Termo/Conceito | Definição Detalhada e Contexto | Exemplo / Fórmula |
| :--- | :--- | :--- |
| Ponto Q (Quiescente) | Ponto de operação DC ($I_{CQ}, V_{CEQ}$) sem sinal AC. | Localização central na reta de carga para máxima excursão. |
| Estabilidade ($\beta$) | Independência do circuito face a variações de $\beta$. | Divisor de tensão é "$\beta$-independente". |
| Realimentação Negativa | Mecanismo onde o efeito (saida) contraria a causa (entrada), estabilizando o sistema. | Resistor $R_E$. |
| Equivalente de Thévenin | Redução de um circuito complexo a uma fonte de tensão ($E_{Th}$) e resistência série ($R_{Th}$). | Usado na análise exata do divisor de tensão. |
| Saturação ($I_{C_{sat}}$) | Máxima corrente teórica que o circuito permite (com $V_{CE}=0$) | $V_{CC}/(R_C+R_E)$. |
| Fator de Estabilidade $S$ | Quanto menor, melhor. Idealmente $S=1$. | $S(I_{CO})$ mede amplificação da corrente de fuga. |

 

---

# Capítulo 5: Análise AC de BJT 

## 5.1 O Modelo $r_e$ do Transistor 

Para análise de pequenos sinais AC, substitui-se o transistor por um circuito linear equivalente. O modelo $r_e$ é amplamente adotado pela sua ligação direta às condições DC.  
O parâmetro fundamental é a resistência dinâmica do emissor ($r_e$), definida pela derivada da curva do díodo base-emissor à temperatura ambiente: 
$$r_e = \frac{26 \text{ mV}}{I_E}$$ 
Isto demonstra que a resposta AC depende intrinsecamente da corrente de polarização DC ($I_E$).  

## 5.2 Configuração de Emissor Comum (CE) 

* **Polarização Fixa:**
    * Impedância de Entrada ($Z_i$): $Z_i \cong \beta r_e$. 
    * Impedância de Saída ($Z_o$): $Z_o \cong R_C$. 
    * Ganho de Tensão ($A_v$): $A_v = -R_C/r_e$. O sinal negativo denota uma defasagem de $180^\circ$. 
* **Divisor de Tensão:** As fórmulas AC são idênticas às da polarização fixa (o divisor resistivo afeta a entrada em paralelo com $Z_i$, mas o modelo do transistor domina).
    $Z_i = R_1 || R_2 || \beta r_e$.  
* **Emissor Estabilizado (com $R_E$ não derivado):** A presença de $R_E$ aumenta drasticamente a impedância de entrada mas reduz o ganho (efeito de degeneração). 
    * $Z_i \cong R_B || \beta R_E$ (assumindo $\beta R_E \gg \beta r_e$).  
    * $A_v \cong -R_C/R_E$. Note-se a alta linearidade e estabilidade: o ganho depende apenas da razão de resistores externos. 

## 5.3 Configurações Coletor Comum e Base Comum 

* **Seguidor de Emissor (Coletor Comum):** O sinal é retirado do emissor. 
    * $Z_i \cong R_B || \beta R_E$. 
    * $Z_o = r_e$ (muito baixa, ideal para conduzir cargas). 
    * $A_v \cong 1$ (não amplifica tensão, apenas corrente/potência). 
* **Base Comum:** 
    * $Z_i \cong R_E || r_e$ (extremamente baixa).  
    * $A_v \cong R_C/r_e$ (alto ganho, sem inversão de fase). 

## 5.4 Efeitos de Impedância e Sistemas Compostos 

* **Carga e Fonte:** A impedância de carga $R_L$ reduz o ganho total ($R_C$ torna-se $R_C || R_L$). A impedância da fonte $R_s$ forma um divisor com $Z_i$, atenuando o sinal de entrada.  
* **Conexão Darlington:** Dois transistores em cascata direta (coletores juntos, emissor do primeiro na base do segundo) formam um "super transistor" com $\beta_D = \beta_1 \beta_2$. Oferece impedância de entrada muito elevada. $Z_i = R_B || \beta_D R_E$.  281, 
* **Conexão Cascode:** Um CE seguido de um CB. Melhora a largura de banda (reduz efeito Miller) e proporciona alto ganho. $A_v = A_{v1} A_{v2}$.  

### Glossário do Capítulo 5 

| Termo/Conceito | Definição Detalhada e Contexto | Fórmulas Úteis |
| :--- | :--- | :--- |
| Modelo $r_e$ | Modelo AC onde a junção BE é uma resistência $r_e$ e a saída é uma fonte de corrente $\beta I_b$. | $r_e = 26\text{ mV} / I_{E_{DC}}$. |
| $Z_i$ (Impedância de Entrada) | Resistência vista pela fonte de sinal AC. | CE: média ($k\Omega$); CC: alta; CB: baixa ($\Omega$). |
| $Z_o$ (Impedância de Saida) | Resistência vista pela carga. | Importante para o teorema da máxima transferência de potência. |
| Ganho de Tensão ($A_v$) | Razão entre a tensão de saída e a de entrada AC ($V_O/V_i$) | $A_v=-R_C/r_e$ (CE Fixo). |
| Condensador de Desvio | Condensador ($C_E$) em paralelo com $R_E$. Curto-circuita $R_E$ em AC para aumentar o ganho sem afetar o ponto Q DC. | $X_{C_E} || R_E$. |
| Darlington | Par de transistores para ganho de corrente ultra-elevado. | $\beta_{total} \approx \beta^2$. |
| Teorema de Miller | Permite dividir impedâncias de feedback entre entrada e saída. | Capacidade Miller $C_M = (1-A_V)C_f$. |

 

---

# Capítulo 6: Transistores de Efeito de Campo (FET) 

## 6.1 Introdução e Comparação com BJT 

O FET é um dispositivo unipolar (condução apenas por um tipo de portador) controlado por tensão, ao contrário do BJT que é controlado por corrente. A principal vantagem do FET é a sua impedância de entrada extremamente elevada ($I_G \approx 0$).  

## 6.2 JFET (Junction Field-Effect Transistor) 

O JFET opera através do controlo da largura de um canal condutor (n ou p) por um campo elétrico gerado pela tensão na porta (Gate). A junção Gate-Source é sempre polarizada inversamente.  

A relação entre a corrente de dreno ($I_D$) e a tensão Gate-Source ($V_{GS}$) é dada pela Equação de Shockley: 
$$I_D = I_{DSS} \left(1-\frac{V_{GS}}{V_P} \right)^2$$ 

* $I_{DSS}$: Corrente de saturação Dreno-Fonte (corrente máxima com $V_{GS}=0$). 
* $V_P$: Tensão de Pinch-off (corte), onde o canal fecha e $I_D=0$. 
* Relação importante: Se $V_{GS}=V_P/2$, então $I_D=I_{DSS}/4$. 

## 6.3 MOSFETs (Metal-Oxide-Semiconductor FET) 

Nestes dispositivos, a Gate é isolada do canal por uma camada de dióxido de silício ($SiO_2$), resultando numa impedância de entrada ainda maior que no JFET.  

1.  **Tipo Depleção (D-MOSFET):** Possui um canal físico. Pode operar em modo de depleção (como JFET) ou enriquecimento (aumentando $I_D$ acima de $I_{DSS}$). A equação de Shockley aplica-se.  
2.  **Tipo Enriquecimento (E-MOSFET):** Não possui canal fisico. O canal é induzido aplicando tensão na Gate. Só conduz quando $V_{GS}$ excede a tensão de limiar ($V_T$).  
    * Equação: $I_D = k(V_{GS}-V_T)^2$. 
    * Constante $k$: Determinada por um ponto de operação ON ($k = I_{D(on)} / (V_{GS(on)}-V_T)^2$). 
    * A potência dissipada é $P_D = V_{DS} I_D$. A resistência dinâmica de saída é $r_d = r_o/(1-V_{GS}/V_P)^2$.  

### Glossário do Capítulo 6 

| Termo/Conceito | Definição Detalhada e Contexto | Símbolos/Fórmulas |
| :--- | :--- | :--- |
| JFET | FET de junção. Opera por estrangulamento do canal via depleção. | Canal-n e Canal-p. |
| $I_{DSS}$ | Corrente de dreno com Gate em curto com a Source. Parâmetro máximo do JFET. | Especificação de folha de dados. |
| Tensão de Pinch-off ($V_P$) | Tensão $V_{GS}$ que corta o fluxo de corrente. | Numericamente igual a $V_{GS(off)}$. |
| MOSFET | FET de porta isolada. Base da tecnologia digital moderna (CMOS). | Metal-Oxide-Semiconductor. |
| Modo Depleção | Operação onde $V_{GS}$ reduz a corrente do canal. | Típico de JFET e D-MOSFET. |
| Modo Enriquecimento | Operação onde $V_{GS}$ atrai portadores para formar/alargar o canal. | Típico de E-MOSFET. |
| CMOS | Complementary MOS. Usa pares PMOS e nMOS. Consumo estático quase nulo. | Base de CPUs e memórias. |



---

# Capítulo 7: Polarização de FET 

## 7.1 Métodos de Polarização de JFET e D-MOSFET 

Devido à relação não-linear (quadrática) entre $I_D$ e $V_{GS}$, a análise gráfica é frequentemente preferida à algébrica. O ponto Q é a interseção da curva de transferência (Shockley) com a reta de carga do circuito de polarização.  

1.  **Polarização Fixa:** Uma fonte DC ($V_{GG}$) é aplicada diretamente à Gate.
    * $V_{GS} = -V_{GG}$. 
    * $V_{DS} = V_{DD} - I_D R_D$. 
    * Simples, mas pouco flexível. 
2.  **Autopolarização (Self-Bias):** Elimina a fonte $V_{GG}$. Usa um resistor na fonte ($R_S$). A corrente $I_D$ fluindo por $R_S$ cria a tensão de polarização.
    * $V_G = 0$, $V_S = I_D R_S$.  
    * $V_{GS} = -I_D R_S$. 
    * A reta de polarização passa na origem com declive $-1/R_S$. 
3.  **Divisor de Tensão:** Fixa a tensão de Gate ($V_G$) com um divisor resistivo.
    * $V_G = \frac{R_2 V_{DD}}{R_1+R_2}$. 
    * $V_{GS} = V_G - I_D R_S$. 
    * Oferece a melhor estabilidade contra variações de parâmetros do dispositivo. 

## 7.2 Polarização de E-MOSFET 

Como $V_{GS}$ deve ser positivo (para canal-n) e maior que $V_T$, a autopolarização não funciona diretamente. 
* **Realimentação de Dreno:** A Gate é ligada ao Dreno através de uma resistência elevada. Como $I_G = 0$, $V_{GS} = V_{DS}$. 
* $V_{DS} = V_{DD} - I_D R_D$. 
* O ponto de operação é a interseção desta reta com a curva característica $I_D = k(V_{GS}-V_T)^2$. 

### Glossário do Capítulo 7 

| Termo/Conceito | Definição Detalhada e Contexto |
| :--- | :--- |
| Curva Universal de Polarização | Uma ferramenta gráfica normalizada que permite resolver problemas de polarização para qualquer JFET usando parâmetros normalizados $m$ e $M$. |
| Reta de Polarização | A linha reta definida pelos resistores do circuito ($R_S$, divisor). A sua interseção com a curva do dispositivo define o Ponto Q. |
| Estabilidade de Ponto Q | Em FETs, o parâmetro $I_{DSS}$ varia muito entre componentes. A polarização por divisor de tensão ou autopolarização com grande $R_S$ minimiza este efeito. |
| Feedback de Tensão | Técnica usada em E-MOSFETs ($V_G$ ligado a $V_D$) para garantir que o dispositivo está na região ativa (saturação). |

 

---

# Capítulo 8: Amplificadores FET 

## 8.1 O Modelo AC de Pequeno Sinal 

Tal como no BJT, o FET é modelado para pequenos sinais. O parâmetro chave é a Transcondutância ($g_m$), que relaciona a variação da corrente de saída com a tensão de entrada:  
$$g_m = \frac{\Delta I_D}{\Delta V_{GS}}$$  

A transcondutância depende do ponto de operação Q:
$$g_m = g_{m0} \left(1-\frac{V_{GS}}{V_P} \right)$$ 
onde $g_{m0} = 2 I_{DSS} / |V_P|$ é o valor máximo. 

O modelo equivalente consiste numa fonte de corrente $g_m V_{gs}$ em paralelo com a resistência interna de saída $r_d$. A entrada é um circuito aberto (impedância infinita).  

## 8.2 Configurações de Amplificadores 

1.  **Fonte Comum (CS):** 
    * Configuração com polarização fixa: $Z_i = R_G$, $A_v = -g_m R_D$ (se $r_d$ for ignorado). 
    * Com autopolarização (com bypass em $R_S$): $Z_i = R_G$, $A_v = -g_m R_D$. Se $R_S$ não tiver bypass, o ganho diminui devido à realimentação negativa, mas a estabilidade e linearidade aumentam. 
2.  **Seguidor de Fonte (Dreno Comum):** 
    * A saída segue a entrada ($A_v < 1$). 
    * $Z_i$ extremamente alta, $Z_o$ baixa ($R_S || 1/g_m$).  
    * $A_v \cong \frac{g_m R_S}{1 + g_m R_S}$. 
3.  **Gate Comum:** 
    * Entrada na Source, saída no Dreno. 
    * Baixa impedância de entrada ($Z_i = R_S || 1/g_m$). 
    * Bom ganho de tensão sem inversão ($A_v = g_m R_D$). Ideal para amplificadores de RF.  

### Glossário do Capítulo 8 

| Termo/Conceito | Definição Detalhada e Contexto | Símbolo/Unidade |
| :--- | :--- | :--- |
| Transcondutância ($g_m$) | Medida da eficiência do FET como amplificador. Unidade: Siemens (S) ou Mho. | $g_m = \Delta I_D / \Delta V_{GS}$. |
| $g_{m0}$ | Transcondutância máxima, ocorrendo em $V_{GS}=0$ | $2 I_{DSS} / |V_P|$. |
| Resistência de Saída ($r_d$) | Resistência dinâmica interna entre dreno e fonte. Geralmente alta ($>20\text{ k}\Omega$). | $r_d = 1/y_{os}$. |
| Amplificador Fonte Comum | Configuração padrão para ganho de tensão. Alta impedância de entrada. | Inversão de fase de $180^\circ$. |
| Seguidor de Fonte | Amplificador de ganho unitário. Usado como buffer de isolamento. | Alta $Z_{in}$, Baixa $Z_{out}$. |



---

# Capítulo 9: Resposta em Frequência de BJT e JFET 

## 9.1 Conceitos Gerais, Logaritmos e Decibéis 

A resposta de um amplificador não é uniforme em todas as frequências. O ganho cai em baixas frequências (devido a condensadores de acoplamento) e em altas frequências (devido a capacidades parasitas).  

O ganho é expresso em Decibéis (dB) para facilitar a representação gráfica (Diagrama de Bode) e o cálculo em sistemas em cascata: 
* Potência: $G_{dB} = 10 \log_{10} \frac{P_2}{P_1}$.
* Tensão: $G_{dB} = 20 \log_{10} \frac{V_2}{V_1}$. 

A frequência de corte (ou meia potência) ocorre quando o ganho cai 3 dB ($0.707$ do máximo). 

## 9.2 Resposta em Baixa Frequência 

Determinada pelos condensadores externos ($C_S, C_C, C_E$). Cada condensador forma um filtro passa-alto com a resistência equivalente do circuito. 

* Para um BJT, a frequência de corte inferior devido ao acoplamento de entrada é:
    $$f_{L_s} = \frac{1}{2\pi (R_s + R_i) C_s}$$  
    Onde $R_s$ é a resistência da fonte e $R_i$ a impedância de entrada do amplificador. 
* Para um FET, a lógica é similar: $f_{L_G} = \frac{1}{2\pi (R_{sig} + R_i) C_G}$. 

## 9.3 Efeito Miller e Alta Frequência 

Em alta frequência, as capacidades internas do transistor ($C_{be}, C_{bc}$, etc.) tornam-se significativas. O Efeito Miller é critico: uma capacidade de realimentação entre entrada e saída (como $C_{bc}$ ou $C_{gd}$) é amplificada pelo ganho de tensão ($A_v$) e aparece na entrada como uma capacidade muito maior:  
$$C_{M_i} = (1 - A_v)C_f$$ 

Isto reduz drasticamente a impedância de entrada em alta frequência e limita a largura de banda. A frequência de corte superior ($f_H$) é determinada por circuitos RC formados por estas capacidades parasitas e as resistências de Thévenin vistas por elas. O produto Ganho-Largura de Banda ($f_T$) é uma figura de mérito constante para o transistor: $f_T = \beta_{mid} f_\beta$.  

### Glossário do Capítulo 9 

| Termo/Conceito | Definição Detalhada e Contexto |
| :--- | :--- |
| Decibel (dB) | Unidade logaritmica de razão. Vantajosa pois o ouvido humano responde logaritmicamente e simplifica gráficos de larga escala. |
| Diagrama de Bode | Gráfico da resposta em frequência (Magnitude em dB e Fase) vs Frequência (escala log). |
| Frequência de Corte (-3 dB) | Ponto onde a potência do sinal cai para metade. Define a Largura de Banda (BW). |
| Efeito Miller | Fenómeno que multiplica a capacidade parasita de feedback pelo ganho do amplificador. Principal limitador da resposta em alta frequência. |
| Capacidade Parasita | Capacidade não intencional existente entre terminais do transistor e na cablagem. |
| Produto Ganho-Banda | Para um dado transistor, o produto do ganho pela largura de banda é aproximadamente constante. Aumentar o ganho reduz a largura de banda. |



---

# Capítulo 10: Amplificadores Operacionais (Op-Amps) 

## 10.1 Fundamentos e Amplificador Diferencial 

O amplificador operacional é um dispositivo de ganho extremamente elevado, acoplado em DC, com entradas diferenciais. O estágio de entrada é um amplificador diferencial que amplifica a diferença entre dois sinais ($V_d = V_1 - V_2$) e rejeita sinais comuns (ruído).  
O CMRR (Common-Mode Rejection Ratio) mede esta capacidade:
$$CMRR = \frac{A_d}{A_c}$$  
Em dB: $CMRR(\log) = 20 \log_{10}(A_d/A_c)$. 

## 10.2 Características Ideais vs Práticas 

* **Ideal:** Ganho infinito, impedância de entrada infinita, impedância de saída zero, largura de banda infinita. 
* **Prático:** Ganho muito alto ($10^5$), impedância de entrada alta ($M\Omega$), impedância de saída baixa ($<100 \Omega$). 
* **Offset:** Tensão e correntes de offset ($V_{IO}, I_{IO}$) causam erros DC na saída que devem ser compensados. 

## 10.3 Slew Rate e Resposta em Frequência 

O Slew Rate (SR) define a velocidade máxima de variação da tensão de saída ($V/\mu s$). Se um sinal variar mais rápido que o SR, ocorrerá distorção severa. A resposta em frequência é geralmente limitada internamente para garantir estabilidade, resultando num ganho que cai linearmente ($20~dB/decada$) a partir de uma frequência muito baixa.  

### Glossário do Capítulo 10 

| Termo/Conceito | Definição Detalhada e Contexto |
| :--- | :--- |
| Op-Amp | Amplificador Operacional. Bloco de construção fundamental em eletrónica analógica. |
| Entrada Diferencial | Capacidade de amplificar a diferença entre dois terminais ($V_+$ e $V_-$) |
| CMRR | Razão de Rejeição de Modo Comum. Essencial para eliminar ruído captado por ambos os fios de entrada. |
| Slew Rate | Taxa limite de variação da saida. Determina a frequência máxima de operação para grandes sinais. |
| Ganho em Malha Aberta ($A_{OL}$) | Ganho do op-amp sem realimentação. Muito alto e instável. |
| Curto-Circuito Virtual | Conceito de análise: Se o op-amp tem feedback negativo, $V_+ \approx V_-$. |

 

---

# Capítulo 11: Aplicações de Op-Amps 

## 11.1 Amplificadores Básicos 

A realimentação negativa é usada para definir um ganho preciso e estável. 

1.  **Multiplicador de Ganho Constante (Inversor):** 
    $$V_O/V_1 = -R_f/R_1$$ 
    A entrada (+) é ligada à massa. O ganho depende apenas das resistências externas. 
2.  **Não-Inversor:** 
    $$V_o/V_1 = 1 + R_f/R_1$$ 
3.  **Seguidor Unitário (Buffer):** 
    $$V_O = V_1$$ 
    Isola a fonte da carga (alta $Z_{in}$, baixa $Z_{out}$). 

## 11.2 Operações Matemáticas e Filtros 

* **Somador:** Combina múltiplos sinais com ganhos ponderados.
    $$V_O = - (\dots)$$  
* **Integrador:** A saída é o integral da entrada no tempo. Usa um condensador no feedback.
    $$v_o(t) = -(1/R_1 C_1) \int v_1 dt$$  
* **Filtros Ativos:** Op-amps permitem criar filtros de frequência precisos sem indutores. 
    * Passa-Alto: $f_{oL} = 1/2 \pi R_1 C_1$. 
    * Passa-Baixo: $f_{oH} = 1/2 \pi R_1 C_1$. 

### Glossário do Capítulo 11 

| Termo/Conceito | Definição Detalhada e Contexto |
| :--- | :--- |
| Massa Virtual | Ponto no circuito (entrada inversora) que está a 0V sem estar fisicamente ligado à terra, mantido pela ação do op-amp. |
| Realimentação Negativa | Ligação da saída à entrada inversora. Estabiliza o ganho e lineariza o circuito. |
| Somador | Circuito (misturador) usado em áudio para combinar canais. |
| Integrador | Converte onda quadrada em triangular. Atua como filtro passa-baixo. |
| Filtro Ativo | Filtro que fornece ganho e isolamento, ao contrário de filtros passivos RLC que apenas atenuam. |

