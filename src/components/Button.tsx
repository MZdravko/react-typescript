import React from "react";

type ButtonProps = {
  //handleClick: () => void
  //handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export const Button = ({handleClick}: ButtonProps) => {
  return (
    <button onClick={(event) => handleClick(event, 100)}>Click</button>
  );
};
