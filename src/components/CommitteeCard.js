import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import config from "../theme/config";
const { color, font } = config;

const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 1em 0;
`;

const Photo = styled.img`
  margin-bottom: 0.5em;
`;

const Name = styled.h3`
  font-size: ${font.size.lg};
  margin-bottom: 0em;
`;

const Role = styled.h4`
  color: ${color.accent};
  font-weight: ${font.weight.semibold};
  text-transform: uppercase;
  font-size: ${font.size.base};

  margin-bottom: 1em;
`;

import blankTeamPhoto from "../images/BlankTeamPhoto.jpg";

const CommitteeCard = ({ role, fullName, pronouns, course, picture = false }) => {
  return (
    <Card>
      {picture ? picture : <Photo src={blankTeamPhoto} width="200px" height="200px" />}
      <Name>{fullName}</Name>
      <Role>{role}</Role>
      <p>{course}</p>
      {pronouns && <p>{pronouns}</p>}
    </Card>
  );
};

export default CommitteeCard;

CommitteeCard.propTypes = {
  role: PropTypes.string,
  fullName: PropTypes.string,
  pronouns: PropTypes.string,
  course: PropTypes.string,
  picture: PropTypes.any,
};
