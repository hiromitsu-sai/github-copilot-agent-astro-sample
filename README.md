# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## プロジェクト概要

本プロジェクトは、Astro・Tailwind CSS・DaisyUIを用いたポートフォリオサイトです。制作物はMarkdownで管理し、AstroのContent Collections機能で記事として表示します。Cloudflare Pages + Wranglerでデプロイ可能です。

### 利用技術・構成
- Astro（静的サイトジェネレーター）
- Tailwind CSS（ユーティリティファーストCSSフレームワーク）
- DaisyUI（Tailwind CSS用UIコンポーネント）
- Markdown（制作物記事管理）
- Cloudflare Pages（ホスティング）
- Wrangler（デプロイCLI）

### 新規作成手順
```sh
# 1. Astroプロジェクト作成
npm create astro@latest . -- --template minimal --yes

# 2. 必要パッケージのインストール
npm install -D tailwindcss @tailwindcss/vite daisyui wrangler

# 3. Tailwind CSS追加
npx astro add tailwind

# 4. tailwind.config.jsにDaisyUI設定を追加
# plugins: [require('daisyui')],
# daisyui: { themes: ['light', 'dark', 'cupcake'] },

# 5. Markdown管理用ディレクトリ作成
mkdir -p src/content/works

# 6. Content Collectionsスキーマ作成（src/content/config.ts）
# defineCollectionでworksコレクションを定義

# 7. ページ・スタイル・記事ファイルを作成
# src/pages, src/styles, src/content/works など

# 8. wrangler.toml作成
```

### ローカルサーバでの見た目確認
```sh
npm run dev
```
http://localhost:4321 で確認できます。

### 記事（Markdownファイル）の書き方
`src/content/works/`配下に以下のようなMarkdownファイルを作成します。

```
---
title: "記事タイトル"
date: "2025-04-30"
description: "記事の説明"
tags:
  - タグ1
  - タグ2
externalUrl: "https://example.com/portfolio" # 任意
---

本文（Markdown記法が利用可能）
```

### Cloudflare Pagesへのデプロイ手順
```sh
# 1. Astroビルド
npm run build

# 2. Cloudflare Pagesへデプロイ
npx wrangler pages deploy ./dist
```

- wrangler.tomlの `pages_build_output_dir` は `./dist` に設定してください。
- デプロイ時にプロジェクト名やブランチ名を求められた場合は指示に従って入力してください。


# GitHub Copilot Agent 指示・応答記録

## 1. プロンプト
### ユーザー指示
- 新たにポートフォリオサイトを作成したい。CloudfrontのPagesにWranglerフレームワークを用いてデプロイ、FrontendはAstro、Tailwind CSS、DaisyUI等で統一感。コンテンツはプロフィール・制作物・外部リンク。制作物はMarkdownで記述しAstroのContent collectionsで表示。
- 上記の作成手順を提示してほしい。
- その流れで良いので進めてほしい。
- 以降、各種ページや機能の実装を順次依頼。
- 全体の動作確認やデプロイ準備を依頼。
- Cloudflare Pagesへのデプロイを依頼。
- README.mdへの各種手順・説明の追記を依頼。
- このAgent.mdへの指示・応答記録の作成を依頼（本リクエストも含む）。

## 2. Agent応答（概略と結果）
- サイト構成・技術選定・Astro/Tailwind/DaisyUI/Content collections/Cloudflare Pagesの組み合わせでの作成手順を提示。
- プロジェクト初期化、各種パッケージ導入、設定ファイル作成、DaisyUIテーマ設定、Content collectionsスキーマ作成、サンプル記事作成、各ページ（トップ・プロフィール・制作物一覧/詳細・外部リンク）を順次実装。
- ページ間の導線やデザイン統一もDaisyUIで実装。
- ローカルサーバでの動作確認、wrangler.toml作成、ビルド・デプロイ手順を案内。
- Cloudflare Pagesへのデプロイを実行し、公開URLを提示。
- README.mdに「利用技術・構成」「新規作成手順」「ローカル確認」「記事の書き方」「デプロイ手順」を追記。
- 本Agent.mdへの指示・応答記録作成も対応。

## 3. 結果
- 指示通り、Astro＋Tailwind CSS＋DaisyUI＋Content collections＋Cloudflare Pages構成のポートフォリオサイトが完成。
- 各種ページ・記事管理・デプロイ・運用手順もREADME.mdに明記。
- 本Agent.mdに全指示・応答の要約記録を残した。
# github-copilot-agent-astro-sample
