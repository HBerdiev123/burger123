const Cart = () => {
  return (
    <div class="cart-modal-wrapper">
      <div class="cart-modal modal-item">
        <div class="cart-modal-header">
          <h3 class="color-white">Cart 2</h3>
          <div class="cart-modal-close">
            <i class="flaticon-cancel"></i>
          </div>
        </div>
        <div class="cart-modal-body">
          <h2 class="color-white">My Order</h2>
          <div class="cart-modal-product">
            <div class="cart-modal-thumb">
              <a href="shop-details.html">
                <img src="/images/product-1.png" alt="product" />
              </a>
            </div>
            <div class="cart-modal-content">
              <h4>
                <a href="shop-details.html">Crispy Chicken Burger</a>
              </h4>
              <div class="cart-modal-action">
                <div class="cart-modal-action-item">
                  <div class="cart-modal-quantity">
                    <p>1</p>
                    <p>x</p>
                    <p class="cart-quantity-price">$ 4.50</p>
                  </div>
                </div>
                <div class="cart-modal-action-item">
                  <div class="cart-modal-delete">
                    <a href="/">
                      <i class="icofont-ui-delete"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cart-modal-product">
            <div class="cart-modal-thumb">
              <a href="shop-details.html">
                <img src="/images/product-2.png" alt="product" />
              </a>
            </div>
            <div class="cart-modal-content">
              <h4>
                <a href="shop-details.html">Red Sause Pizza</a>
              </h4>
              <div class="cart-modal-action">
                <div class="cart-modal-action-item">
                  <div class="cart-modal-quantity">
                    <p>1</p>
                    <p>x</p>
                    <p class="cart-quantity-price">$ 3.50</p>
                  </div>
                </div>
                <div class="cart-modal-action-item">
                  <div class="cart-modal-delete">
                    <a href="/">
                      <i class="icofont-ui-delete"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cart-modal-total">
            <p>Total</p>
            <h3>$8.0</h3>
          </div>
          <div class="cart-modal-button">
            <a href="/" class="btn full-width">
              Proceed To Checkout
            </a>
            <a href="/" class="btn btn-yellow full-width">
              View Shopping Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
