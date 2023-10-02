import { ListItemIcon } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close";
type close={
    close:(event: React.KeyboardEvent | React.MouseEvent) => void
}
const CloseIcons = ({close}:close) => {
  return (
    <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
              mb: 2,
              transition: ".3s",
              "&:hover": {
                transform: "rotate(180deg)",
                color: "red",
              },
            }}
            onClick={close}
          >
            <CloseIcon />
          </ListItemIcon>
  )
}

export default CloseIcons
