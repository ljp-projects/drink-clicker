{
    var coins_1 = 0;
    var level_1 = 1;
    function earn(amt) {
        if (Number(document.body.dataset.clicks) !== coins_1) {
            alert("bozo");
            coins_1 = 0;
            document.body.dataset.clicks = "0";
            coinCnt_1.textContent = document.body.dataset.clicks;
            return false;
        }
        document.body.dataset.clicks = (Number(document.body.dataset.clicks) + amt).toString();
        coinCnt_1.textContent = document.body.dataset.clicks;
        coins_1 += amt;
        return true;
    }
    var drinkBtn = document.getElementById("drink"), coinCnt_1 = document.getElementById("coins") || document.createElement("div"), storeBtn = document.getElementById("store");
    drinkBtn === null || drinkBtn === void 0 ? void 0 : drinkBtn.addEventListener("click", function () {
        if (Number(this.dataset.level) !== level_1) {
            alert("bozo");
            level_1 = 1;
            this.dataset.level = "1";
            return;
        }
        earn(Number(this.dataset.level) || 1);
    });
    storeBtn === null || storeBtn === void 0 ? void 0 : storeBtn.addEventListener("click", function () {
        var frame = document.getElementById("store-frame") || document.createElement("div");
        if (frame.dataset.open === "false") {
            frame.dataset.open = "true";
            frame.style.opacity = "1";
        }
        else if (frame.dataset.open === "true") {
            frame.dataset.open = "false";
            frame.style.opacity = "0";
        }
    });
}
