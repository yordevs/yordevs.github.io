import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";

import Layout from "../components/Layout";

import config from "../theme/config";
const { color, font } = config;

const StyledForm = styled.form`
  /* display: flex; */
  /* flex-direction: row;
  flex-basis: 0; */
`;

const FormInput = styled.input`
  padding: 0.5em 1em;
  border: 1px solid #efefef;
  border-radius: 5px;
  background-color: #efefef;
  outline: none;

  margin-bottom: 1em;

  &:active,
  &:focus {
    background-color: #f7f7f7;
    border: 1px solid ${color.accent};
  }
`;

// const FormLabel = styled.label`
//   h3 {
//     font-size: ${font.size.base};
//     font-weight: ${font.weight.semibold};
//   }
// `;

const EmailStatus = styled.p`
  font-weight: ${font.weight.semibold};
`;

const EmailSuccess = styled(EmailStatus)`
  color: ${color.success};
`;

const EmailFail = styled(EmailStatus)`
  color: ${color.error};
`;

const ContactPage = () => {
  const { register, handleSubmit } = useForm();
  const [sendSuccess, setSendSuccess] = useState(null);

  const onSubmit = async (data, event) => {
    console.log(event.target);
    console.log(data);

    const { action, method } = event.target;

    try {
      const res = await axios({
        method: method,
        url: action,
        headers: { Accept: "application/json" },
        data: data,
      });

      if (res) {
        setSendSuccess(true);
      }
    } catch (err) {
      console.error(err);
      setSendSuccess(false);
    }
  };

  return (
    <Layout title="Contact Us">
      <StyledForm
        action="https://formspree.io/f/xleoyqbn"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}>
        <FormInput type="text" name="name" id="name" placeholder="Name" ref={register} />
        <br />
        <FormInput type="email" name="replyto" id="replyto" placeholder="Email" ref={register} />
        <br />
        <FormInput
          as="textarea"
          cols="30"
          rows="5"
          placeholder="Message"
          name="message"
          id="message"
          ref={register}
          style={{ resize: "vertical" }}
        />
        <br />
        <button type="submit">Send</button>
      </StyledForm>
      {sendSuccess === true || (
        <EmailSuccess>Great! Your message was sent successfully.</EmailSuccess>
      )}
      {sendSuccess === false || (
        <EmailFail>
          We had some trouble sending your message. Please try again, or perhaps contact a member of
          the society via a different method.
        </EmailFail>
      )}
    </Layout>
  );
};

export default ContactPage;
