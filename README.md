# WebApp Template

This is a template repository for setting up simple web applications using Webpack and npm. It includes basic configuration for Webpack, HTML generation, and CSS handling, making it easy to adapt for various web projects.

## Features
- **HTMLWebpackPlugin**: Automatically generates an HTML file and includes your JavaScript bundle.
- **Webpack Dev Server**: Provides live reloading and easy development with a built-in server.
- **CSS Support**: Includes `style-loader` and `css-loader` for managing CSS within your JavaScript.

## How to Use This Template

1. **Clone the Template**

   Clone the repository to your local machine:
    ```bash
    git clone https://github.com/your-username/webapp-template.git
    ```
2. **Install Dependencies**

    Navigate to the project folder and install the necessary npm packages:    
    ```bash
    cd webapp-template npm install
    ```
3. **Development Mode**

    Start the development server:
    ```bash
    npm start
    ```
    This will run `webpack-dev-server`, which provides live reloading and opens the app in your browser automatically. The server watches for file changes and refreshes your browser instantly.

4. **Build the Project**

    Run the following command to bundle the source files for production:
    ```bash
    npm run build
    ```

5. **Modify for Your Project**

- Add your source code in the `src` folder.
- Update `index.js` as the entry point for your JavaScript code.
- Modify the Webpack configuration in `webpack.config.js` to suit the specific needs of your project.
- Update the `src/index.html` file to reflect your project’s HTML structure.
- Add and import your CSS files within your JavaScript.

6. **Git Ignore Configuration**

The `.gitignore` file is already configured to exclude `node_modules/` and `dist/` directories.

## Project Structure
```graphql
    webapp-template/
│
├── dist/                 # Will contain the production-ready bundle
│
├── src/                  # Your source files
│   ├── index.js          # Main JavaScript file
│   └── index.html        # HTML template used by HTMLWebpackPlugin
│
├── .gitignore            # Configured to exclude node_modules and dist
├── package.json          # npm package configuration
├── webpack.config.js     # Webpack configuration
└── README.md             # Project instructions
```

- The `src/` folder contains the source code (JavaScript and HTML).
- The `dist/` folder contains the compiled/bundled output for production.
- The `webpack.config.js` file configures Webpack for bundling, handling CSS, and live development with `webpack-dev-server`.
- The `package.json` file manages the npm dependencies and scripts.

## Future Adjustments

To adjust this template for specific projects, simply update the Webpack configuration, add any necessary loaders or plugins, and add your project-specific files to the `src/` folder.
