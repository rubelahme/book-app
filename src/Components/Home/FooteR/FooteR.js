import React from "react";

const FooteR = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="text-center pt-2">
          <p>Copy Right by {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default FooteR;
