import React from "react";
import { Column, Heading, Text } from "@/once-ui/components";
import ContactForm from "@/components/contact/Contact";

export default function Contact() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center" paddingY="xl">
      <Heading variant="display-strong-l" wrap="balance">
        Get in Touch
      </Heading>
      <Text onBackground="neutral-weak" variant="heading-default-m" align="center">
        Have questions or want to work together? Fill out the form below, and I'll get back to you as soon as possible.
      </Text>
      <ContactForm />
    </Column>
  );
}