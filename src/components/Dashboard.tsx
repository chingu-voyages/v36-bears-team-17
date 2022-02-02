import React, { ReactElement } from "react";
import PostForm from "./PostForm";

interface Props {}

export default function Dashboard({}: Props): ReactElement {
  return (
    <div>
      <p>Dashboard</p>
      <PostForm />
    </div>
  );
}
