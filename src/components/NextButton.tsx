import { VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";

type Props = {
  url?: string;
  disabled?: boolean;
  label?: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  onClick?: () => void;
};

const NextButton = ({
  url = "#",
  disabled = false,
  label = "ต่อไป",
  variant = "default",
  onClick,
}: Props) => {
  const button = (
    <Button variant={variant} disabled={disabled} onClick={onClick}>
      {label}
    </Button>
  );

  if (disabled)
    return <div className="flex flex-col items-center">{button}</div>;

  return (
    <div className="flex flex-col items-center">
      <Link href={url}>{button}</Link>
    </div>
  );
};

export default NextButton;
