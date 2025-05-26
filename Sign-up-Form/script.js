const main = document.querySelector('main');
const blur = document.querySelector('.blur');


function setBlurMask() {
    const mainSize = main.getBoundingClientRect()
    const blurSize = blur.getBoundingClientRect()
    const topPercent = (mainSize.top / blurSize.height) * 100 + "%";
    const bottomPercent = (mainSize.bottom / blurSize.height) * 100 + "%";
    const leftPercent = (mainSize.left / blurSize.width) * 100 + "%";
    const rightPercent = (mainSize.right / blurSize.width) * 100 + "%";

    document
        .querySelector(":root")
        .style.setProperty(
        "--mask",
        `polygon(0% 0%, 0% 100%, ${leftPercent} 100%, ${leftPercent} ${topPercent}, ${rightPercent} ${topPercent}, ${rightPercent} ${bottomPercent}, ${leftPercent} ${bottomPercent}, ${leftPercent} 100%, 100% 100%, 100% 0%)`
    );
}