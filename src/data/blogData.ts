export interface BlogPost {
  id: number;
  title: string;
  content?: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
}

// Sample blog data (this will be replaced with Strapi data later)
export const sampleBlogs: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with React and TypeScript",
    content: `
      <p>React and TypeScript make a powerful combination for building robust web applications. In this comprehensive guide, we'll explore how to set up and use TypeScript with React effectively.</p>
      
      <h2>Why TypeScript?</h2>
      <p>TypeScript provides static type checking, which helps catch errors early in development. It also improves code readability and maintainability.</p>
      
      <h2>Setting Up</h2>
      <p>To get started, you can create a new React app with TypeScript template:</p>
      <pre><code>npx create-react-app my-app --template typescript</code></pre>
      
      <h2>Basic Type Definitions</h2>
      <p>Here are some common patterns you'll use:</p>
      <pre><code>interface Props {
  title: string;
  count: number;
  isActive?: boolean;
}</code></pre>
      
      <p>This foundation will help you build more reliable React applications with better developer experience.</p>
    `,
    excerpt:
      "Learn how to effectively combine React with TypeScript for better development experience and code quality.",
    author: "John Doe",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["React", "TypeScript", "Web Development"],
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    title: "Modern CSS Techniques for 2024",
    content: `
      <p>CSS has evolved significantly in recent years. Let's explore the modern techniques that will make your styling more efficient and maintainable.</p>
      
      <h2>Container Queries</h2>
      <p>Container queries allow you to apply styles based on the size of a container rather than the viewport:</p>
      <pre><code>@container (min-width: 400px) {
  .card {
    display: flex;
  }
}</code></pre>
      
      <h2>CSS Grid Subgrid</h2>
      <p>Subgrid allows nested grids to participate in the sizing of their parent grid:</p>
      <pre><code>.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.child {
  display: grid;
  grid-template-columns: subgrid;
}</code></pre>
      
      <h2>Cascade Layers</h2>
      <p>Cascade layers provide a structured way to organize CSS and control specificity:</p>
      <pre><code>@layer base, components, utilities;</code></pre>
      
      <p>These modern CSS features will help you write more maintainable and flexible stylesheets.</p>
    `,
    excerpt:
      "Discover the latest CSS features and techniques that will revolutionize your styling workflow in 2024.",
    author: "Jane Smith",
    date: "2024-01-10",
    readTime: "6 min read",
    tags: ["CSS", "Web Development", "Frontend"],
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    title: "Building Scalable Node.js Applications",
    content: `
      <p>Building scalable Node.js applications requires careful planning and the right architectural patterns. Let's explore the best practices for creating applications that can grow with your needs.</p>
      
      <h2>Application Structure</h2>
      <p>A well-structured application is easier to maintain and scale:</p>
      <pre><code>src/
  ├── controllers/
  ├── models/
  ├── routes/
  ├── middleware/
  ├── services/
  └── utils/</code></pre>
      
      <h2>Database Design</h2>
      <p>Choose the right database for your needs and design your schema carefully. Consider using connection pooling and read replicas for better performance.</p>
      
      <h2>Caching Strategies</h2>
      <p>Implement caching at multiple levels:</p>
      <ul>
        <li>Application-level caching with Redis</li>
        <li>Database query caching</li>
        <li>CDN for static assets</li>
      </ul>
      
      <h2>Monitoring and Logging</h2>
      <p>Implement comprehensive monitoring and logging to track performance and debug issues quickly.</p>
      
      <p>Following these patterns will help you build Node.js applications that can handle growth gracefully.</p>
    `,
    excerpt:
      "Learn the essential patterns and practices for building Node.js applications that can scale effectively.",
    author: "Mike Johnson",
    date: "2024-01-08",
    readTime: "10 min read",
    tags: ["Node.js", "Backend", "Scalability"],
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    title: "Understanding JavaScript Async/Await",
    content: `
      <p>Asynchronous JavaScript programming can be challenging, but async/await makes it much more manageable. Let's explore how to use these powerful features effectively.</p>
      
      <h2>What is Async/Await?</h2>
      <p>Async/await is syntactic sugar built on top of Promises, making asynchronous code look and behave more like synchronous code.</p>
      
      <h2>Basic Usage</h2>
      <pre><code>async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}</code></pre>
      
      <h2>Error Handling</h2>
      <p>Always use try/catch blocks with async/await to handle errors properly:</p>
      <pre><code>async function handleRequest() {
  try {
    const result = await someAsyncOperation();
    // Handle success
  } catch (error) {
    // Handle error
  }
}</code></pre>
      
      <p>Mastering async/await will make your JavaScript code more readable and maintainable.</p>
    `,
    excerpt:
      "Master asynchronous JavaScript programming with async/await patterns and best practices.",
    author: "Sarah Wilson",
    date: "2024-01-05",
    readTime: "7 min read",
    tags: ["JavaScript", "Async Programming", "Web Development"],
    image:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    title: "Database Design Best Practices",
    content: `
      <p>Good database design is crucial for application performance and maintainability. Let's explore the key principles and best practices.</p>
      
      <h2>Normalization</h2>
      <p>Normalize your database to reduce redundancy and improve data integrity:</p>
      <ul>
        <li>First Normal Form (1NF): Eliminate repeating groups</li>
        <li>Second Normal Form (2NF): Eliminate partial dependencies</li>
        <li>Third Normal Form (3NF): Eliminate transitive dependencies</li>
      </ul>
      
      <h2>Indexing Strategy</h2>
      <p>Create indexes on columns that are frequently queried:</p>
      <pre><code>CREATE INDEX idx_user_email ON users(email);
CREATE INDEX idx_order_date ON orders(created_at);</code></pre>
      
      <h2>Data Types</h2>
      <p>Choose appropriate data types to optimize storage and performance:</p>
      <ul>
        <li>Use smallest appropriate integer types</li>
        <li>Use VARCHAR instead of TEXT for short strings</li>
        <li>Consider using ENUM for fixed sets of values</li>
      </ul>
      
      <p>Following these principles will help you create efficient and scalable database schemas.</p>
    `,
    excerpt:
      "Learn how to design efficient and maintainable database schemas for your applications.",
    author: "David Brown",
    date: "2024-01-01",
    readTime: "12 min read",
    tags: ["Database", "Backend", "Architecture"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 6,
    title: "Introduction to Docker and Containerization",
    content: `
      <p>Docker has revolutionized how we develop, deploy, and manage applications. Let's explore the fundamentals of containerization.</p>
      
      <h2>What is Docker?</h2>
      <p>Docker is a platform that uses containerization technology to package applications and their dependencies into lightweight, portable containers.</p>
      
      <h2>Basic Docker Commands</h2>
      <pre><code># Build an image
docker build -t myapp .

# Run a container
docker run -d -p 3000:3000 myapp

# List running containers
docker ps</code></pre>
      
      <h2>Dockerfile Best Practices</h2>
      <ul>
        <li>Use multi-stage builds to reduce image size</li>
        <li>Minimize the number of layers</li>
        <li>Use .dockerignore to exclude unnecessary files</li>
        <li>Run as non-root user for security</li>
      </ul>
      
      <h2>Docker Compose</h2>
      <p>Use Docker Compose to manage multi-container applications:</p>
      <pre><code>version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
  db:
    image: postgres:13
    environment:
      POSTGRES_PASSWORD: password</code></pre>
      
      <p>Containerization with Docker will streamline your development workflow and deployment process.</p>
    `,
    excerpt:
      "Get started with Docker and learn how containerization can improve your development workflow.",
    author: "Lisa Chang",
    date: "2023-12-28",
    readTime: "9 min read",
    tags: ["Docker", "DevOps", "Containerization"],
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
];

// Extract all unique tags from blogs
export const getAllTags = (blogs: BlogPost[]) => {
  const tags = new Set<string>();
  blogs.forEach((blog) => {
    blog.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
};
