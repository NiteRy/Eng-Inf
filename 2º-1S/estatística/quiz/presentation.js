// Tabelas reconstituídas dos quadros dos PDFs cuja extração ficou em texto corrido.
const QUIZ_TABLES = {
    "ex-aula2.pdf:3:prompt": {
        marker: "Variável Classificação Sistema operativo utilizado Número de falhas de uma aplicação num dia Tempo de resposta de uma API (ms) Prioridade de um incidente: baixa, média, alta, crítica Número de dispositivos ligados a uma rede Temperatura do processador Linguagem de programação preferida Espaço ocupado por uma base de dados (Gb)",
        caption: "Classifique cada variável", columns: ["Variável", "Classificação"],
        editable: true,
        rows: [["Sistema operativo utilizado", ""], ["Número de falhas de uma aplicação num dia", ""], ["Tempo de resposta de uma API (ms)", ""], ["Prioridade de um incidente", ""], ["Número de dispositivos ligados a uma rede", ""], ["Temperatura do processador", ""], ["Linguagem de programação preferida", ""], ["Espaço ocupado por uma base de dados (Gb)", ""]]
    },
    "ex-aula2.pdf:3:solution": {
        marker: "Sistema operativo Qualitativa nominal Número de falhas Quantitativa discreta Tempo de resposta Quantitativa contínua Prioridade do incidente Qualitativa ordinal Número de dispositivos Quantitativa discreta Temperatura do processador Quantitativa contínua Linguagem preferida Qualitativa nominal Espaço ocupado Quantitativa contínua",
        caption: "Classificação das variáveis", columns: ["Variável", "Classificação"],
        rows: [["Sistema operativo", "Qualitativa nominal"], ["Número de falhas", "Quantitativa discreta"], ["Tempo de resposta", "Quantitativa contínua"], ["Prioridade do incidente", "Qualitativa ordinal"], ["Número de dispositivos", "Quantitativa discreta"], ["Temperatura do processador", "Quantitativa contínua"], ["Linguagem preferida", "Qualitativa nominal"], ["Espaço ocupado", "Quantitativa contínua"]]
    },
    "ex-aula2.pdf:8:prompt": {
        marker: "Variável Tipo indicado Escala indicada Número de erros Quantitativa contínua Razão Temperatura em ◦ C Quantitativa contínua Razão Estado do servidor (ativo/inativo) Qualitativa ordinal Nominal Classificação de serviço (1–5) Quantitativa discreta Razão Tempo de resposta Quantitativa contínua Razão",
        caption: "Classificação apresentada pelo estudante", columns: ["Variável", "Tipo indicado", "Escala indicada"],
        rows: [["Número de erros", "Quantitativa contínua", "Razão"], ["Temperatura em °C", "Quantitativa contínua", "Razão"], ["Estado do servidor (ativo/inativo)", "Qualitativa ordinal", "Nominal"], ["Classificação de serviço (1–5)", "Quantitativa discreta", "Razão"], ["Tempo de resposta", "Quantitativa contínua", "Razão"]]
    },
    "ex-aula3.pdf:1:solution": {
        marker: "Linguagem F i f i Python 14 0,350 Java 10 0,250 C# 8 0,200 JavaScript 5 0,125 C++ 3 0,075 Total 40 1,000",
        caption: "Distribuição da linguagem preferida", columns: ["Linguagem", "Fᵢ", "fᵢ"],
        rows: [["Python", "14", "0,350"], ["Java", "10", "0,250"], ["C#", "8", "0,200"], ["JavaScript", "5", "0,125"], ["C++", "3", "0,075"], ["Total", "40", "1,000"]]
    },
    "ex-aula3.pdf:2:solution": {
        marker: "x i F i f i F a f a 0 3 0,15 3 0,15 1 5 0,25 8 0,40 2 7 0,35 15 0,75 3 3 0,15 18 0,90 4 2 0,10 20 1,00 Total 20 1,00",
        caption: "Distribuição do número de erros", columns: ["xᵢ", "Fᵢ", "fᵢ", "Fₐ", "fₐ"],
        rows: [["0", "3", "0,15", "3", "0,15"], ["1", "5", "0,25", "8", "0,40"], ["2", "7", "0,35", "15", "0,75"], ["3", "3", "0,15", "18", "0,90"], ["4", "2", "0,10", "20", "1,00"], ["Total", "20", "1,00", "", ""]]
    },
    "ex-aula3.pdf:3:prompt": {
        marker: "Pedidos x i F i f i F a f a 0 5 1 10 2 15 0,60 3 0,24 4 8",
        caption: "Tabela de frequências a completar", columns: ["Pedidos xᵢ", "Fᵢ", "fᵢ", "Fₐ", "fₐ"],
        editable: true,
        rows: [["0", "5", "", "", ""], ["1", "10", "", "", ""], ["2", "15", "", "", "0,60"], ["3", "", "0,24", "", ""], ["4", "8", "", "", ""]]
    },
    "ex-aula3.pdf:3:solution": {
        marker: "x i F i f i F a f a 0 5 0,10 5 0,10 1 10 0,20 15 0,30 2 15 0,30 30 0,60 3 12 0,24 42 0,84 4 8 0,16 50 1,00",
        caption: "Tabela completa de frequências", columns: ["xᵢ", "Fᵢ", "fᵢ", "Fₐ", "fₐ"],
        rows: [["0", "5", "0,10", "5", "0,10"], ["1", "10", "0,20", "15", "0,30"], ["2", "15", "0,30", "30", "0,60"], ["3", "12", "0,24", "42", "0,84"], ["4", "8", "0,16", "50", "1,00"]]
    },
    "ex-aula3.pdf:4:prompt": {
        marker: "x i 0 1 2 3 4 F a 6 15 23 28 30",
        caption: "Frequências acumuladas fornecidas", columns: ["Frequência", "xᵢ = 0", "xᵢ = 1", "xᵢ = 2", "xᵢ = 3", "xᵢ = 4"],
        rows: [["Fₐ", "6", "15", "23", "28", "30"]]
    },
    "ex-aula3.pdf:4:solution": {
        marker: "x i F i f i F a f a 0 6 0,200 6 0,200 1 9 0,300 15 0,500 2 8 0,267 23 0,767 3 5 0,167 28 0,933 4 2 0,067 30 1,000",
        caption: "Distribuição dos incidentes por dia", columns: ["xᵢ", "Fᵢ", "fᵢ", "Fₐ", "fₐ"],
        rows: [["0", "6", "0,200", "6", "0,200"], ["1", "9", "0,300", "15", "0,500"], ["2", "8", "0,267", "23", "0,767"], ["3", "5", "0,167", "28", "0,933"], ["4", "2", "0,067", "30", "1,000"]]
    },
    "ex-aula3.pdf:5:solution": {
        marker: "Classe Centro F i f i F a f a [40 , 60[ 50 5 0,2083 5 0,2083 [60 , 80[ 70 8 0,3333 13 0,5417 [80 , 100[ 90 6 0,2500 19 0,7917 [100 , 120[ 110 4 0,1667 23 0,9583 [120 , 140[ 130 1 0,0417 24 1,0000",
        caption: "Tempos de resposta agrupados em classes", columns: ["Classe (ms)", "Centro", "Fᵢ", "fᵢ", "Fₐ", "fₐ"],
        rows: [["[40, 60[", "50", "5", "0,2083", "5", "0,2083"], ["[60, 80[", "70", "8", "0,3333", "13", "0,5417"], ["[80, 100[", "90", "6", "0,2500", "19", "0,7917"], ["[100, 120[", "110", "4", "0,1667", "23", "0,9583"], ["[120, 140[", "130", "1", "0,0417", "24", "1,0000"]]
    },
    "ex-aula4.pdf:4:prompt": {
        marker: "x i 0 1 2 3 4 F i 3 6 7 3 1",
        caption: "Número de falhas por dia", columns: ["Frequência", "xᵢ = 0", "xᵢ = 1", "xᵢ = 2", "xᵢ = 3", "xᵢ = 4"],
        rows: [["Fᵢ", "3", "6", "7", "3", "1"]]
    },
    "ex-aula4.pdf:4:solution": {
        marker: "Para n=20: fi = 0,15; 0,30; 0,35; 0,15; 0,05. Fa = 3; 9; 16; 19; 20. fa = 0,15; 0,45; 0,80; 0,95; 1.",
        caption: "Frequências das falhas ao longo de 20 dias", columns: ["xᵢ", "Fᵢ", "fᵢ", "Fₐ", "fₐ"],
        rows: [["0", "3", "0,15", "3", "0,15"], ["1", "6", "0,30", "9", "0,45"], ["2", "7", "0,35", "16", "0,80"], ["3", "3", "0,15", "19", "0,95"], ["4", "1", "0,05", "20", "1,00"]]
    },
    "ex-aula4.pdf:7:prompt": {
        marker: "Classe [0 , 10[ [10 , 20[ [20 , 30[ [30 , 40[ F i 4 10 8 3",
        caption: "Tempos de resposta agrupados", columns: ["Frequência", "[0, 10[", "[10, 20[", "[20, 30[", "[30, 40["],
        rows: [["Fᵢ", "4", "10", "8", "3"]]
    },
    "ex-aula4.pdf:10:prompt": {
        marker: "x i 0 1 2 3 4 5 F i 5 8 9 4 3 1",
        caption: "Erros por sessão", columns: ["Frequência", "xᵢ = 0", "xᵢ = 1", "xᵢ = 2", "xᵢ = 3", "xᵢ = 4", "xᵢ = 5"],
        rows: [["Fᵢ", "5", "8", "9", "4", "3", "1"]]
    },
    "ex-aula4.pdf:10:solution": {
        marker: "Frequências para x=0,…,5: Fi=(5,8,9,4,3,1), Fa=(5,13,22,26,29,30), fi=(.1667,.2667,.3000,.1333,.1000,.0333), fa=(.1667,.4333,.7333,.8667,.9667,1).",
        caption: "Distribuição de erros por sessão", columns: ["xᵢ", "Fᵢ", "fᵢ", "Fₐ", "fₐ"],
        rows: [["0", "5", "0,1667", "5", "0,1667"], ["1", "8", "0,2667", "13", "0,4333"], ["2", "9", "0,3000", "22", "0,7333"], ["3", "4", "0,1333", "26", "0,8667"], ["4", "3", "0,1000", "29", "0,9667"], ["5", "1", "0,0333", "30", "1,0000"]]
    },
    "Miniteste1.pdf:1:prompt": {
        marker: "Número de erros por módulo Amostra A: 2, 3, 1, 4, 2, 0, 3, 2, 5, 1, 3, 4, 2, 1, 3, 0, 2, 4, 1, 2 Amostra B: 0, 1, 2, 3, 5, 5, 4, 2, 3, 1, 0, 4, 1, 2, 2, 1, 0, 3, 1, 5",
        caption: "Número de erros por módulo — amostras A e B", className: "sample-table-horizontal",
        columns: ["Amostra", ...Array.from({ length: 20 }, (_, index) => String(index + 1))],
        rows: [["Amostra A", "2", "3", "1", "4", "2", "0", "3", "2", "5", "1", "3", "4", "2", "1", "3", "0", "2", "4", "1", "2"], ["Amostra B", "0", "1", "2", "3", "5", "5", "4", "2", "3", "1", "0", "4", "1", "2", "2", "1", "0", "3", "1", "5"]]
    },
    "Miniteste1.pdf:1:solution": {
        marker: "Tabela (x: FiA, fiA, FaA, faA | FiB, fiB, FaB, fab): 0: 2,.10,2,.10 | 3,.15,3,.15; 1: 4,.20,6,.30 | 5,.25,8,.40; 2: 6,.30,12,.60 | 4,.20,12,.60; 3: 4,.20,16,.80 | 3,.15,15,.75; 4: 3,.15,19,.95 | 2,.10,17,.85; 5: 1,.05,20,1 | 3,.15,20,1.",
        caption: "Distribuições de frequências das duas amostras", columns: ["x", "Fᵢ A", "fᵢ A", "Fₐ A", "fₐ A", "Fᵢ B", "fᵢ B", "Fₐ B", "fₐ B"],
        rows: [["0", "2", "0,10", "2", "0,10", "3", "0,15", "3", "0,15"], ["1", "4", "0,20", "6", "0,30", "5", "0,25", "8", "0,40"], ["2", "6", "0,30", "12", "0,60", "4", "0,20", "12", "0,60"], ["3", "4", "0,20", "16", "0,80", "3", "0,15", "15", "0,75"], ["4", "3", "0,15", "19", "0,95", "2", "0,10", "17", "0,85"], ["5", "1", "0,05", "20", "1,00", "3", "0,15", "20", "1,00"]]
    }
};

function appendMathText(target, value) {
    const text = String(value ?? "").replace(/◦\s*C/g, "°C");
    const pattern = /∑\s+n\s+i\s*=\s*1|∑\s+i(?![A-Za-z])|¯\s*x|\blog\s+10\b|(?<![A-Za-zÀ-ÖØ-öø-ÿ])([xFfQPk])\s+(i|a|[1-9]\d?)(?![A-Za-zÀ-ÖØ-öø-ÿ])|(?<![A-Za-zÀ-ÖØ-öø-ÿ])([AB])\s+c(?![A-Za-zÀ-ÖØ-öø-ÿ])|([xFfQPk])([ᵢₐ])|([AB])ᶜ|(?<![A-Za-zÀ-ÖØ-öø-ÿ])([xFf])([ia])\b|(?<![A-Za-zÀ-ÖØ-öø-ÿ])([QP])(10|25|50|75|90|[123])\b|\)\s+2/g;
    let cursor = 0;
    let match;
    while ((match = pattern.exec(text))) {
        target.append(document.createTextNode(text.slice(cursor, match.index)));
        const value = match[0];
        if (value.startsWith("∑")) {
            const sum = document.createElement("span");
            sum.className = "math-sum";
            sum.append(document.createTextNode("∑"));
            if (/n/.test(value)) {
                const upper = document.createElement("sup");
                upper.textContent = "n";
                sum.append(upper);
                const lower = document.createElement("sub");
                lower.textContent = "i=1";
                sum.append(lower);
            } else {
                const lower = document.createElement("sub");
                lower.textContent = "i";
                sum.append(lower);
            }
            target.append(sum);
        } else if (value.startsWith("¯")) {
            target.append(document.createTextNode("x̄"));
        } else if (/^log/i.test(value)) {
            target.append(document.createTextNode("log"));
            const base = document.createElement("sub");
            base.textContent = "10";
            target.append(base);
        } else if (value.startsWith(")")) {
            target.append(document.createTextNode(")"));
            const exponent = document.createElement("sup");
            exponent.textContent = "2";
            target.append(exponent);
        } else {
            const letter = match[1] || match[3] || match[4] || match[6] || match[7] || match[9];
            const index = match[2] || (match[5] === "ᵢ" ? "i" : match[5] === "ₐ" ? "a" : "") || match[8] || match[10] || "c";
            target.append(document.createTextNode(letter));
            const raised = Boolean(match[3] || match[6]);
            const mark = document.createElement(raised ? "sup" : "sub");
            mark.textContent = index;
            target.append(mark);
        }
        cursor = pattern.lastIndex;
    }
    target.append(document.createTextNode(text.slice(cursor)));
}

function renderQuizTable(target, table, storageKey = "") {
    const wrapper = document.createElement("div");
    wrapper.className = "table-scroll";
    const element = document.createElement("table");
    if (table.className) element.classList.add(table.className);
    const caption = document.createElement("caption");
    caption.textContent = table.caption;
    element.append(caption);
    const head = document.createElement("thead");
    const headerRow = document.createElement("tr");
    table.columns.forEach(value => {
        const th = document.createElement("th");
        th.scope = "col";
        th.textContent = value;
        headerRow.append(th);
    });
    head.append(headerRow);
    const body = document.createElement("tbody");
    table.rows.forEach((row, rowIndex) => {
        const tr = document.createElement("tr");
        row.forEach((value, index) => {
            const cell = document.createElement(index === 0 && table.columns.length > 2 ? "th" : "td");
            if (cell.tagName === "TH") cell.scope = "row";
            if (table.editable && value === "") {
                const input = document.createElement("input");
                input.type = "text";
                input.className = "table-answer";
                input.setAttribute("aria-label", `${table.caption}: linha ${row[0]}, coluna ${table.columns[index]}`);
                const inputKey = `${storageKey}:table:${rowIndex}:${index}`;
                input.value = localStorage.getItem(inputKey) || "";
                input.addEventListener("input", () => {
                    if (input.value.trim()) localStorage.setItem(inputKey, input.value);
                    else localStorage.removeItem(inputKey);
                    document.dispatchEvent(new Event("quiz:progress"));
                });
                cell.append(input);
            } else appendMathText(cell, value);
            tr.append(cell);
        });
        body.append(tr);
    });
    element.append(head, body);
    wrapper.append(element);
    target.append(wrapper);
}

function renderAlineaTable(target, items, editable, storageKey) {
    const wrapper = document.createElement("div");
    wrapper.className = "table-scroll alinea-table-scroll";
    const table = document.createElement("table");
    table.className = "alinea-table";
    if (!editable) table.classList.add("solution-alinea-table");
    const thead = document.createElement("thead");
    const heading = document.createElement("tr");
    ["Alínea", "Resposta"].forEach(text => {
        const th = document.createElement("th");
        th.scope = "col";
        th.textContent = text;
        heading.append(th);
    });
    thead.append(heading);
    const tbody = document.createElement("tbody");
    items.forEach(item => {
        const row = document.createElement("tr");
        const prompt = document.createElement("td");
        const marker = document.createElement("span");
        marker.className = "alinea-marker";
        marker.textContent = `${item.label})`;
        prompt.append(marker);
        const response = document.createElement("td");
        if (editable) {
            prompt.append(document.createTextNode(" "));
            appendMathText(prompt, item.text);
            const input = document.createElement("input");
            input.type = "text";
            input.className = "table-answer alinea-answer";
            input.setAttribute("aria-label", `Resposta à alínea ${item.label}: ${item.text.slice(0, 140)}`);
            const inputKey = `${storageKey}:${item.label}`;
            input.value = localStorage.getItem(inputKey) || "";
            input.addEventListener("input", () => {
                if (input.value.trim()) localStorage.setItem(inputKey, input.value);
                else localStorage.removeItem(inputKey);
                document.dispatchEvent(new Event("quiz:progress"));
            });
            response.append(input);
        } else appendMathText(response, item.text);
        row.append(prompt, response);
        tbody.append(row);
    });
    table.append(thead, tbody);
    wrapper.append(table);
    target.append(wrapper);
}

function renderQuizProse(target, text, field, storageKey, segment) {
    const normalized = text.replace(/(?<![A-Za-z])\d+([a-z]\))/g, "$1").replace(/\s+/g, " ").trim();
    if (!normalized) return false;
    const markerPattern = /(?:^|\s)(?:\(([a-z])\)|([a-z])\))\s+/g;
    const matches = [...normalized.matchAll(markerPattern)];
    if (!matches.length) {
        const p = document.createElement("p");
        appendMathText(p, normalized);
        target.append(p);
        return false;
    }
    const first = matches[0];
    const preamble = normalized.slice(0, first.index).trim();
    if (preamble) {
        const p = document.createElement("p");
        appendMathText(p, preamble);
        target.append(p);
    }
    const items = matches.map((match, index) => {
        const markerText = match[1] || match[2];
        const end = index + 1 < matches.length ? matches[index + 1].index : normalized.length;
        return { label: markerText, text: normalized.slice(match.index + match[0].length, end).trim() };
    });
    renderAlineaTable(target, items, field === "prompt", `${storageKey}:alinea:${field}:${segment}`);
    return true;
}

function renderQuizText(target, text, filename, number, field, storageKey = "") {
    target.replaceChildren();
    const table = QUIZ_TABLES[`${filename}:${number}:${field}`];
    let hasAlineaAnswers = false;
    if (!table || !text.includes(table.marker)) {
        hasAlineaAnswers = renderQuizProse(target, text, field, storageKey, "whole");
    } else {
        const [before, after] = text.split(table.marker, 2);
        hasAlineaAnswers = renderQuizProse(target, before, field, storageKey, "before");
        renderQuizTable(target, table, storageKey);
        hasAlineaAnswers = renderQuizProse(target, after, field, storageKey, "after") || hasAlineaAnswers;
    }
    if (field === "prompt") {
        const structuredAnswers = hasAlineaAnswers || Boolean(table && table.editable);
        document.getElementById("answer").classList.toggle("hidden", structuredAnswers);
        document.getElementById("answerLabel").classList.toggle("hidden", structuredAnswers);
    }
}
