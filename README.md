# My First Web App

This is a simple web application that displays a "Hello, Dockerized World!" message. The app is built using HTML and served via an Nginx web server running in a Docker container.

## Project Structure

```
my-first-webapp/
├── src/
│   └── index.html          # HTML file for the web app
├── Dockerfile              # Dockerfile to build the Docker image
└── docker-compose.yml      # Docker Compose file to manage the container
```

## Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Visual Studio Code](https://code.visualstudio.com/) (optional but recommended)
- [Git](https://git-scm.com/) (optional for version control)

## Getting Started

1. Clone the repository or create the project folder manually:
   ```bash
   git clone <repository-url>
   cd my-first-webapp
   ```

2. Build the Docker image:
   ```bash
   docker-compose build
   ```

3. Run the Docker container:
   ```bash
   docker-compose up
   ```

4. Access the web app in your browser at:
   [http://localhost:8080](http://localhost:8080)

## Files Overview

- **`src/index.html`**: Contains the HTML content of the web app.
- **`Dockerfile`**: Defines the Docker image, using the official Nginx image.
- **`docker-compose.yml`**: Configures the service and maps ports for local development.

## Stopping the App

To stop the app, press `Ctrl+C` in the terminal where `docker-compose up` is running. Alternatively, you can use:
```bash
docker-compose down
```

## Customization

- Add CSS or JavaScript files to the `src` folder for additional styling or functionality.
- Modify the `Dockerfile` to use a different base image or add other dependencies.

## Troubleshooting

- If you encounter issues, ensure Docker is running and the ports are not being used by another service.
- Use `docker ps` to check running containers and `docker logs <container-id>` to view logs.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).