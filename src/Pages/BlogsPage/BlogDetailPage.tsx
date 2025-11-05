import { useParams } from "react-router-dom";
import { Button } from "@/Components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { sampleBlogs } from "@/data/blogData";
import { SparklesCore } from "@/Components/ui/sparkles";

const BlogDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const blog = sampleBlogs.find((blog) => blog.id === parseInt(id || ""));

  if (!blog) {
    return (
      <div className="min-h-screen bg-black relative overflow-x-hidden flex items-center justify-center">
        <div className="w-full absolute inset-0 h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={10}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>

        <div className="text-center relative z-10">
          <h1 className="text-4xl font-bold text-white mb-4">Blog Not Found</h1>
          <p className="text-gray-300 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Button
            onClick={() => navigate("/blogs")}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={10}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 relative z-10">
        <Button
          variant="ghost"
          onClick={() => navigate("/blogs")}
          className="mb-8 inline-flex items-center gap-2 text-gray-300 hover:text-white hover:bg-white/10 border border-white/20 hover:border-blue-400/50"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blogs
        </Button>

        <div className="relative h-96 rounded-2xl overflow-hidden mb-8 shadow-lg border border-white/10">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-400/30"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
            {blog.title}
          </h1>

          <div className="flex items-center gap-6 text-gray-300 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <span>{blog.readTime}</span>
          </div>

          <p className="text-lg text-gray-300 leading-relaxed">
            {blog.excerpt}
          </p>
        </div>

        <div className="bg-black/50 backdrop-blur-sm border text-white border-white/10 rounded-2xl p-8 shadow-lg">
          <div
            className="prose prose-lg max-w-none prose-invert prose-headings:text-white prose-p:text-gray-300 prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10 prose-code:text-blue-400 prose-strong:text-white prose-ul:text-gray-300 prose-ol:text-gray-300 prose-li:text-gray-300"
            dangerouslySetInnerHTML={{ __html: blog.content || "" }}
          />
        </div>

        <div className="bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-8 mt-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Enjoyed this article?</h2>
          <p className="text-blue-100 mb-6">
            Check out more of our blog posts for similar content.
          </p>
          <Button
            onClick={() => navigate("/blogs")}
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
          >
            View All Blogs
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
