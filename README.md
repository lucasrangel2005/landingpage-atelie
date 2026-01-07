# Atelier Landing (Next.js + Tailwind)

Landing page base **clean, moderna e com vibe infantil**, com:
- Hero com CTA (WhatsApp)
- Carrossel (portfolio)
- Seções: trabalhos, diferenciais, depoimentos, FAQ e contato
- Botão flutuante de WhatsApp
- Animações suaves (Framer Motion)

## Rodar local

```bash
npm install
npm run dev
```

Abra: http://localhost:3000

## Onde editar rápido

- `lib/site.ts` (nome, WhatsApp, Instagram, textos)
- `components/sections/*` (conteúdo e layout)
- `public/portfolio/*` (suas fotos)

## WhatsApp

Por padrão usamos o formato:
`https://api.whatsapp.com/send?phone=55SEUNUMERO&text=...`

Troque o número em `lib/site.ts` (somente dígitos, com DDI 55).

Boa! Quando você mandar **logo, vídeos, fotos e textos**, eu encaixo tudo no layout.
