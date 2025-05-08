# VibeCoderBot

> A GitHub App built with [Probot](https://github.com/probot/probot) that Find, fix and prevent known vulnerabilities for vibe coding.

## 📚 Full documentation

See the [Vibe Security Suite Docs – Bot](https://vibe-security.github.io/vibe-security-suite/docs/intro) for full usage and configuration details.

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t VibeCoderBot .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> VibeCoderBot
```

## Contributing

If you have suggestions for how VibeCoderBot could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2025 SHA888
