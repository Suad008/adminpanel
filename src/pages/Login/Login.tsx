import { Stack } from "@mui/material";
import InputPlain from "components/inputs/InputPlain";
import { useLoginStyles } from "./styles";
import Button from "components/buttons/Button";
import { buttonTypes } from "components/buttons/constants/buttonTypes";

const Login = (): React.ReactElement => {
  const classes = useLoginStyles();
  return (
    <>
      <h2>Login</h2>
      <Stack spacing={2}>
        <>
          <InputPlain
            label="Username"
            onChange={(value) => {}}
            value={null}
            className={classes.textField}
          ></InputPlain>
          <InputPlain
            label="password"
            type="Password"
            onChange={(value) => {}}
            value={null}
            className={classes.textField}
          ></InputPlain>
        </>
        <Button
          disabled={false}
          buttonType={buttonTypes.info}
          onClick={() => {}}
          variant="contained"
        >
          Log In
        </Button>
      </Stack>
    </>
  );
};
export default Login;
