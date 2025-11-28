# Desafio Front-End - GitHub User Search

Este projeto é uma aplicação desenvolvida para buscar usuários do GitHub, listar repositórios e favoritos, e visualizar os detalhes dos repositórios.

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido  utilizando:

* **React** + **Vite**:Ambiente de desenvolvimento.
* **TypeScript**: Para garantir tipagem estática.
* **TanStack Query**: Para gerenciamento de cache.
* **Zustand**: Para gerenciamento de estado global com persistência.
* **TailwindCSS**: Para estilização rápida.
* **Material UI**: Para componentes de interface.
* **Axios**: Para consumo da API.

## 🌐 Site

Fiz a publicação do site na web utilizando a plataforma Vercel.
* [Site](https://ocsane-magazord-frontend.vercel.app/)


## ⚙️ Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:
* [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
* [Git](https://git-scm.com/)

## 🔧 Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

1. **Clone o repositório:**
   Abra seu terminal e execute:
   ```bash
   git clone https://github.com/ocsane-figueira/magazord-frontend.git
   ```

2.  **Acesse a pasta do projeto:**

    ```bash
    cd magazord-frontend
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

4.  **Execute o projeto:**

    ```bash
    npm run dev
    ```

## 💡 Decisões Técnicas

Durante o desenvolvimento, tomei algumas descições para atender aos requisitos:

  * **Zustand:** Utilizei apenas para gerenciar o histórico de buscas, utilizando o `persist` para manter os dados salvos localmente.
  * **MUI + Tailwind:** Utilizei o **MUI** para agilizar a criação de componentes complexos e acessíveis (como Tabs e Inputs) e o **TailwindCSS** para a estruturação do layout e espaçamentos, acelerando meu desenvolvimento.

## ⚠️ Desafios e Melhorias Futuras

Durante o desenvolvimento, o principal desafio foi o gerenciamento do tempo para entrega do teste. Por conta disso, identifiquei alguns pontos que eu gostaria de melhorar em uma "versão 2.0":

  * **Ajustes Finos no Layout Mobile:**
    Meu objetivo foi seguir o design proposto no Figma, porém, devido ao prazo curto, contando com trabalho e faculdade, fiz de forma simples.

  * **Uso do Zustand:**
    Como a aplicação é relativamente pequena, o uso do Zustand foi aplicado especificamente para o **Histórico de Buscas**, conforme os requisitos. A implementação serviu para atender o requisito, mesmo podendo ser feito de forma simples com soluções do React.

  * **Testes:**
    Com mais tempo, a implementação de testes unitários (Vitest) seria o próximo passo para garantir a estabilidade e qualidade do código a longo prazo.

## 📂 Estrutura de Pastas

```
src/
  ├── components/   # Componentes visuais reutilizáveis
  ├── hooks/        # Hooks personalizados (Lógica do React Query)
  ├── pages/        # Páginas da aplicação (Home, Profile, RepoDetails)
  ├── services/     # Configuração da API (Axios)
  ├── store/        # Gerenciamento de estado global (Zustand)
  ├── types/        # Definições de tipos TypeScript
  └── utils/        # Funções auxiliares
```
