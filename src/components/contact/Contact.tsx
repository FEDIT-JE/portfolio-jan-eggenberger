'use client'
import React, { useState } from "react";
import { Column, Input, Textarea, Button, Text } from "@/once-ui/components";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    //send email to jan@eggenberger.biz
    const email = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    }

    // Simulate form submission (replace with actual API call if needed)
    setTimeout(() => {
      setStatus("Thank you for reaching out! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <Column as="form" onSubmit={handleSubmit} gap="m" maxWidth="s" horizontal="center">
      <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required id={""} label={""}      />
      <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required id={""} label={""}      />
      <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required id={""} label={""}      />
      <Button type="submit" variant="primary" size="m">
        Send Message
      </Button>
      {status && <Text onBackground="neutral-weak">{status}</Text>}
    </Column>
  );
}