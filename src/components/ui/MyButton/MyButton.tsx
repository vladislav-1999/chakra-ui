import { Button } from "@chakra-ui/react";

type MyButtonProps = {
  onClick?: () => void;
};

export function MyButton({ onClick }: MyButtonProps) {
  return <Button onClick={onClick}>Click me</Button>;
}
