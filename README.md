# Olinda Limpa

Projeto desenvolvido como atividade de React. A proposta é reunir informações sobre a coleta de lixo em Olinda, com consulta de horários, acompanhamento de rotas, avisos e orientações sobre descarte correto.

A aplicação funciona em desktop e celular. Foi feito apenas o frontend, com os dados armazenados no próprio projeto, sem backend ou banco de dados.

## Tecnologias utilizadas

- React e JavaScript
- React Router
- CSS Modules
- Create React App

## Funcionalidades

- Consultar os dias e horários de coleta de Centro, Bairro Novo e Casa Caiada.
- Ver o andamento da coleta e a previsão de chegada por região.
- Buscar materiais e consultar orientações de descarte.
- Filtrar avisos por bairro e assunto e marcar como lidos.

Os filtros e as escolhas são mantidos ao trocar de página. Ao recarregar o navegador, voltam ao estado inicial.

## Como rodar

Com o Node.js e o npm instalados, abra o terminal na pasta do projeto e execute:

```sh
npm install
npm start
```

Depois, acesse http://localhost:3000 no navegador. Para encerrar, pressione `Ctrl + C` no terminal.

Para gerar a versão de produção, use `npm run build`. Os arquivos serão criados na pasta `build`.

## Organização

Dentro de `src`, o código está separado em:

- `pages`: as quatro páginas da aplicação.
- `components`: menu e cartões usados nas telas.
- `data`: horários, rotas, avisos e conteúdos de descarte.
- `assets`: fontes e ícones.
- `utils`: função que trata os textos das buscas.

O `App.js` reúne as rotas e os estados compartilhados. Os estilos de cada página e componente ficam no respectivo arquivo `.module.css`, incluindo os ajustes para celular.
