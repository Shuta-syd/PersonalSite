import { AboutMeComponent } from "./aboutme";
import { EducationComponent } from "./education";
import { ExperienceComponent } from "./experience";

export function ContentComponent(props: { lang: string }) {
  const lang = props.lang;
  return (
    <div className="col-md-7">
      <AboutMeComponent lang={lang} />
      <EducationComponent lang={lang} />
      <ExperienceComponent lang={lang} />
    </div>
  );
}
