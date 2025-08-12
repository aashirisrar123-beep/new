"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MailIcon, ArrowRightIcon, StarIcon } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 text-white flex flex-col items-center justify-center p-4">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight animate-fade-in">
          Unlock Your Potential with Our Cutting-Edge Solution
        </h1>
        <p className="text-lg md:text-xl mb-8 text-purple-100 animate-fade-in-delay-1">
          Revolutionize your workflow, boost productivity, and achieve your goals faster than ever before.
        </p>
        <div className="flex justify-center gap-4 animate-fade-in-delay-2">
          <Button variant="default" size="lg" className="bg-white text-purple-600 hover:bg-purple-100">
            Get Started
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-purple-600">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-5xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-center mb-12 animate-slide-in-up">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Card className="bg-white/10 backdrop-blur-sm border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <StarIcon className="h-6 w-6 text-yellow-400" />
                Feature One
              </CardTitle>
              <CardDescription className="text-purple-100">
                Discover the power of streamlined processes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-purple-200">
                Our innovative approach helps you automate repetitive tasks, freeing up your valuable time for strategic initiatives.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <StarIcon className="h-6 w-6 text-yellow-400" />
                Feature Two
              </CardTitle>
              <CardDescription className="text-purple-100">
                Gain actionable insights with our advanced analytics.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-purple-200">
                Leverage data-driven decisions with comprehensive reports and real-time performance monitoring.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <StarIcon className="h-6 w-6 text-yellow-400" />
                Feature Three
              </CardTitle>
              <CardDescription className="text-purple-100">
                Collaborate seamlessly with your team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-purple-200">
                Enhance teamwork with integrated communication tools and shared workspaces for maximum efficiency.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-center mb-12 animate-slide-in-up">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white/10 backdrop-blur-sm border-none shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center text-3xl">
                  JD
                </div>
                <div>
                  <CardTitle className="text-lg">John Doe</CardTitle>
                  <CardDescription className="text-purple-100">CEO, Tech Innovators</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-purple-200">
                "This platform has completely transformed how we operate. The efficiency gains are incredible!"
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-none shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-indigo-500 flex items-center justify-center text-3xl">
                  AS
                </div>
                <div>
                  <CardTitle className="text-lg">Alice Smith</CardTitle>
                  <CardDescription className="text-purple-100">Lead Developer, CodeCrafters</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-purple-200">
                "I was skeptical at first, but the intuitive design and powerful features have exceeded all my expectations."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="w-full max-w-2xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 animate-slide-in-up">Stay Updated</h2>
        <p className="text-lg mb-8 text-purple-100 animate-fade-in-delay-1">
          Subscribe to our newsletter for the latest updates and exclusive offers.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2 justify-center">
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-white/10 border-white/30 placeholder:text-purple-200 text-white focus:ring-pink-500 focus:border-pink-500 w-full sm:w-72"
            required
          />
          <Button type="submit" className="bg-yellow-500 hover:bg-yellow-400 text-purple-900">
            Subscribe
            <MailIcon className="ml-2 h-5 w-5" />
          </Button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="w-full text-center py-8 border-t border-white/20 mt-auto">
        <p className="text-sm text-purple-200">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="text-purple-200 hover:text-white transition-colors">About Us</a>
          <a href="#" className="text-purple-200 hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-purple-200 hover:text-white transition-colors">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}
