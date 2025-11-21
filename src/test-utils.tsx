import { ChakraProvider } from "@chakra-ui/react";
import { render } from "@testing-library/react";

export function renderWithChakra(ui: React.ReactElement) {
  return render(<ChakraProvider>{ui}</ChakraProvider>);
}
