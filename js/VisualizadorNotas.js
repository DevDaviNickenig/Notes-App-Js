export default class VisualizadorNotas {
  constructor(root, { selecaoNota, addNota, editNota, deletarNota } = {}) {
    this.root = root;
    this.selecaoNota = selecaoNota;
    this.addNota = addNota;
    this.editNota = editNota;
    this.deletarNota = deletarNota;
    this.root.innerHTML = `
            <div class="notas" id="app">
            <div class="barra__lateral">
                <button class="adicionar__nota">Adicionar Nota</button>
                <div class="notas__lista">                                  
                </div>
            </div>
            <!-- EDITOR DE NOTAS -->
            <div class="notas__editor">
                <input type="text" class="notas__titulo" placeholder="Digite o Título">
                <textarea class="notas__editor-corpo">Tome nota.....</textarea>
            </div>
        `;

    const botaoAdd = this.root.querySelector(".adicionar__nota");
    const entradaTitulo = this.root.querySelector(".notas__titulo");
    const entradaCorpo = this.root.querySelector(".notas__editor-corpo");

    botaoAdd.addEventListener("click", () => {
      this.addNota();
    });

    [entradaTitulo, entradaCorpo].forEach((input) => {
      input.addEventListener("blur", () => {
        const tituloAtualizado = entradaTitulo.value.trim();
        const corpoAtualizado = entradaCorpo.value.trim();

        this.editNota(tituloAtualizado, corpoAtualizado);
      });
    });
  }
}
