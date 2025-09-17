# QSignage Dashboard

A complete responsive web dashboard application for QSignage - a smart digital advertisement board management platform. Built with React, Material-UI, and Tailwind CSS.

## 🚀 Features

### Core Functionality
- **Screens Management**: Monitor and manage deployed digital screens with real-time status updates
- **Campaigns Management**: Create, schedule, and deploy advertising campaigns across multiple screens
- **Analytics Dashboard**: Comprehensive analytics with charts, KPIs, and performance metrics
- **About QSignage**: Company information and contact details

### Technical Features
- **Responsive Design**: Fully responsive layout for desktop, tablet, and mobile devices
- **Dark Mode Toggle**: Switch between light and dark themes
- **Real-time Data**: Mock data with simulated real-time updates
- **Interactive Charts**: Bar charts and pie charts using Chart.js
- **Professional UI**: Material-UI components with Tailwind CSS styling
- **Search & Filter**: Advanced search and filtering capabilities
- **File Upload**: Media upload functionality for campaigns

## 🛠️ Tech Stack

- **Frontend**: React 18.2.0
- **Routing**: React Router DOM 6.20.1
- **UI Components**: Material-UI 5.14.20
- **Styling**: Tailwind CSS 3.3.6
- **Charts**: Chart.js 4.4.0 + React Chart.js 2 5.2.0
- **Icons**: React Icons 4.12.0
- **Date Picker**: MUI X Date Pickers 6.18.2

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.js       # Main layout wrapper
│   ├── Navbar.js       # Navigation bar
│   └── Sidebar.js      # Sidebar navigation
├── pages/              # Page components
│   ├── ScreensManagement.js
│   ├── CampaignsManagement.js
│   ├── AnalyticsDashboard.js
│   └── AboutQSignage.js
├── data/               # Mock data and constants
│   └── mockData.js
├── App.js              # Main application component
├── index.js            # Application entry point
└── index.css           # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd qsignage-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## 📱 Features Overview

### Screens Management
- View all deployed screens with real-time status
- Search and filter screens by ID or location
- Monitor screen health and performance metrics
- Refresh data to simulate real-time updates

### Campaigns Management
- Upload media files (images/videos) with preview
- Create campaigns with custom scheduling
- Select target screens for campaign deployment
- Track campaign status and performance

### Analytics Dashboard
- KPI cards showing key metrics
- Interactive charts for performance analysis
- Top performing campaigns table
- System status overview

### About QSignage
- Company description and mission
- Key features and capabilities
- Contact information
- Technology stack overview

## 🎨 UI/UX Features

- **Professional Design**: Clean, modern interface with Material-UI components
- **Responsive Layout**: Optimized for all screen sizes
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Hover effects and transitions
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Loading States**: Smooth loading experiences

## 📊 Data & Analytics

The application uses mock data to simulate real-world scenarios:

- **Screens Data**: 8 sample screens with random online/offline status
- **Campaigns**: Sample media files and campaign templates
- **Analytics**: Performance metrics, charts, and KPIs
- **Real-time Updates**: Simulated data refresh functionality

## 🚀 Deployment

### Vercel Deployment
1. Install Vercel CLI: `npm i -g vercel`
2. Build the project: `npm run build`
3. Deploy: `vercel --prod`

### Netlify Deployment
1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### Other Platforms
The app can be deployed to any static hosting service:
- AWS S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps
- GitHub Pages

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory for any environment-specific configurations:

```env
REACT_APP_API_URL=your_api_url_here
REACT_APP_ENVIRONMENT=production
```

### Customization
- **Colors**: Modify the theme in `src/App.js`
- **Data**: Update mock data in `src/data/mockData.js`
- **Styling**: Customize Tailwind classes in `src/index.css`

## 📝 Code Quality

- **ESLint**: Configured for React best practices
- **Prettier**: Code formatting (recommended)
- **Comments**: Comprehensive code documentation
- **Component Structure**: Modular and reusable components

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Email: info@qsignage.com
- Phone: +1 (555) 123-4567
- Documentation: [QSignage Docs](https://docs.qsignage.com)

## 🎯 Roadmap

- [ ] Real-time WebSocket connections
- [ ] Advanced analytics and reporting
- [ ] User authentication and roles
- [ ] Mobile app companion
- [ ] AI-powered content optimization
- [ ] Multi-language support
- [ ] Advanced campaign scheduling
- [ ] Integration with third-party services

---

**QSignage Dashboard** - Revolutionizing Digital Advertising Management
