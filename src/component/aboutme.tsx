type ContentMap = {
  [key: string]: string;
};


export function AboutMeComponent(props: { lang: string }) {
  const content: ContentMap = {
    en: "I am Shuta Ogura, born and raised in Japan. As a student of Computer Science, I have a solid foundation in programming and networking, etc., as well as experience in software development. My technical skills include C, C++, Typescript, Python, etc. And I have problem solving skills, as well as effective communication and teamwork skills.",
    jp: "こんにちは Shuta Oguraです。現在はドイツのヴォルフスブルクにあるSEA:ME/42Wolfsburgで自動車に関するソフトウェアエンジニアを学んでいます。興味がある分野としては自動車のソフトウェアからWeb開発まで多岐に渡ります。"
  }

  const selectedContent = content[props.lang];

  return (
    <section id="about-me" className="text-left">
      <h2>About Me</h2>
      <p className="p-0 m-0">
        { selectedContent }
      </p>
    </section>
  )
}
