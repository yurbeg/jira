import { Button, Flex } from "antd";
import "./index.css";
const Header = () => {
  return (
    <div id="main_header">
      <Flex justify="space-between" align="center">
        <p>Logo</p>
        <div>
          <Button>Sign in</Button>
        </div>
      </Flex>
    </div>
  );
};

export default Header;
