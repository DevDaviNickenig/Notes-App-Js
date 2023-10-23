import NotesAPI from "./notesAPi.js";

NotesAPI.salvarNotas({
    title: "Nova Nota",
    body: "sou uma nota nova"
});

console.log(NotesAPI.pegarNotas());