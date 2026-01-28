import { useState } from "react";

export default function Subscribe() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div>
        <div className="subscribe-container">

     <div> <button
        onClick={() => {
          setSubscribed(!subscribed);
        }}
      >
        {subscribed ? "UnSubscribe" : "Subscribe"}
      </button>
      </div>
      <h2>
        {subscribed ? "You have subscribed" : "you have not subscribed"}
      </h2>
      </div>
    </div>
  );
}
