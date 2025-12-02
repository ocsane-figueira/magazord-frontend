# Desafio Front-End - GitHub

Este projeto é uma aplicação desenvolvida para buscar usuários do GitHub, listar seus repositórios e favoritos, além de permitir o acesso aos detalhes e histórico de commits de cada projeto. 

# Recursos utilizados (tecnologia, linguagem, importação de componentes) 

O projeto foi desenvolvido utilizando: 

  * **React** + **Vite** - Para um ambiente de desenvolvimento otimizado; 
  * **TypeScript** - Com objetivo de garantir tipagem e evitar erros ocasionais de execução; 
  * **TanStack Query** - Gerenciamento de estado do servidor, cache e validação de dados; 
  * **Zustand** - Gerencimento do estado global (Histórico de Busca) com persistência; 
  * **TailwindCSS** - Para estilização; 
  * **Material UI** - Para utilização/importação de componentes de interface acessíveis. 
  * **Axios** - Para consumo da API do GitHub 
  
# Pré-requisitos 

Antes de começar, certifique-se de ter instalado em sua máquina:
* [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
* [Git](https://git-scm.com/)

# Instalação e Execução

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

# O que mudou em relação ao pensamento original (dificuldades encontradas ao desenvolver)?

Durante o desenvolvimento, o principal desafio foi o gerenciamento do tempo para entrega do teste, o prazo foi prorrogado mas devido a demanda da black por exemplo, foi um pouco mais corrido.

Zustand: Como a aplicação é relativamente pequena, o uso de um gerenciador de estados global mais robusto como o Zustand foi aplicado especificamente para o histórico de buscas, conforme os requisitos. Embora em uma aplicação deste porte o estado local pudesse resolver, a implementação serviu para demonstrar a configuração correta da biblioteca e o uso de middlewares (persistência).

# Estrutura de Pastas 

```
src/
  ├── features/   # Funcionalidades do sistema. Ex: Repository, Search e User. 
  ├── pages/      # Principais páginas exibidas para o usuário final. Ex: Home, Profile e Repository 
  ├── routes/     # Arquivos de rotas da aplicação e definição das telas acessíveis e seus caminhos
  ├── shared/     # Componentes e utilitários reutilizados em várias features. Ex: Header, LoadingScreen
```

# 🌐 Site

Fiz a publicação do site na web utilizando a plataforma Vercel.
* [Site](https://ocsane-magazord-frontend.vercel.app/)
