# Mutirão do Lixo Eletrônico

O **Mutirão do Lixo Eletrônico** é um evento anual realizado em Presidente Prudente/SP, com o principal objetivo de possibilitar o descarte ambientalmente correto do e-lixo produzido pela população do município. Para garantir o destino adequado do e-lixo, o Governo de Presidente Prudente firmou parceria com a **ABREE** (Associação Brasileira de Reciclagem de Eletroeletrônicos e Eletrodomésticos).

A **Faculdade de Informática de Presidente Prudente (FIPP)**, da **Universidade do Oeste Paulista (UNOESTE)**, tem parceria com o evento, que é realizado anualmente. O evento é aberto a toda a comunidade regional e de outros centros e procura reunir estudantes de graduação, professores, profissionais e outros interessados na reciclagem, visando à difusão da reciclagem de eletrônicos e seu uso responsável, colaborando imensamente com o meio ambiente. A FIPP/Unoeste tem um papel fundamental em envolver seus alunos.

O **Mutirão do Lixo Eletrônico** já se tornou uma tradição na cidade de Presidente Prudente!

## Objetivo do Projeto

A missão do grupo é desenvolver um website para a organização do evento, respeitando os seguintes requisitos:

### Funcionalidades do Site:

- **Página Principal**: Apresentação do evento, com foto, título e uma breve descrição.
  
- **Página de Detalhes do Evento**: Informações detalhadas sobre o evento, incluindo fotos e outras informações relevantes. Link para retornar à página principal.

- **Página de Inscrição**: Permite que os alunos se inscrevam para participar do evento. Cada inscrição deverá coletar informações como:
  - Foto do inscrito
  - Nome
  - Curso
  - Data de nascimento
  - Endereço completo
  - E-mail
  - Outras informações que o grupo achar necessárias.
  - O sistema utiliza **SQLite** para armazenar os dados das inscrições dos participantes de forma eficiente.

- **Portfólio dos Integrantes**: Adicionar um menu para acessar os portfólios dos integrantes do grupo. Isso pode ser usado para demonstrar o progresso dos envolvidos e suas contribuições no projeto.

## Tecnologias Utilizadas

- **HTML5** <img src="https://img.icons8.com/color/48/000000/html-5.png" style="vertical-align: middle; width: 20px; height: 20px;"> 
- **CSS3** <img src="https://img.icons8.com/color/48/000000/css3.png" style="vertical-align: middle; width: 20px; height: 20px;">
- **JavaScript** <img src="https://img.icons8.com/color/48/000000/javascript.png" style="vertical-align: middle; width: 20px; height: 20px;">
- **SQLite** <img src="https://img.icons8.com/ios-filled/50/000000/sqlite.png" style="vertical-align: middle; width: 20px; height: 20px;">

## Funcionalidades Implementadas

- **Cadastro de Inscrições**: Utilizando **SQLite** para armazenar as inscrições dos voluntários, garantindo persistência dos dados. A inscrição é feita diretamente na página de inscrição do evento.

- **Design Responsivo**: O layout do site foi pensado para ser responsivo, funcionando bem tanto em dispositivos móveis quanto em desktops.

## Instruções de Uso

1. **Abrir o arquivo `index.html`** no seu navegador para visualizar o site.
   
2. Para a funcionalidade de inscrição e persistência dos dados, o site usa **SQLite** para armazenar as informações. A base de dados é configurada para receber os dados diretamente da página de inscrição.
