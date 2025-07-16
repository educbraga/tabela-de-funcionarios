# 🎯 Tabela de Gestão de Funcionários

<div align="center" style="display: flex; justify-content: center; gap: 20px; margin: 20px 0;">
  <img src="docs/Screen web - Employees.png" alt="Versão Desktop" width="45%" />
  <img src="docs/Screen mobile - Employees.png" alt="Versão Mobile" width="45%" />
</div>

Uma aplicação responsiva e moderna construída com **React + TypeScript + CSS BEM** (https://getbem.com) que oferece uma experiência intuitiva para visualização e busca de informações de funcionários.

## 📱 Sobre o Projeto

Esta aplicação oferece a visualização de dados de funcionários, adaptando-se a diferentes tamanhos de tela e seguindo boas práticas de UX para dispositivos mobile:

- **💻 Desktop**: Tabela completa com todas as informações organizadas em colunas
- **📱 Mobile**: Cards expansíveis que revelam detalhes ao serem tocados
- https://fuzzymath.com/blog/6-ux-design-patterns-reconsider-for-mobile-designs/

## ✨ Características

- 🔍 **Busca com debounce** - Pesquise por nome, cargo ou telefone
- 📱 **Design responsivo** - Interface adaptável para desktop e mobile
- 📅 **Formatação brasileira** - Datas no formato DD/MM/AAAA
- ☎️ **Telefones formatados** - Padrão brasileiro +55 (11) 99999-9999
- 🎨 **Interface moderna** - Design limpo e estilizado com CSS no padrão BEM
- 🔵 **Cores personalizadas** - Azul BeTalent (#0500FF) em toda aplicação
- **Família de fontes Roboto** para melhor legibilidade

## 🛠️ Tecnologias Utilizadas

- **React 19** com TypeScript para tipagem segura
- **CSS BEM** para estilização moderna, semântica e responsiva
- **Vite** como ferramenta de build
- **json-server** para simulação de API

## 📋 Pré-requisitos

Para uma experiência tranquila, você precisará ter:

- **Node.js v24.3.0** (versão recomendada - definida no arquivo `.nvmrc`)
- **NVM** (Node Version Manager) para gerenciar versões do Node.js
- **npm** como gerenciador de pacotes (incluído com o Node.js)
- **Git** para controle de versão

## 🚀 Como Executar o Projeto

Siga estes passos simples para rodar a aplicação:

### 1. **Ajuste sua versão do Node.js**

Se você usa NVM, simplesmente execute na raiz do projeto:

```bash
nvm use
```

Se ainda não tem o NVM instalado:

- **macOS/Linux**: [Instale via curl/wget](https://github.com/nvm-sh/nvm#installing-and-updating)
- **Windows**: [Use nvm-windows](https://github.com/coreybutler/nvm-windows)

Após instalar o NVM, execute:

```bash
nvm install
nvm use
```

### 2. **Instale as dependências**

```bash
npm install
```

### 3. **Inicie o ambiente de desenvolvimento**

```bash
npm run start
```

✨ **Pronto!** Este comando único faz toda a mágica, iniciando automaticamente:

- 🖥️ **json-server** na porta 3000 (simulação da API)
- ⚡ **Vite dev server** na porta 5173 (interface da aplicação)

### 4. **Acesse a aplicação**

Abra seu navegador favorito e visite: [http://localhost:5173](http://localhost:5173)

> 💡 **Dica**: Se algo não funcionar como esperado, verifique se ambos os servidores estão rodando corretamente!

## 🔧 Comandos Disponíveis

Aqui estão todos os comandos que você pode usar:

| Comando               | Para que serve                                    |
| --------------------- | ------------------------------------------------- |
| `npm run start`       | 🚀 Inicia tudo de uma vez (API + interface)       |
| `npm run dev`         | ⚡ Roda apenas a interface (precisa da API ativa) |
| `npm run json-server` | 🖥️ Roda apenas a API simulada (porta 3000)        |
| `npm run build`       | 📦 Cria a versão otimizada para produção          |
| `npm run preview`     | 👀 Mostra como ficará a versão de produção        |
| `npm run lint`        | 🔍 Verifica a qualidade do código                 |

> 💡 **Recomendação**: Use `npm run start` para desenvolvimento - é mais prático!

## 📁 Estrutura do Projeto

```
src/
├── components/              # Componentes React reutilizáveis
│   ├── Header.tsx          # Cabeçalho com logo BeTalent
│   ├── SearchInput.tsx     # Campo de busca com ícone
│   ├── EmployeeTable.tsx   # Tabela para visualização desktop
│   └── EmployeeCard.tsx    # Cards expansíveis para mobile
├── services/               # Serviços de API
│   └── employeeService.ts  # Requisições para json-server
├── types/                  # Interfaces TypeScript
│   └── Employee.ts         # Tipagem dos dados de funcionários
├── utils/                  # Funções utilitárias
│   ├── formatters.ts       # Formatação de data e telefone
│   └── photoMapper.ts      # Mapeamento de fotos locais
├── styles/                 # Arquitetura CSS BEM
│   ├── variables.css       # Design tokens e CSS custom properties
│   ├── base.css           # Reset CSS e estilos base
│   ├── components/        # Estilos dos componentes (BEM)
│   └── main.css          # Arquivo principal de importação
├── assets/                 # Recursos estáticos
│   ├── photos/             # Fotos dos funcionários seguidas dos IDs (user-1.png...)
│   ├── icons/             # Ícones SVG (magnifier, chevrons)
│   └── logo.svg            # Logo BeTalent
└── App.tsx                 # Componente principal da aplicação
```

## 📊 Dados da API

A aplicação consome dados do arquivo `db.json` através do json-server. Cada funcionário possui:

- **ID único** - Identificador numérico
- **Nome completo** - Nome do funcionário
- **Cargo** - Posição na empresa (Front-end, Back-end, Designer)
- **Data de admissão** - Data de contratação (formato ISO)
- **Telefone** - Número de contato brasileiro
- **Foto** - Imagem local correspondente ao ID

## 🔍 Sistema de Busca Inteligente

O recurso de busca foi pensado para ser rápido e eficiente:

- 📝 **Nome** - busca parcial, sem se preocupar com maiúsculas/minúsculas
- 💼 **Cargo** - encontre facilmente desenvolvedores, designers, etc.
- 📞 **Telefone** - busca exata pelo número completo

✨ **Tecnologia**: Utiliza debounce inteligente para otimizar a performance e evitar consultas desnecessárias enquanto você digita.

## 📱 Design Responsivo Inteligente

A aplicação se adapta perfeitamente a qualquer dispositivo:

### 💻 **Experiência Desktop** (telas ≥ 768px)

- Tabela elegante com todas as informações visíveis de uma só vez
- Layout otimizado para produtividade e análise rápida dos dados
- Cabeçalho na cor azul BeTalent

### 📱 **Experiência Mobile** (telas < 768px)

- Cards compactos e tocáveis com foto e nome
- Prioridade para os dados mais importantes
- Interação intuitiva: toque para expandir e ver mais detalhes
- Animações suaves que tornam a navegação mais agradável
- Interface com linhas altas para facilitar o uso com o polegar

> 🎯 **Filosofia**: Mobile first + Experiência adequada ao dispositivos usado.

## 🎨 Design System

### Arquitetura CSS BEM

- **Metodologia BEM**: Blocos, Elementos e Modificadores para CSS semântico
- **Mobile-first**: Design responsivo com breakpoint em 768px

### Cores

- **Azul BeTalent**: `#0500FF` - Cor principal da marca
- **Fundos**: Tons de cinza claro para contraste suave
- **Textos**: Hierarquia clara com tons de cinza escuro

### Tipografia

- **Fonte**: Roboto (300, 400, 500, 700)
- **Tamanhos**: h1 (20px medium), h2 (16px medium), h3 (16px regular)

### Espaçamento

- **Little**: 6px, 8px - Pequenos espaçamentos internos
- **Regular**: 16px, 20px, 28px - Espaçamentos padrão
- **Medium**: 32px, 40px, 60px, 80px - Grandes espaçamentos

## 🔧 Solução de Problemas

Se algo não estiver funcionando como esperado, aqui estão as soluções mais comuns:

### 🚨 **"Erro ao carregar funcionários"**

**O que aconteceu**: A API não está respondendo  
**Como resolver**: Verifique se o json-server está ativo:

```bash
npm run json-server
```

**Dica extra**: Use `npm run start` para garantir que tudo inicie junto!

### 🖼️ **Fotos dos funcionários não aparecem**

**O que aconteceu**: Problemas com as imagens locais  
**Como resolver**:

1. Confirme se existem arquivos em `src/assets/photos/`
2. Verifique os nomes: `user-1.png`, `user-2.png`, etc.
3. Se ainda assim não funcionar, a aplicação mostrará uma foto padrão

**Observação**: Nos dados originais algumas fotos não possuem dados correspondentes. Caso um usuário não tenha foto um placeholder é usado como fallback.

### 🌐 **Versão do Node.js incompatível ou erros inesperados**

**O que aconteceu**: Você pode estar usando uma versão diferente do Node.js  
**Como resolver**:

```bash
nvm use
```

Isso garantirá que você esteja usando exatamente a versão testada e recomendada.

---

**Desenvolvido com ☕️ por https://eduardobraga.me** ✌🏻👨🏻‍💻🇧🇷
