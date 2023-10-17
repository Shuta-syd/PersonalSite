import { ContactComponent } from "@/component/contact";
import { ContentComponent } from "@/component/contents";

export default function Home_EN() {
  return (
    <div className="container">
      <div className="row">
        <ContactComponent />
        <ContentComponent lang="en"/>
      </div>
    </div>
  );
}
