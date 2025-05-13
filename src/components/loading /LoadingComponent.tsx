import { CircularProgress, Skeleton } from "@mui/material";
import { useLoadingStyles } from "./styles";

const LoadingComponent = (): React.ReactElement => {
  const classes = useLoadingStyles();
  return (
    <>
      <Skeleton width={"100%"} height={"100%"} variant="rectangular" />
      <CircularProgress className={classes.icon} />
    </>
  );
};
export default LoadingComponent;
