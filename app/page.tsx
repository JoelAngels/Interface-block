import { ContentBlock } from "./components/ContentBlock";
import ContentCreator from "./components/ContentCreator";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto pt-10 px-6">
      <ContentBlock />
      <ContentCreator />
    </div>
  );
}
