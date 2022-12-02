import { Box } from "@mui/system";
import { style } from "@mui/system";

const WidgetWrapper = style(Box)(({ theme }) => ({
    padding: "1.5rem 1.5rem 0.75rem 1.5rem",
    backgroundColor: theme.palette.background.alt,
    borderRadius: "0.75rem"
}))

export default WidgetWrapper;