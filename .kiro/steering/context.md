# Contexto do Projeto — Landing Page Ferraz Advocacia

## Sobre o Projeto
Landing page profissional para o advogado **Dr. Luiz Felipe Ferraz**, com foco em **advocacia sucessória**. O objetivo é apresentar o profissional, seus diferenciais e áreas de atuação, e converter visitantes em contatos via WhatsApp.

## Arquivos do Projeto

| Arquivo | Descrição |
|---|---|
| `index.html` | Estrutura completa da página (header, hero, sobre, diferenciais, áreas, atendimento, footer, botão flutuante WhatsApp) |
| `style.css` | Estilos com Google Fonts (Inter + Playfair Display), variáveis CSS, responsividade e animações |
| `main.js` | Animação de scroll com IntersectionObserver + toggle do menu mobile (hambúrguer) |
| `foto-dr.jpg` | Foto do advogado (usada no hero) |
| `logo.jpeg` | Logo antiga do escritório (mantida no diretório) |
| `logo_ffadv.png` | Logo principal do escritório (usada no header e footer) |
| `favicon.png` | Favicon do site |

## Estrutura da Página (seções em ordem)

1. **HEADER** — Barra de navegação sticky com logo, menu hamburger (mobile), links de navegação (Início, Sobre, Diferenciais, Áreas, Atendimento) e botão CTA "FALE CONOSCO" com indicador verde pulsante
2. **HERO** — Título "ATUAÇÃO SUCESSÓRIA", descrição, botão CTA outline (borda branca) para WhatsApp, foto do Dr.
3. **SOBRE** — Título "SOBRE A ATUAÇÃO", divider, texto sobre 10+ anos de experiência
4. **DIFERENCIAIS** — Grid 2x2 (mobile) / 4 colunas (desktop): Atendimento Personalizado, Acompanhamento do Início ao Fim, Clareza nas Orientações, Segurança e Transparência
5. **ÁREAS DE ATUAÇÃO** — Grid 3 colunas (mobile) / 6 colunas (desktop): Inventário Extrajudicial, Inventário Judicial, Testamento, Arrolamento Comum, Doação com Reserva de Usufruto, Planejamento Sucessório
6. **ATENDIMENTO** — Ícone de monitor/computador, bullets sobre atendimento online/presencial e agilidade
7. **FOOTER** — Logo, contato (telefone, e-mail, endereço), copyright "© 2026 Ferraz Advocacia"
8. **BOTÃO FLUTUANTE WHATSAPP** — Botão fixo no canto inferior direito com ícone WhatsApp e animação pulse

## Design System

### Paleta de Cores (variáveis CSS)
- `--azul: #0B2545` — cor principal (header, hero, diferenciais border, textos, footer, atendimento)
- `--cinza: #D3D3D3` — bordas e texto secundário
- `--cinza-claro: #F4F4F4` — fundo das seções "sobre" e "áreas"
- `--verde: #2E7D32` — botão CTA genérico
- `--verde-hover: #1B5E20` — hover do botão CTA
- `--branco: #fff` — fundo padrão
- `--texto: #333` — cor padrão de texto do body
- `#25D366` — cor do WhatsApp (botão flutuante e indicador no header)

### Tipografia
- **Google Fonts**: `Inter` (weights 300–700) e `Playfair Display` (weights 400–800, incluindo itálico)
- `--fonte: 'Inter', sans-serif` — usada em h2 e títulos
- `--sans: 'Inter', sans-serif` — corpo de texto
- Nota: `Playfair Display` está importada mas não está sendo utilizada explicitamente no CSS atual

### Responsividade
- **Mobile-first**: layout em coluna, menu hamburger lateral (slide-in da direita)
- **Desktop (≥ 768px)**: header com menu em linha, hero em linha (foto à direita), diferenciais em 4 colunas, áreas em 6 colunas, footer em linha, container com `width: 70%`
- **Breakpoint extra (≥ 1300px)**: ajuste da posição do botão flutuante WhatsApp

## Funcionalidades Implementadas
- [x] Layout responsivo mobile-first
- [x] Header sticky com backdrop-filter blur
- [x] Menu hamburger com animação X (slide-in lateral)
- [x] Fecha menu ao clicar em link ou fora do menu (overlay)
- [x] Animação de fade-in no scroll (IntersectionObserver em `.diferencial`, `.area`, `.sobre`, `.atendimento`)
- [x] Botão CTA com link para WhatsApp (número real: 5511940878502)
- [x] Botão flutuante do WhatsApp com animação pulse
- [x] Botão "FALE CONOSCO" no header com indicador verde pulsante
- [x] Ícones inline SVG (sem dependência externa)
- [x] Smooth scroll com `scroll-padding-top: 100px` (compensa header sticky)
- [x] Hero sem corte de foto: `object-fit: contain` no desktop
- [x] Favicon personalizado (`favicon.png`)
- [x] Google Analytics (tag G-Z0ZE4LHNDP)
- [x] Divider decorativo nas seções Sobre e Áreas

## Dados Reais Já Configurados
- **WhatsApp**: `5511940878502` (com mensagem pré-definida)
- **Telefone**: `(11) 94087-8502`
- **E-mail**: `contato@ferrazeferrariadvogados.com.br`
- **Endereço**: São Paulo – SP
- **Copyright**: © 2026 Ferraz Advocacia

## Decisões de CSS — não reverter
- `.hero` mobile: `max-height: 1080px` (definido manualmente pelo usuário)
- `.hero__photo img` mobile: sem `display: block` explícito (comentado pelo usuário)
- `.hero__photo img` desktop: `object-fit: contain`, `height: auto`, sem `max-height`
- Hero CTA: estilo outline (borda branca, fundo transparente) em vez de botão verde sólido
- Header CTA: estilo outline com indicador verde pulsante (::after com animação)
- Container desktop: `width: 70%` com `max-width: 1300px`

## Pendências / Próximos Passos
- [ ] Confirmar/ajustar endereço completo no footer (atualmente apenas "São Paulo – SP")
- [ ] Otimizar imagens (`foto-dr.jpg` e `logo_ffadv.png`) para web (compressão, formato WebP)
- [ ] Adicionar meta tags de SEO (description, og:image, etc.)
- [ ] Considerar usar `Playfair Display` nos títulos (já importada mas não aplicada)
- [ ] Considerar adicionar seção de depoimentos/avaliações
- [ ] Considerar adicionar formulário de contato alternativo ao WhatsApp
- [ ] Verificar se `logo.jpeg` ainda é necessária ou pode ser removida

## Observações Técnicas
- Todos os ícones são SVG inline — não há dependência de bibliotecas de ícones
- Não há framework CSS (Bootstrap, Tailwind etc.) — CSS puro com variáveis
- Não há framework JS — JavaScript vanilla
- Fontes via Google Fonts CDN (Inter e Playfair Display)
- Google Analytics configurado via gtag.js
- Header usa `position: sticky` com `backdrop-filter: blur(10px)`
- Menu mobile usa `position: fixed` com transição cubic-bezier
