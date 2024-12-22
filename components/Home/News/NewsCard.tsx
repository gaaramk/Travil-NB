import Image from "next/image";

type Props = {
  image: string;
  title: string;
  date: string;
};
const NewsCard = ({ image, title, date }: Props) => {
  return (
    <div>
      {/* image */}
      <figure className="newsCardImageContainer">
        <Image src={image} alt={title} width={300} height={300}  className="newsCardImage"/>
      </figure>

      {/* text */}
      <figcaption className="newsCardText">
        <h3 className="newsCardTextH3">{title}</h3>
        <p className="newsCardTextP">{date}</p>
      </figcaption>
    </div>
  );
};

export default NewsCard;
