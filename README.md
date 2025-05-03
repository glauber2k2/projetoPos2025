# Task Manager

grupo: Glauber Monteiro, Diego Altenkirch, Vinicius Ferreira.

O Task Manager é um aplicativo desenvolvido com foco na organização pessoal, produtividade e gerenciamento de projetos. Seu principal objetivo é ajudar os usuários a  se organizarem com mais eficiência, permitindo a criação, edição, categorização e acompanhamento de tarefas de maneira simples e intuitiva. A interface foi projetada no Figma com um design moderno, funcional e responsivo, priorizando a praticidade e a clareza na navegação. 
O app oferece uma experiência fluida, com recursos para gerenciar tarefas por prioridade, status (pendente, em andamento, concluída), prazos e notificações, tornando-se uma ferramenta completa para o controle do dia a dia e o progresso de projetos.

Telas no Figma
1. Tela de Cadastro/Login
Campos para nome, e-mail, senha e confirmação.
Design clean com chamada motivacional: “Planeje, execute, conquiste.”
Ícones de redes sociais para conectividade e engajamento.

2. Home (Página principal)
Saudação ao usuário.
Seção "Sua agenda" com tarefas organizadas por dia (Hoje, Amanhã, etc.).
Seção "Projetos" exibindo miniaturas de projetos criados.
Botões para + Criar Tarefa e + Criar Projeto.

3. Criar Tarefa
Tela para inserir o nome da tarefa.
Opções de prioridade e categoria.
Botão para salvar a tarefa.

4. Criar Projeto
Campo para nome do projeto.
Opção de adicionar imagem.
Botão para salvar ou cancelar.

5. Projeto
Visualização de projeto específico.
Exibição da imagem e nome do criador (exemplo: Vinícius Ferreira).
Recursos e Funcionalidades
Criação e gerenciamento de tarefas e projetos.
Interface com foco em usabilidade e organização.
Divisão clara entre tarefas diárias e projetos maiores.
Personalização visual com imagens nos projetos.
Design responsivo com componentes simples e funcionais.

[Fluxograma](https://www.tldraw.com/f/pciLy9L6HDUGhUqDX0aQH?d=v-361.-189.1945.1112.pAZpclm-QIX51Q0q2C0bI)

[Mapa Mental](https://mm.tt/app/map/3682702054?t=hEWbcv0vWH)

[Figma](https://www.figma.com/design/uQXsz4O7nuNBJJiU6MAktW/ProjetoP%C3%B3sDaniel?node-id=0-1&t=fWCLWPR4sPLjWKih-1)

Estrutura Backend

1. Autenticação e Autorização
- Cadastro de usuário (POST /register)
- Login com autenticação JWT ou session (POST /login)
- Logout e verificação de sessão
- Proteção de rotas para que cada usuário veja apenas suas tarefas/projetos

 2. Gerenciamento de Tarefas
- Criar tarefa (POST /tasks)
- Listar tarefas do usuário (GET /tasks)
- Com filtros por status, prioridade e data
- Atualizar tarefa (PUT /tasks/:id)
- Alterar status (pendente, em andamento, concluída)
- Excluir tarefa (DELETE /tasks/:id)

3. Gerenciamento de Projetos
- Criar projeto (POST /projects)
- Listar projetos do usuário (GET /projects)
- Ver detalhes do projeto (GET /projects/:id)
- Atualizar projeto (PUT /projects/:id)
- Excluir projeto (DELETE /projects/:id)

4. Notificações e Prazos
- Backend deve agendar notificações (via cronjob) e integrar com serviços de push/email.
- Verificar prazos vencidos ou próximos e retornar avisos via API.

5. Categorização e Filtros
- Permitir que o usuário atribua categorias ou tags às tarefas
- Filtros na listagem por categoria, prioridade, status e datas

6. Estrutura de Banco de Dados
Tabelas principais:
- users(id, nome, email, senha_hash)
- tasks(id, user_id, título, descrição, status, prioridade, categoria, prazo)
- projects(id, user_id, nome, imagem)
- notifications(id, user_id, message, date)

