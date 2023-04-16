import { PhotoProvider, PhotoView } from "react-photo-view";

const Photos = ({ media }) => {
  return (
    <PhotoProvider>
      {/* <div style={{ width: "100%" }}> */}
      {media.map((item, index) => (
        <PhotoView key={index} width="100%" src={item}>
          <img
            src={item}
            alt=""
            style={{
              height: "100%",
              objectFit: "cover",
              width: "100%",
              marginRight: "1rem",
              // minWidth: "15rem",
            }}
          />
        </PhotoView>
      ))}
      {/* </div> */}
    </PhotoProvider>
  );
};

export default Photos;
