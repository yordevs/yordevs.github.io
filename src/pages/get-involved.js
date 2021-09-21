import React from "react";
import styled from "styled-components";
import { FaReact, FaGithub } from "react-icons/fa";
import { GrGatsbyjs } from "react-icons/gr";

import Layout from "../components/Layout";
import TextLink from "../components/TextLink";
import Button from "../components/Button";
import ContactForm from "../components/ContactForm";
import SocialIcon from "../components/SocialIcon";

const HeaderHolder = styled.div``;

const ActionHolder = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

const FrameworkHolder = styled.div`
  margin-bottom: 2em;
`;

const ListHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  margin-top: 2em;
`;

const ItemHolder = styled.div`
  display: grid;
  justify-content: center;
  gap: 1em;
`;

const TechIcon = styled(SocialIcon)`
  margin: auto;
  font-size: 3em;
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
        <p>
          We&apos;re always looking for new members, no matter how much experience you have. if
          you&apos;re interested in joining please <TextLink to="/contact">contact us</TextLink>, or
          join our <TextLink to="https://discord.gg/j8fbqEP2TD">Discord</TextLink> and introduce
          yourself!
        </p>
        <p>
          You only have to buy membership if you want to participate in one of our projects, or get
          discounted/free entry to one of our events. You can buy membership{" "}
          <TextLink to="https://yusu.org/shop/product/3296-yordevs-2021">here</TextLink>.
        </p>
      </HeaderHolder>
      <FrameworkHolder>
        <h3>Technologies we use</h3>
        <p>
          If you have a bit of experience, you probably want to know what frameworks we use. If you{" "}
          <i>aren&apos;t</i> as experienced, don&apos;t be put off if some of these words sound
          unknown to you; they&apos;ll become more familiar over time.
        </p>
        <p> We&apos;re currently using the following frameworks:</p>
        <ListHolder>
          <ItemHolder>
            <TechIcon icon={<FaReact />} href={"https://reactjs.org/"} />
            <p>ReactJS</p>
          </ItemHolder>
          <ItemHolder>
            <TechIcon icon={<GrGatsbyjs />} href={"https://www.gatsbyjs.com/"} />
            <p>Gatsby</p>
          </ItemHolder>
          <ItemHolder>
            <TechIcon icon={<FaReact />} href={"https://reactnative.dev/"} />
            <p>React Native</p>
          </ItemHolder>
          <ItemHolder>
            <TechIcon icon={<FaGithub />} href={"https://pages.github.com/"} />
            <p>Github Pages</p>
          </ItemHolder>
        </ListHolder>
      </FrameworkHolder>
      <ActionHolder>
        <div>
          <h3>Contact Us</h3>
          <ContactForm />
        </div>
        <ButtonHolder>
          <Button to="https://discord.gg/j8fbqEP2TD">Join our Discord</Button>
          <Button to="https://yusu.org/shop/product/4193-york-community-web-and-app-development-2122">Buy membership</Button>
        </ButtonHolder>
      </ActionHolder>
    </Layout>
  );
};

export default InvolvedPage;
