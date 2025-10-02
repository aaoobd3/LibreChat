# LibreChat AI Coding Agent Instructions

## Project Architecture Overview

LibreChat is a full-stack AI chat platform with a **monorepo workspace structure**:

- **`api/`** - Express.js backend with MongoDB, Meilisearch, and Redis
- **`client/`** - React frontend with Vite, TypeScript, and Tailwind CSS  
- **`packages/`** - Shared libraries (`data-provider`, `data-schemas`, `api`, `client`)
- **`config/`** - CLI tools for user management, database operations

## Key Development Patterns

### Configuration System
The app uses a **layered configuration approach**:
- Environment variables in `.env` files
- YAML configuration in `librechat.yaml` (see `librechat.example.yaml`)
- Runtime config loading via `api/server/services/Config/`
- Cached configurations using `getLogStores(CacheKeys.CONFIG_STORE)`

**Critical files**: `api/server/services/Config/getEndpointsConfig.js`, `loadConfigModels.js`

### Model Endpoint Architecture
LibreChat supports multiple AI providers through a **unified endpoint system**:
- **Endpoint types**: OpenAI, Azure, Anthropic, Google, Bedrock, Custom endpoints
- **Model loading**: Dynamic fetching from APIs or static configuration
- **Validation**: `api/server/middleware/validateModel.js` ensures model availability
- **Configuration**: Each endpoint has dedicated initialization in `api/server/services/Endpoints/`

### Authentication & Middleware Chain
Standard request flow: `requireJwtAuth` → `checkBan` → `configMiddleware` → endpoint-specific middleware
- **OAuth**: Supports multiple providers (Google, GitHub, Discord, etc.)
- **LDAP**: Configurable via environment variables
- **Role-based access**: Admin roles have additional permissions

### Data Flow Patterns
- **Request validation**: Extensive middleware validation in `api/server/middleware/`
- **Model initialization**: Each endpoint has `buildOptions()` and `initializeClient()` functions
- **Error handling**: Centralized error controller with proper HTTP status codes
- **Caching**: Redis-based caching for configurations, tokens, and sessions

## Essential Commands

### Development Workflow
```bash
# Development (from root)
npm run backend:dev    # Start API server with nodemon
npm run frontend:dev   # Start Vite dev server

# Bun alternative (faster)
npm run b:api:dev     # Backend with bun --watch
npm run b:client:dev  # Frontend with bun

# Full build
npm run frontend      # Builds all packages + client
npm run backend       # Production backend
```

### Database & User Management
```bash
# User operations (from root)
npm run create-user       # Interactive user creation
npm run ban-user         # Ban user by email
npm run reset-password   # Reset user password
npm run list-users       # List all users

# Balance management (if enabled)
npm run add-balance      # Add balance to user
npm run list-balances    # Show user balances
```

### Configuration & Updates
```bash
# Update LibreChat
npm run update          # Update dependencies
npm run update:docker   # Docker-specific update

# Cache operations
npm run flush-cache     # Clear Redis cache
npm run reset-meili-sync # Reset Meilisearch index
```

## File Structure Conventions

### API Routes Pattern
```
api/server/routes/
├── [endpoint]/index.js     # Main router with middleware
├── chat[Version].js        # Chat endpoints
└── v[N]/                   # Versioned endpoints
```

### Client State Management
- **Recoil** for global state (`client/src/store/`)
- **React Query** for server state (`@tanstack/react-query`)
- **Jotai** for some component-level state

### Package Dependencies
- **Shared types**: Import from `librechat-data-provider`
- **Schemas**: Import from `@librechat/data-schemas`
- **API utilities**: Import from `@librechat/api`

## Critical Integration Points

### Model Context Protocol (MCP)
- **Registry**: `packages/api/src/mcp/MCPServersRegistry.ts` manages server discovery
- **OAuth flow**: `api/server/routes/mcp.js` handles authentication
- **Tool integration**: MCP servers provide tools to agents/assistants

### File Handling
- **Storage strategies**: Local, S3, Firebase (configurable per file type)
- **Upload validation**: `api/server/middleware/` validates file types and sizes
- **Processing**: Different pipelines for avatars, documents, images

### Agent System
- **Agents vs Assistants**: Agents are LibreChat's native AI helpers, Assistants are OpenAI-compatible
- **Capabilities**: File search, code execution, actions, tools
- **Permissions**: Role-based access control for agent features

## Common Debugging Patterns

### Configuration Issues
- Check `req.config` is populated by `configMiddleware`
- Verify environment variables are properly loaded
- Use `getLogStores()` to inspect cached configurations

### Model Loading Problems
- Examine `loadConfigModels()` output in `api/server/services/Config/`
- Check `validateModel` middleware for endpoint-specific validation
- Verify API keys are not user-provided when fetching models

### Authentication Failures
- Review middleware chain order in route files
- Check JWT token validation in `api/server/middleware/requireJwtAuth.js`
- Verify user permissions for specific endpoints

## Testing Strategy

### API Tests
```bash
npm run test:api     # Backend Jest tests
npm run b:test:api   # Bun alternative
```

### E2E Tests
```bash
npm run e2e          # Playwright tests
npm run e2e:headed   # Visual debugging
```

### Client Tests
```bash
npm run test:client  # Frontend Jest tests
```

## Performance Considerations

- **Docker**: Production deployment uses multi-stage builds (`Dockerfile.multi`)
- **Caching**: Aggressive caching of configurations and models
- **Rate limiting**: Built-in rate limiters for file uploads, API calls
- **Compression**: Gzip compression enabled by default (configurable)
- **Bundle optimization**: Vite with code splitting and tree shaking