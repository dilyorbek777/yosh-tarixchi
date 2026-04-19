import ImageSlider from "@/components/ImageSlider";
import AboutUs from "@/components/AboutUs";
import PopularArtifacts from "@/components/PopularArtifacts";
import FacultyDetails from "@/components/FacultyDetails";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <div className="flex flex-col">
      <ImageSlider />
      <AboutUs />
      <PopularArtifacts />
      <FacultyDetails />
      <WhyUs />
    </div>
  );
}
