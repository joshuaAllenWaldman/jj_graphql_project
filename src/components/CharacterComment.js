import React from "react";
import { useState } from "react";
import { AddCharacterCard } from "../queries/queries";
import { graphql } from "react-apollo";
import { useMutation } from '@apollo/client'




const CharacterComment = (props) => {
  const [selected, setSelected] = useState({
    comment: "",
  });
  
  // const [addCharacterCard, { data }] = useMutation(AddCharacterCard)


  const onSubmit = (e) => {
    e.preventDefault();
    AddCharacterCard({
      variables: {
        name: props.currentCharName,
        id: props.currentCharId,
        comment: selected.comment
      }
    })
  }

  return (
    <form onSubmit={onSubmit} action="" className="characterCommentForm">
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Type Comment Here"
        onChange={(e) => setSelected({ comment: e.target.value })}
      ></textarea>
      <button type="submit">Save Comment</button>
    </form>
  );
};

export default CharacterComment;
