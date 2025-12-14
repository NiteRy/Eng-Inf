# Glossário de Eletrónica: Dispositivos e Teoria de Circuitos
**Referência: Boylestad & Nashelsky (11ª Edição) - Capítulos 1 a 11**

Este glossário cobre materiais, componentes, fórmulas e configurações de circuitos, desde semicondutores básicos até Amplificadores Operacionais.

---

## 1. Fundamentos e Diodos (Caps. 1 e 2)

### Materiais e Propriedades
* **Silício (Si):** Material semicondutor padrão. $V_K \approx 0.7V$.
* **Germânio (Ge):** Baixa queda de tensão. $V_K \approx 0.3V$.
* **Arsenieto de Gálio (GaAs):** Alta velocidade/LEDs. $V_K \approx 1.2V$.
* **Portadores Maioritários:** Eletrões (tipo-n) e Lacunas (tipo-p).
* **Portadores Minoritários:** Gerados termicamente (corrente de fuga).

### Componentes e Circuitos
* **Díodo Retificador:** Permite corrente apenas num sentido.
* **Díodo Zener:** Opera na região de breakdown. Tensão constante $V_Z$.
* **LED:** Emite luz. Tensão de ativação depende da cor (Vermelho ~1.8V, Azul ~3.3V).
* **Retificador de Meia Onda:** $V_{dc} = 0.318 V_m$
* **Retificador de Onda Completa (Ponte):** $V_{dc} = 0.636 V_m$

---

## 2. Transístores Bipolares - BJT (Caps. 3, 4 e 5)

### Propriedades e Parâmetros ($\alpha, \beta$)
* **Transístor Controlado por Corrente:** $I_C = f(I_B)$.
* **Beta ($\beta$ ou $h_{fe}$):** Ganho de corrente em Emissor Comum ($I_C / I_B$).
* **Alpha ($\alpha$):** Ganho de corrente em Base Comum ($I_C / I_E$).
* **Resistência dinâmica ($r_e$):** Parâmetro crucial para análise AC.
    $$r_e = \frac{26 \text{ mV}}{I_E (\text{DC})}$$

### Tipos de Polarização (DC)
* **Fixa:** Instável com variações de $\beta$.
* **Divisor de Tensão:** Muito estável (Independente de $\beta$ se $\beta R_E \ge 10 R_2$).

### Análise AC (Pequenos Sinais)
* **Impedância de Entrada ($Z_i$):** Resistência vista pela fonte de sinal.
* **Impedância de Saída ($Z_o$):** Resistência vista pela carga.
* **Modelo $r_e$:** Substitui o transístor por uma fonte de corrente ($\beta I_b$) e um díodo ($r_e$).

---

## 3. Transístores de Efeito de Campo - FET (Caps. 6, 7 e 8)

### Tipos de Materiais e Componentes (Cap. 6)
Dispositivos controlados por **Tensão** (campo elétrico), com alta impedância de entrada.

* **JFET (Junction FET):**
    * Canal-n e Canal-p.
    * Opera sempre com a junção Gate-Source polarizada reversamente.
* **D-MOSFET (Depletion Type):**
    * Pode operar em modo de depleção (canal pré-existente) ou enriquecimento.
* **E-MOSFET (Enhancement Type):**
    * Normalmente desligado. Requer $V_{GS} > V_{GS(Th)}$ para criar o canal.
* **CMOS (Complementary MOS):**
    * Uso de p-channel e n-channel em par. Baixíssimo consumo de potência. Base da lógica digital moderna.

### Polarização de FETs (Cap. 7) - Leis e Cálculos
* **Equação de Shockley (JFET e D-MOSFET):**
    Define a curva de transferência não-linear.
    $$I_D = I_{DSS} \left( 1 - \frac{V_{GS}}{V_P} \right)^2$$
    * $I_{DSS}$: Corrente de saturação Dreno-Fonte (máxima corrente).
    * $V_P$: Tensão de Pinch-off (tensão que "estrangula" o canal).
* **Equação do E-MOSFET:**
    $$I_D = k (V_{GS} - V_{GS(Th)})^2$$
* **Auto-Polarização (Self-Bias):**
    Usada em JFETs. A tensão $V_{GS}$ é gerada pela corrente que passa numa resistência na fonte ($R_S$).
    $$V_{GS} = -I_D R_S$$

### Amplificadores FET (Cap. 8)
* **Transcondutância ($g_m$):**
    O fator de ganho do FET (quanto a corrente muda por cada volt na gate). Medido em Siemens (S).
    $$g_m = \frac{2 I_{DSS}}{|V_P|} \left( 1 - \frac{V_{GS}}{V_P} \right)$$
    $$g_m = g_{m0} \left( 1 - \frac{V_{GS}}{V_P} \right)$$
* **Configuração Fonte Comum (Common-Source):**
    * Alta impedância de entrada, inverte fase (180º).
    * Ganho de Tensão: $A_v = -g_m (R_D || r_d)$
* **Configuração Dreno Comum (Source Follower):**
    * Ganho $A_v \approx 1$. Sem inversão de fase. Baixa impedância de saída.

---

## 4. Resposta em Frequência (Cap. 9)

### Conceitos e Unidades
* **Decibel (dB):** Unidade logarítmica de ganho de potência/tensão.
    * $G_{dB} = 20 \log_{10}(A_v)$
* **Escala Logarítmica:** Usada no eixo x dos gráficos de frequência.
* **Largura de Banda (BW):** Faixa entre a frequência de corte inferior ($f_L$) e superior ($f_H$).

### Frequências de Corte
* **Frequência de Corte ($f_c$):** Ponto onde o ganho cai 3dB em relação ao máximo (ou $0.707 \cdot A_{v_{max}}$).
* **Baixa Frequência:** Determinada pelos capacitores de acoplamento ($C_C$) e bypass ($C_E$ ou $C_S$).
    $$f_L = \frac{1}{2\pi R C}$$
* **Alta Frequência:** Determinada pelas capacitâncias parasitas internas do transístor e capacitâncias da fiação.
* **Efeito Miller:**
    Aumento da capacitância de entrada devido à amplificação da capacitância de feedback ($C_{f}$). Reduz o ganho em altas frequências.
    $$C_{M} = (1 + |A_v|) C_{f}$$

---

## 5. Amplificadores Operacionais (Caps. 10 e 11)

### O Componente (Cap. 10)

* **Entradas Diferenciais:**
    * **Modo Diferencial ($V_d$):** Diferença entre as entradas ($V_+ - V_-$). É o sinal desejado.
    * **Modo Comum ($V_c$):** Sinal médio presente em ambas as entradas (geralmente ruído).
* **CMRR (Common-Mode Rejection Ratio):**
    Capacidade do Op-Amp de rejeitar ruído (Modo Comum). Quanto maior, melhor.
    $$CMRR = 20 \log_{10} \frac{|A_d|}{|A_c|}$$
* **Slew Rate (SR):**
    A taxa máxima de variação da tensão de saída (V/$\mu$s). Define a velocidade do Op-Amp.

### Aplicações e Circuitos (Cap. 11)
Circuitos lineares e não-lineares usando feedback negativo.

1.  **Amplificador Inversor:**
    * Sinal entra na porta negativa.
    * $A_v = -\frac{R_f}{R_1}$
2.  **Amplificador Não-Inversor:**
    * Sinal entra na porta positiva.
    * $A_v = 1 + \frac{R_f}{R_1}$
3.  **Somador (Summing Amplifier):**
    * Soma tensões ponderadas.
    * $V_o = -(\frac{R_f}{R_1}V_1 + \frac{R_f}{R_2}V_2 + ...)$
4.  **Integrador:**
    * Capacitor no loop de feedback. Transforma onda quadrada em triangular.
    * $V_o(t) = -\frac{1}{RC} \int V_i(t) \,dt$
5.  **Diferenciador:**
    * Capacitor na entrada. Transforma onda triangular em quadrada.
    * $V_o(t) = -RC \frac{d V_i(t)}{dt}$

---

## 6. Símbolos Gregos e Constantes Úteis

| Símbolo | Nome | Utilização Principal |
| :---: | :--- | :--- |
| $\alpha$ | Alpha | BJT: Ganho Base-Comum. |
| $\beta$ | Beta | BJT: Ganho Emissor-Comum. |
| $\Delta$ | Delta | Variação (ex: $\Delta I_C$). |
| $\theta$ | Teta | Temperatura ou Fase. |
| $\mu$ | Micro | $10^{-6}$ (ex: $\mu F$, $\mu A$). |
| $\omega$ | Omega | Frequência angular ($2\pi f$). |
| $\Omega$ | Omega | Ohm (Resistência). |
| $\infty$ | Infinito | Ganho ideal do Op-Amp. |
| $k$ | k | Constante de construção do MOSFET. |

## 7. Polarização de FETs (Cap. 7)
Métodos para estabelecer o ponto de operação Q (DC) para JFETs e MOSFETs.

### Tipos de Polarização
* **Configuração de Polarização Fixa (Fixed-Bias):**
    * Utiliza uma fonte de tensão DC separada ($V_{GG}$) na porta.
    * $I_G \approx 0$ A, logo $V_{GS} = -V_{GG}$.
* **Configuração de Auto-Polarização (Self-Bias):**
    * Elimina a necessidade de duas fontes DC. Usa uma resistência na fonte ($R_S$) para criar a tensão reversa.
    * $V_{GS} = -I_D R_S$.
    * O ponto Q é determinado pelo cruzamento da reta de carga ($V_{GS} = -I_D R_S$) com a curva de transferência (Shockley).
* **Divisor de Tensão (Voltage-Divider Bias):**
    * Aplica uma tensão fixa na gate via divisor resistivo ($R_1, R_2$).
    * Torna o circuito menos dependente das variações dos parâmetros do FET.
    * $V_G = \frac{R_2 V_{DD}}{R_1 + R_2}$.
    * $V_{GS} = V_G - I_D R_S$.

### Fórmulas de MOSFET (DC)
* **D-MOSFET:** Usa as mesmas equações do JFET (Shockley).
* **E-MOSFET (Feedback Bias):**
    * $V_{GS} = V_{DS}$ (quando $R_G$ conecta o dreno à gate).
    * $V_{DS} = V_{DD} - I_D R_D$.

---

## 8. Amplificadores FET (Cap. 8)
Análise de pequenos sinais (AC) para JFETs e MOSFETs.

### Parâmetros AC Importantes
* **Transcondutância ($g_m$):**
    * Mede a eficiência do FET em converter tensão de entrada em corrente de saída.
    * Unidade: Siemens (S).
    * $g_m = \frac{\Delta I_D}{\Delta V_{GS}}$.
    * Valor máximo: $g_{m0} = \frac{2 I_{DSS}}{|V_P|}$.
* **Impedância de Saída ($r_d$):**
    * Resistência interna vista no dreno. Geralmente alta ($>40k\Omega$). Se não for dada, assume-se $\infty$.

### Configurações de Amplificadores
1.  **Fonte Comum (Common-Source):**
    * **Entrada:** Gate. **Saída:** Drain.
    * **Características:** Alta impedância de entrada, ganho de tensão médio, inversão de fase (180°).
    * **Ganho ($A_v$):** $-g_m (R_D || r_d || R_L)$.
2.  **Dreno Comum (Source Follower):**
    * **Entrada:** Gate. **Saída:** Source.
    * **Características:** Ganho $A_v < 1$ (mas próximo de 1), sem inversão, baixa impedância de saída. Usado como *buffer*.
    * **Ganho ($A_v$):** $\frac{g_m R_S}{1 + g_m R_S}$.
3.  **Gate Comum (Common-Gate):**
    * **Entrada:** Source. **Saída:** Drain.
    * **Características:** Baixa impedância de entrada, bom ganho de tensão, sem inversão. Usado em alta frequência.

---

## 9. Resposta em Frequência (Cap. 9)
Análise de como o ganho dos circuitos varia com a frequência do sinal.

### Conceitos de Logaritmos e dB
* **Decibel (dB):**
    * Ganho de Potência: $A_{p(dB)} = 10 \log_{10}(P_o / P_i)$.
    * Ganho de Tensão: $A_{v(dB)} = 20 \log_{10}(V_o / V_i)$.
* **Frequência de Corte (Half-Power Point):**
    * Ocorre quando a potência cai para 50% ($0.5 P_{max}$) ou a tensão cai para 70.7% ($0.707 V_{max}$).
    * Corresponde a uma queda de **3 dB**.

### Análise de Baixa e Alta Frequência
* **Baixa Frequência ($f_L$):**
    * Afetada pelos **capacitores externos** de acoplamento ($C_S, C_C$) e bypass ($C_E$).
    * Estes capacitores bloqueiam DC mas apresentam reatância em baixas frequências.
* **Alta Frequência ($f_H$):**
    * Afetada pelas **capacitâncias parasitas** internas dos transístores ($C_{be}, C_{bc}, C_{ce}$) e da fiação.
    * Modelo Giacoletto (Híbrido-$\pi$) é usado para análise precisa em alta frequência de BJTs.
* **Produto Ganho-Largura de Banda (GBW):**
    * Para um Op-Amp, o produto do ganho pela largura de banda é constante. $GBW = A_v \times BW$.

---

## 10. Amplificadores Operacionais (Cap. 10)
Introdução ao IC (Circuito Integrado) linear mais versátil.

### Estrutura Interna Básica
1.  **Amplificador Diferencial:** Estágio de entrada (ganho alto, rejeição de ruído).
2.  **Amplificador de Tensão:** Estágio intermediário (aumenta o ganho).
3.  **Amplificador Push-Pull:** Estágio de saída (baixa impedância de saída).

### Parâmetros Reais vs. Ideais
| Parâmetro | Ideal | Real (Típico 741) |
| :--- | :---: | :---: |
| Ganho de Tensão ($A_{OL}$) | $\infty$ | $200.000$ |
| Impedância de Entrada ($Z_{in}$) | $\infty$ | $2 M\Omega$ |
| Impedância de Saída ($Z_{out}$) | $0 \Omega$ | $75 \Omega$ |
| Largura de Banda | $\infty$ | ~1 MHz |
| Corrente de Bias | $0 A$ | ~80 nA |

### Modos de Operação
* **Malha Aberta (Open-Loop):** Sem feedback. O ganho é enorme, levando a saída à saturação ($+V_{sat}$ ou $-V_{sat}$) com qualquer diferença na entrada. Funciona como **Comparador**.
* **Malha Fechada (Closed-Loop):** Com feedback negativo. Reduz o ganho mas aumenta a estabilidade, linearidade e largura de banda.

---

## 11. Aplicações de Amplificadores Operacionais (Cap. 11)
Circuitos práticos utilizando feedback negativo.

### Circuitos Matemáticos
* **Somador Inversor:**
    

[Image of summing amplifier circuit diagram]

    * $V_o = -(\frac{R_f}{R_1}V_1 + \frac{R_f}{R_2}V_2 + \dots)$
* **Subtrator:**
    * Usa ambas as entradas para subtrair sinais: $V_o = V_2 - V_1$ (se resistências iguais).
* **Integrador (Passa-Baixo Ativo):**
    * Capacitor $C$ na realimentação.
    * Usado em computação analógica e filtros.
    * $V_o = -\frac{1}{RC} \int V_{in} dt$.
* **Diferenciador (Passa-Alto Ativo):**
    * Capacitor $C$ na entrada.
    * Sensível a ruído de alta frequência.
    * $V_o = -RC \frac{dV_{in}}{dt}$.

### Filtros Ativos
* **Passa-Baixo:** Deixa passar frequências abaixo de $f_c$.
* **Passa-Alto:** Deixa passar frequências acima de $f_c$.
* **Passa-Banda:** Deixa passar uma gama específica de frequências.