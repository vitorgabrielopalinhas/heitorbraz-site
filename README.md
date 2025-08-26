# Site Heitor Braz Imóveis

Site moderno e responsivo para divulgação de casas do programa Minha Casa Minha Vida em Alvorada do Sul.

## 🏠 Características do Site

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e celular
- **Galeria de Imagens**: Carrossel interativo com fotos da casa
- **Integração WhatsApp**: Botões diretos para contato via WhatsApp
- **SEO Otimizado**: Título e meta tags configurados
- **Performance**: Site otimizado para carregamento rápido

## 📱 Funcionalidades

### Header
- Logo "Heitor Braz Imóveis"
- Menu de navegação (Início, Imóveis, Sobre, Contato)
- Botão WhatsApp no header

### Hero Section
- Banner principal com imagem da casa
- Texto chamativo: "A CHANCE DE TER SUA CASA PRÓPRIA CHEGOU!"
- Botão de call-to-action para WhatsApp

### Detalhes do Imóvel
- Galeria de imagens com carrossel
- Lista de características da casa:
  - 2 quartos aconchegantes
  - Sala e cozinha bem distribuídas
  - Banheiro, lavanderia e garagem
  - Casa com laje, toda murada, quintal espaçoso e corredor lateral

### Vantagens
- Financiamento facilitado pelo Minha Casa Minha Vida
- Documentação 100% GRÁTIS
- Entrada flexível (carro, moto ou FGTS)

### Contato
- Botões para WhatsApp e telefone
- Número: (43) 9607-9849
- Mensagem pré-configurada

### Botão Flutuante
- Botão WhatsApp fixo no canto inferior direito
- Sempre visível durante a navegação

## 🚀 Como Usar

### Opção 1: Hospedagem Simples
1. Copie todos os arquivos da pasta `dist/` para seu servidor web
2. O arquivo `index.html` é a página principal
3. Certifique-se de que todos os arquivos de imagem estão na pasta `assets/`

### Opção 2: Desenvolvimento Local
1. Instale o Node.js (versão 18 ou superior)
2. Execute `npm install` para instalar dependências
3. Execute `npm run dev` para servidor de desenvolvimento
4. Execute `npm run build` para gerar arquivos de produção

## 📞 Configurações de Contato

O número do WhatsApp está configurado como: **+55 43 9607-9849**

Para alterar o número:
1. Abra o arquivo `src/App.jsx`
2. Procure por `whatsappNumber = "5543960798490"`
3. Altere para o novo número (formato: código do país + DDD + número)
4. Execute `npm run build` para gerar nova versão

## 🎨 Personalização

### Cores
- Verde principal: `#16a34a` (botões e destaques)
- Cinza claro: `#f9fafb` (backgrounds)
- Branco: `#ffffff` (cards e seções)

### Imagens
As imagens estão na pasta `src/assets/images/`:
- `fachada-principal.jpg` - Imagem principal do banner
- `fachada-lateral.jpg` - Vista lateral da casa
- `sala.jpg` - Sala de estar
- `cozinha.jpg` - Cozinha
- `quarto1.jpg` e `quarto2.jpg` - Quartos
- `banheiro.jpg` - Banheiro
- `quintal.jpg` - Quintal

Para trocar imagens:
1. Substitua os arquivos na pasta `src/assets/images/`
2. Mantenha os mesmos nomes ou atualize as referências no código
3. Execute `npm run build` para gerar nova versão

## 📱 Responsividade

O site foi desenvolvido com design mobile-first e se adapta automaticamente a:
- Smartphones (320px+)
- Tablets (768px+)
- Desktops (1024px+)

## 🔧 Tecnologias Utilizadas

- **React 18**: Framework JavaScript
- **Tailwind CSS**: Framework de estilos
- **Vite**: Build tool e servidor de desenvolvimento
- **Lucide React**: Ícones
- **shadcn/ui**: Componentes de interface

## 📄 Estrutura de Arquivos

```
heitor-braz-imoveis/
├── dist/                 # Arquivos de produção (para hospedagem)
├── src/
│   ├── assets/images/    # Imagens da casa
│   ├── components/ui/    # Componentes de interface
│   ├── App.jsx          # Componente principal
│   └── App.css          # Estilos personalizados
├── package.json         # Dependências do projeto
└── README.md           # Este arquivo
```

## 📞 Suporte

Para dúvidas ou modificações no site, entre em contato com o desenvolvedor.

---

**Desenvolvido para Heitor Braz - Corretor de Imóveis**  
**Especialista em Minha Casa Minha Vida - Alvorada do Sul/PR**

