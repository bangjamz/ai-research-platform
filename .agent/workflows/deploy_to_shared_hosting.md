---
description: How to deploy the AI Research Platform to Shared Hosting (cPanel/Static)
---

# Deploying to Shared Hosting (Static Export)

Since you are using Shared Hosting, we will deploy the application as a **Static Site**. This means we will pre-build all pages into HTML, CSS, and JavaScript files that can be served by any standard web server (Apache, Nginx, etc.) without needing Node.js.

## Prerequisites
- Access to your hosting control panel (cPanel, DirectAdmin, etc.) or FTP credentials.
- A domain name connected to your hosting.

## Step 1: Build the Project Locally
I have already configured the project for static export. Now, you need to generate the static files.

1.  Open your terminal in the project folder.
2.  Run the build command:
    ```bash
    npm run build
    ```
3.  Wait for the process to complete. You should see a success message.

## Step 2: Locate the Output
Once the build is complete, a new folder named **`out`** will be created in your project directory:
`/Users/bangjamz/Documents/antigravity/ai-research-platform/out`

This folder contains everything you need to upload.

## Step 3: Upload to Hosting
1.  **Compress**: Zip the contents of the `out` folder (select all files inside `out` -> Right Click -> Compress). **Do not zip the `out` folder itself, but the contents inside it.**
2.  **Upload**:
    - Login to your cPanel/Hosting File Manager.
    - Navigate to `public_html` (or the specific folder for your domain/subdomain).
    - Upload the `.zip` file.
3.  **Extract**:
    - Right-click the uploaded `.zip` file in File Manager and select **Extract**.
    - Ensure the files (index.html, _next folder, etc.) are directly in the `public_html` folder (or your domain folder), not inside a subfolder.

## Step 4: Verify
Open your domain in a web browser. You should see the application running perfectly!

> **Note on Routing**: Since this is a static site on shared hosting, refreshing a page other than the homepage (e.g., `/pilar-1`) might give a 404 error depending on your server config.
> **Fix**: If you experience this, create a `.htaccess` file in the same folder with the following content to redirect all requests to `index.html` (letting Next.js handle routing):

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```
