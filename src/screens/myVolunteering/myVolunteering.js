import React, { useEffect, useState } from "react";
import { Container, Header } from "semantic-ui-react";
import { useSelector } from "react-redux";

import ListMy from "./list";
import { useLoadData } from "../../hooks/use-load-data";

const MyVolunteering = () => {
  const userVolunteerings = useSelector(
    (state) => state.userVolunteering.items
  );
  const user = useSelector((state) => state.user.user);
  const { getUserVolunteerings } = useLoadData();
  const userId = user?._id;

  useEffect(() => {
    userId && getUserVolunteerings(userId);
  }, [userId]);

  return (
    <>
      <Container text style={{ marginTop: "5em" }}>
        <Header as="h1" style={{ fontSize: "3em" }}>
          My Volunteering
        </Header>
        <Header as="h2">
          {" "}
          See all the volunteers you registered and their status
        </Header>
      </Container>
      {userVolunteerings.length ? (
        <ListMy volunteerings={userVolunteerings} />
      ) : (
        <Container text style={{ marginTop: "8em" }}>
          <Header as="h2">You don't have any volunteers yet...</Header>
          <p>Go to the volunteering page to add new volunteerings.</p>
        </Container>
      )}
    </>
  );
};

export default MyVolunteering;
