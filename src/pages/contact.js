import React from "react";
import ContactForm from "../components/ContactForm";

import Layout from "../components/Layout";
import TextLink from "../components/TextLink";

const ContactPage = () => (
  <Layout title="Contact Us">
    <p>
      Want to know more about the society? Curious as to when we meet up? Contact us and we&apos;ll
      (probably) be able to answer any question you can throw at us.
    </p>
    <p>
      Use the form below to get in touch with Yordevs, and we&apos;ll aim to reply back to you as
      soon as we can.
    </p>
    <p>
      You can also contact us on{" "}
      <TextLink href="https://www.messenger.com/t/102941108484310">Facebook</TextLink> and{" "}
      <TextLink href="https://twitter.com/yordevs">Twitter</TextLink>, or{" "}
      <TextLink href="mailto:yordevs@yusu.org" target="_blank">
        email
      </TextLink>{" "}
      if you&apos;d prefer it!
    </p>
    <ContactForm />
  </Layout>
);

export default ContactPage;
