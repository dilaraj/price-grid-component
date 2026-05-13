import './App.css'

function App() {
  return (
    <div className="price-grid-container">
      <div className="info-card-container card">
        <span className="info-heading">Join our community</span>
        <span className="info-subheading">30-day, hassle-free money back guarantee</span>
        <span className="info-text">Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</span>
      </div>
      <div className="price-card-container card">
        <span className="price-heading">Monthly Subscription</span>
        <div className="price-info">$29 <span>per month</span></div>
        <span className="price-text">Full access for less than $1 a day</span>
        <button className="sign-up-btn">Sign Up</button>
      </div>
      <div className="reason-card-container card">
        <span className="reason-heading">Why us</span>
        <div className="reasons">
          Tutorials by industry experts <br />
          Peer & expert code review <br />
          Coding exercises <br />
          Access to our GitHub repos <br />
          Community forum <br />
          Flashcard decks <br />
          New videos every week
        </div>
      </div>
    </div>
  )
}

export default App
