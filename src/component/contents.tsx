import { AboutMeComponent } from "./aboutme";
import { EducationComponent } from "./education";
import { ExperienceComponent } from "./experience";

export function ContentComponent() {
  return (
    <div className="col-md-7">
      <AboutMeComponent />
      <EducationComponent />
      <ExperienceComponent />
    </div>
  );
}
