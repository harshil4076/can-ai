"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Target, Users, Zap } from "lucide-react";

export function CanAiLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          {/* <Image
            src="/placeholder.svg?height=40&width=40"
            width={40}
            height={40}
            alt="CAN-AI logo"
            className="rounded-lg"
          /> */}
          <span className="ml-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
            CAN-AI
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#how-it-works"
          >
            How It Works
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Discover Your Ideal Clients with AI-Powered Lead Generation
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  CAN-AI uses advanced AI to scrape the internet and find
                  potential clients tailored to your business context.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg">Start Free Trial</Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Key Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <Search className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Intelligent Scraping</CardTitle>
                </CardHeader>
                <CardContent>
                  Our AI scans the web to find businesses that match your ideal
                  client profile.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Target className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Contextual Matching</CardTitle>
                </CardHeader>
                <CardContent>
                  Provide your business context, and we'll find leads that are
                  most likely to need your services.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Lead Qualification</CardTitle>
                </CardHeader>
                <CardContent>
                  Our AI qualifies leads based on multiple factors to ensure
                  high-quality prospects.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="how-it-works"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              How It Works
            </h2>
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                alt="AI-powered lead generation process"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                height="600"
                src="/placeholder.svg?height=600&width=600"
                width="600"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ol className="space-y-4">
                  <li className="flex items-center space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold">Input Your Business Context</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Describe your services and ideal client profile.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold">AI-Powered Web Scraping</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Our AI scans the internet for potential matches.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold">Lead Qualification</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Leads are analyzed and scored based on relevance.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold">Receive Qualified Leads</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Get a list of potential clients tailored to your
                        business.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Pricing Plans
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">$49/mo</div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-primary" />
                      100 leads per month
                    </li>
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-primary" />
                      Basic lead qualification
                    </li>
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-primary" />
                      Email support
                    </li>
                  </ul>
                  <Button className="w-full mt-4">Choose Plan</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Professional</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">$99/mo</div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-primary" />
                      500 leads per month
                    </li>
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-primary" />
                      Advanced lead qualification
                    </li>
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-primary" />
                      Priority email support
                    </li>
                  </ul>
                  <Button className="w-full mt-4">Choose Plan</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">Custom</div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-primary" />
                      Unlimited leads
                    </li>
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-primary" />
                      Custom AI model training
                    </li>
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-primary" />
                      24/7 dedicated support
                    </li>
                  </ul>
                  <Button className="w-full mt-4">Contact Sales</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Supercharge Your Lead Generation?
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Try CAN-AI today and discover the power of AI-driven lead
                  generation. Enter your business details below to get started.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4">
                  <Input placeholder="Your Name" type="text" />
                  <Input placeholder="Your Email" type="email" />
                  <Textarea placeholder="Describe your business and ideal client" />
                  <Button type="submit" size="lg">
                    Start Your Free Trial
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 CAN-AI Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
