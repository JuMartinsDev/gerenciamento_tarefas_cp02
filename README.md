📝 Projeto de Gerenciamento de Tarefas com Angular
Este é um projeto simples desenvolvido com Angular com o objetivo de gerenciar tarefas. Ele permite criar, listar e remover tarefas, utilizando formulários reativos e oferecendo feedback ao usuário em cada ação.

📌 Funcionalidades
✅ Adicionar novas tarefas com título, descrição e data de vencimento

📋 Listar todas as tarefas registradas

❌ Remover tarefas da lista

🧾 Validação de formulário com mensagens de erro claras

✅ Feedback visual após ações (adição ou remoção)

🧠 Estrutura do Projeto
1. TarefaService (Serviço de Tarefas)
Responsável por toda a lógica relacionada às tarefas.

Métodos disponíveis:
adicionarTarefa(tarefa: Tarefa)

listarTarefas(): Tarefa[]

removerTarefa(index: number)

2. TarefasComponent (Componente de Tarefas)
Componente responsável pela interação com o usuário.

Principais elementos:
Formulário reativo para inserção de tarefas

Listagem dinâmica das tarefas

Botão de exclusão para remover itens da lista

Recursos adicionais:
Validação de campos obrigatórios

Mensagens de sucesso e erro

Integração direta com TarefaService
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.5.

