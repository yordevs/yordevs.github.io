import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import TextLink from "../components/TextLink";
import Button from "../components/Button";
import ContactForm from "../components/ContactForm";

const HeaderHolder = styled.div``;

const ActionHolder = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const FrameworkHolder = styled.div`
  margin-bottom: 2em;
`;

const ListHolder = styled.div`
  margin-left: 2em;
`;

const ButtonHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InvolvedPage = () => {
  return (
    <Layout title="Get Involved">
      <HeaderHolder>
        <h1>Get Involved</h1>
        <p style={{ textAlign: "center" }}>
          We&apos;re always open to new members, no matter how much experience they have, if
          you&apos;re interested in joining you can <TextLink to="/contact">contact us</TextLink>,
          or join our <TextLink to="https://yordevs.slack.com">slack</TextLink> and introduce
          yourself.
        </p>

        <p style={{ textAlign: "center" }}>
          You only have to buy membership if you want to participate in one of our projects, or get
          discounted/free entry to one of our events. You can buy membership{" "}
          <TextLink to={"https://yusu.org/shop/product/3296-yordevs-2021"}>here</TextLink>.
        </p>
      </HeaderHolder>
      <FrameworkHolder>
        <h3>Technologies we use</h3>
        <p>
          If you have a bit of experience, you probably want to know what frameworks we use, if you
          aren&apos;t as experienced, don&apos;t be put off if some of these words of foreign to
          you, they will become familiar over time. We are currently using the following frameworks:
        </p>
        <ListHolder>
          <ul>
            <li>ReactJS</li>
            <li>Gatsby</li>
            <li>React Native</li>
            <li>Github Pages</li>
          </ul>
        </ListHolder>
      </FrameworkHolder>
      <ActionHolder>
        <div>
          <h3>Contact Form</h3>
          <ContactForm />
        </div>
        <ButtonHolder>
          <Button to="https://yordevs.slack.com">Join our Slack</Button>
          <Button to="https://yusu.org/shop/product/3296-yordevs-2021">Buy membership</Button>
        </ButtonHolder>
      </ActionHolder>
    </Layout>
  );
};

export default InvolvedPage;
