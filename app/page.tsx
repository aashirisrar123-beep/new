"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MailIcon } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-600 to-pink-600 text-white">
      {/* Hero Section */}
      <section className="flex-grow flex items-center justify-center text-center p-8">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
            The Future of Effortless Productivity
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Unlock your potential with our revolutionary new platform. Streamline your workflow and achieve more, faster.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" className="text-lg px-8 py-3">
              Learn More
            </Button>
            <Button className="text-lg px-8 py-3 bg-white text-purple-600 hover:bg-gray-100">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Card className="bg-white shadow-lg border-none">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center mx-auto -mb-8 shadow-xl">
                  <MailIcon className="w-8 h-8 text-white" />
                </div>
              </CardHeader>
              <CardContent className="pt-10">
                <CardTitle className="text-gray-900 mb-4">Seamless Integration</CardTitle>
                <p className="text-gray-600">
                  Connect with your favorite tools effortlessly. Our platform integrates with hundreds of services to keep your workflow unified.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg border-none">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-pink-600 flex items-center justify-center mx-auto -mb-8 shadow-xl">
                  <MailIcon className="w-8 h-8 text-white" />
                </div>
              </CardHeader>
              <CardContent className="pt-10">
                <CardTitle className="text-gray-900 mb-4">Intuitive Interface</CardTitle>
                <p className="text-gray-600">
                  A clean and simple design that makes managing your tasks and projects a breeze. Focus on what matters most.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg border-none">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center mx-auto -mb-8 shadow-xl">
                  <MailIcon className="w-8 h-8 text-white" />
                </div>
              </CardHeader>
              <CardContent className="pt-10">
                <CardTitle className="text-gray-900 mb-4">Powerful Analytics</CardTitle>
                <p className="text-gray-600">
                  Gain valuable insights into your productivity. Track your progress and identify areas for improvement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-white">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-transparent text-white border-gray-700 shadow-none">
              <CardContent>
                <p className="text-lg italic mb-4">"This platform has completely transformed my workflow. I can't imagine working without it anymore!"</p>
                <div className="text-right">
                  <p className="font-bold">- Alex Johnson</p>
                  <p className="text-gray-300">Project Manager</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-transparent text-white border-gray-700 shadow-none hidden md:block">
              <CardContent>
                <p className="text-lg italic mb-4">"The team support is outstanding. They're always responsive and helpful, making complex tasks simple."</p>
                <div className="text-right">
                  <p className="font-bold">- Maria Garcia</p>
                  <p className="text-gray-300">Lead Developer</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-transparent text-white border-gray-700 shadow-none">
              <CardContent>
                <p className="text-lg italic mb-4">"Finally, a tool that understands my needs. It's intuitive, efficient, and a joy to use daily."</p>
                <div className="text-right">
                  <p className="font-bold">- Sam Lee</p>
                  <p className="text-gray-300">Product Designer</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Boost Your Productivity?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of satisfied users and experience the difference. Sign up for our newsletter to get the latest updates and tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="flex-grow bg-gray-800 text-white border-gray-700 focus:ring-pink-500 focus:border-pink-500" />
            <Button className="bg-pink-600 hover:bg-pink-700 text-lg px-6 py-3">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-8 px-4 text-center text-gray-400">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}
