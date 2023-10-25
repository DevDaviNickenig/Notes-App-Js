import NotesAPI from "./notesAPi.js";
import VisualizadorNotas from "./VisualizadorNotas.js";

const app = document.getElementById("app");
const visualizar = new VisualizadorNotas(app, {
  addNota() {
    console.log("yayy");
  },
  editNota(tituloNovo, corpoNovo) {
    console.log(tituloNovo);
    console.log(corpoNovo);
  },
});

visualizar.atualizarListaNotas(NotesAPI.pegarNotas());
