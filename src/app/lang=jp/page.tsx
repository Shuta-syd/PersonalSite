import { ContactComponent } from "@/component/contact";
import { ContentComponent } from "@/component/contents";

export default function Home_JP() {
  return (
    <div className="container">
      <div className="row">
        <ContactComponent />
        <ContentComponent lang={"jp"} />
      </div>
    </div>
  );
}
