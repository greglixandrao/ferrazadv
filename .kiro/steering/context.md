# Contexto do Projeto — Landing Page Ferraz Advocacia

## Sobre o Projeto
Landing page profissional para o advogado **Dr. Luiz Felipe Ferraz**, com foco em **advocacia sucessória**. O objetivo é apresentar o profissional, seus diferenciais e áreas de atuação, e converter visitantes em contatos via WhatsApp.

## Arquivos do Projeto

| Arquivo | Descrição |
|---|---|
| `index.html` | Estrutura completa da página (header, hero, sobre, diferenciais, áreas, atendimento, footer, botão flutuante WhatsApp) |
| `style.css` | Estilos com Google Fonts (Inter + Playfair Display), variáveis CSS, responsividade e animações |
| `main.js` | Animação de scroll com IntersectionObserver + toggle do menu mobile + funcionalidade de copiar no footer |
| `logo_ffadv.png` | Logo principal e atual do escritório (usada no header e footer) |
| `luiz-atualizada.jpeg` | Foto atual do advogado (usada no hero) |
| `favicon.png` | Favicon do site |

## Estrutura da Página (seções em ordem)

1. **HEADER** — Barra de navegação sticky com logo, menu hamburger (mobile), links de navegação (Início, Sobre, Diferenciais, Áreas, Atendimento) e botão CTA "FALE CONOSCO" verde (#25D366) com indicador verde pulsante
2. **HERO** — Título "ATUAÇÃO SUCESSÓRIA", descrição, botão CTA verde (#25D366) "CLIQUE PARA FALAR CONOSCO" para WhatsApp, foto do Dr. (`luiz-atualizada.jpeg`)
3. **SOBRE** — Título "SOBRE A ATUAÇÃO", divider, texto sobre 10+ anos de experiência
4. **DIFERENCIAIS** — Grid 2x2 (mobile) / 4 colunas (desktop): Atendimento Personalizado, Acompanhamento do Início ao Fim, Clareza nas Orientações, Segurança e Transparência
5. **ÁREAS DE ATUAÇÃO** — Grid 3 colunas (mobile) / 6 colunas (desktop): Inventário Extrajudicial, Inventário Judicial, Testamento, Arrolamento Comum, Doação com Reserva de Usufruto, Planejamento Sucessório
6. **ATENDIMENTO** — Ícone de monitor/computador, bullets sobre atendimento online/presencial e agilidade
7. **FOOTER** — Logo, contato (telefone clicável + copiar, Instagram com logo colorido, e-mail clicável + copiar, endereço), copyright "© 2026 Ferraz Advocacia"
8. **BOTÃO FLUTUANTE WHATSAPP** — Botão fixo no canto inferior direito com ícone WhatsApp e animação pulse

## Funcionalidades Implementadas
- [x] Layout responsivo mobile-first
- [x] Header sticky com backdrop-filter blur
- [x] Menu hamburger com animação X (slide-in lateral direita)
- [x] Menu mobile inicia oculto (`visibility: hidden` + `overflow: hidden`)
- [x] Fecha menu ao clicar em link ou fora do menu (overlay)
- [x] Animação de fade-in no scroll (IntersectionObserver em `.diferencial`, `.area`, `.sobre`, `.atendimento`)
- [x] Botões CTA com fundo verde #25D366 (cor WhatsApp)
- [x] Botão CTA com link para WhatsApp (número real: 5511940878502)
- [x] Botão flutuante do WhatsApp com animação pulse
- [x] Botão "FALE CONOSCO" no header com indicador verde pulsante
- [x] Ícones inline SVG (sem dependência externa)
- [x] Smooth scroll com `scroll-padding-top: 100px` (compensa header sticky)
- [x] Hero sem corte de foto: `object-fit: contain` no desktop
- [x] Favicon personalizado (`favicon.png`)
- [x] Google Tag Manager (GTM-KPZGKJ77)
- [x] Google Analytics (tag G-Z0ZE4LHNDP)
- [x] Divider decorativo nas seções Sobre e Áreas
- [x] Footer: telefone clicável (tel:) com botão de copiar
- [x] Footer: e-mail clicável (mailto:) com botão de copiar
- [x] Footer: Instagram (@ferraz.advogado) com logo colorido (gradiente SVG)
- [x] Overflow-x hidden no html/body para evitar scroll horizontal no mobile

## Dados Reais Já Configurados
- **WhatsApp**: `5511940878502` (com mensagem pré-definida)
- **Telefone**: `(11) 94087-8502`
- **E-mail**: `luiz.felipe@ferrazassociado.com.br`
- **Instagram**: `@ferraz.advogado` (link: https://instagram.com/ferraz.advogado)
- **Endereço**: São Paulo – SP
- **Copyright**: © 2026 Ferraz Advocacia

## Decisões de CSS — não reverter
- `.hero` mobile: `max-height: 1080px` (definido manualmente pelo usuário)
- `.hero__photo img` mobile: sem `display: block` explícito (comentado pelo usuário)
- `.hero__photo img` desktop: `object-fit: contain`, `height: auto`, sem `max-height`
- Hero CTA: fundo verde #25D366 (atualizado de outline para sólido verde)
- Header CTA: fundo verde #25D366 com indicador verde pulsante (::after com animação)
- Container desktop: `width: 70%` com `max-width: 1300px`
- Menu mobile: `visibility: hidden` + `overflow: hidden` no estado fechado, resetado no desktop
- `overflow-x: hidden` no html e body

## Pendências / Próximos Passos
- [ ] Confirmar/ajustar endereço completo no footer (atualmente apenas "São Paulo – SP")
- [ ] Otimizar imagens para web (compressão, formato WebP)
- [ ] Adicionar meta tags de SEO (description, og:image, etc.)
- [ ] Considerar usar `Playfair Display` nos títulos (já importada mas não aplicada)
- [ ] Considerar adicionar seção de depoimentos/avaliações
- [ ] Considerar adicionar formulário de contato alternativo ao WhatsApp

## Observações Técnicas
- Todos os ícones são SVG inline — não há dependência de bibliotecas de ícones
- Não há framework CSS (Bootstrap, Tailwind etc.) — CSS puro com variáveis
- Não há framework JS — JavaScript vanilla
- Fontes via Google Fonts CDN (Inter e Playfair Display)
- Google Tag Manager + Google Analytics configurados
- Header usa `position: sticky` com `backdrop-filter: blur(10px)`
- Menu mobile usa `position: fixed` com transição cubic-bezier
- Funcionalidade de copiar usa `navigator.clipboard.writeText()` com feedback visual (classe `.copied`)
- Logo do Instagram usa SVG com `radialGradient` para reproduzir o gradiente colorido oficial
- Repositório Git: `greglixandrao/ferrazadv` (branch `main`)
