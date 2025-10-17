let nextTier = 1; // Tracks which tier to show next

function addBase(type) {
  if (nextTier > 3) return; // All tiers added

  const tier = document.getElementById(`tier${nextTier}`);
  tier.className = `cake-tier ${type}`;
  tier.style.display = "block";
  tier.style.opacity = 1;

  nextTier++;
}

function addTopping(type) {
  const toppings = document.getElementById("toppings");
  const topping = document.createElement("div");
  topping.classList.add("topping");

  if (type === "candle") topping.textContent = "🕯";
  if (type === "heart") topping.textContent = "❤";
  if (type === "cherry") topping.textContent = "🍒";
  if (type === "sprinkle") topping.textContent = "✨";

  topping.style.left = Math.random() * 180 + "px";
  topping.style.top = Math.random() * 300 + "px";

  toppings.appendChild(topping);
  topping.style.animation = "bounce 0.6s ease";
}
