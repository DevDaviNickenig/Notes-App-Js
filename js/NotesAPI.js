export default class NotesAPI {
    static pegarNotas() {
        const notas = JSON.parse(localStorage.getItem("appnotas-notas") || "[]");

        return notas.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    }

    static salvarNotas(notasParaSalvar) {
        const notas = NotesAPI.pegarNotas();

        notasParaSalvar.id = Math.floor(Math.random() * 100000);
        notasParaSalvar.updated = new Date().toISOString;
        notas.push(notasParaSalvar);
        localStorage.setItem("notesapp-notes", JSON.stringify(notas));
    }

    static deletarNota(id) {

    }
}