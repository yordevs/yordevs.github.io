import React from "react";
import styled from "styled-components";
import { FaReact, FaGithub } from "react-icons/fa";
import { GrGatsbyjs } from "react-icons/gr";

import Layout from "../components/Layout";
import TextLink from "../components/TextLink";
import Button from "../components/Button";
import ContactForm from "../components/ContactForm";
import SocialIcon from "../components/SocialIcon";

import config from "../theme/config";
const { color } = config;

const HeaderHolder = styled.div``;

const ActionHolder = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const FrameworkHolder = styled.div`
  margin-bottom: 2em;
`;

const ListHolder = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ItemHolder = styled.div`
  display: grid;
  justify-content: center;
  gap: 1em;
`;

const TechIcon = styled(SocialIcon)`
  margin: auto;
  font-size: 3em;
  color: ${color.text};
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
          <ItemHolder>
            <TechIcon icon={<FaReact />} />
            <p>ReactJS</p>
          </ItemHolder>
          <ItemHolder>
            <TechIcon icon={<GrGatsbyjs />} />
            <p>Gatsby</p>
          </ItemHolder>
          <ItemHolder>
            <TechIcon icon={<FaReact />} />
            <p>React Native</p>
          </ItemHolder>
          <ItemHolder>
            <TechIcon icon={<FaGithub />} />
            <p>Github Pages</p>
          </ItemHolder>
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
