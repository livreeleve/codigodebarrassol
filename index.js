try {
    JsBarcode("#barcode", window.location.search.split("=")[1], {format: "ean13"});
} catch (error) {
    alert('Codigo errado!')
}