
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const ShopPage = () => {
  // Mảng sản phẩm mẫu
  const products = [
    {
      id: 1,
      name: "Modern Lounge Chair",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      category: "Furniture"
    },
    {
      id: 2,
      name: "Minimalist Desk Lamp",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      category: "Lighting"
    },
    {
      id: 3,
      name: "Decorative Wall Mirror",
      price: 159.99,
      image: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      category: "Decor"
    },
    {
      id: 4,
      name: "Smart Home Assistant",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1558089687-f282ffcbc0d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      category: "Smart Home"
    },
  ];

  return (
    <>
      <Helmet>
        <title>Shop - Stuffeus</title>
        <meta name="description" content="Shop for premium home decor and transformation products at Stuffeus." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6 animate-fade-up">Shop Our Collection</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Discover curated products that will transform your living spaces
                </p>
              </div>
            </div>
          </section>
          
          {/* Categories */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8">Featured Categories</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {["Furniture", "Lighting", "Decor", "Smart Home"].map((category, index) => (
                  <div key={index} className="group relative rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="aspect-w-1 aspect-h-1 w-full">
                      <div className="bg-gray-200 w-full h-full"></div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                      <h3 className="text-white font-medium text-lg">{category}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Products */}
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Featured Products</h2>
                <Button variant="outline">View All</Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                    <div className="aspect-w-1 aspect-h-1 w-full">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-64 object-cover object-center"
                      />
                    </div>
                    <div className="p-4">
                      <div className="text-sm text-gray-500 mb-1">{product.category}</div>
                      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-primary font-bold">${product.price}</span>
                        <Button size="sm">Add to Cart</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="py-16 bg-primary text-white">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Join Our Membership Program</h2>
                <p className="text-lg opacity-90 mb-8">
                  Get exclusive access to new products, special discounts, and free shipping
                </p>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Sign Up Now
                </Button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ShopPage;
