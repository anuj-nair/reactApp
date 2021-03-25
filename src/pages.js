import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
  padding: 5px 2px;
  background: #fafafa;
`;

const NavItem = styled(Link)`
  padding: 0 10px;
  font-size: 22px;
  font-weight: bolder;
  text-decoration: None;
`;

const NavRegular = styled(NavItem)`
  color: #1a1a1a;
`;

const NavActive = styled(NavItem)`
  color: #f1c50e;
`;

const Center = styled.h1`
  background-color: #fff;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
`;

const NavBar = ({ activeTagName, tags }) => {
  return (
    <NavContainer>
      {tags.map((tag) => {
        let tagName = tag.name;
        let tagId = tag.id;
        let url = "/reactApp/";
        tagName === "Home" ? (url += "") : (url += tagName.toLowerCase());
        return tagName === activeTagName ? (
          <NavRegular to={url} key={tagId}>
            {tagName}
          </NavRegular>
        ) : (
          <NavActive to={url} key={tagId}>
            {tagName}
          </NavActive>
        );
      })}
    </NavContainer>
  );
};

const Tags = ["Home", "About", "Skills", "Projects", "Contact"];

const TagsObject = Tags.map((name, i) => ({ id: i, name: name }));

export function Home() {
  return (
    <>
      <NavBar activeTagName="Home" tags={TagsObject} />
    </>
  );
}

export function About() {
  return (
    <>
      <NavBar activeTagName="About" tags={TagsObject} />
    </>
  );
}
export function Skills() {
  return (
    <>
      <NavBar activeTagName="Skills" tags={TagsObject} />
    </>
  );
}

export function Projects() {
  return (
    <>
      <NavBar activeTagName="Projects" tags={TagsObject} />
    </>
  );
}

export function Contact() {
  return (
    <>
      <NavBar activeTagName="Contact" tags={TagsObject} />
    </>
  );
}

export function Whoops404() {
  let location = useLocation();
  return (
    <>
      <NavBar activeTagName="None" tags={TagsObject} />
      <Center>Resource not found at {location.pathname}!</Center>
    </>
  );
}
