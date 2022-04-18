import "./BookNow.css";
import Footer from "../footer/Footer";
const Booknow = () => {
  return (
    <>
      <div className="book-now">
        <div className="form-container">
          <h2>TAKE THE NEXT STEP</h2>
          <form>
            <div className="input-container">
              <input type="text" placeholder="first name:" />
              <input type="text" placeholder="last name:" />
              <input type="email" placeholder="email address:" />
              <input type="number" placeholder="phone number:" />
            </div>
            <select className="country">
              <option value="">country</option>
              <option value="bangladesh">bangladesh</option>
              <option value="usa">usa</option>
              <option value="india">india</option>
              <option value="russia">russia</option>
              <option value="china">china</option>
              <option value="argentina">argentina</option>
            </select>
          </form>
          <p>
            Check this box if you would like to receive text messages to learn
            more about Robbins Research International's events, products or
            coaching services. You will receive approximately 5 text messages
            per month, and you can opt-out at any time. Message and data rate
            charges may apply.
          </p>
          <div className="btn-container">
            <button>take action</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Booknow;
