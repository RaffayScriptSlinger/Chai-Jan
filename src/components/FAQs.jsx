import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function FAQs() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme === "light" ? "text-black bg-white" : "text-white bg-black"} p-5`}>
      <h1 className="text-3xl mb-5">FAQs</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">1. What are your restaurant hours?</h2>
          <p>Our restaurant is open from 11 AM to 11 PM, seven days a week.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">2. Do you offer vegetarian or vegan options?</h2>
          <p>Yes, we have a variety of vegetarian and vegan dishes available on our menu.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">3. Can I make a reservation?</h2>
          <p>Absolutely! You can make a reservation through our website or by calling us directly.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">4. Do you offer takeout or delivery?</h2>
          <p>Yes, we provide both takeout and delivery services. You can place your order online or by phone.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">5. Are there gluten-free options available?</h2>
          <p>Yes, we have gluten-free options on our menu. Please inform your server of any dietary restrictions.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">6. Do you have a kids' menu?</h2>
          <p>Yes, we offer a kids' menu with a variety of options to choose from.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">7. What payment methods do you accept?</h2>
          <p>We accept cash, credit cards, and digital payment methods.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">8. Can I host an event at your restaurant?</h2>
          <p>Yes, we offer catering and private event hosting. Please contact us for more details.</p>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
