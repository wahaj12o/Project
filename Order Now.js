function showFlavors() {
    document.getElementById('flavor-section').style.display = 'block';
    document.getElementById('flavor-section').scrollIntoView({ behavior: 'smooth' });
}

function confirmOrder() {
    const selectedFlavor = document.getElementById('flavor-list').value;
    document.getElementById('size-section').style.display = 'none';
    document.getElementById('flavor-section').style.display = 'none';
    document.getElementById('thank-you-msg').style.display = 'block';
}