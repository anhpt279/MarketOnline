import { createUseStyles } from "react-jss";
import DEFAULT_THEME from "src/themes/theme";

export const useStyles = createUseStyles(() => ({
  root: {
    // padding: "0 24px",
    height: "auto",
  },
  checkout: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 18,
    width: "100%",
  },
  checkoutHeader: {
    fontWeight: "700",
    fontSize: 18,
    lineHeight: "24px",
    textAlign: "center",
    color: DEFAULT_THEME.theme.palette.text.titleText,
    width: "100%",
  },
  checkoutBack: {
    "& img": {
      objectFit: "contain",
    },
  },
  driver: {
    display: "flex",
    flexDirection: "column",
  },
  infoDriver: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "8px",
  },
  contentDriver: {
    display: "flex",
    alignContent: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  contentName: {
    "& p:nth-child(1)": {
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "24px",
      textAlign: "center",
      color: "#374151",
    },
    "& p:nth-child(2)": {
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: "400",
      color: "#6B7280",
    },
  },
  contentInfoDriver: {
    "& > p:first-child": {
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: "600",
      color: "#374151",
    },
    "& p:nth-child(2)": {
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: "400",
      color: "#374151",
    },
  },
  contentStar: {
    display: "flex",
    flexDirection: "column",
  },
  containedNeo: {
    display: "flex",
  },
  img: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 21,
    marginBottom: 15,
    "&:hover": {
      opacity: 0.5,
    },
  },
  imgstar: {
    display: "flex",
    justifyContent: "right",
    alignContent: "center",
    gap: "4px",
    "& img": {
      objectFit: "contain",
      width: "16px",
      height: "16px",
      position: "relative",
      transform: "translateY(20%)",
    },
    "& span": {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "24px",
      color: "#6B7280",
    },
  },
  infoBot: {
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: "400",
    color: "#6B7280",
  },
  title: {
    "& p:nth-child(1)": {
      fontWeight: 700,

      fontSize: "18px",
      lineHeight: "24px",
      textAlign: "center",
      color: "#374151",
    },
    "& p:nth-child(2)": {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "16px",
      textAlign: "center",
      color: "#6B7280",
    },
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "#E5E7EB",
    marginTop: 16,
    marginBottom: 16,
  },
  driverinfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    "& img": {
      height: "56px",
      width: "56px",
      objectFit: "cover",
      margin: "0 auto",
      marginBottom: "8px",
    },
    "& span": {
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "24px",
      textAlign: "center",
      color: "#374151",
    },
    "& p": {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "16px",
      textAlign: "center",
      color: "#6B7280",
    },
  },
  bot: {
    display: "flex",
  },
  bottravel: {
    display: "flex",
    flexDirection: "column",
    rowGap: "16px",
    marginLeft: "8px",
    paddingBottom: "16px",
    marginTop: "3px",
  },
  up: {
    transform: "translateY(357px)",
    animation: "$Up 1s ease forwards ",
  },
  titleHead: {
    paddingTop: "16px",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "16px",
    color: DEFAULT_THEME.theme.palette.text.titleText,
    marginBottom: "16px",
  },
  to: {
    fontSize: "14px",
    lineHeight: "24px",
    "& span": {
      fontWeight: 600,
      color: "#374151",
    },
    "& p": {
      fontWeight: 400,
      fontSize: "14px",
      opacity: 0.7,
    },
  },
  from: {
    fontSize: "14px",
    lineHeight: "24px",
    "& span": {
      fontWeight: 600,
      color: "#374151",
    },
    "& p": {
      fontWeight: 400,
      fontSize: "14px",
      opacity: 0.7,
    },
  },
  address: {
    wordWrap: "break-word",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
    maxHeight: 42,
    width: "100%",
  },
  overlay: {
    position: "fixed",
    top: "0px",
    left: "0px",
    right: " 0px",
    bottom: "0px",
    backgroundColor: "black",
    opacity: 0.8,
    zIndex: 201,
    height: "100vh",
  },
  exit: {
    position: "absolute",
    top: "18px",
    right: "18px",
  },
  popup: {
    position: "fixed",
    zIndex: 201,
    left: "50%",
    top: "50%",
    width: "80%",
    height: "fit-content",
    transform: "translate(-50% , -50%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "8px",
    "& p:nth-child(1)": {
      width: "100%",
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: "600",
      alignSelf: "center",
      color: DEFAULT_THEME.theme.palette.text.radioText,
      padding: "13px 24px",
      borderBottom: `1px solid ${DEFAULT_THEME.theme.palette.secondary.light}`,
      display: "flex",
      justifyContent: "center",
    },
    "& p:nth-child(2)": {
      width: "100%",
      alignSelf: "center",
      fontSize: "16px",
      display: "flex",
      justifyContent: "center",
      padding: "13px 24px",
      lineHeight: "16px",
      fontWeight: "400",
      color: DEFAULT_THEME.theme.palette.info.light,
    },
  },
}));
