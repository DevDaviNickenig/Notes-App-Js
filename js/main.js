import NotesAPI from "./notesAPi.js";
import VisualizadorNotas from "./VisualizadorNotas.js";

const app = document.getElementById("app");
const vizualizar = new VisualizadorNotas(app, {
  addNota() {
    console.log("yayy");
  },

  editNota(tituloNovo, corpoNovo) {
    console.log(tituloNovo);
    console.log(corpoNovo);
  },
});

// NotesAPI.salvarNotas({
//     id: 497,
//     title: "Nova Nota caraho!",
//     body: "sou uma nota nova"
// });

// NotesAPI.deletarNota(394);
