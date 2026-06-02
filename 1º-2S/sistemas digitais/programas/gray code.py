import sys
from PySide6.QtWidgets import QApplication, QWidget, QVBoxLayout, QLabel, QLineEdit

class GrayCodeTool(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Explorador de Código Cinza")
        self.setMinimumWidth(300)
        
        # Layout e Widgets
        layout = QVBoxLayout()
        
        self.input_bin = QLineEdit()
        self.input_bin.setPlaceholderText("Digite um número binário (ex: 0101)")
        self.input_bin.textChanged.connect(self.atualizar_resultado)
        
        self.label_resultado = QLabel("Resultado (Gray): -")
        
        layout.addWidget(QLabel("Entrada (Binário):"))
        layout.addWidget(self.input_bin)
        layout.addWidget(self.label_resultado)
        
        self.setLayout(layout)

    def atualizar_resultado(self, text):
        # Validação simples para aceitar apenas 0 e 1
        if all(bit in '01' for bit in text) and text != "":
            n_int = int(text, 2)
            gray = n_int ^ (n_int >> 1)
            # Retorna o resultado com o mesmo tamanho da entrada
            resultado = bin(gray)[2:].zfill(len(text))
            self.label_resultado.setText(f"Resultado (Gray): {resultado}")
        else:
            self.label_resultado.setText("Resultado (Gray): Inválido")

if __name__ == "__main__":
    app = QApplication(sys.argv)
    janela = GrayCodeTool()
    janela.show()
    sys.exit(app.exec())