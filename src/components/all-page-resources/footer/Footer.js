import ColorPicker from "./ColorPicker";
import FooterNav from "./FooterNav";

function Footer({ allPages, currentLocation }) {
  return (
    <footer>
      <div className="contact-information">
        <h4>Contact Information</h4>
        <div>
          <p>leannaszypowski@gmail.com</p>
          <p>https://github.com/Leanna-S</p>
        </div>
      </div>
      <ColorPicker />
      <FooterNav allPages={allPages} currentLocation={currentLocation} />
    </footer>
  );
}

export default Footer;
