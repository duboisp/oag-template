# OAG Jekyll Template

## Overview

This project is a Jekyll-based website template using the GCWeb theme. It integrates PostCSS for advanced CSS transformations and a Grunt build system to automate tasks such as minification, copying assets, and serving the site.

## Features

- **Jekyll** for static site generation
- **GCWeb Theme** for accessibility compliance
- **PostCSS** for enhanced styling capabilities
- **Grunt** for task automation

## Prerequisites

Before you begin, ensure you have the following installed:

- **Ruby** (Check with `ruby -v`)
- **Bundler** (`gem install bundler`)
- **Node.js & npm** (`node -v` and `npm -v`)
- **Grunt CLI** (`npm install -g grunt-cli`)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/oag-template.git
   cd oag-template
   ```
2. Install dependencies:
   ```sh
   bundle install
   npm install
   ```
3. Build the assets and serve the site locally:
   ```sh
   bundle exec jekyll serve
   ```

   ```sh
   grunt
   ```
   The site should now be accessible at `http://localhost:4000/`.

## Build Process

Grunt automates the following tasks:

- **PostCSS**: Processes and minifies CSS files
- **Copy Task**: Moves assets (CSS & images) to the `_site` folder

## File Structure

```
project-root/
├── _config.yml       # Jekyll configuration
├── assets/
│   ├── css/          # CSS files
│   ├── img/          # Image assets
│   ├── js/           # JavaScript files
├── _site/            # Jekyll's output directory
├── dist/             # Minified and processed assets - **for distribution**
├── Gruntfile.js      # Grunt task definitions
├── package.json      # npm dependencies
├── Gemfile           # Ruby dependencies
├── index.html        # Links to 2 page examples
├── home.html         # Home page example
├── content.html      # Content page example
└── README.md         # Project documentation
```

## Contributing

Feel free to fork this repository, open issues, and submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
