import Image from "next/image";

type Props = {
  image: string;
  title: string;
};
const WhyChooseCard = ({ image, title }: Props) => {
  return (
    <div>
      {/* image */}
      <Image
        src={image}
        alt="image"
        width={70}
        height={70}
        className="whyChooseCardImage"
      />

      {/* text */}
      <div>
        <h1 className="whyChooseCardTitle">{title}</h1>
        <p className="whyChooseCardP">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default WhyChooseCard;
