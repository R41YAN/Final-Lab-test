function calculateTotalCost() {

    const price1 = parseFloat(document.getElementById('product-price-1').innerText.replace('$', ''));
    const quantity1 = parseInt(document.getElementById('quantity-1').value);

    const price2 = parseFloat(document.getElementById('product-price-2').innerText.replace('$', ''));
    const quantity2 = parseInt(document.getElementById('quantity-2').value);

    const price3 = parseFloat(document.getElementById('product-price-3').innerText.replace('$', ''));
    const quantity3 = parseInt(document.getElementById('quantity-3').value);

    const totalCost = (price1 * quantity1) + (price2 * quantity2) + (price3 * quantity3);

    document.getElementById('total-cost').innerText = totalCost.toFixed(2);
}
