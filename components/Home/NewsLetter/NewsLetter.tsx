import { BsEnvelopePaper } from "react-icons/bs";

const NewsLetter = () => {
  return (
    <section className="newsLetter">
      <div>
        <BsEnvelopePaper className="newsLetterIcon" />
      </div>

      <div className="newsLetterText">
        <h1 className="newsLetterH1">Tour Travel Journey Starts Here</h1>
        <p className="newsLetterP">
          Sign up and we&apos;ll send you the best deals to your inbox
        </p>
      </div>

      {/* subscribtion input and button */}
      <div className="newsLetterInputContainer">
        <input
          type="text"
          className="newsLetterInput"
          placeholder="Email@example.com"
        />
        <button className="newsLetterButton">Subscribe</button>
      </div>
    </section>
  );
};

export default NewsLetter;
