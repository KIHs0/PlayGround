# PlayGround

A full-stack Three.js website with React (client) and Node.js/Express (server).

## Features

- Interactive 3D canvas using React Three Fiber
- Customizable T-shirt model
- AI-powered image generation (DALL·E, DeepAI)
- File and color picker helpers
- Download canvas as image
- REST API backend with Express

## Project Structure

```
PlayGround/
├── client/      # React frontend
├── server/      # Node.js/Express backend
├── .gitignore
├── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/KIHs0/PlayGround.git
   cd PlayGround
   ```
2. Install dependencies for both client and server:
   ```bash
   cd client && npm install
   cd ../server && npm install
   ```

### Running the App

- **Client:**
  ```bash
  cd client
  npm run dev
  ```
- **Server:**
  ```bash
  cd server
  node server.js
  ```

### Environment Variables

- Create `.env` files in both `client/` and `server/` for API keys and secrets.
- Example for server:
  ```env
  OPENAI_API_KEY=your_openai_api_key
  ```

## Usage

- Open the client in your browser (default: http://localhost:5173)
- Use the customizer to change T-shirt color, upload images, or generate AI art
- Download your design as an image

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

MIT
