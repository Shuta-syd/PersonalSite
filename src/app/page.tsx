import { ContactComponent } from "@/component/contact";
import { ContentComponent } from "@/component/contents";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <ContactComponent />
        <ContentComponent />
      </div>
    </div>
  );
}
