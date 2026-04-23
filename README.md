# oriurano.dev

Personal site. SvelteKit + Tailwind v4 + MDsveX, prerendered static, served from S3 behind CloudFront.

## local

```sh
npm install
npm run dev
```

Opens on http://localhost:5173.

## structure

```
src/
  routes/               SvelteKit pages (trailing-slash routes, all prerendered)
  lib/
    components/         Nav, Footer, Starfield, Avatar, ProjectCard, Chapter
    data/               Glob-loaders for projects and blog posts
    content/
      projects/*.md     Project write-ups (frontmatter + markdown via MDsveX)
      blog/*.md         Blog posts (same shape; add `draft: true` to hide)
static/
  avatar.png            GitHub avatar copy
  favicon.svg           Sigil mark
.github/workflows/
  deploy.yml            Build, sync to S3, invalidate CloudFront
```

## adding a project

1. Create `src/lib/content/projects/my-slug.md` with frontmatter:

   ```markdown
   ---
   title: my thing
   summary: one-line pitch
   year: 2026
   tags: [svelte, weekend]
   repo: https://github.com/OriUrano/my-thing
   link: https://example.com
   ---

   Markdown body here.
   ```

2. It appears automatically in `/projects/` and gets a detail page at `/projects/my-slug/`.

## adding a blog post

Same shape under `src/lib/content/blog/`. Use `date: YYYY-MM-DD` instead of `year`. Posts with `draft: true` are hidden from the index.

## deploy

The GitHub Action at `.github/workflows/deploy.yml` deploys on every push to `main`. Before the first deploy, set:

**Repo secrets** (Settings → Secrets and variables → Actions → Secrets):

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

**Repo variables** (same page → Variables):

- `S3_BUCKET` — bucket name (no `s3://` prefix)
- `CLOUDFRONT_DISTRIBUTION_ID` — e.g. `E1ABCDEF23GHIJ`
- `AWS_REGION` — optional, defaults to `us-east-1`

The IAM user for those keys needs roughly:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:PutObject", "s3:DeleteObject", "s3:ListBucket", "s3:GetObject"],
      "Resource": [
        "arn:aws:s3:::YOUR_BUCKET",
        "arn:aws:s3:::YOUR_BUCKET/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": ["cloudfront:CreateInvalidation"],
      "Resource": "arn:aws:cloudfront::YOUR_ACCOUNT_ID:distribution/YOUR_DISTRIBUTION_ID"
    }
  ]
}
```

### cloudfront routing note

Trailing-slash URLs like `/about/` need CloudFront to resolve them to `/about/index.html`. Two common setups:

1. **S3 website endpoint origin** — S3 itself serves `index.html` automatically. Works out of the box.
2. **S3 REST API origin (OAC / OAI)** — you need a CloudFront Function that rewrites `/path/` → `/path/index.html`. A minimal viewer-request function:

   ```js
   function handler(event) {
     var req = event.request;
     var uri = req.uri;
     if (uri.endsWith('/')) req.uri = uri + 'index.html';
     else if (!uri.includes('.')) req.uri = uri + '/index.html';
     return req;
   }
   ```

## upgrade path: OIDC instead of access keys

Long-term, prefer GitHub → AWS OIDC over static access keys. Swap the `configure-aws-credentials` step for:

```yaml
permissions:
  id-token: write
  contents: read

- uses: aws-actions/configure-aws-credentials@v4
  with:
    role-to-assume: arn:aws:iam::ACCOUNT_ID:role/github-deploy-oriurano-dev
    aws-region: ${{ env.AWS_REGION }}
```

…plus create an IAM role with a trust policy that allows the GitHub OIDC provider for this repo. No long-lived secrets to rotate.
