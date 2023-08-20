import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import ListCards from "../../components/cardsalbum/volunteering";
import { SiHandshake } from "react-icons/si";
import { useSelector } from "react-redux";
import { Container, Header } from "semantic-ui-react";

import "./album.css";

export default function Album({}) {
  const kindVolunteers = useSelector((state) => state.kindVolunteer.items);
  const user = useSelector((state) => state.user.user);

  return (
    <div id="paper">
      <CssBaseline />
      <Container text style={{ marginTop: "5em" }}>
        <Header as="h1" style={{ fontSize: "3em" }}>
          Our volunteering categories
        </Header>
        <Header as="h2">
          {"Choose your next volunteer :) "}
          <p>
            {
              "See all our volunteering categories and select your favorite category to view the full options."
            }
          </p>
        </Header>
        <SiHandshake fontSize={"100px"} color={"red"} />
      </Container>
      <main className="header">
        <ListCards kindVolunteerings={kindVolunteers} />
      </main>
      <Box sx={{ p: 6 }} component="footer"></Box>
    </div>
  );
}
