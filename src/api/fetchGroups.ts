import React from "react";

const fetchGroups = async () => {
  const response = await fetch(
    "https://api-test-f4ae.up.railway.app/v1/classes/groups"
  );
  return response.json();
};

export default fetchGroups;
