export default class VisualizadorNotas {
  constructor(root, { selecaoNota, addNota, editNota, deletarNota } = {}) {
    this.root = root;
    this.selecaoNota = selecaoNota;
    this.addNota = addNota;
    this.editNota = editNota;
    this.deletarNota = deletarNota;
    this.root.innerHTML = `            
            <div class="barra__lateral">
                <button class="adicionar__nota">Adicionar Nota</button>
                <div class="notas__lista"></div>
            </div>            
            <div class="notas__editor">
                <input typ e="text" class="notas__titulo" placeholder="Digite o Título">
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
    console.log(
      this.criarListaItemHTML(300, "nao funciona", "essa parada", new Date())
    );
  }

  criarListaItemHTML(id, titulo, corpo, atualizado) {
    const cumprimentoCorpo = 60;

    return `
      <div class="notas__lista-item" data-id="${id}">
      <div class="notas__pequeno-titulo">${titulo}</div>
      <div class="notas__pequeno-corpo">
      ${corpo.substring(0, cumprimentoCorpo)}
      ${corpo.length > cumprimentoCorpo ? "..." : ""}
      </div>
      <div class="notas__pequeno-atualizado">${atualizado.toLocaleString(
        undefined,
        { dateStyle: "full", timeStyle: "short" }
      )}</div> 
      </div>
    `;
  }

  atualizarListaNotas(notas) {
    const containerListaNotas = this.root.querySelector(".notas__lista");

    containerListaNotas.innerHTML = "";

    for (const nota of notas) {
      const html = this.criarListaItemHTML(
        nota.id,
        nota.titulo,
        nota.corpo,
        new Date(nota.atualizado)
      );
      containerListaNotas.insertAdjacentHTML("beforeend", html);
    }
  }
}
