# Blogio - Modern Blog Reading Platform

A beautiful, modern blog reading platform built with Vue 3, TypeScript, and Tailwind CSS. Blogio provides a clean, distraction-free reading experience with user authentication and commenting functionality.

## 🌟 Features

- **📖 Clean Reading Experience**: Modern, responsive design with distraction-free reading
- **🔐 User Authentication**: Secure JWT-based authentication with role-based access
- **💬 Interactive Comments**: Logged-in users can comment on posts and manage their own comments
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **🎨 Modern UI**: Built with shadcn/vue components and Tailwind CSS
- **⚡ Fast Performance**: Powered by Vite for lightning-fast development and builds

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/famo7/blogio.git
   cd blogio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Edit the `.env` file to configure your API endpoint:

   ```env
   # API Configuration
   VITE_API_BASE_URL=https://blog-api-mydt.onrender.com/api

   # For local development use:
   # VITE_API_BASE_URL=http://localhost:3000/api
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run type-check` - Run TypeScript type checking
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
src/
├── components/           # Vue components
│   ├── ui/              # Reusable UI components (shadcn/vue)
│   ├── About.vue        # About page
│   ├── Blog.vue         # Blog listing page
│   ├── Home.vue         # Landing page
│   ├── Login.vue        # Login form
│   ├── Navbar.vue       # Navigation component
│   ├── PostDetail.vue   # Individual post view with comments
│   └── SignUp.vue       # Registration form
├── config/              # Configuration files
│   └── api.ts          # API configuration and endpoints
├── router/              # Vue Router configuration
├── services/            # API service layers
│   ├── authService.ts   # Authentication services
│   └── postService.ts   # Post and comment services
├── stores/              # Pinia stores
│   ├── auth.ts         # Authentication state management
│   └── notification.ts # Notification state management
└── lib/                 # Utility functions
    └── utils.ts        # Helper utilities
```

## 🎨 UI Components

This project uses [shadcn/vue](https://www.shadcn-vue.com/) for consistent, accessible UI components:

- **Forms**: Input, Label, Button, RadioGroup
- **Layout**: Card components for content organization
- **Feedback**: Alert components for user notifications

## 🔑 Authentication

### User Roles

- **USER**: Can read posts and comment
- **AUTHOR**: Can read posts and comment (content creation handled by separate admin app)

### Features

- JWT token-based authentication
- Persistent login sessions
- Role-based UI rendering
- Secure API communication

## 📡 API Integration

The application integrates with a RESTful API for:

- **Authentication**: User login and registration
- **Posts**: Fetching blog posts and individual post details
- **Comments**: CRUD operations for post comments (authenticated users only)

### API Endpoints Used

- `GET /posts` - Fetch all posts
- `GET /posts/:id` - Fetch single post
- `GET /posts/:id/comments` - Fetch post comments
- `POST /posts/:id/comments` - Create comment (auth required)
- `PUT /posts/:id/comments/:commentId` - Update comment (auth required)
- `DELETE /posts/:id/comments/:commentId` - Delete comment (auth required)

## 🌐 Environment Configuration

### Production

The app is configured to use the production API by default:

```env
VITE_API_BASE_URL=https://blog-api-mydt.onrender.com/api
```

### Local Development

For local development with a local API server:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

## 📱 Responsive Design

Blogio is fully responsive and optimized for:

- **Desktop**: Full-featured experience with sidebar navigation
- **Tablet**: Adapted layout with touch-friendly interactions
- **Mobile**: Streamlined interface with collapsible navigation

## 🎯 User Experience Features

- **Conditional Navigation**: Different UI based on authentication status
- **Loading States**: Smooth loading indicators for better UX
- **Error Handling**: User-friendly error messages
- **Form Validation**: Real-time validation with helpful feedback
- **Optimistic Updates**: Immediate UI updates for better perceived performance

## 🔧 Development

### Adding New Components

1. Create component in appropriate directory under `src/components/`
2. Use TypeScript for type safety
3. Follow existing naming conventions
4. Import and use shadcn/vue components for consistency

### API Service Pattern

Services are organized by domain (auth, posts) and provide:

- Type-safe interfaces
- Error handling
- Authentication token management
- Consistent API response handling

### State Management

Uses Pinia for:

- Authentication state
- User preferences
- Global notifications

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

### Environment Variables for Production

Ensure your production environment has:

```env
VITE_API_BASE_URL=your-production-api-url
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For questions or issues:

- Open an issue on GitHub
- Check existing documentation
- Review the code comments for implementation details

---

**Blogio** - Where stories come to life ✨
