import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ApiButton from "./ApiButton";
import { FaShareAlt, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { GET } from "../utils/Const";

export default function SearchCard({
  element = {},
  apiType = GET,
  onClickApi,
  onClickNavigate,
  classname,
  disableOnClickNavigate = false,
}) {
  const cardDetailUrl = `${onClickNavigate}?title=${element.title?.replaceAll(
    " ",
    "-"
  )}&id=${element._id}`;
  const handleShareClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.share !== undefined) {
      navigator.share({
        title: "WebShare",
        url: cardDetailUrl,
      });
    }
  };
  const navigateTo = useNavigate();
  return (
    <Card
      onClick={() => {
        if (!disableOnClickNavigate) {
          window.open(cardDetailUrl, "_blank");
          // navigateTo(cardDetailUrl);
        }
      }}
      className={`search_card ${classname}`}
    >
      <CardActionArea className="searchcardiv">
        <CardMedia
          component="img"
          height="100"
          // image={element.thumbnails?.[0]}
          src={Array.isArray(element.thumbnails) ? element.thumbnails[0] : element.thumbnails}
          // alt="Left_Image"
          alt={element.title}
          className="thumbnail"
        />
        <CardContent className="card_details">
          <div className="detailcardheadingdiv">
            <Typography variant="h5" gutterBottom className="detailcardheading">
              {element.title}
            </Typography>
            <div className="detailicondiv">
              <Button variant="outlined" onClick={e => handleShareClick(e)} className="btn sc_btn sc_share_btn">
                <FaShareAlt size={"23px"} className="share_icon" />
              </Button>
              <Button className="btn sc_btn sc_fav_btn">
                <FaRegHeart size={"23px"} className="fav_icon" />
              </Button>
            </div>
          </div>
          <div className="contentdiv">
            <div className="contentdiv_left">
              <div className="detail_list_item">
                <img
                  className="detailimages"
                  src="/icons/location.png"
                  alt=""
                  style={{ paddingRight: "6px" }}
                />
                <Typography fontWeight="lg">{element.sectorNumber}</Typography>
              </div>
              <div className="detail_list_item">
                <img
                  className="detailimages"
                  src="/icons/area.png"
                  alt=""
                  style={{ paddingRight: "6px" }}
                />
                <Typography fontWeight="lg">{element.size} Sq. Yd.</Typography>
              </div>
              <div className="detail_list_item">
                <img
                  className="detailimages"
                  src="/icons/check.png"
                  alt=""
                  style={{ paddingRight: "6px" }}
                />
                <Typography fontWeight="lg">{element.possession}</Typography>
              </div>
              <div className="detail_list_item">
                <img
                  className="detailimages"
                  src="/icons/stairs.png"
                  alt=""
                  style={{ paddingRight: "6px" }}
                />
                <Typography fontWeight="lg">{element.floor}</Typography>
              </div>
              <div className="detail_list_item">
                <img
                  className="detailimages"
                  src="/icons/home.png"
                  alt=""
                  style={{ paddingRight: "6px" }}
                />
                <Typography fontWeight="lg">{element.accommodation}</Typography>
              </div>
              <div className="detail_list_item">
                <img
                  className="detailimages"
                  src="/icons/compass.png"
                  alt=""
                  style={{ paddingRight: "6px" }}
                />
                <Typography fontWeight="lg">{element.facing}</Typography>
              </div>
            </div>
            <div className="searchpagebuttondiv">
              <ApiButton
                apiType={apiType}
                api={onClickApi}
                buttonLabel={`₹ ${element.price / 10000000} Cr.`}
                queryParams={{ id: element._id }}
                navigate={!disableOnClickNavigate ? cardDetailUrl : null}
                btnClass={`btn price_btn`}
                newTab={true}
              />
              <Typography fontWeight="lg">View Details {">>"}</Typography>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
