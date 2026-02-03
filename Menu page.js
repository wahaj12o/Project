$(document).ready(function () {
    $('#download-now').on('click', function () {
        var imagePath = $('#menu-image').attr('src');
        var link = document.createElement('a');
        link.href = imagePath;
        link.download = 'Restaurant-Menu.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});