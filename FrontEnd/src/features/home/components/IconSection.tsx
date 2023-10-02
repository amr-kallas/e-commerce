import { Container, Stack, Typography, useTheme } from "@mui/material";
import { ElectricBolt } from "@mui/icons-material";
import { CreditScoreOutlined } from "@mui/icons-material";
import { WorkspacePremiumOutlined } from "@mui/icons-material";
import { AccessAlarmOutlined } from "@mui/icons-material";
const IconSection = () => {
    const theme=useTheme()
  const icons = [
    {
      title: "Fast Delivery",
      subTitle: "Start From 10$",
      icon: <ElectricBolt />,
    },
    {
      title: "Money Quarancy",
      subTitle: "7 Days back",
      icon: <WorkspacePremiumOutlined />,
    },
    {
      title: "365 Days",
      subTitle: "For Free Return",
      icon: <AccessAlarmOutlined />,
    },
    {
      title: "Payment",
      subTitle: "Secure System",
      icon: <CreditScoreOutlined />,
    },
  ];
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 2,
        mt: 3,
      }}
    >
      {icons.map((item) => {
        return (
          <Stack
            key={item.title}
            direction="row"
            alignItems="center"
            sx={{
              alignItems: "center",
              flex: 1,
              minWidth: " 200px",
              backgroundColor: theme.palette.background.default,
              justifyContent: "center",
              padding: "16px 0",
              gap: 2,
              borderRadius: "8px",
            }}
          >
            {item.icon}
            <Stack mx={1}>
              <Typography>{item.title}</Typography>
              <Typography>{item.subTitle}</Typography>
            </Stack>
          </Stack>
        );
      })}
    </Container>
  );
};

export default IconSection;
