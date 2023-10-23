import NotesAPI from "./notesAPi.js";

NotesAPI.salvarNotas({
    id: 497,
    title: "Nova Nota caraho!",
    body: "sou uma nota nova"
});

console.log(NotesAPI.pegarNotas());