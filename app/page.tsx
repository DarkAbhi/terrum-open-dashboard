import BlurFade from "@/components/ui/blur-fade";
import BlurIn from "@/components/ui/blur-in";
import { CommandMenuWrapper } from "@/components/home/get-started-wrapper";
import { Leaf, ShoppingBag, Star, Users } from "lucide-react";

export default function Home() {
  return (
    <div>
      <section id="hero" className="flex flex-col py-32 mx-4 md:mx-8 lg:mx-12">
        <BlurIn
          word={"Your Open Database for Sustainability &\nClimate Action"}
          className="mt-20 text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-b bg-clip-text from-[#00A2FF] to-[#0066CC] mb-6 text-center dark:from-white dark:to-purple-400 dark:from-30% text-transparent"
        />
        <BlurFade delay={0.25 * 0.05} inView>
          <div className="flex justify-center mt-5 flex-col">
            <p className="text-xl text-gray-500 mb-8 max-w-3xl mx-auto text-center">
              At Terrum, we're building a comprehensive open database to empower
              individuals and communities to make sustainable choices with ease.
              Discover companies, brands, local businesses, and more—all
              committed to creating a greener planet. Join us in making
              sustainability a shared journey.
            </p>
            <CommandMenuWrapper />
          </div>
        </BlurFade>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-12">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Leaf className="text-green-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Discover Non-Profits
                  </h3>
                  <p className="text-gray-600">
                    Find non-profits making a difference in climate action.
                    Explore opportunities to volunteer, collaborate, or lend
                    your support to organizations championing environmental
                    causes.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <ShoppingBag className="text-green-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Support Local, Shop Sustainable
                  </h3>
                  <p className="text-gray-600">
                    Discover sustainable businesses in your area. By choosing
                    local, eco-friendly alternatives, you can make a positive
                    impact on the environment while supporting your community.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-12">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Star className="text-green-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Product Reviews for Conscious Choices
                  </h3>
                  <p className="text-gray-600">
                    Browse a curated list of sustainable products with honest
                    reviews from real users. Gain confidence as you explore new,
                    innovative eco-friendly options that make a positive impact.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Users className="text-green-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Connect with Offline Communities
                  </h3>
                  <p className="text-gray-600">
                    Network with like-minded individuals and join groups that
                    share your passions. Experience the joy of learning,
                    sharing, and growing together—all while enjoying the beauty
                    of nature.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
