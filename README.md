# Al-Hadis

A modern Islamic educational platform built with React, focused on Hadis literature and religious content.

## Features

- **Hadis Collection**: Browse and search Islamic Hadis literature
- **Book Library**: Access to Islamic books and manuscripts
- **Scholar Information**: Learn about Islamic scholars and authorities
- **Subject-based Organization**: Hadis categorized by topics
- **Responsive Design**: Optimized for all devices

## Tech Stack

- **React 19.1.1** - Modern UI library
- **Vite 7.1.7** - Fast build tool
- **React Router DOM 7.9.3** - Client-side routing
- **Tailwind CSS 4.1.14** - Utility-first CSS framework
- **ESLint** - Code quality and linting

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd al-hadis

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Project Structure

```
src/
├── Components/
│   ├── Alem/           # Scholar information
│   ├── Book/           # Book display
│   ├── Footer/         # Site footer
│   ├── HeaderSection/  # Page headers
│   ├── HeroSection/    # Hero banners
│   ├── Navbar/         # Navigation
│   ├── Reminder/       # Notifications
│   ├── Securibe/       # Subscription
│   └── SubBasedHadis/  # Categorized Hadis
├── Layout/
│   └── Root.jsx        # Main layout
├── Pages/
│   ├── Home/           # Homepage
│   ├── Hadis/          # Hadis content
│   ├── OurProject/     # Projects
│   └── HadisGrontho/   # Hadis books
└── routes/
    └── routes.js       # Route configuration
```

## Routes

- `/` - Home page
- `/hadis` - Hadis collection
- `/our-projects` - Project showcase
- `/hadis-grontho` - Hadis literature

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
