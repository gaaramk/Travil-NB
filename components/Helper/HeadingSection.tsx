const HeadingSection = ({ heading }: { heading: string }) => {
  return (
    <div className="headingSection">
      <h2 className="headingH2">{heading}</h2>
      <p className="headingP">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
        asperiores vel a.
      </p>
    </div>
  );
};

export default HeadingSection;
