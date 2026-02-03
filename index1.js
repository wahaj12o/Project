function scrollNavbar(amount) {
    const scroller = document.getElementById("navbarScroller");
    scroller.scrollBy({
        left: amount,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('orderModal');
    const closeModal = document.querySelector('.close-modal');
    const cancelBtn = document.getElementById('cancelOrder');
    const confirmBtn = document.getElementById('confirmOrder');
    const closeThankYou = document.getElementById('closeThankYou');
    const thankYouMessage = document.getElementById('thankYouMessage');
    const flavorError = document.getElementById('flavorError');

    const basePriceElement = document.getElementById('basePrice');
    const sizePriceElement = document.getElementById('sizePrice');
    const totalPriceElement = document.getElementById('totalPrice');
    const modalPizzaName = document.getElementById('modalPizzaName');
    const modalPizzaPrice = document.getElementById('modalPizzaPrice');

    let currentPizza = {
        name: '',
        basePrice: 0,
        size: 'medium',
        sizePrice: 100,
        selectedFlavors: []
    };

    const addButtons = document.querySelectorAll('.b1');
    addButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            const pizzaCard = this.closest('.Pizza') || this.closest('.pizza');
            const pizzaName = pizzaCard.querySelector('#h1').textContent;
            const pizzaPriceText = pizzaCard.querySelector('#p2').textContent;
            const pizzaPrice = parseInt(pizzaPriceText.replace(/[^\d]/g, ''));

            currentPizza.name = pizzaName;
            currentPizza.basePrice = pizzaPrice;

            modalPizzaName.textContent = pizzaName;
            modalPizzaPrice.textContent = pizzaPriceText;
            basePriceElement.textContent = `Rs.${pizzaPrice}`;

            resetOrderForm();

            calculateTotal();

            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    const sizeRadios = document.querySelectorAll('input[name="size"]');
    sizeRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            currentPizza.size = this.value;
            currentPizza.sizePrice = parseInt(this.dataset.price);
            sizePriceElement.textContent = `Rs.${currentPizza.sizePrice}`;
            calculateTotal();
        });
    });

    const flavorCheckboxes = document.querySelectorAll('input[name="flavor"]');
    flavorCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const selectedFlavors = Array.from(flavorCheckboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.value);

            if (selectedFlavors.length > 2) {
                this.checked = false;
                flavorError.style.display = 'block';
                setTimeout(() => {
                    flavorError.style.display = 'none';
                }, 3000);
                return;
            }

            currentPizza.selectedFlavors = selectedFlavors;
            flavorError.style.display = 'none';
        });
    });

    function calculateTotal() {
        const total = currentPizza.basePrice + currentPizza.sizePrice;
        totalPriceElement.textContent = `Rs.${total}`;
    }

    function resetOrderForm() {
        document.querySelector('input[name="size"][value="medium"]').checked = true;
        currentPizza.size = 'medium';
        currentPizza.sizePrice = 100;
        sizePriceElement.textContent = 'Rs.100';

        flavorCheckboxes.forEach(cb => cb.checked = false);
        currentPizza.selectedFlavors = [];
        flavorError.style.display = 'none';

        thankYouMessage.style.display = 'none';
    }

    function generateOrderId() {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 1000);
        return `CPZ-${timestamp.toString().slice(-6)}-${random}`;
    }

    confirmBtn.addEventListener('click', function () {
        if (currentPizza.selectedFlavors.length !== 2) {
            flavorError.style.display = 'block';
            flavorError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }

        const orderId = generateOrderId();
        document.getElementById('orderId').textContent = orderId;
        thankYouMessage.style.display = 'block';

        console.log('Order Confirmed:', {
            pizza: currentPizza.name,
            size: currentPizza.size,
            flavors: currentPizza.selectedFlavors,
            total: currentPizza.basePrice + currentPizza.sizePrice,
            orderId: orderId
        });
    });

    function closeOrderModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        resetOrderForm();
    }

    closeModal.addEventListener('click', closeOrderModal);
    cancelBtn.addEventListener('click', closeOrderModal);
    closeThankYou.addEventListener('click', closeOrderModal);

    window.addEventListener('click', function (e) {
        if (e.target === modal && !thankYouMessage.style.display === 'block') {
            closeOrderModal();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeOrderModal();
        }
    });
});

