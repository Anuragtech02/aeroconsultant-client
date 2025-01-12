"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "../Button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Check, AlertCircle } from "lucide-react";
import Script from "next/script";

interface ContactFormData {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  mobile?: string;
  message?: string;
  turnstile?: string;
}

declare global {
  interface Window {
    turnstile: {
      render: (container: string | HTMLElement, options: any) => string;
      reset: (widgetId: string) => void;
    };
  }
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const turnstileWidgetId = useRef<string>("");

  useEffect(() => {
    // Define the callback function that will be called when Turnstile is loaded
    // @ts-ignore
    window.onloadTurnstileCallback = function () {
      window.turnstile.render("#turnstile-container", {
        sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "",
        callback: function (token: string) {
          console.log("Challenge Success", token);
          setTurnstileToken(token);
          setErrors((prev) => ({ ...prev, turnstile: undefined }));
        },
        "expired-callback": function () {
          setTurnstileToken("");
          setErrors((prev) => ({
            ...prev,
            turnstile: "Verification expired. Please verify again.",
          }));
        },
        "error-callback": function () {
          setErrors((prev) => ({
            ...prev,
            turnstile: "Error during verification. Please try again.",
          }));
        },
      });
    };

    return () => {
      // Cleanup
      if (window.turnstile && turnstileWidgetId.current) {
        window.turnstile.reset(turnstileWidgetId.current);
      }
      // Clean up the global callback
      // @ts-ignore
      delete window.onloadTurnstileCallback;
    };
  }, []);

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    const mobileRegex = /^\+?[1-9]\d{9,11}$/;
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!mobileRegex.test(formData.mobile.replace(/[- ]/g, ""))) {
      newErrors.mobile = "Please enter a valid mobile number";
    }

    if (!turnstileToken) {
      newErrors.turnstile = "Please complete the verification";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          cfTurnstileResponse: turnstileToken,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", mobile: "", message: "" });

      // Reset Turnstile after successful submission
      if (window.turnstile && turnstileWidgetId.current) {
        window.turnstile.reset(turnstileWidgetId.current);
      }
    } catch (error) {
      console.error("Error sending message", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback"
        async
        defer
      />

      <section className="relative py-24 bg-gray-50" id="contact">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-white/50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="relative container mx-auto px-4">
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="mb-4">Get in Touch</h2>
            <p className="text-gray-600">
              Have questions? We&apos;re here to help. Send us a message and
              we&apos;ll get back to you shortly.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/contact-img.jpg"
                alt="Contact Us"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Right Column - Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form fields... (name, email, mobile, message remain the same) */}
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile *</Label>
                  <Input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    className={errors.mobile ? "border-red-500" : ""}
                  />
                  {errors.mobile && (
                    <p className="text-sm text-red-500">{errors.mobile}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message (optional)"
                    rows={4}
                  />
                </div>

                {/* Cloudflare Turnstile */}
                <div className="space-y-2">
                  <div id="turnstile-container"></div>
                  {errors.turnstile && (
                    <p className="text-sm text-red-500">{errors.turnstile}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div>
                  <Button
                    type="submit"
                    title={isSubmitting ? "Sending..." : "Send Message"}
                    variant="secondary"
                    fullWidth
                    disabled={isSubmitting}
                    isLoading={isSubmitting}
                    className="[&>span]:text-black"
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <Alert
                    variant="default"
                    className="bg-green-50 border-green-200"
                  >
                    <Check className="h-4 w-4 text-green-600" />
                    <AlertTitle className="text-green-800">Success!</AlertTitle>
                    <AlertDescription className="text-green-700">
                      Thank you! Your message has been sent successfully.
                      We&apos;ll get back to you soon.
                    </AlertDescription>
                  </Alert>
                )}

                {submitStatus === "error" && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      Something went wrong while sending your message. Please
                      try again later.
                    </AlertDescription>
                  </Alert>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
