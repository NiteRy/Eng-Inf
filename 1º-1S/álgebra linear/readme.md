# 📘 Resumo de Conjuntos e Números

## 1. Simbologia dos Conjuntos

| Símbolo  | Nome                   | Significado                                                    | Exemplo                                |
| -------- | ---------------------- | -------------------------------------------------------------- | -------------------------------------- |
| ∈        | Pertence               | O elemento pertence ao conjunto                                | A={1,2,3} → 3 ∈ A                      |
| ∉        | Não pertence           | O elemento não pertence ao conjunto                            | A={1,2,3} → 5 ∉ A                      |
| ⊂        | Está contido (estrito) | A é subconjunto próprio de B                                   | A={1,2,3}, B={1,2,3,4,5} → A ⊂ B       |
| ⊆        | Contido ou igual       | A está contido em B ou é igual a B                             | A={1,2,3}, B={1,2,3} → A ⊆ B           |
| ⊃        | Contém                 | A contém B                                                     | A={1,2,3}, B={1,2} → A ⊃ B             |
| ⊇        | Contém ou é igual      | A contém B ou é igual a B                                      | A={1,2,3}, B={1,2,3} → A ⊇ B           |
| Aᶜ ou A' | Complementar           | Elementos que **não** pertencem a A (em relação ao universo U) | U=ℤ, A=ℤ⁺ → Aᶜ = ℤ⁻ ∪ {0}              |
| =        | Igualdade              | Conjuntos com os mesmos elementos                              | A = B                                  |
| ≠        | Diferente              | Conjuntos diferentes                                           | A ≠ B                                  |
| ∪        | União                  | Elementos em A ou em B                                         | A={1,2,3}, B={2,4} → A ∪ B = {1,2,3,4} |
| ∩        | Interseção             | Elementos em A e em B                                          | A={1,2,3}, B={2,3,4} → A ∩ B={2,3}     |
| − ou ∖   | Diferença              | Elementos em A que não estão em B                              | A={1,2}, B={2} → A−B={1}               |
| ∅        | Conjunto vazio         | Conjunto sem elementos                                         | A=∅                                    |
| U        | Conjunto universo      | Todos os elementos possíveis                                   | U={1,2,3,4,5}                          |
| ℕ        | Números naturais       | {0,1,2,3,…}                                                    |                                        |
| ℤ        | Números inteiros       | {…,−2,−1,0,1,2,…}                                              |                                        |
| ℚ        | Números racionais      | Frações e decimais                                             | 1/2, 3/10, −7/4                        |
| ℝ        | Números reais          | Todos os reais                                                 | 3, √7, π                               |
| ∀        | Para todos             | Afirmação válida para todos os elementos                       | ∀x∈ℝ, x²≥0                             |
| ∃        | Existe                 | Existe pelo menos um elemento                                  | ∃x∈ℝ ∣ x²=4                            |

---

## 2. Conceitos Importantes

### Produto Cartesiano

A={a,b}
B={1,2}

A×B = {(a,1),(a,2),(b,1),(b,2)}

### Relação

R = {(a,1),(b,2)}

### Inverso de uma relação

R⁻¹ = {(1,a),(2,b)}

---

## 3. Tabela de Tipos de Números

| Termo                    | Significado                                         | Exemplos                |
| ------------------------ | --------------------------------------------------- | ----------------------- |
| **Números primos**       | Maiores que 1 e só têm 2 divisores: 1 e ele próprio | 2,3,5,7,11,13,17,19,…   |
| **Números compostos**    | Inteiros >1 que **não** são primos                  | 4,6,8,9,12,14,15,…      |
| **Número 1**             | Não é primo nem composto                            | —                       |
| **Algoritmo da Divisão** | a = b×q + r, onde 0 ≤ r < b                         | 17 = 5×3 + 2 (q=3, r=2) |

---

## 4. Congruências — Cálculos Completos

### ✔️ Exemplo 1: 17 ≡ 5 (mod 12)

1. 17 − 5 = 12
2. 12 divide 12 → 12 = 12×1

**Conclusão:** 17 ≡ 5 (mod 12)

---

### ✔️ Exemplo 2: 25 ≡ 4 (mod 7)

1. 25 − 4 = 21
2. 21 = 7×3 → 7 divide 21

**Conclusão:** 25 ≡ 4 (mod 7)

---

### ✔️ Exemplo 3: 20 ≡ 2 (mod 6)

1. 20 − 2 = 18
2. 18 = 6×3 → 6 divide 18

**Conclusão:** 20 ≡ 2 (mod 6)

---

### ✔️ Exemplo 4: 32 ≡ 5 (mod 9)

1. 32 − 5 = 27
2. 27 = 9×3 → 9 divide 27

**Conclusão:** 32 ≡ 5 (mod 9)

---

### ✘ Exemplo 5: 18 ≡ 7 (mod 4)?

1. 18 − 7 = 11
2. 11 não é múltiplo de 4 → 11 = 4×2 + 3

**Conclusão:** 18 ≢ 7 (mod 4)

---

## 5. Funções

| Termo                  | Significado                                                                                                                                                                                                                                                                                                                       | Exemplo                                                                                                                                    |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Funções**            | Definição: uma função é toda a correspondência em que a cada elemento do conjunto de partida (domínio) corresponde um e um só elemento do conjunto de chegada. Nota: aos elementos do conjunto de chegada que têm correspondência chamamos **imagem**. O conjunto de todos os possíveis valores de chegada é o **contradomínio**. | ![img](apontamentos/img1.png)<br>Não é função quando 2 objetos têm a mesma imagem no conjunto de chegada:<br>![img](apontamentos/img2.png) |
| **Função injetiva**    | 1 objeto para 1 imagem. Uma função f é injetiva ⇔ ∀ x₁, x₂ ∈ A, f(x₁) = f(x₂) ⇒ x₁ = x₂.                                                                                                                                                                                                                                          | ![img](apontamentos/img3.png) f(x)=2x                                                                                                      |
| **Função sobrejetiva** | O contradomínio corresponde exatamente ao conjunto de chegada (todas as imagens possíveis são atingidas).                                                                                                                                                                                                                         | ![img](apontamentos/img4.png) f(x)=x³                                                                                                      |
| **Função bijetiva**    | É injetiva e sobrejetiva ao mesmo tempo. Cada elemento do domínio corresponde a um único elemento do contradomínio, e todo elemento do contradomínio é imagem de um único elemento do domínio.                                                                                                                                    | ![img](apontamentos/img5.png) f(x)=x+5                                                                                                     |



|Matriz|Significado|Exemplo|
|---|---|---|
|Am*n|um corpo constituido por linhas(m) e colunas(n)|<table> <tr><td>a11</td><td>a12</td><td>...</td><td>a1n</td></tr> <tr><td>a21</td><td>a22</td><td>...</td><td>a2n</td></tr> <tr><td>...</td><td>...</td><td>...</td><td>...</td></tr> <tr><td>am1</td><td>am2</td><td>...</td><td>amn</td></tr> </table>|
|Omxn|Matriz nula onde todos os elementos são 0|<table><tr><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>0</td><td>0</td><td>0</td></tr></table>|
|Matriz quadrada|Matriz onde o número de linhas = número de colunas|A2x2 <table><tr><td>1</td><td>2</td></tr><tr><td>3</td><td>4</td></tr></table>|
|Matriz retanguar|Matriz onde o número de linhas é diferente do número de colunas|A2x3 <table><tr><td>1</td><td>2</td></tr><tr><td>3</td><td>4</td></tr><tr><td>5</td><td>6</td></tr></table>|
|Matriz linha|Matriz onde o número de linhas é 1|A1x3 <table><tr><td>1</td><td>2</td><td>3</td></tr></table>|
|Matriz coluna|Matriz onde o número de colunas é 1|A3x1 <table><tr><td>1</td></tr><tr><td>2</td></tr><tr><td>3</td></tr></table>|
|Diagonal principal|os elementos em que onde só está presente em matrizes quadradas em que as coordenadas do elemento tem o número da linha e da coluna igual (aij onde i=j)|A3x3 <table><tr><td>**1**</td><td>2</td><td>3</td></tr><tr><td>4</td><td>**5**</td><td>6</td></tr><tr><td>7</td><td>8</td><td>**9**</td></tr></table>|
|Matriz triangular superior|Matriz onde os elementos abaixo da diagonal principal é 0|A3x3 <table> <tr><td>**1**</td><td>2</td><td>3</td></tr> <tr><td>0</td><td>**5**</td><td>6</td></tr> <tr><td>0</td><td>0</td><td>**9**</td></tr> </table>|
|Matriz triangular inferior|Matriz onde os elementos acima da diagonal principal é 0|A3x3 <table> <tr><td>**1**</td><td>0</td><td>0</td></tr> <tr><td>4</td><td>**5**</td><td>0</td></tr> <tr><td>7</td><td>8</td><td>**9**</td></tr> </table>|
|Matriz escalar|Matriz onde os elementos acima e abaixo da diagonal principal é 0 e o valor da diagonal principal é o mesmo valor representado por λ|λ3x3 <table> <tr><td>**2**</td><td>0</td><td>0</td></tr> <tr><td>0</td><td>**2**</td><td>0</td></tr> <tr><td>0</td><td>0</td><td>**2**</td></tr> </table>|
|Matriz Identidade|Matriz onde os elementos acima e abaixo da diagonal principal é 0 e o valor da diagonal principal é 1|I3 <table> <tr><td>**1**</td><td>0</td><td>0</td></tr> <tr><td>0</td><td>**1**</td><td>0</td></tr> <tr><td>0</td><td>0</td><td>**1**</td></tr> </table>|
|Matrizes iguais|Matriz A2x2 é igual à matriz B2x2 onde todos os elementos homólogos (na mesma posição) dos mesmos são iguais|A2x2 <table><tr><td>1</td><td>2</td></tr><tr><td>3</td><td>4</td></tr></table> B2x2 <table><tr><td>1</td><td>2</td></tr><tr><td>3</td><td>4</td></tr></table>|
|Soma de matrizes|As matrizes A2x2 e B2x2 só podem ser somadas se tiverem o mesmo número de linhas e colunas|A2x2 <table> <tr><td>1</td><td>2</td></tr> <tr><td>3</td><td>4</td></tr> </table> B2x2<table> <tr><td>2</td><td>3</td></tr> <tr><td>4</td><td>5</td></tr> </table> A+B=<table> <tr><td>3</td><td>5</td></tr> <tr><td>7</td><td>9</td></tr> </table>|
|Diferença de matrizes|As matrizes A2x2 e B2x2 só podem Substraídas se tiverem o mesmo número de linhas e colunas|A2x2<table> <tr><td>2</td><td>3</td></tr> <tr><td>4</td><td>5</td></tr> </table> B2x2 <table> <tr><td>1</td><td>2</td></tr> <tr><td>3</td><td>4</td></tr> </table> A-B=<table> <tr><td>1</td><td>1</td></tr> <tr><td>1</td><td>1</td></tr> </table>|
|Multipliação de matrizes|As matrizes A2x3 e B3x2 só podem multiplicar se número de colunas da matriz A for igual ao número de linhas da matriz B e a matriz AB vai ser o número de linhas da matriz A e o número de colunas da matriz B|A2x3 <table> <tr><td>1</td><td>2</td><td>3</td></tr> <tr><td>4</td><td>5</td><td>6</td></tr> </table>  B3x2 <table> <tr><td>1</td><td>2</td></tr> <tr><td>3</td><td>4</td></tr> <tr><td>5</td><td>6</td></tr> </table>  AB2*2=<table> <tr><td>1x1+2x3+3x5</td><td>1x2+2x4+3x6</td></tr> <tr><td>4x1+5x3+6x5+</td><td>4x2+5x4+6x6+</td></tr> </table>=<table> <tr><td>2+6+15</td><td>2+8+18</td></tr> <tr><td>4+15+30</td><td>8+20+36</td></tr> </table>=<table> <tr><td>23</td><td>28</td></tr> <tr><td>49</td><td>64</td></tr> </table>|
|Matriz transposta|A transposta de uma matriz A (indicada por Aᵀ) obtém-se trocando as linhas pelas colunas. Se A é m×n, então Aᵀ é n×m. **Propriedades:** (Aᵀ)ᵀ = A ; (A+B)ᵀ = Aᵀ + Bᵀ ; (kA)ᵀ = kAᵀ ; (AB)ᵀ = BᵀAᵀ.|A₂×₃ = <table><tr><td>1</td><td>2</td><td>3</td></tr><tr><td>4</td><td>5</td><td>6</td></tr></table><br>Aᵀ₃×₂ = <table><tr><td>1</td><td>4</td></tr><tr><td>2</td><td>5</td></tr><tr><td>3</td><td>6</td></tr></table>|
|Matriz inversa|A matriz inversa de A (indicada por A⁻¹) é a matriz que satisfaz A·A⁻¹ = A⁻¹·A = I. **Só existe para matrizes quadradas com det(A) ≠ 0.** Propriedades: (A⁻¹)⁻¹ = A ; (AB)⁻¹ = B⁻¹A⁻¹ ; (Aᵀ)⁻¹ = (A⁻¹)ᵀ.|A₂×₂ = <table><tr><td>1</td><td>2</td></tr><tr><td>3</td><td>5</td></tr></table><br>det(A) = 1·5 − 2·3 = 5 − 6 = −1 ≠ 0 ⇒ A é inversível.<br>A⁻¹ = (1/det(A)) · <table><tr><td>5</td><td>-2</td></tr><tr><td>-3</td><td>1</td></tr></table> = <table><tr><td>-5</td><td>2</td></tr><tr><td>3</td><td>-1</td></tr></table><br>Verificação: A·A⁻¹ = <table><tr><td>1·(-5)+2·3</td><td>1·2+2·(-1)</td></tr><tr><td>3·(-5)+5·3</td><td>3·2+5·(-1)</td></tr></table> = <table><tr><td>-5+6</td><td>2-2</td></tr><tr><td>-15+15</td><td>6-5</td></tr></table> = <table><tr><td>1</td><td>0</td></tr><tr><td>0</td><td>1</td></tr></table> = I₂|