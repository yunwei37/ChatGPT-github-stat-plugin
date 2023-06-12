# chatgpt-github-stat-plugin
ChatGPT plugin to help you get insight to Github Repos and Users

### Project setup

1. Clone the repo, install depdendencies:

```sh
git clone git@github.com:dabit3/nextjs-chatgpt-starter.git

cd nextjs-chatgpt-starter

yarn # or npm install, pnpm
```

2. Run the server

```sh
npm run build

npm start

# If you run this in dev mode, the memory may not persist well as the server will randomly restart sometimes
```

3. Set up your GPT Plugin in the ChatGPT Plugin UI.

When prompted for your website domain, type in 'http://localhost:3000'

### Usage

Ask for your list of todos:

```sh
what are my todos?
# or anything like that
```

Add a todo:

```sh
add book flight to my todos
```

Summarize todos:

```
How many todos do I have left?
```

Or any other questions you might have.

### Configuration

To add more routes:

1. Create new route in `pages/api` directory.

2. Update `openapi.yaml` with new path

3. Update `openapi.yaml` with schema for any data model coming back or being passed in.
