export interface Props {
  data: Array<String>;
  onItemClick: any;
}

export default function ImgGallery(prop: Props) {
  return (
    <>
      <div className="galleryWrap">
        {prop.data &&
          prop.data.map((imgUrl: any, index: any) => {
            return (
              <div
                className="single"
                key={index}
                onClick={() => prop.onItemClick(index)}
              >
                <img src={imgUrl} alt="" />
              </div>
            );
          })}
      </div>
    </>
  );
}
