let cart = [];
let totalPrice = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
    document.getElementById('total-price').textContent = totalPrice;
}

function sendOrder() {
    const name = document.getElementById('customer-name').value;
    const number = document.getElementById('customer-number').value;

    const text = document.getElementById('c-address').value;

    const message = `Order from ${name} [${text}] (${number}): ${JSON.stringify(cart)} Total-Pay: $${totalPrice}`;
    const whatsappUrl = `https://wa.me/+91_8513001304?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function sendOrderEmail() {
    const name = document.getElementById('customer-name').value;
    const number = document.getElementById('customer-number').value;

    const text = document.getElementById('c-address').value;


    const message = `Order from ${name} ${text} (${number}): ${JSON.stringify(cart)} Total: $${totalPrice}`;
    const emailUrl = `mailto:sourab.halder.in@gmail.com?subject=Order&body=${encodeURIComponent(message)}`;
    window.open(emailUrl, '_blank');
}

document.getElementById('filter').addEventListener('input', function() {
    const filterValue = this.value.toLowerCase();
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const productName = product.getAttribute('data-name').toLowerCase();
        product.style.display = productName.includes(filterValue) ? 'block' : 'none';
    });
});

var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mys");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");}
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 1000); // Change image every 1 seconds 
  } ;
  
		var counter = 60;
		setInterval( function(){counter--;
	if( counter >= 0 )
	{	id = document.getElementById("count");
				id.innerHTML = counter	}
	if( counter === 0 )
	{ id.innerHTML = "Welcome<br> <a href='#'><center><b>Online Product<b>low of cust </a><br>Click_Now<h6>Powerd_By_<br>  <a href='#' style='Text-decoration:none'>~Hpcl~</h6> <img src='product2.jpg></img>'> </a>";	}
	}, 720);
	




