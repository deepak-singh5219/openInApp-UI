import React, { ReactElement } from "react";
import { Text } from "@/components/UI";

interface Props {
  title: string;
  color: string;
  icon: ReactElement;
  onClick: () => void;
}

function AuthButton({ title, color, icon, onClick }: Props): ReactElement {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center hover:-m-px rounded-md px-3 md:px-5 py-2 text-secondary hover:border border-secondary`}
      style={{
        backgroundColor: color,
      }}
    >
      {icon}
      <Text variant="infoXs" className="max-w-max ml-2">
        {title}
      </Text>
    </button>
  );
}

export default AuthButton;
