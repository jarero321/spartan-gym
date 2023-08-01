This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```
gym-management-system
├─ .eslintrc.json
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     └─ heads
│  │        └─ master
│  ├─ objects
│  │  ├─ 18
│  │  │  └─ 2cd5e1b7b0f624758c8b796521d0e5584cecbe
│  │  ├─ 23
│  │  │  └─ ba4fd54943fa9d84fbd7e560d573613d0d825b
│  │  ├─ 33
│  │  │  └─ ad091d26d8a9dc95ebdf616e217d985ec215b8
│  │  ├─ 4b
│  │  │  └─ 9e7438ea88b76a4b6985401f9da31beacd4a82
│  │  ├─ 51
│  │  │  └─ 74b28c565c285e3e312ec5178be64fbeca8398
│  │  ├─ 6a
│  │  │  └─ 956fdda20c58d1abe035430507e69a17019ef9
│  │  ├─ 71
│  │  │  └─ 8d6fea4835ec2d246af9800eddb7ffb276240c
│  │  ├─ 76
│  │  │  └─ 7719fc4fba59345ae29e29159c9aff270f5819
│  │  ├─ 8c
│  │  │  └─ 4d1b21f11f2a8909c644a8a818e99597963450
│  │  ├─ 8f
│  │  │  └─ 322f0d8f49570a594b865ef8916c428a01afc1
│  │  ├─ 93
│  │  │  └─ 085b28ae71081300517de6f33d0b574cab37f5
│  │  ├─ ac
│  │  │  └─ 79ec7555d944d65a4b7ebe9f9e9413b1708a3a
│  │  ├─ ae
│  │  │  └─ 8456212360d816651261077bcd1f6fa6c259cb
│  │  ├─ bf
│  │  │  └─ fb357a7122523ec94045523758c4b825b448ef
│  │  ├─ d2
│  │  │  └─ f84222734f27b623d1c80dda3561b04d1284af
│  │  ├─ d6
│  │  │  └─ 8838a40e7e196aea4dddacd6b6adb5976cb98d
│  │  ├─ f3
│  │  │  └─ a3b8e1ae8f824f1a316f3b75f8f06c4ec8e710
│  │  ├─ f4
│  │  │  └─ da3c4c1cf1b537a9203fe05b3516e39567fd97
│  │  ├─ fd
│  │  │  └─ 81e885836d815b8019694a910a93d86a43cb66
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ master
│     └─ tags
├─ .gitignore
├─ app
│  ├─ (auth)
│  │  ├─ layout.tsx
│  │  ├─ signin
│  │  │  └─ page.tsx
│  │  └─ signup
│  │     └─ page.tsx
│  ├─ (root)
│  │  ├─ add-user
│  │  │  └─ page.tsx
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ actions
│  │  └─ getCurrentUser.ts
│  ├─ api
│  │  └─ auth
│  │     ├─ register
│  │     │  └─ route.ts
│  │     └─ [...nextauth]
│  │        ├─ options.ts
│  │        └─ route.ts
│  ├─ components
│  │  ├─ ClientOnly
│  │  │  └─ page.tsx
│  │  ├─ listItems.tsx
│  │  └─ Loader
│  │     └─ Loader.tsx
│  ├─ context
│  │  └─ AuthProvider
│  │     └─ AuthProvider.tsx
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ loading.tsx
├─ lib
│  └─ prismadb.ts
├─ middleware.ts
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ prisma
│  └─ schema.prisma
├─ providers
│  └─ toast-provider.tsx
├─ public
│  ├─ next.svg
│  └─ vercel.svg
├─ README.md
├─ tailwind.config.js
└─ tsconfig.json

```