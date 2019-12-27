import { createStyles } from "@material-ui/core";

const styles = theme =>
  createStyles({
    base: {
      backgroundColor: theme.palette.primary.main,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      boxShadow: '0px 3px 6px rgba(0,0,0,0.16)'
    },
    text: {
      fontFamily: 'Lato',
      textShadow: '0px 3px 6px rgba(0,0,0,0.16)',
      fontWeight: "bolder",
      fontSize: 24,
      color: "#FFFFFF"
    }
  });

export default styles;
