import ContactTerminal from "../components/portfolio/ContactTerminal/index";
import PixelPanel from "../components/portfolio/PixelPanel/index";
import PixelSectionTitle from "../components/portfolio/PixelSectionTitle/index";

export default function ContactSection() {
  return (
    <PixelPanel id="contact" className="lg:px-16 lg:py-16 xl:px-20">
      <PixelSectionTitle number="06" title="Contact Terminal" />
      <ContactTerminal />
    </PixelPanel>
  );
}
