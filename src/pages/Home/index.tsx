import { Button } from "@mui/material";
import { useAppThemeContext } from "../../extras/contexts";

const Home = () => {
  const { toggleTheme } = useAppThemeContext();

  return (
    <div>
      <Button variant="contained" color="primary" onClick={toggleTheme}>
        Teste
      </Button>
    </div>
  );
}

export default Home;