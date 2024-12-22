import HeadingSection from "@/components/Helper/HeadingSection";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <section className="news">
      {/* heading */}
      <HeadingSection heading="Travel News For You" />

      <div className="newsContent">
        <div>
          <NewsCard
            image="/images/n1.jpg"
            title="Top 10 Best Places to Visit in Australia"
            date="May 20, 2023"
          />
        </div>

        <div>
          <NewsCard
            image="/images/n2.jpg"
            title="Top 10 Best Places to Visit in Palestine"
            date="Oct 7, 2023"
          />
        </div>

        <div>
          <NewsCard
            image="/images/n3.jpg"
            title="Top 10 Best Places to Visit in Egypt"
            date="jan 25, 2011"
          />
        </div>

        <div>
          <NewsCard
            image="/images/n4.jpg"
            title="Top 10 Best Places to Visit in Syria"
            date="Dec 8, 2024"
          />
        </div>
      </div>
    </section>
  );
};

export default News;
