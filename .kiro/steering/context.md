# Contexto do Projeto — Landing Page Dr. Luiz Felipe Ferraz

## Sobre o Projeto
Landing page profissional para o advogado **Dr. Luiz Felipe Ferraz**, com foco em **advocacia sucessória**. O objetivo é apresentar o profissional, seus diferenciais e áreas de atuação, e converter visitantes em contatos via WhatsApp.

## Arquivos do Projeto

| Arquivo | Descrição |
|---|---|
| `index.html` | Estrutura completa da página (todas as seções) |
| `style.css` | Estilos, variáveis CSS, responsividade e animações |
| `main.js` | Animação de scroll com IntersectionObserver |
| `foto-dr.jpg` | Foto do advogado (usada no hero) |
| `logo.jpeg` | Logo do escritório (usada no hero e footer) |

## Estrutura da Página (seções em ordem)

1. **HERO** — Logo, título "ATUAÇÃO SUCESSÓRIA", descrição, botão CTA para WhatsApp, foto do Dr.
2. **SOBRE** — Ícone SVG com escudo "FF", texto sobre 10+ anos de experiência
3. **DIFERENCIAIS** — Grid 2x2 (mobile) / 4 colunas (desktop): Atendimento Personalizado, Início ao Fim, Clareza nas Orientações, Segurança e Transparência
4. **ÁREAS DE ATUAÇÃO** — Grid 3 colunas (mobile) / 6 colunas (desktop): Inventário Extrajudicial, Inventário Judicial, Testamento, Arrolamento Comum, Doação com Reserva de Usufruto, Planejamento Sucessório
5. **ATENDIMENTO** — Ícone de monitor/computador, bullets sobre atendimento online/presencial e agilidade
6. **FOOTER** — Logo, contato (telefone, e-mail, endereço), copyright

## Design System

### Paleta de Cores (variáveis CSS)
- `--azul: #0B2545` — cor principal (hero, diferenciais border, textos, footer, atendimento)
- `--cinza: #D3D3D3` — bordas e texto secundário
- `--cinza-claro: #F4F4F4` — fundo das seções "sobre" e "áreas"
- `--verde: #2E7D32` — botão CTA
- `--verde-hover: #1B5E20` — hover do botão CTA
- `--branco: #fff` — fundo padrão

### Tipografia
- `--fonte: 'Georgia', serif` — títulos (h1, h2)
- `--sans: 'Arial', sans-serif` — corpo de texto

### Responsividade
- **Mobile-first**: layout em coluna, foto do hero acima do conteúdo
- **Desktop (≥ 768px)**: hero em linha (foto à direita), diferenciais em 4 colunas, áreas em 6 colunas, footer em linha

## Funcionalidades Implementadas
- [x] Layout responsivo mobile-first
- [x] Animação de fade-in no scroll (IntersectionObserver em `.diferencial`, `.area`, `.sobre`, `.atendimento`)
- [x] Botão CTA com link para WhatsApp
- [x] Ícones inline SVG (sem dependência externa)
- [x] Smooth scroll (`scroll-behavior: smooth`)
- [x] Hero sem corte de foto: `object-fit: contain` no desktop, foto com proporção natural no mobile

## Decisões de CSS — não reverter
- `.hero` mobile: `max-height: 1080px` (definido manualmente pelo usuário)
- `.hero__photo img` mobile: sem `display: block` explícito (comentado pelo usuário)
- `.hero__photo img` desktop: `object-fit: contain`, `height: auto`, sem `max-height`

## Pendências / Próximos Passos
- [ ] Substituir número de WhatsApp placeholder `5511999999999` pelo número real
- [ ] Substituir e-mail placeholder `contato@luizfelipeferraz.adv.br` pelo e-mail real
- [ ] Substituir telefone placeholder `(11) 99999-9999` pelo telefone real
- [ ] Confirmar/ajustar endereço no footer (atualmente "São Paulo – SP")
- [ ] Revisar o ano no copyright (atualmente "© 2024")
- [ ] Otimizar imagens (`foto-dr.jpg` e `logo.jpeg`) para web (compressão, formato WebP)
- [ ] Adicionar meta tags de SEO (description, og:image, etc.)
- [ ] Considerar adicionar seção de depoimentos/avaliações
- [ ] Considerar adicionar formulário de contato alternativo ao WhatsApp

## Observações Técnicas
- Todos os ícones são SVG inline — não há dependência de bibliotecas de ícones
- Não há framework CSS (Bootstrap, Tailwind etc.) — CSS puro com variáveis
- Não há framework JS — JavaScript vanilla
- Fontes do sistema (Georgia e Arial) — sem Google Fonts
