import {
  ImageList,
  useMediaQuery,
  ImageListItemBar,
  ImageListItem,
  useTheme,
} from "@mui/material";
import { IconButton } from "@mui/material";
import { CalendarMonthOutlined } from "@mui/icons-material";
import {
  service01,
  service02,
  service03,
  service04,
  service05,
  service06,
} from "@assets";

export default function ImageLists() {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.only("sm", { noSsr: true }));
  const md = useMediaQuery(theme.breakpoints.only("md", { noSsr: true }));
  const xs = useMediaQuery(theme.breakpoints.only("xs", { noSsr: true }));
  return (
    <ImageList
      style={{
        gap: "2rem",
      }}
      sx={{
        width: "100%",
        height: "100%",
      }}
      cols={xs ? 1 : sm ? 2 : md ? 4 : 4}
    >
      {itemData.map((item, idx) => (
        <ImageListItem key={idx}>
          <img
            src={`${item.img}?fit=crop&auto=format`}
            srcSet={`${item.img}?fit=crop&auto=format&dpr=2`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            sx={{
              "& .MuiImageListItemBar-title": { fontSize: "2rem" },
              color: "#615E5E",
            }}
            position="below"
            actionIcon={
              <IconButton color="error" aria-label={`star ${item.title}`}>
                <CalendarMonthOutlined />
              </IconButton>
            }
            actionPosition="left"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: service03,
    title: "26th July, 2021",
  },
  {
    img: service02,
    title: "26th July, 2021",
  },
  {
    img: service03,
    title: "26th July, 2021",
  },
  {
    img: service04,
    title: "26th July, 2021",
  },
  {
    img: service05,
    title: "26th July, 2021",
  },
  {
    img: service06,
    title: "26th July, 2021",
  },
  {
    img: service05,
    title: "26th July, 2021",
  },
  {
    img: service06,
    title: "26th July, 2021",
  },
];
