<a href="https://github.com/disciplesian/zomichat">
  <h1 align="center">Zomi AI Chat</h1>
</a>

<p align="center">
  An AI chat assistant built with Next.js, the Vercel AI SDK, OpenAI, and Supabase Auth and Postgres.
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#model-providers"><strong>Model Providers</strong></a> ·
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="#running-locally"><strong>Running locally</strong></a> ·
  <a href="#authors"><strong>Authors</strong></a>
</p>
<br/>

## Features

- [Next.js](https://nextjs.org) App Router
- React Server Components (RSCs), Suspense, and Server Actions
- [Vercel AI SDK](https://sdk.vercel.ai/docs) for streaming chat UI
- OpenAI-powered conversations
- Edge runtime-ready
- [shadcn/ui](https://ui.shadcn.com)
  - Styling with [Tailwind CSS](https://tailwindcss.com)
  - [Radix UI](https://radix-ui.com) for headless component primitives
  - Icons from [Phosphor Icons](https://phosphoricons.com)
- Chat History with [Supabase Postgres DB](https://supabase.com)
- [Supabase Auth](https://supabase.com/auth) for authentication

## Model Providers

Zomi AI Chat uses OpenAI `gpt-3.5-turbo` for chat completions.

## Deploy Your Own

Deploy Zomi AI Chat to your hosting provider after configuring the required environment variables.

### Set up GitHub OAuth

This demo uses GitHub Oauth. Follow the [GitHub OAuth setup steps](https://supabase.com/docs/guides/auth/social-login/auth-github) on your Supabase project.

### Configure your site url

In the Supabase Dashboard, navigate to [Auth > URL configuration](https://app.supabase.com/project/_/auth/url-configuration) and set your deployment URL as the site URL.

## Running locally

You will need the environment variables [defined in `.env.example`](.env.example) to run Zomi AI Chat. For deployment, configure them in your hosting provider; for local development, a `.env` file is sufficient.

> Note: You should not commit your `.env` file or it will expose secrets that will allow others to control access to your various OpenAI and authentication provider accounts.

Copy the `.env.example` file and populate the required env vars:

```bash
cp .env.example .env
```

[Install the Supabase CLI](https://supabase.com/docs/guides/cli) and start the local Supabase stack:

```bash
npm install supabase --save-dev
npx supabase start
```

Install the local dependencies and start dev mode:

```bash
pnpm install
pnpm dev
```

Zomi AI Chat should now be running on [localhost:3000](http://localhost:3000/).

## Authors

Zomi AI Chat is built with Next.js, the Vercel AI SDK, OpenAI, and Supabase.
