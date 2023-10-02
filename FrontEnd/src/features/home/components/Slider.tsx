import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./swiper.css";
import { Pagination, Navigation } from "swiper/modules";
import brand from "../../../assest/banner-15.jpg";
import { Box, Button, Typography } from "@mui/material";

function Slider() {
    const mySlider=[
        {
            text:"Men"
        },
        {
            text:"Women"
        },
    ]
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {mySlider.map((item)=>{
            return(
                <SwiperSlide key={item.text}>
                <Box
                  height={1}
                  sx={{
                    display: { xs: "none", sm: "block" },
                    ":hover":{
                      cursor:"grab"
                    },
                    ":active":{
                      cursor:"grabbing"
                    }
                  }}
                >
                  <img src={brand} />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    top: 100,
                    left: "10%",
                    textAlign: "left",
                    "@media (max-width:600px)":{
                      left:"50%",
                      transform:"translateX(-50%)",
                      width:1,
                      textAlign:"center",
                    }
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      fontSize: "20px",
                      color:"#222"

                    }}
                  >
                    LifeStyle Collection
                  </Typography>
                  <Typography variant="h3" fontWeight={"bold"} color="#222">
                    {item.text}
                  </Typography>
                  <Typography variant="h4" my={1} mb={1} color="#222">
                    Sale Up to <span style={{ color: "#F44336" }}>30% OFF</span>
                  </Typography>
                  <Typography color="#222">get free shipping on order $99.00</Typography>
                  <Button
                    sx={{
                      p: "8px 12px",
                      bgcolor: "#222",
                      mt: 2,
                      borderRadius: 0,
                      color: "white",
                      width: 150,
                      ":hover": {
                        bgcolor: "#222",
                      },
                    }}
                  >
                    Shop Now
                  </Button>
                </Box>
              </SwiperSlide>
            )
        })}
       
      </Swiper>
    </>
  );
}
export default Slider;
