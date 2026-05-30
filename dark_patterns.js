// Dark Patterns & Ethical Alternatives Database and Dynamic UI Engine

const PATTERNS = [
  {
    id: "roach",
    title: "Roach Motel",
    tagline: "Easy to get into, hard to get out of.",
    mechanismName: "Cognitive Overload & Friction",
    mechanismDesc: "Exploits the cognitive friction barrier. Designing a frictionless, one-click purchase process (easy entry) but placing high-friction, multi-step, or human-intervention barriers (support calls, offline chats) in the cancellation flow (hard exit) to exhaust users into compliance.",
    darkTitle: "Cancel Subscription Flow",
    darkUrl: "deceptive-stream.com/settings/cancel",
    cleanTitle: "Cancel Subscription Flow",
    cleanUrl: "ethical-stream.com/settings/cancel",
    darkExplain: "Cancellation requires contacting support during extremely limited hours, creating an artificial barrier. The 'keep subscription' button is huge, colorful, and active, while the exit path is hidden behind support queues.",
    cleanExplain: "A single click cancels the subscription instantly. The customer is informed of their remaining access period, and the opt-out is direct, clean, and respectful of user autonomy.",
    darkRender: function(containerId) {
      const el = document.getElementById(containerId);
      el.innerHTML = `
        <div class="mock-ui-container">
          <h4 class="mock-title">Cancel Premium Membership</h4>
          <p class="mock-desc">We hate to see you go! To complete your cancellation request, please speak to a live support representative.</p>
          <button class="btn-ui btn-ui-secondary" id="btn-roach-support">Chat with Support (Agent Offline)</button>
          <div style="font-size: 0.75rem; color: var(--text-muted); text-align: center; margin-top: 0.5rem; font-family: var(--font-mono)">
            Live hours: Mon-Fri 9am-5pm EST only
          </div>
          <button class="btn-ui btn-ui-primary" style="margin-top: 1rem;" id="btn-roach-keep">Keep Subscription & Active Benefits</button>
          <div id="roach-dark-alert"></div>
        </div>
      `;
      document.getElementById("btn-roach-support").addEventListener("click", () => {
        const alertDiv = document.getElementById("roach-dark-alert");
        alertDiv.innerHTML = `
          <div class="mock-alert danger-alert">
            ⚠ <strong>System Warning:</strong> No agents are currently online. Average queue wait time: 145 minutes. Your billing cycle will not pause. Please try again during business hours.
          </div>
        `;
      });
      document.getElementById("btn-roach-keep").addEventListener("click", () => {
        const alertDiv = document.getElementById("roach-dark-alert");
        alertDiv.innerHTML = `
          <div class="mock-alert success-alert">
            ✓ Thank you! Your premium membership remains active. No charges have been modified.
          </div>
        `;
      });
    },
    cleanRender: function(containerId) {
      const el = document.getElementById(containerId);
      el.innerHTML = `
        <div class="mock-ui-container">
          <h4 class="mock-title">Cancel Premium Membership</h4>
          <p class="mock-desc">Your current billing cycle ends on June 30. If you cancel, your account will revert to the free tier on that day.</p>
          <button class="btn-ui btn-ui-danger" id="btn-roach-cancel-confirm">Cancel My Subscription</button>
          <button class="btn-ui btn-ui-secondary" style="margin-top: 0.5rem;" id="btn-roach-cancel-keep">Keep Subscription</button>
          <div id="roach-clean-alert"></div>
        </div>
      `;
      document.getElementById("btn-roach-cancel-confirm").addEventListener("click", () => {
        const alertDiv = document.getElementById("roach-clean-alert");
        alertDiv.innerHTML = `
          <div class="mock-alert success-alert">
            ✓ Subscription cancelled successfully. You will not be billed again. You still have premium access until June 30.
          </div>
        `;
      });
      document.getElementById("btn-roach-cancel-keep").addEventListener("click", () => {
        const alertDiv = document.getElementById("roach-clean-alert");
        alertDiv.innerHTML = `
          <div class="mock-alert success-alert" style="border-color: rgba(99,102,241,0.2)">
            ✓ Membership active. Thank you for staying with us!
          </div>
        `;
      });
    }
  },
  {
    id: "confirm",
    title: "Confirm-Shaming",
    tagline: "Emotionally manipulating choices via guilt.",
    mechanismName: "Loss Aversion & Framing",
    mechanismDesc: "Leverages framing effects and loss aversion. Promotes the opt-in option as positive and smart, while framing the decline option as highly negative, irrational, or morally suspect, triggering guilt to lower refusal rates.",
    darkTitle: "Newsletter Opt-In Coupon",
    darkUrl: "bargain-deals.com/cart",
    cleanTitle: "Newsletter Opt-In Coupon",
    cleanUrl: "fair-deals.com/cart",
    darkExplain: "The opt-out link ('No thanks, I prefer paying full price') is structured to mock the user, suggesting they make poor financial choices for not consenting to advertising trackers.",
    cleanExplain: "Both choices are displayed with equal semantic neutrality. Opting out is a simple, direct 'No thanks' without any emotional manipulation or loaded commentary.",
    darkRender: function(containerId) {
      const el = document.getElementById(containerId);
      el.innerHTML = `
        <div class="mock-ui-container" style="text-align: center;">
          <h4 class="mock-title" style="justify-content: center;">🎁 Unlock 20% Off Your Order!</h4>
          <p class="mock-desc">Join our newsletter to receive an instant discount code and exclusive daily bargains.</p>
          <input type="email" class="input-ui" placeholder="enter your email address" id="confirm-dark-email" />
          <button class="btn-ui btn-ui-primary" id="btn-confirm-dark-yes">Yes, I want to save money!</button>
          <span class="btn-ui-shame" id="btn-confirm-dark-shame">No thanks, I prefer paying full retail price and wasting my cash</span>
          <div id="confirm-dark-alert"></div>
        </div>
      `;
      document.getElementById("btn-confirm-dark-yes").addEventListener("click", () => {
        const email = document.getElementById("confirm-dark-email").value;
        const alertDiv = document.getElementById("confirm-dark-alert");
        if(!email) { alertDiv.innerHTML = `<div class="mock-alert danger-alert">Please enter an email first.</div>`; return; }
        alertDiv.innerHTML = `<div class="mock-alert success-alert">✓ Promo code <strong>SAVE20</strong> sent to ${email}!</div>`;
      });
      document.getElementById("btn-confirm-dark-shame").addEventListener("click", () => {
        const alertDiv = document.getElementById("confirm-dark-alert");
        alertDiv.innerHTML = `
          <div class="mock-alert danger-alert" style="border-color: rgba(244,63,94,0.2)">
            ⚠ <strong>Are you sure?</strong> We will not ask again, and you'll have to pay full price for today's order.
          </div>
        `;
      });
    },
    cleanRender: function(containerId) {
      const el = document.getElementById(containerId);
      el.innerHTML = `
        <div class="mock-ui-container" style="text-align: center;">
          <h4 class="mock-title" style="justify-content: center;">🎁 Unlock 20% Off Your Order!</h4>
          <p class="mock-desc">Join our newsletter to receive an instant discount code and exclusive daily bargains.</p>
          <input type="email" class="input-ui" placeholder="enter your email address" id="confirm-clean-email" />
          <button class="btn-ui btn-ui-primary" id="btn-confirm-clean-yes">Subscribe for Discount</button>
          <button class="btn-ui btn-ui-secondary" style="margin-top: 0.5rem;" id="btn-confirm-clean-no">No, thanks</button>
          <div id="confirm-clean-alert"></div>
        </div>
      `;
      document.getElementById("btn-confirm-clean-yes").addEventListener("click", () => {
        const email = document.getElementById("confirm-clean-email").value;
        const alertDiv = document.getElementById("confirm-clean-alert");
        if(!email) { alertDiv.innerHTML = `<div class="mock-alert danger-alert" style="border-color: rgba(244,63,94,0.2)">Please enter an email first.</div>`; return; }
        alertDiv.innerHTML = `<div class="mock-alert success-alert">✓ Promo code <strong>SAVE20</strong> sent to ${email}.</div>`;
      });
      document.getElementById("btn-confirm-clean-no").addEventListener("click", () => {
        const alertDiv = document.getElementById("confirm-clean-alert");
        alertDiv.innerHTML = `<div class="mock-alert success-alert" style="border-color: rgba(16,185,129,0.2); color: var(--text-secondary)">✓ Coupon dismissed. Enjoy your shopping.</div>`;
      });
    }
  },
  {
    id: "hidden",
    title: "Hidden Costs",
    tagline: "Surcharges revealed only at the final step.",
    mechanismName: "Anchoring & Sunk Cost Fallacy",
    mechanismDesc: "Anchors the user to a low initial price. As the checkout progresses, the user invests time and effort (sunk cost). Fees are added incrementally, and the full price is only revealed at the final checkout click, when the user is too committed to abort.",
    darkTitle: "Flight Checkout Screen",
    darkUrl: "cheap-flyers.net/checkout",
    cleanTitle: "Flight Checkout Screen",
    cleanUrl: "transparent-airways.com/checkout",
    darkExplain: "The advertised seat was $89.00. Only at the final step are mandatory fees and pre-selected insurances loaded. The checkbox to waive insurance is confusingly worded ('Check to decline travel protection').",
    cleanExplain: "All options (seat choice, baggage check, insurance) are unselected by default. The total is recalculated in real-time, displaying exact base rates and optional charges clearly upfront.",
    darkRender: function(containerId) {
      const el = document.getElementById(containerId);
      let insuranceChecked = true;
      
      const render = () => {
        const insuranceCost = insuranceChecked ? 24.99 : 0.00;
        const total = 89.00 + 35.00 + 18.00 + 12.00 + insuranceCost;
        
        el.innerHTML = `
          <div class="mock-ui-container">
            <h4 class="mock-title">Flight Summary (Departing Flight)</h4>
            <div class="price-table">
              <div class="price-item"><span>Standard Fare (Advertised)</span><span>$89.00</span></div>
              <div class="price-item danger-fee"><span>Cabin Baggage Fee</span><span>+$35.00</span></div>
              <div class="price-item danger-fee"><span>Seat Selection Fee</span><span>+$18.00</span></div>
              ${insuranceChecked ? `<div class="price-item danger-fee" id="dark-ins-row"><span>Travel Protection (Pre-Selected)</span><span>+$24.99</span></div>` : ''}
              <div class="price-item danger-fee"><span>Online Booking Service Fee</span><span>+$12.00</span></div>
              <div class="price-item bold"><span>Total Payment</span><span>$${total.toFixed(2)}</span></div>
            </div>
            <div class="ui-row">
              <div class="ui-checkbox-wrapper">
                <div class="ui-checkbox ${insuranceChecked ? 'checked' : ''}" id="chk-dark-ins"></div>
              </div>
              <div class="ui-label" id="lbl-dark-ins" style="${!insuranceChecked ? 'color: var(--color-danger); font-weight: 500;' : ''}">
                ${insuranceChecked ? 'Do not uncheck this box if you wish to secure your trip against damage or cancel.' : '⚠ Warning: Waiving insurance makes you 100% liable for delays.'}
              </div>
            </div>
            <button class="btn-ui btn-ui-primary" style="margin-top:0.75rem;" id="btn-pay-dark-fees">Pay $${total.toFixed(2)}</button>
            <div id="hidden-dark-alert"></div>
          </div>
        `;
        
        document.getElementById("chk-dark-ins").addEventListener("click", () => {
          insuranceChecked = !insuranceChecked;
          render();
        });
        document.getElementById("btn-pay-dark-fees").addEventListener("click", () => {
          document.getElementById("hidden-dark-alert").innerHTML = `
            <div class="mock-alert danger-alert">
              ⚠ Charged <strong>$${total.toFixed(2)}</strong>. This total is <strong>100% higher</strong> than the $89.00 advertised flight ticket!
            </div>
          `;
        });
      };
      render();
    },
    cleanRender: function(containerId) {
      const el = document.getElementById(containerId);
      let optBaggage = false;
      let optSeat = false;
      let optInsurance = false;
      
      const render = () => {
        const total = 89.00 + (optBaggage ? 35.00 : 0) + (optSeat ? 18.00 : 0) + (optInsurance ? 24.99 : 0);
        el.innerHTML = `
          <div class="mock-ui-container">
            <h4 class="mock-title">Flight Summary (Departing Flight)</h4>
            <div class="price-table">
              <div class="price-item"><span>Base Airfare</span><span>$89.00</span></div>
              ${optBaggage ? `<div class="price-item green-fee"><span>Cabin Baggage</span><span>+$35.00</span></div>` : ''}
              ${optSeat ? `<div class="price-item green-fee"><span>Seat Selection</span><span>+$18.00</span></div>` : ''}
              ${optInsurance ? `<div class="price-item green-fee"><span>Travel Protection</span><span>+$24.99</span></div>` : ''}
              <div class="price-item bold"><span>Total Payment</span><span>$${total.toFixed(2)}</span></div>
            </div>
            <div class="ui-row">
              <div class="ui-checkbox-wrapper"><div class="ui-checkbox ${optBaggage ? 'checked' : ''}" id="chk-clean-bag"></div></div>
              <div class="ui-label">Add Cabin Baggage (+$35.00)</div>
            </div>
            <div class="ui-row">
              <div class="ui-checkbox-wrapper"><div class="ui-checkbox ${optSeat ? 'checked' : ''}" id="chk-clean-seat"></div></div>
              <div class="ui-label">Add Reserved Seat Selection (+$18.00)</div>
            </div>
            <div class="ui-row">
              <div class="ui-checkbox-wrapper"><div class="ui-checkbox ${optInsurance ? 'checked' : ''}" id="chk-clean-ins"></div></div>
              <div class="ui-label">Add Optional Travel Protection (+$24.99)</div>
            </div>
            <button class="btn-ui btn-ui-success" style="margin-top:0.5rem;" id="btn-pay-clean-fees">Pay $${total.toFixed(2)}</button>
            <div id="hidden-clean-alert"></div>
          </div>
        `;
        
        document.getElementById("chk-clean-bag").addEventListener("click", () => { optBaggage = !optBaggage; render(); });
        document.getElementById("chk-clean-seat").addEventListener("click", () => { optSeat = !optSeat; render(); });
        document.getElementById("chk-clean-ins").addEventListener("click", () => { optInsurance = !optInsurance; render(); });
        document.getElementById("btn-pay-clean-fees").addEventListener("click", () => {
          document.getElementById("hidden-clean-alert").innerHTML = `
            <div class="mock-alert success-alert">
              ✓ Successfully booked for <strong>$${total.toFixed(2)}</strong>. All choices were explicitly made by you.
            </div>
          `;
        });
      };
      render();
    }
  },
  {
    id: "trick",
    title: "Trick Questions",
    tagline: "Confusing text that tricks you into opting in.",
    mechanismName: "Cognitive Fatigue & Default Effect",
    mechanismDesc: "Relies on the default effect and cognitive exhaustion. Uses double negatives, convoluted syntax, and switched checkbox patterns, knowing that tired users scanning the page will misinterpret the statements and agree to options they want to avoid.",
    darkTitle: "Registration Preferences",
    darkUrl: "account-portal.com/sign-up",
    cleanTitle: "Registration Preferences",
    cleanUrl: "account-portal.com/sign-up",
    darkExplain: "Both checkboxes use complex double negatives and are pre-selected. To decline, the user must understand the confusing phrasing and uncheck them. Most users ignore them due to reading fatigue.",
    cleanExplain: "Direct, plain sentences are used, and options are left unchecked by default. The user makes an active choice to opt in, ensuring explicit, meaningful consent.",
    darkRender: function(containerId) {
      const el = document.getElementById(containerId);
      let chk1 = true;
      let chk2 = true;
      
      const render = () => {
        el.innerHTML = `
          <div class="mock-ui-container">
            <h4 class="mock-title">Marketing Preferences</h4>
            <input type="text" class="input-ui" placeholder="Choose Username" />
            <input type="password" class="input-ui" placeholder="Create Password" />
            <div class="ui-row">
              <div class="ui-checkbox-wrapper"><div class="ui-checkbox ${chk1 ? 'checked' : ''}" id="chk-trick-1"></div></div>
              <div class="ui-label">I do not want to opt-out of receiving newsletter notifications from third-party advertising brokers.</div>
            </div>
            <div class="ui-row">
              <div class="ui-checkbox-wrapper"><div class="ui-checkbox ${chk2 ? 'checked' : ''}" id="chk-trick-2"></div></div>
              <div class="ui-label">Uncheck to prevent us from refusing to share your profile parameters with our partner companies.</div>
            </div>
            <button class="btn-ui btn-ui-primary" style="margin-top:0.5rem;" id="btn-trick-dark-submit">Create Account</button>
            <div id="trick-dark-alert"></div>
          </div>
        `;
        document.getElementById("chk-trick-1").addEventListener("click", () => { chk1 = !chk1; render(); });
        document.getElementById("chk-trick-2").addEventListener("click", () => { chk2 = !chk2; render(); });
        document.getElementById("btn-trick-dark-submit").addEventListener("click", () => {
          document.getElementById("trick-dark-alert").innerHTML = `
            <div class="mock-alert danger-alert">
              ⚠ Account registered! You have opted <strong>${chk1 ? 'IN' : 'OUT'}</strong> to marketing emails and opted <strong>${chk2 ? 'IN' : 'OUT'}</strong> to data-sharing. (Hint: keeping boxes checked opted you in).
            </div>
          `;
        });
      };
      render();
    },
    cleanRender: function(containerId) {
      const el = document.getElementById(containerId);
      let chk1 = false;
      let chk2 = false;
      
      const render = () => {
        el.innerHTML = `
          <div class="mock-ui-container">
            <h4 class="mock-title">Marketing Preferences</h4>
            <input type="text" class="input-ui" placeholder="Choose Username" />
            <input type="password" class="input-ui" placeholder="Create Password" />
            <div class="ui-row">
              <div class="ui-checkbox-wrapper"><div class="ui-checkbox ${chk1 ? 'checked' : ''}" id="chk-clean-1"></div></div>
              <div class="ui-label">Send me promotional partner news and offers (Optional).</div>
            </div>
            <div class="ui-row">
              <div class="ui-checkbox-wrapper"><div class="ui-checkbox ${chk2 ? 'checked' : ''}" id="chk-clean-2"></div></div>
              <div class="ui-label">Share my usage data with affiliated companies to customize recommendations (Optional).</div>
            </div>
            <button class="btn-ui btn-ui-success" style="margin-top:0.5rem;" id="btn-trick-clean-submit">Create Account</button>
            <div id="trick-clean-alert"></div>
          </div>
        `;
        document.getElementById("chk-clean-1").addEventListener("click", () => { chk1 = !chk1; render(); });
        document.getElementById("chk-clean-2").addEventListener("click", () => { chk2 = !chk2; render(); });
        document.getElementById("btn-trick-clean-submit").addEventListener("click", () => {
          document.getElementById("trick-clean-alert").innerHTML = `
            <div class="mock-alert success-alert">
              ✓ Account registered successfully. Promotional newsletter: <strong>${chk1 ? 'Opted-In' : 'Declined'}</strong>. Personalization share: <strong>${chk2 ? 'Opted-In' : 'Declined'}</strong>.
            </div>
          `;
        });
      };
      render();
    }
  },
  {
    id: "sneak",
    title: "Sneak into Basket",
    tagline: "Items added to your shopping cart automatically.",
    mechanismName: "Default Effect & Inertia",
    mechanismDesc: "Leverages customer inertia and the default effect. Pre-checks and pushes secondary accessories into the cart during a main purchase. The site relies on the user not reviewing their item list or assuming they must buy them.",
    darkTitle: "Shopping Cart Details",
    darkUrl: "megastore.com/cart",
    cleanTitle: "Shopping Cart Details",
    cleanUrl: "fair-retail.com/cart",
    darkExplain: "Buying a $799.00 laptop. The store automatically appends a $34.99 protective sleeve and an $89.99 protection plan. User has to find the small 'Remove' buttons to decline them.",
    cleanExplain: "The cart only includes items explicitly requested. A recommendations area allows the user to easily opt in and add accessories if they choose.",
    darkRender: function(containerId) {
      const el = document.getElementById(containerId);
      let items = [
        { id: "laptop", name: "Laptop 15\" Pro", price: 799.00, mandatory: true },
        { id: "sleeve", name: "Premium Leather Sleeve", price: 34.99, mandatory: false },
        { id: "warranty", name: "2-Year Protection Plan", price: 89.99, mandatory: false }
      ];
      
      const render = () => {
        const subtotal = items.reduce((sum, item) => sum + item.price, 0);
        let itemsHtml = items.map(item => `
          <div class="cart-item-row" id="cart-item-${item.id}">
            <div>
              <strong>${item.name}</strong><br>
              ${item.mandatory ? '<span style="color:var(--text-muted); font-size:0.7rem;">Main Item</span>' : `<span class="cart-item-remove" data-id="${item.id}">Remove</span>`}
            </div>
            <span>$${item.price.toFixed(2)}</span>
          </div>
        `).join('');
        
        el.innerHTML = `
          <div class="mock-ui-container">
            <h4 class="mock-title">My Cart (${items.length} items)</h4>
            <div class="cart-items-list">${itemsHtml}</div>
            <div class="price-table">
              <div class="price-item bold"><span>Subtotal</span><span>$${subtotal.toFixed(2)}</span></div>
            </div>
            <button class="btn-ui btn-ui-primary" id="btn-checkout-sneak">Proceed to Checkout ($${subtotal.toFixed(2)})</button>
            <div id="sneak-dark-alert"></div>
          </div>
        `;
        
        document.querySelectorAll(".cart-item-remove").forEach(btn => {
          btn.addEventListener("click", (e) => {
            const id = e.target.getAttribute("data-id");
            items = items.filter(item => item.id !== id);
            render();
          });
        });
        
        document.getElementById("btn-checkout-sneak").addEventListener("click", () => {
          const addedItems = items.filter(i => !i.mandatory).map(i => i.name);
          document.getElementById("sneak-dark-alert").innerHTML = `
            <div class="mock-alert danger-alert">
              ⚠ Checkout logged! Paid <strong>$${subtotal.toFixed(2)}</strong>. ${addedItems.length > 0 ? `You purchased auto-added add-ons: <strong>${addedItems.join(', ')}</strong>.` : 'You successfully removed the snuck items!'}
            </div>
          `;
        });
      };
      render();
    },
    cleanRender: function(containerId) {
      const el = document.getElementById(containerId);
      let items = [
        { id: "laptop", name: "Laptop 15\" Pro", price: 799.00 }
      ];
      let crossSell = [
        { id: "sleeve", name: "Premium Leather Sleeve", price: 34.99 },
        { id: "warranty", name: "2-Year Protection Plan", price: 89.99 }
      ];
      
      const render = () => {
        const subtotal = items.reduce((sum, item) => sum + item.price, 0);
        let itemsHtml = items.map(item => `
          <div class="cart-item-row">
            <div>
              <strong>${item.name}</strong><br>
              ${item.id !== 'laptop' ? `<span class="cart-item-remove" data-id="${item.id}">Remove</span>` : '<span style="color:var(--text-muted); font-size:0.7rem;">Qty: 1</span>'}
            </div>
            <span>$${item.price.toFixed(2)}</span>
          </div>
        `).join('');
        
        let csHtml = crossSell.map(item => `
          <div class="cross-sell-item" style="margin-bottom:0.4rem;">
            <span>${item.name} (+$${item.price})</span>
            <button class="btn-add-mini" data-id="${item.id}">Add</button>
          </div>
        `).join('');
        
        el.innerHTML = `
          <div class="mock-ui-container">
            <h4 class="mock-title">My Cart (${items.length} items)</h4>
            <div class="cart-items-list">${itemsHtml}</div>
            
            ${crossSell.length > 0 ? `
              <div class="cross-sell-box">
                <div class="cross-sell-title">Recommended Accessories (Optional)</div>
                ${csHtml}
              </div>
            ` : ''}
            
            <div class="price-table">
              <div class="price-item bold"><span>Subtotal</span><span>$${subtotal.toFixed(2)}</span></div>
            </div>
            <button class="btn-ui btn-ui-success" id="btn-checkout-sneak-clean">Proceed to Checkout ($${subtotal.toFixed(2)})</button>
            <div id="sneak-clean-alert"></div>
          </div>
        `;
        
        document.querySelectorAll(".cart-item-remove").forEach(btn => {
          btn.addEventListener("click", (e) => {
            const id = e.target.getAttribute("data-id");
            const item = items.find(i => i.id === id);
            items = items.filter(i => i.id !== id);
            crossSell.push(item);
            render();
          });
        });
        
        document.querySelectorAll(".btn-add-mini").forEach(btn => {
          btn.addEventListener("click", (e) => {
            const id = e.target.getAttribute("data-id");
            const item = crossSell.find(i => i.id === id);
            crossSell = crossSell.filter(i => i.id !== id);
            items.push(item);
            render();
          });
        });
        
        document.getElementById("btn-checkout-sneak-clean").addEventListener("click", () => {
          document.getElementById("sneak-clean-alert").innerHTML = `
            <div class="mock-alert success-alert">
              ✓ Cart purchased for <strong>$${subtotal.toFixed(2)}</strong>. No hidden add-ons.
            </div>
          `;
        });
      };
      render();
    }
  },
  {
    id: "zuckering",
    title: "Privacy Zuckering",
    tagline: "Tricking you into sharing more data than intended.",
    mechanismName: "Choice Architecture & Friction Asymmetry",
    mechanismDesc: "Manipulates choice architecture. Creates a large, shiny 'Express Setup' option that opts the user into sharing all contact, location, and tracking histories. Custom options are buried under deep menus with alarmist warning labels.",
    darkTitle: "Profile Privacy Setup",
    darkUrl: "social-net.co/register/privacy",
    cleanTitle: "Profile Privacy Setup",
    cleanUrl: "social-net.co/register/privacy",
    darkExplain: "The 'Recommended Setup' automatically enables location and contact data broker sharing. Opting out requires opening custom panels, which show frightening security warnings.",
    cleanExplain: "All granular tracking toggles are set to OFF by default. The user can switch specific scopes on if desired, and saving options is direct and neutral.",
    darkRender: function(containerId) {
      const el = document.getElementById(containerId);
      el.innerHTML = `
        <div class="mock-ui-container">
          <h4 class="mock-title">Select Privacy Profile</h4>
          <p class="mock-desc">Choose a setup style. We recommend Express to ensure all messaging and community integrations work correctly.</p>
          <button class="btn-ui btn-ui-success" id="btn-zuck-express">Use Express Setup (Recommended)</button>
          <div style="font-size:0.75rem; color:var(--text-muted); text-align:center; margin-top:0.4rem;">
            Enables contacts sync, location sync, browser advertising identifiers, and affiliated profiling.
          </div>
          <span class="btn-ui-shame" id="btn-zuck-custom" style="margin-top: 1rem;">Customize settings manually (Advanced / Complex)</span>
          <div id="zuck-dark-alert"></div>
        </div>
      `;
      document.getElementById("btn-zuck-express").addEventListener("click", () => {
        document.getElementById("zuck-dark-alert").innerHTML = `
          <div class="mock-alert danger-alert">
            ⚠ <strong>Data shared!</strong> Privacy profile saved: Contacts synced, location trackers active, advertising history unlocked.
          </div>
        `;
      });
      document.getElementById("btn-zuck-custom").addEventListener("click", () => {
        document.getElementById("zuck-dark-alert").innerHTML = `
          <div class="mock-alert danger-alert" style="border-color: rgba(244,63,94,0.2)">
            ⚠ <strong>Warning:</strong> Adjusting settings manually can lead to profile creation errors. Some features may stop functioning.
          </div>
        `;
      });
    },
    cleanRender: function(containerId) {
      const el = document.getElementById(containerId);
      let loc = false;
      let contacts = false;
      let ads = false;
      
      const render = () => {
        el.innerHTML = `
          <div class="mock-ui-container">
            <h4 class="mock-title">Privacy Permissions</h4>
            <p class="mock-desc">Specify what data permissions you would like to grant. (Default is opt-out).</p>
            
            <div class="privacy-option-row">
              <div>
                <strong>Real-Time Location Tracking</strong><br>
                <span style="font-size:0.75rem; color:var(--text-muted);">Provides local weather forecasts.</span>
              </div>
              <div class="privacy-toggle ${loc ? 'active' : ''}" id="tgl-loc"></div>
            </div>
            
            <div class="privacy-option-row">
              <div>
                <strong>Contact List Synchronization</strong><br>
                <span style="font-size:0.75rem; color:var(--text-muted);">Helps find existing friends.</span>
              </div>
              <div class="privacy-toggle ${contacts ? 'active' : ''}" id="tgl-cont"></div>
            </div>
            
            <div class="privacy-option-row">
              <div>
                <strong>Ad Personalization Cookies</strong><br>
                <span style="font-size:0.75rem; color:var(--text-muted);">Shares browsing data with advertisers.</span>
              </div>
              <div class="privacy-toggle ${ads ? 'active' : ''}" id="tgl-ads"></div>
            </div>
            
            <button class="btn-ui btn-ui-success" style="margin-top:1rem;" id="btn-save-zuck-clean">Save Privacy Settings</button>
            <div id="zuck-clean-alert"></div>
          </div>
        `;
        
        document.getElementById("tgl-loc").addEventListener("click", () => { loc = !loc; render(); });
        document.getElementById("tgl-cont").addEventListener("click", () => { contacts = !contacts; render(); });
        document.getElementById("tgl-ads").addEventListener("click", () => { ads = !ads; render(); });
        
        document.getElementById("btn-save-zuck-clean").addEventListener("click", () => {
          document.getElementById("zuck-clean-alert").innerHTML = `
            <div class="mock-alert success-alert">
              ✓ Preferences saved. Location: <strong>${loc ? 'ON' : 'OFF'}</strong>. Contacts: <strong>${contacts ? 'ON' : 'OFF'}</strong>. Personalized Ads: <strong>${ads ? 'ON' : 'OFF'}</strong>.
            </div>
          `;
        });
      };
      render();
    }
  },
  {
    id: "misdirection",
    title: "Misdirection",
    tagline: "Visual styling that guides you away from choices.",
    mechanismName: "Visual Hierarchy & Habituation",
    mechanismDesc: "Exploits visual hierarchy and muscle memory habits. Uses vibrant colors, large buttons, and animations on options that benefit the platform, while making the alternative options (like downloading files without bloatware, or refusing cookies) look like banner advertisements, standard headers, or tiny text links.",
    darkTitle: "File Download Center",
    darkUrl: "fastdownloads.co/file/7841",
    cleanTitle: "File Download Center",
    cleanUrl: "directdownloads.org/file/7841",
    darkExplain: "The giant glowing green button saying 'START DOWNLOAD' is actually an advertisement banner for a different browser toolbar. The true source file download is a tiny link at the bottom.",
    cleanExplain: "No deceptive advertising banners are allowed. The interface presents a single, clear, prominent download button for the requested resource.",
    darkRender: function(containerId) {
      const el = document.getElementById(containerId);
      el.innerHTML = `
        <div class="mock-ui-container">
          <h4 class="mock-title">Your PDF download is ready</h4>
          <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); border-radius: var(--border-radius-md); padding: 1rem; text-align: center; margin-bottom: 1rem;">
            <button class="btn-ui btn-ui-success" style="font-size:1.1rem; padding:0.9rem; background: linear-gradient(135deg, #10b981 0%, #059669 100%); font-weight:700;" id="btn-mis-ad">⇩ START DOWNLOAD NOW</button>
            <div style="font-size:0.65rem; color:var(--text-muted); margin-top:0.25rem;">Sponsored: Secure PDF Converter Suite 2026</div>
          </div>
          <p style="font-size:0.75rem; text-align:center; color:var(--text-secondary);">
            Problems with download? <a href="#" id="link-mis-real" style="color:var(--text-muted); text-decoration:underline;">Click here to load raw PDF source directly (2.4MB)</a>
          </p>
          <div id="mis-dark-alert"></div>
        </div>
      `;
      document.getElementById("btn-mis-ad").addEventListener("click", () => {
        document.getElementById("mis-dark-alert").innerHTML = `
          <div class="mock-alert danger-alert">
            ⚠ <strong>Adware triggered!</strong> You clicked the fake button. The installer for 'SpeedUP_Toolbar.exe' has started. This was a sponsored banner.
          </div>
        `;
      });
      document.getElementById("link-mis-real").addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("mis-dark-alert").innerHTML = `
          <div class="mock-alert success-alert">
            ✓ Success! Downloading 'Dark_Patterns_Report_v2.pdf' (2.4MB). You successfully located the real source.
          </div>
        `;
      });
    },
    cleanRender: function(containerId) {
      const el = document.getElementById(containerId);
      el.innerHTML = `
        <div class="mock-ui-container">
          <h4 class="mock-title">Your PDF download is ready</h4>
          <p class="mock-desc">Click below to retrieve your requested document safely. Standard download speed, ad-free.</p>
          <button class="btn-ui btn-ui-primary" style="padding:1rem; font-size:1rem;" id="btn-mis-real-clean">⇩ Download Report (PDF, 2.4MB)</button>
          <div id="mis-clean-alert"></div>
        </div>
      `;
      document.getElementById("btn-mis-real-clean").addEventListener("click", () => {
        document.getElementById("mis-clean-alert").innerHTML = `
          <div class="mock-alert success-alert">
            ✓ Success! Downloading 'Dark_Patterns_Report_v2.pdf' (2.4MB). Safe, direct, and transparent.
          </div>
        `;
      });
    }
  },
  {
    id: "continuity",
    title: "Forced Continuity",
    tagline: "Free trial rolls over into billing with no warning.",
    mechanismName: "Loss Aversion & Default Bias",
    mechanismDesc: "Leverages the default bias and forgetfulness. Requires card details for a 'Free Trial', then automatically starts recurring monthly billings the minute the trial expires, deliberately omitting any alert notifications, and locking cancellation behind complex pathways.",
    darkTitle: "Trial Signup Page",
    darkUrl: "quick-design.net/trial-billing",
    cleanTitle: "Trial Signup Page",
    cleanUrl: "ethical-design.org/trial-billing",
    darkExplain: "Credit card is mandatory for a free trial. The billing schedule, auto-renewal clause, and refund prohibitions are in tiny, faded paragraphs at the very bottom of the checkout page.",
    cleanExplain: "No credit card is required to try the features. If a payment method is optional, the system commits to sending email reminders 2 days prior to transition, with 1-click cancellation links in the email.",
    darkRender: function(containerId) {
      const el = document.getElementById(containerId);
      el.innerHTML = `
        <div class="mock-ui-container">
          <h4 class="mock-title">Start 7-Day Premium Trial</h4>
          <p class="mock-desc">Get unlimited rendering access instantly. No charges for 7 days.</p>
          <input type="text" class="input-ui" placeholder="Credit Card Number (XXXX-XXXX-XXXX-XXXX)" />
          <div style="font-size:0.65rem; color:var(--text-muted); line-height:1.4; margin-bottom:0.75rem;">
            By clicking checkout, you authorize our platform to immediately charge your payment card $99.99/year starting on day 8. Subscription auto-renews. To stop billing, cancellations must be registered manually through active telephone lines 72 hours in advance of the billing date. Zero refunds.
          </div>
          <button class="btn-ui btn-ui-primary" id="btn-trial-dark">Activate 7-Day Free Trial</button>
          <div id="trial-dark-alert"></div>
        </div>
      `;
      document.getElementById("btn-trial-dark").addEventListener("click", () => {
        document.getElementById("trial-dark-alert").innerHTML = `
          <div class="mock-alert danger-alert">
            ⚠ <strong>Trial activated!</strong> Your credit card is on file. You will be automatically charged $99.99 on day 8 with <strong>no email reminder</strong>.
          </div>
        `;
      });
    },
    cleanRender: function(containerId) {
      const el = document.getElementById(containerId);
      let optInReminder = true;
      
      const render = () => {
        el.innerHTML = `
          <div class="mock-ui-container">
            <h4 class="mock-title">Start 7-Day Premium Trial</h4>
            <p class="mock-desc">Get unlimited rendering access instantly. Try all features for 7 days.</p>
            
            <div class="ui-row" style="margin-bottom: 0.8rem;">
              <div class="ui-checkbox-wrapper">
                <div class="ui-checkbox ${optInReminder ? 'checked' : ''}" id="chk-trial-rem"></div>
              </div>
              <div class="ui-label"><strong>Send Day-5 Reminder:</strong> Email me a notification 2 days before the trial shifts to billing (Opt-in selected).</div>
            </div>
            
            <p style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:0.75rem;">
              <strong>No payment card needed.</strong> If you decide to keep premium after 7 days, you can choose to upgrade for $99.99/year.
            </p>
            <button class="btn-ui btn-ui-success" id="btn-trial-clean">Activate Free Trial (No Card Needed)</button>
            <div id="trial-clean-alert"></div>
          </div>
        `;
        
        document.getElementById("chk-trial-rem").addEventListener("click", () => {
          optInReminder = !optInReminder;
          render();
        });
        
        document.getElementById("btn-trial-clean").addEventListener("click", () => {
          document.getElementById("trial-clean-alert").innerHTML = `
            <div class="mock-alert success-alert">
              ✓ Free Trial active! We will not charge you. ${optInReminder ? 'An email reminder will be sent to you on Day 5.' : ''}
            </div>
          `;
        });
      };
      render();
    }
  },
  {
    id: "ads",
    title: "Disguised Ads",
    tagline: "Ad content styled to look like organic content.",
    mechanismName: "Habitual Scanning & Pattern Matching",
    mechanismDesc: "Leverages natural visual flow. News networks and search lists format sponsored and commercial banners to match the exact font, margin, color scheme, and graphic grid of organic content, forcing users to click them by habit.",
    darkTitle: "Social Media News Feed",
    darkUrl: "sociable.com/home-feed",
    cleanTitle: "Social Media News Feed",
    cleanUrl: "ethical-social.com/feed",
    darkExplain: "The center item is a paid advertisement for a get-rich-quick financial scheme. It uses the exact design of native articles. The only indicator is a faded grey 'Sponsored' text.",
    cleanExplain: "The advertisement uses a clear yellow border, a grey backdrop background, and displays a prominent bold badge labeled 'ADVERTISEMENT' to ensure transparency.",
    darkRender: function(containerId) {
      const el = document.getElementById(containerId);
      el.innerHTML = `
        <div class="mock-ui-container">
          <h4 class="mock-title">Recent Feed Activity</h4>
          <div class="feed-item">
            <div class="feed-img-placeholder">🚀</div>
            <div class="feed-details">
              <div class="feed-title">LIU announces new Computer Science engineering building</div>
              <div class="feed-source">LIU News • 3 hours ago</div>
            </div>
          </div>
          
          <div class="feed-item feed-ad-dark" id="ad-dark-box" style="cursor:pointer;">
            <div class="feed-img-placeholder">📈</div>
            <div class="feed-details">
              <div class="feed-title">LIU graduates share the secret trick to making $400/hr online</div>
              <div class="feed-source">Sponsored • Financial Freedom Co.</div>
            </div>
          </div>
          
          <div class="feed-item">
            <div class="feed-img-placeholder">📝</div>
            <div class="feed-details">
              <div class="feed-title">CSCI 452: Topics in Computer Science syllabus updated</div>
              <div class="feed-source">LIU Portal • 6 hours ago</div>
            </div>
          </div>
          <div id="ad-dark-alert"></div>
        </div>
      `;
      document.getElementById("ad-dark-box").addEventListener("click", () => {
        document.getElementById("ad-dark-alert").innerHTML = `
          <div class="mock-alert danger-alert">
            ⚠ <strong>Ad Clicked!</strong> You were redirected to 'quick-scams-online.com'. The entry mimicked a real university announcement to trick your feed navigation.
          </div>
        `;
      });
    },
    cleanRender: function(containerId) {
      const el = document.getElementById(containerId);
      el.innerHTML = `
        <div class="mock-ui-container">
          <h4 class="mock-title">Recent Feed Activity</h4>
          <div class="feed-item">
            <div class="feed-img-placeholder">🚀</div>
            <div class="feed-details">
              <div class="feed-title">LIU announces new Computer Science engineering building</div>
              <div class="feed-source">LIU News • 3 hours ago</div>
            </div>
          </div>
          
          <div class="feed-item feed-ad-clean" id="ad-clean-box" style="cursor:pointer;">
            <div class="feed-img-placeholder" style="background: rgba(244,63,94,0.1)">💰</div>
            <div class="feed-details">
              <div style="margin-bottom:0.25rem;"><span class="ad-pill-badge">SPONSORED PROMOTION</span></div>
              <div class="feed-title" style="font-weight:600;">Financial Freedom Co. Online Advising Services</div>
              <div class="feed-source" style="color:var(--color-danger);">Commercial Advertisement Link</div>
            </div>
          </div>
          
          <div class="feed-item">
            <div class="feed-img-placeholder">📝</div>
            <div class="feed-details">
              <div class="feed-title">CSCI 452: Topics in Computer Science syllabus updated</div>
              <div class="feed-source">LIU Portal • 6 hours ago</div>
            </div>
          </div>
          <div id="ad-clean-alert"></div>
        </div>
      `;
      document.getElementById("ad-clean-box").addEventListener("click", () => {
        document.getElementById("ad-clean-alert").innerHTML = `
          <div class="mock-alert success-alert" style="border-color: rgba(99,102,241,0.2); color: var(--text-secondary)">
            ✓ Partner Promotion loaded. Thank you for clicking. You were clearly notified of its advertising nature beforehand.
          </div>
        `;
      });
    }
  }
];

// Switch Active Demo Function
function loadPattern(patternId) {
  const pattern = PATTERNS.find(p => p.id === patternId);
  if (!pattern) return;
  
  // Update nav tabs active class
  document.querySelectorAll(".pattern-tab").forEach(tab => {
    tab.classList.remove("active");
    if(tab.getAttribute("data-id") === patternId) {
      tab.classList.add("active");
    }
  });
  
  // Render headers & links
  document.getElementById("pattern-title-label").innerText = pattern.title;
  document.getElementById("pattern-tagline").innerText = pattern.tagline;
  
  document.getElementById("dark-addr").innerHTML = `<span class="lock">🔒</span> ${pattern.darkUrl}`;
  document.getElementById("clean-addr").innerHTML = `<span class="lock">🔒</span> ${pattern.cleanUrl}`;
  
  // Render the actual content components
  pattern.darkRender("dark-mockup-inner");
  pattern.cleanRender("clean-mockup-inner");
  
  // Render Explanations
  document.getElementById("explain-dark-text").innerHTML = `<strong>What's wrong:</strong> ${pattern.darkExplain}`;
  document.getElementById("explain-clean-text").innerHTML = `<strong>What's right:</strong> ${pattern.cleanExplain}`;
  
  // Render Psychological Mechanism Details
  document.getElementById("mechanism-name").innerText = pattern.mechanismName;
  document.getElementById("mechanism-desc").innerText = pattern.mechanismDesc;
}

// Build Sidebar Navigation dynamically
function initApp() {
  const listContainer = document.getElementById("nav-list");
  listContainer.innerHTML = "";
  
  PATTERNS.forEach((pattern, index) => {
    const btn = document.createElement("button");
    btn.className = "pattern-tab";
    btn.setAttribute("data-id", pattern.id);
    btn.innerHTML = `
      <div class="tab-title-row">
        <span>${pattern.title}</span>
        <span class="tab-number">${(index + 1).toString().padStart(2, '0')}</span>
      </div>
      <div class="tab-tagline">${pattern.tagline}</div>
    `;
    btn.addEventListener("click", () => {
      loadPattern(pattern.id);
    });
    listContainer.appendChild(btn);
  });
  
  // Load initial pattern
  loadPattern(PATTERNS[0].id);
}

// Run on page load
window.addEventListener("DOMContentLoaded", initApp);
