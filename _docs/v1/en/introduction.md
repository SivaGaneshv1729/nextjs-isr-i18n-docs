---
title: Introduction
description: Welcome to the Magic Library
---

# Introduction: The Magic Library

Welcome to the **Multi-Language Documentation Site**. This project isn't just a static website; it's a "Magic Library" built with modern web application architecture.

## How It Works

### 1. Next.js (The Librarian)

Next.js is the smart librarian. When someone comes to your website, they ask for a page (like "Introduction"). The librarian runs to get it and shows it to them.

- **React**: These are the **Lego blocks** the librarian uses to build the page. One block is a button, another is the sidebar.

### 2. Docker (The Lunchbox)

Usually, if you cook a meal at home, it might not taste the same at a friend's house.
**Docker** is like a **magic lunchbox**. You put your whole kitchen (code) inside it. Now, no matter where you open this lunchbox (your computer, my computer, or the internet), the website looks exactly the same.

### 3. ISR (The "Updating" Magic)

This stands for **Incremental Static Regeneration**, or the **"Photocopier"**.

- **Without ISR**: The librarian has to write the page by hand every time someone asks for it. Slow!
- **With ISR**: The librarian makes a **photocopy** of the page and gives that to everyone. It's super fast!
- **Twist**: Every 60 seconds, if you change text, the librarian makes a _new_ photocopy.

## Real World Examples

### Netflix Help Center

When Netflix adds a new feature, they update the help page. They don't want to rebuild their entire website (millions of pages) just for one typo. They use **ISR** to fix just that one page instantly.

### Stripe / Twitter Docs

These companies have documentation in 30+ languages. They use **i18n** so that `stripe.com/docs` shows English, but `stripe.com/fr/docs` shows French automatically.

## Key Features

- **Internationalization**: Content available in English, Spanish, French, German.
- **Full-Text Search**: Powered by Fuse.js for fuzzy finding.
- **API Reference**: Swagger UI integration for OpenAPI specs.

## Getting Started

Check out the [Getting Started](/en/docs/v1/getting-started) guide to run this locally.
