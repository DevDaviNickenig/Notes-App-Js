export default class NotesAPI {
    static pegarNotas() {
        const notas = JSON.parse(localStorage.getItem("appnotas-notas") || "[]");

        return notas.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    }

    static salvarNotas(notasParaSalvar) {
        const notas = NotesAPI.pegarNotas();
        const notaSalva = notas.find(nota => nota.id == notasParaSalvar.id);
        //atualizar
        if (notaSalva) {
            notaSalva.title = notasParaSalvar.title;
            notaSalva.body = notasParaSalvar.body;
            notaSalva.updated = new Date().toISOString();
        } else {
            notasParaSalvar.id = Math.floor(Math.random() * 1000);
            notasParaSalvar.updated = new Date().toISOString();
            notas.push(notasParaSalvar);
        }
        
        localStorage.setItem("appnotas-notas", JSON.stringify(notas));
    }

    static deletarNota(id) {

    }
}