function setBlurMask() {
    const main = document.querySelector("main");
    const size = main.getBoundingClientRect();
    const blur = document.querySelector(".blur");
    const blurSize = blur.getBoundingClientRect();
    const topPercent = (size.top / blurSize.height) * 100 + "%";
    const leftPercent = (size.left / blurSize.width) * 100 + "%";
    const bottomPercent = (size.bottom / blurSize.height) * 100 + "%";
    const rightPercent = (size.right / blurSize.width) * 100 + "%";
    document
        .querySelector(":root")
        .style.setProperty(
        "--mask",
        `polygon(0% 0%, 0% 100%, ${leftPercent} 100%, ${leftPercent} ${topPercent}, ${rightPercent} ${topPercent}, ${rightPercent} ${bottomPercent}, ${leftPercent} ${bottomPercent}, ${leftPercent} 100%, 100% 100%, 100% 0%)`
    );
}

window.addEventListener("resize", () => {
    setBlurMask();
})

window.addEventListener("load", () => {
    setBlurMask();
})