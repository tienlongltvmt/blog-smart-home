
export type Author = {
  id: string;
  name: string;
  avatar: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  readTime: string;
  publishDate: string;
  category: string;
  featuredImage: string;
  author: Author;
};

export const authors: Author[] = [
  {
    id: "1",
    name: "Ariel van Houten",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "2",
    name: "Jane Cooper",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: "3",
    name: "Adam McCoy",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: "4",
    name: "Robert Fox",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: "5",
    name: "Darrell Steward",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: "6",
    name: "Devon Lane",
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
  },
  {
    id: "7",
    name: "Savannah Nguyen",
    avatar: "https://randomuser.me/api/portraits/women/54.jpg",
  },
  {
    id: "8",
    name: "Jenny Wilson",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: "9",
    name: "Elsie Cooper",
    avatar: "https://randomuser.me/api/portraits/women/36.jpg",
  },
  {
    id: "10",
    name: "Annette Black",
    avatar: "https://randomuser.me/api/portraits/women/94.jpg",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "art-of-home-transformation",
    title: "The Art of Home Transformation",
    excerpt: "Explore innovative ideas and trendy decor to elevate your living spaces. Dive into the world of home transformation with Stuffeus!",
    content: "Full content goes here...",
    readTime: "4 Min",
    publishDate: "2023-06-12",
    category: "Decoration",
    featuredImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    author: authors[0],
  },
  {
    id: "2",
    slug: "tech-marvels-for-your-home",
    title: "Tech Marvels for Your Home",
    excerpt: "Discover the cutting-edge technologies that are reshaping homes. From smart appliances to integrated systems, find the perfect tech solutions at Stuffeus.",
    content: "Full content goes here...",
    readTime: "10 Min",
    publishDate: "2023-06-10",
    category: "Technology",
    featuredImage: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    author: authors[2],
  },
  {
    id: "3",
    slug: "crafting-your-own-home-decor",
    title: "Crafting Your Own Home Decor",
    excerpt: "Get creative with our DIY home decor ideas. Learn how to personalize your space and add character to your home with simple, creative projects.",
    content: "Full content goes here...",
    readTime: "8 Min",
    publishDate: "2023-06-08",
    category: "DIY",
    featuredImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    author: authors[1],
  },
  {
    id: "4",
    slug: "essential-kitchen-gadgets",
    title: "Essential Kitchen Gadgets Every Home Chef Needs",
    excerpt: "Enhance your culinary experience with must-have kitchen tools. Explore your kitchen's potential with these essential gadgets.",
    content: "Full content goes here...",
    readTime: "6 Min",
    publishDate: "2023-06-06",
    category: "Kitchen",
    featuredImage: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    author: authors[3],
  },
  {
    id: "5",
    slug: "eco-friendly-living",
    title: "Eco-Friendly Living: Sustainable Choices for a Greener Home",
    excerpt: "Dive into the world of eco-friendly living. Explore sustainable products and lifestyle choices that make a difference.",
    content: "Full content goes here...",
    readTime: "12 Min",
    publishDate: "2023-06-05",
    category: "Sustainability",
    featuredImage: "https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2087&q=80",
    author: authors[4],
  },
  {
    id: "6",
    slug: "the-comfort-zone",
    title: "The Comfort Zone: Choosing the Perfect Furniture for Your Home",
    excerpt: "From cozy couches to stylish tables, find the furniture that turns your house into a home. Discover the art of comfort.",
    content: "Full content goes here...",
    readTime: "9 Min",
    publishDate: "2023-06-04",
    category: "Furniture",
    featuredImage: "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    author: authors[5],
  },
  {
    id: "7",
    slug: "bedroom-bliss",
    title: "Bedroom Bliss: Creating a Relaxing Sanctuary",
    excerpt: "Transform your bedroom into a peaceful retreat with our tips and recommendations. Explore the latest trends in bedroom design.",
    content: "Full content goes here...",
    readTime: "7 Min",
    publishDate: "2023-06-03",
    category: "Bedroom",
    featuredImage: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    author: authors[6],
  },
  {
    id: "8",
    slug: "gardening-gems",
    title: "Gardening Gems: Growing and Decorating with Plants",
    excerpt: "Bring the outdoors inside with our gardening guide. Learn how to cultivate green thumb and integrate plants into your home decor.",
    content: "Full content goes here...",
    readTime: "5 Min",
    publishDate: "2023-06-02",
    category: "Gardening",
    featuredImage: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    author: authors[7],
  },
  {
    id: "9",
    slug: "seasonal-delights",
    title: "Seasonal Delights: Decorating Your Home for Every Occasion",
    excerpt: "Stay in step with the seasons with our decorating ideas. From festive winter to vibrant summer, find inspiration for every time of year.",
    content: "Full content goes here...",
    readTime: "10 Min",
    publishDate: "2023-06-01",
    category: "Seasonal",
    featuredImage: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    author: authors[8],
  },
  {
    id: "10",
    slug: "organizing-chaos",
    title: "Organizing Chaos: Decluttering Your Home for a Stress-Free Life",
    excerpt: "Discover the life-changing magic of an organized home. Explore practical organization solutions and experience the transformative power of an organized home.",
    content: "Full content goes here...",
    readTime: "7 Min",
    publishDate: "2023-05-30",
    category: "Organization",
    featuredImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    author: authors[9],
  },
];

export function getRecentPosts(count = 3): BlogPost[] {
  return [...blogPosts].slice(0, count);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts];
}
