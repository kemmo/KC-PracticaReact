import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledFooter = styled.footer`
  background: #444;
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 40px;
  align-items: center;
  color: white;
  font-size: 10px;
  display: flex;
  justify-content: center;
`;

const Footer = ({ author, year }) => (
  <StyledFooter>
    {author} - {year}
  </StyledFooter>
);

Footer.propTypes = {
  author: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default Footer;
