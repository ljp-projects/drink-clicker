{
    let coins = 0
    let level = 1

    function earn(amt: number): boolean {
        if (Number(document.body.dataset.clicks) !== coins) {
            alert("bozo")
            coins = 0
            document.body.dataset.clicks = "0"
            coinCnt.textContent = document.body.dataset.clicks
            return false
        }

        document.body.dataset.clicks = (Number(document.body.dataset.clicks) + amt).toString()
        coinCnt.textContent = document.body.dataset.clicks
        coins += amt

        return true
    }

    const drinkBtn = document.getElementById("drink"), 
          coinCnt = document.getElementById("coins") || document.createElement("div"),
          storeBtn = document.getElementById("store")
    
    drinkBtn?.addEventListener("click", function() {
        if (Number(this.dataset.level) !== level) {
            alert("bozo")
            level = 1
            this.dataset.level = "1"
            return
        }

        earn(Number(this.dataset.level) || 1)
    })

    storeBtn?.addEventListener("click", function() {
        const frame = document.getElementById("store-frame") || document.createElement("div")

        if (frame.dataset.open === "false") {
            frame.dataset.open = "true"

            frame.style.opacity = "1"
        } else if (frame.dataset.open === "true") {
            frame.dataset.open = "false"

            frame.style.opacity = "0"
        }
    })
}