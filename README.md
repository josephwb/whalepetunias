# Hitchhiker's Guide To The Galaxy Bluesky bot 👍🛸

This repo contains code and content for regularly posting random lines from the 5 Hitchhiker's Guide To The Galaxy books by Douglas Adams to a dedicated [Bluesky account](https://bsky.app/profile/whalepetunias.bsky.social). The bot is inspired by the analogous [Moby Dick bot](https://bsky.app/profile/mobydickatsea.bsky.social), and is built from [template code](https://github.com/philnash/bsky-bot) provided by [@philnash](https://github.com/philnash).

The bot is written in [TypeScript](https://www.typescriptlang.org/), and uses [GitHub Actions](https://docs.github.com/en/actions) (in conjunction with `cron`) to schedule the posts. Content is stored in the imaginatively named file [text.txt](https://github.com/josephwb/whalepetunians/blob/main/text.txt). Processing the content text is handled by the file [getPostText.ts](https://github.com/josephwb/whalepetunians/blob/main/src/lib/getPostText.ts).

Instructions on how to use and deploy the bot are [here](https://github.com/josephwb/whalepetunians/blob/main/Instructions.md).
