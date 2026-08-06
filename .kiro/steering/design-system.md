---
inclusion: fileMatch
fileMatchPattern: "*.css,*.html"
---

# Design System — Ferraz Advocacia

Referência visual e técnica para manter consistência na landing page.

## Paleta de Cores

### Variáveis CSS (`:root`)
| Variável | Valor | Uso |
|---|---|---|
| `--azul` | `#0B2545` | Cor principal: header, hero, footer, atendimento, bordas diferenciais, textos de destaque |
| `--cinza` | `#D3D3D3` | Bordas, texto secundário, cor de links no footer |
| `--cinza-claro` | `#F4F4F4` | Fundo das seções Sobre e Áreas de Atuação |
| `--verde` | `#2E7D32` | Botão CTA genérico (legacy — não usado nos botões atuais) |
| `--verde-hover` | `#1B5E20` | Hover do CTA genérico (legacy) |
| `--branco` | `#fff` | Fundo padrão, texto sobre fundo escuro |
| `--texto` | `#333` | Cor padrão do body text |

### Cores diretas (sem variável)
| Cor | Uso |
|---|---|
| `#25D366` | WhatsApp — botões CTA (hero, header), botão flutuante, indicador pulsante |
| `#20ba5a` | Hover dos botões CTA verde WhatsApp |
| `#444` | Texto do parágrafo na seção Sobre |
| `#555` | Texto dos parágrafos nos Diferenciais |
| `rgba(255,255,255,.15)` | Bordas sutis, fundo do ícone atendimento |
| `rgba(255,255,255,.4)` | Texto do copyright no footer |
| `rgba(0,0,0,.5)` | Overlay do menu mobile |

## Tipografia

### Fontes
- **Inter** (Google Fonts) — weights 300, 400, 500, 600, 700
- **Playfair Display** (Google Fonts) — weights 400, 600, 700, 800 + itálico (importada, ainda não aplicada)

### Variáveis CSS
| Variável | Valor | Uso |
|---|---|---|
| `--fonte` | `'Inter', sans-serif` | Títulos h2 |
| `--sans` | `'Inter', sans-serif` | Body, botões, textos gerais |

### Hierarquia de texto
| Elemento | Tamanho (mobile) | Tamanho (desktop) | Peso | Extras |
|---|---|---|---|---|
| `.hero__title` | `2.4rem` | `3.2rem` | 900 | letter-spacing: .04em, uppercase |
| `h2` | `1.25rem` | `1.25rem` | — | letter-spacing: .08em, uppercase |
| `.hero__desc` | `.9rem` | `.9rem` | — | line-height: 1.7 |
| `.sobre__texto p` | `.9rem` | `.9rem` | — | line-height: 1.8 |
| `.diferencial strong` | `.75rem` | `.75rem` | bold | letter-spacing: .06em, uppercase |
| `.diferencial p` | `.8rem` | `.8rem` | — | line-height: 1.5 |
| `.area span` | `.72rem` | `.72rem` | 700 | letter-spacing: .06em, uppercase |
| `.btn--cta` | `.8rem` | `.8rem` | 700 | letter-spacing: .1em |
| `.header__link` | `1.1rem` (mobile) | `.85rem` (desktop) | 500/600 | uppercase, letter-spacing: .08em |

## Layout & Grid

### Container
- **Mobile**: `width: 100%`, padding lateral `1.5rem`
- **Desktop (≥ 768px)**: `width: 70%`, `max-width: 1300px`, sem padding lateral

### Breakpoints
| Breakpoint | Uso |
|---|---|
| `768px` | Desktop — muda layout para inline/row, menu em linha, grids expandidos |
| `1300px` | Ajuste fino da posição do botão flutuante WhatsApp |

### Grids por seção
| Seção | Mobile | Desktop |
|---|---|---|
| Diferenciais | 2 colunas | 4 colunas |
| Áreas de Atuação | 3 colunas | 6 colunas |
| Hero | coluna (stacked) | row (texto + foto) |
| Footer | coluna | row (space-between) |

## Componentes

### Botão CTA (`.btn--cta`)
- Background: `#25D366` (WhatsApp)
- Hover: `#20ba5a`
- Texto: branco, 700, .8rem, letter-spacing .1em
- Padding: `.85rem 1.5rem`
- Sem border-radius (retangular)
- Hero CTA: `width: 100%`, `max-width: 380px`, centralizado

### Botão CTA Header (`.btn--cta.btn--header`)
- Mesmo verde #25D366
- border-radius: 4px
- Indicador pulsante verde (::after) com animação `pulse-green`
- Desktop: `padding: 0.65rem 1.25rem`

### Botão Flutuante WhatsApp (`.whatsapp-float`)
- Fixo bottom-right (20px)
- Desktop: `right: calc(15% + 20px)`
- `≥1300px`: `right: calc(50% - 650px + 20px)`
- 56x56px, border-radius 50%
- Background: #25D366, hover: #20ba5a + scale(1.1)
- Animação `pulse-whatsapp` (box-shadow infinita)

### Divider (`.divider`)
- 40px × 2px, background `--azul`
- Margin: `.5rem 0 1rem` (mobile), `.5rem auto 2rem` (áreas)

### Card Diferencial (`.diferencial`)
- Border: 1px solid `--cinza`
- Padding: `2rem 1.25rem`
- Flexbox coluna, alinhado center
- Ícone SVG 40x40, stroke `#0B2545`

### Card Área (`.area`)
- Sem border
- Flexbox coluna, alinhado center
- Ícone SVG 44x44, stroke `#0B2545`

## Animações

| Nome | Uso | Tipo |
|---|---|---|
| `pulse-green` | Indicador do botão header | box-shadow pulsante 1.5s infinite |
| `pulse-whatsapp` | Botão flutuante | box-shadow pulsante 2s infinite |
| `.fade-in` / `.visible` | Elementos ao entrar na viewport | opacity 0→1, translateY 20px→0, transition .5s |
| Menu hamburger → X | Abrir/fechar menu | transform rotate ±45deg nas barras |
| Menu slide-in | Painel mobile | right -100%→0, cubic-bezier(0.16, 1, 0.3, 1) |

## Ícones
- Todos os ícones são **SVG inline** no HTML
- Stroke color: `#0B2545` (ícones sobre fundo claro) ou `#fff` (sobre fundo escuro)
- Stroke-width: 2 (padrão) ou 2.5 (atendimento)
- Sem dependência de bibliotecas externas (Font Awesome, etc.)

## Espaçamento & Padrões
- Seções com fundo claro (sobre, áreas): padding vertical `3rem 0` (mobile), `4rem 0` (desktop)
- Seções com fundo escuro (hero, atendimento, footer): padding vertical `2.5rem 2rem`
- Gap nos grids: `1.5rem 1rem` (áreas), `0` (diferenciais — usa border como separador)
- `scroll-padding-top: 100px` no `html` para compensar header sticky

## Imagens
- `img { max-width: 100%; display: block; }` — reset global
- Hero photo mobile: width 100%, height auto
- Hero photo desktop: `object-fit: contain`, `object-position: bottom center`
- Logo header: height `70px`
- Logo footer: height `115px`
