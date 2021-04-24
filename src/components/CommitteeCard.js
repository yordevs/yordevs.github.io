import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  margin: 0 0.5em;
  margin-bottom: 1em;
`;

const Photo = styled.img`
  margin-bottom: 0.5em;
`;

import blankTeamPhoto from "../images/BlankTeamPhoto.jpg";

const CommitteeCard = ({ role, fullName, pronouns, course, picture = false }) => {
  return (
    <Card>
      {picture ? picture : <Photo src={blankTeamPhoto} width="200px" height="200px" />}
      <h2>{fullName}</h2>
      <h3>{role}</h3>
      <p>{course}</p>
      <p>{pronouns}</p>
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
