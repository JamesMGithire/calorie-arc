import React from 'react';

import { StyledFooter } from './Footer.styled';

const footer = `Calorie-arc Directory @ ${new Date().getFullYear()}`;

const Footer = () => {
  return <StyledFooter>{footer}</StyledFooter>;
};

export default Footer;
