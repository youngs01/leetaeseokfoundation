# Vercel Deployment Checklist

Follow these steps to deploy this project to Vercel safely and successfully.

1. Do NOT commit any real `.env` files. Use `.env.example` as a template.

2. Remove any tracked local env file (if present):

```bash
git rm --cached .env.local
git commit -m "Remove local env file from tracking"
git push
```

3. If you already pushed sensitive values, rotate them immediately (DB password, API keys).

4. On Vercel, set Environment Variables in Project Settings → Environment Variables:
- `DATABASE_URL` (production DB connection string)
- `ADMIN_ID`
- `ADMIN_PASSWORD`

5. Approve build scripts for native modules (sharp):

- Locally, run:
```bash
pnpm approve-builds
```
This will prompt you to allow build scripts for certain packages (e.g. `sharp`). Approve the necessary ones and commit any generated approval file if applicable.

- If you cannot run `pnpm approve-builds` on the deployment environment, set Vercel's Install Command to:
```
pnpm install --ignore-scripts=false
```
but be cautious: allowing install scripts may run arbitrary code during install. Prefer approving specific packages.

6. Ensure Vercel uses `pnpm` as the package manager (it usually detects `pnpm-lock.yaml`). Set the `Install Command` to `pnpm install` if needed.

7. Trigger a new deployment. If runtime errors appear, collect the Server/Function logs from the deployment and share them for diagnosis.
