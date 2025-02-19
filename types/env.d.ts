import "@remix-run/cloudflare";

interface Env {
  DB: D1Database;
  SECRET: string;
  ENV: string;
}

declare module "@remix-run/cloudflare" {
  interface AppLoadContext {
    env: Env;
  }
}
