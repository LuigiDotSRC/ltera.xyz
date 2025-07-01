---
title: projects
layout: post.njk
tags: [posts, technical, projects]
description: a selection of my completed projects
updated: 2025-07-01
thumbnail: /img/c8emu_screenshot.png
---
## c8emu
*Rust*

Developed a CHIP-8 emulator in Rust, implementing all 35 opcodes. The emulator can load and run user binaries, providing a platform for retro game development and expirementation.

[Github](https://github.com/LuigiDotSRC/c8emu)

## ytc-analyzer
*Python, React+TailwindCSS+Shadcn, LangChain, Azure Functions, Azure Static WebApps, GitHub Actions*

Full-stack YouTube comment analysis tool that uses LangChain and OpenAI to summarize insights from video comments. It fetches comments via the YouTube Data API and processes them using nltk and vader lexicon to extract key themes and sentiment. Designed for simplicity to allow users to quickly analyze overall sentiment and public opinion of a video. 

[Github](https://github.com/LuigiDotSRC/ytc-analyzer)

## btorrent
*Go*

BitTorrent client from scratch in Go that can download from single-file mode torrents using a valid tracker URL. Relies on optimistic unchoking to recieve pieces from peers.

[Github](https://github.com/LuigiDotSRC/btorrent)