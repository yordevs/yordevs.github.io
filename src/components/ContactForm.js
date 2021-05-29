import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";

import config from "../theme/config";
const { color, font, breakpoint, transition } = config;

const StyledForm = styled.form`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
`;

const FormInput = styled.input`
  padding: 0.5em 1em;
  border: 1px solid #efefef;
  border-radius: 5px;
  background-color: #efefef;
  outline: none;

  margin-bottom: 1em;

  min-height: 1em;
  width: 100%;

  @media (${breakpoint.md}) {
    width: fit-content;
  }

  transition: border ${transition.standard}, background ${transition.standard};

  &:active,
  &:focus {
    background-color: #f7f7f7;
    border: 1px solid ${color.accent};
  }
`;

const FormSubmit = styled.button`
  text-decoration: none;
  display: inline-block;
  background-color: ${color.accent};
  color: ${color.background};

  border: 2px solid ${color.accent};
  border-radius: 25rem;

  font-weight: ${font.weight.semibold};

  padding: 0.3em 2em;
  margin: 0.5em 0;

  width: 100%;

  @media (${breakpoint.md}) {
    width: fit-content;
  }

  transition: all ${transition.standard};

  &:hover,
  &:focus,
  &:active {
    background-color: ${color.background};
    color: ${color.accent};
    cursor: pointer;
  }
`;

const EmailStatus = styled.p`
  font-weight: ${font.weight.semibold};
  margin-top: 1em;
`;

const EmailSuccess = styled(EmailStatus)`
  color: ${color.success};
`;

const EmailFail = styled(EmailStatus)`
  color: ${color.error};
`;

const Label = styled.label`
  color: ${color.text};
  font-weight: ${font.weight.semibold};
  text-transform: uppercase;
  margin-bottom: 0.5em;
`;

const ContactForm = () => {
  const { register, handleSubmit } = useForm();
  const [sendSuccess, setSendSuccess] = useState(null);

  const onSubmit = async (data, event) => {
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
    <>
      <StyledForm
        action="https://formspree.io/f/xleoyqbn"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="name">Name</Label>
        <FormInput type="text" name="name" id="name" placeholder="Name" {...register("name", { required: true })}/>
        <br />
        <Label htmlFor="replyto">Email</Label>
        <FormInput
          type="email"
          name="replyto"
          id="replyto"
          placeholder="email@york.ac.uk"
          {...register("email", { required: true })}
        />
        <br />
        <Label htmlFor="message">Message</Label>
        <FormInput
          as="textarea"
          cols="30"
          rows="5"
          placeholder="Your message here..."
          name="message"
          id="message"
          {...register("textarea", { required: true })}
          style={{ resize: "vertical", maxWidth: "100%" }}
        />
        <br />
        <FormSubmit type="submit">Send</FormSubmit>
      </StyledForm>

      {sendSuccess === true && (
        <EmailSuccess>Great! Your message was sent successfully.</EmailSuccess>
      )}
      {sendSuccess === false && (
        <EmailFail>
          We had some trouble sending your message. Please try again, or perhaps contact a member of
          the society via a different method.
        </EmailFail>
      )}
    </>
  );
};

export default ContactForm;
