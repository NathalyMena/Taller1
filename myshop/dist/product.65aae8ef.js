function getParam(param) {
    const url = window.location.search;
    const searchParams = new URLSearchParams(url);
    const productId = searchParams.get(param);
}
getParam("id");

//# sourceMappingURL=product.65aae8ef.js.map
