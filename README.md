A comprehensive, production-ready frontend application for academic class scheduling and timetable management. Built with React, TypeScript, and modern web technologies.

## 🚀 Features

### 🔐 Authentication & Authorization
- **Role-based access control** (Admin, Department Coordinator, Faculty, Student)
- **Secure login system** with demo credentials
- **Protected routes** based on user roles
- **Session management** with localStorage

### 📊 Role-Based Dashboards
- **Admin Dashboard**: System overview, analytics, quick actions
- **Department Coordinator Dashboard**: Department-specific management
- **Faculty Dashboard**: Personal schedule, availability management
- **Student Dashboard**: Class schedule, academic progress

### 🎯 Core Functionality
- **Timetable Generation**: AI-powered scheduling with constraint optimization
- **Timetable Viewing**: Interactive weekly grid with multiple view modes
- **Conflict Management**: Automated conflict detection and resolution
- **Faculty Management**: Complete CRUD operations for faculty data
- **Room Management**: Classroom and laboratory scheduling
- **Subject Management**: Course catalog and scheduling
- **Batch Management**: Student group organization

### 📈 Analytics & Reporting
- **Room Utilization Charts**: Visual representation of space usage
- **Faculty Workload Distribution**: Balanced workload analysis
- **Conflict Summary**: Real-time conflict monitoring
- **Academic Progress Tracking**: Student performance metrics

### 🎨 Modern UI/UX
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Dark/Light Theme**: User preference-based theming
- **Interactive Components**: Hover effects, animations, transitions
- **Accessibility**: WCAG compliant design patterns

## 🛠️ Technology Stack

### Frontend
- **React 18** with functional components and hooks
- **TypeScript** for type safety and better development experience
- **React Router v6** for client-side routing
- **Tailwind CSS** for utility-first styling
- **Recharts** for data visualization
- **Context API** for state management

### Development Tools
- **Vite** for fast development and building
- **ESLint** for code linting
- **PostCSS** for CSS processing
- **Autoprefixer** for browser compatibility

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Navbar.jsx      # Top navigation bar
│   ├── Sidebar.jsx     # Side navigation menu
│   ├── ProtectedRoute.tsx # Route protection component
│   └── TimetableView.tsx # Timetable grid component
├── context/            # React Context providers
│   └── AuthContext.tsx # Authentication context
├── hooks/              # Custom React hooks
│   └── useApi.ts       # API data fetching hooks
├── pages/              # Page components
│   ├── Login.jsx       # Authentication page
│   ├── AdminDashboard.jsx
│   ├── DeptDashboard.jsx
│   ├── FacultyDashboard.jsx
│   ├── StudentDashboard.jsx
│   ├── FacultyManagement.tsx
│   ├── TimetableGeneration.tsx
│   ├── ConflictManagement.tsx
│   └── Settings.tsx
├── services/           # API service layer
│   └── mockApi.ts      # Mock API implementations
├── data/               # Mock data and constants
│   └── mockData.ts     # Sample data for development
├── types/              # TypeScript type definitions
│   └── index.ts        # Shared type interfaces
└── styles/             # Global styles
    └── index.css       # Tailwind CSS imports
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mern-timetable-client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Demo Credentials

The application includes demo users for testing different roles:

| Role | Email | Password | Access Level |
|------|-------|----------|--------------|
| Admin | admin@university.edu | password | Full system access |
| Dept Coordinator | dept@university.edu | password | Department management |
| Faculty | faculty@university.edu | password | Personal schedule management |
| Student | student@university.edu | password | Read-only access |

## 🎯 Usage Guide

### For Administrators
1. **Login** with admin credentials
2. **Manage Faculty**: Add, edit, or remove faculty members
3. **Generate Timetables**: Use the wizard to create optimal schedules
4. **Resolve Conflicts**: Monitor and fix scheduling conflicts
5. **View Analytics**: Access comprehensive reports and charts

### For Department Coordinators
1. **Login** with department credentials
2. **View Department Timetable**: Monitor department-wide scheduling
3. **Manage Faculty Availability**: Update faculty schedules
4. **Handle Requests**: Process faculty and student requests

### For Faculty
1. **Login** with faculty credentials
2. **View Personal Timetable**: Check your class schedule
3. **Set Availability**: Update your available time slots
4. **Submit Requests**: Request leave or class swaps

### For Students
1. **Login** with student credentials
2. **View Class Schedule**: Check your weekly timetable
3. **Search Classes**: Find classes by faculty, room, or subject
4. **Export Schedule**: Download your timetable in various formats

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=MERN Timetable
VITE_APP_VERSION=1.0.0
```

### Customization
- **Themes**: Modify colors in `tailwind.config.cjs`
- **Mock Data**: Update `src/data/mockData.ts` for different test scenarios
- **API Endpoints**: Configure in `src/services/mockApi.ts`

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured experience with sidebar navigation
- **Tablet**: Adapted layout with collapsible navigation
- **Mobile**: Touch-friendly interface with bottom navigation

## 🧪 Testing

### Manual Testing
1. **Login Flow**: Test all role-based logins
2. **Navigation**: Verify all menu items work correctly
3. **CRUD Operations**: Test create, read, update, delete functions
4. **Responsive Design**: Test on different screen sizes
5. **Data Persistence**: Verify data persists across page refreshes

### Test Scenarios
- **Authentication**: Login/logout with different roles
- **Timetable Generation**: Create and compare timetable candidates
- **Conflict Resolution**: Identify and resolve scheduling conflicts
- **Data Management**: Add, edit, and delete faculty/rooms/subjects
- **Export Functionality**: Test PDF/Excel export features

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Static Hosting
The built files in `dist/` can be deployed to:
- **Vercel**: Connect GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for deployment
- **AWS S3**: Upload files to S3 bucket with CloudFront

### Environment Setup
1. **Production API**: Update API endpoints for production backend
2. **Environment Variables**: Set production environment variables
3. **CDN**: Configure CDN for static assets
4. **SSL**: Ensure HTTPS is enabled

## 🔮 Future Enhancements

### Planned Features
- **Real-time Notifications**: WebSocket integration for live updates
- **Advanced Analytics**: Machine learning for optimization
- **Mobile App**: React Native companion app
- **Integration**: LMS and calendar system integration
- **Multi-language**: Internationalization support

### Technical Improvements
- **State Management**: Redux Toolkit for complex state
- **Testing**: Jest and React Testing Library
- **Performance**: Code splitting and lazy loading
- **PWA**: Progressive Web App capabilities

## 🤝 Contributing

### Development Workflow
1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** thoroughly
5. **Submit** a pull request

### Code Standards
- **TypeScript**: Use strict typing
- **ESLint**: Follow configured linting rules
- **Components**: Use functional components with hooks
- **Styling**: Use Tailwind CSS classes
- **Naming**: Use descriptive, camelCase names

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

### Common Issues
1. **Build Errors**: Check Node.js version and dependencies
2. **TypeScript Errors**: Ensure all types are properly defined
3. **Styling Issues**: Verify Tailwind CSS is properly configured
4. **API Errors**: Check mock API implementations

### Getting Help
- **Documentation**: Check this README and inline comments
- **Issues**: Create GitHub issues for bugs or feature requests
- **Discussions**: Use GitHub Discussions for questions

## 🎉 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Recharts** for beautiful data visualization
- **Vite** for the lightning-fast build tool

---

**Built with ❤️ for academic institutions worldwide
