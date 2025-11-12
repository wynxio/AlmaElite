export default function () {
    function changeImage(){

    }
  return (
    <>
      <div className="container">
        <div className="left-section">
          <div className="main-image">
            <img id="mainImg" src="product1.jpg"></img>
          </div>
          <div className="thumbs" id="thumbs">
            <img src="product1.jpg" onClick={changeImage}></img>
            <img src="product1.jpg" onClick={changeImage}></img>
            <img src="product1.jpg" onClick={changeImage}></img>
          </div>
        </div>

        <div className="right-section">
          <h2 className="single-product-title">Smart Fitness Watch</h2>
          <p className="single-subtitle">Sports Edition with AMOLED Display</p>

          <div className="single-price">
            <span className="single-old">₹3499</span>
            <span className="single-offer">₹1699</span>
          </div>

          <p className="single-options-title">Color</p>
          <div className="single-color-options">
            <div
              className="single-color-box active"
              onClick="changeColor('black', this)"
            >
              <div
                className="single-color-circle"
                style="background:black"
              ></div>
              <img className="single-color-thumb" src="product1.jpg"></img>
            </div>

            <div
              className="single-color-box"
              onClick="changeColor('blue', this)"
            >
              <div
                className="single-color-circle"
                style="background:#1a4b9a"
              ></div>
              <img className="single-color-thumb" src="product2.jpg"></img>
            </div>

            <div
              className="single-color-box"
              onClick="changeColor('red', this)"
            >
              <div
                className="single-color-circle"
                style="background:#c91515"
              ></div>
              <img className="single-color-thumb" src="product3.jpg"></img>
            </div>
          </div>

          <p className="single-options-title">Size</p>
          <div className="single-size-options">
            <div className="single-size-btn">S</div>
            <div className="single-size-btn active">M</div>
            <div className="single-size-btn">L</div>
          </div>

          <button className="single-buy-btn">Buy Now</button>
        </div>
      </div>

      <div className="single-bottom-section">
        <p className="single-bottom-title">Description</p>
        <p>
          Sleek smartwatch packed with features like heart-rate tracking, sleep
          monitoring, Bluetooth notifications & customizable watch faces.
        </p>

        <p className="single-bottom-title">Features</p>
        <ul className="ulsingle">
          <li>Real-time heart rate tracking</li>
          <li>Bluetooth Calling Support</li>
          <li>IP67 Water Resistant</li>
          <li>Long-lasting Battery</li>
          <li>Multiple Sport Modes</li>
        </ul>
      </div>
    </>
  );
}
