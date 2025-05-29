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

document.querySelectorAll(".form-input").forEach((item) => {
    item.addEventListener("focusin", (event) => {
        const target = event.currentTarget;
        target.classList.add("active")
        target.children[1].classList.add("active");

        if (target.children[1].id === "password") {
            document.querySelector(".indicator").classList.remove("hide")
        }
    })

    item.addEventListener("focusout", (event) => {
        const target = event.currentTarget;
        target.classList.remove("active")
        target.children[1].classList.remove("active");

        const valid = validateInput(target.children[1]);

    })
})

document.querySelectorAll("input").forEach((item) => {
    item.addEventListener("input", (event) => {
        if (event.target.classList.contains("invalid") || event.target.classList.contains("valid")) {
            validateInput(item)
        }
    })
})

function validateInput(input) {
    const {id, value} = input;
    input.classList.remove("invalid", "valid");
    let valid = false;
    switch (id) {
        case "name":
            valid = /^\S.*/.test(value);
            break;
        case "email":
            valid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
            break;
        case "password":
            valid = testPasswordStrength(value) !== "weak";
            break;
        case "password_confirmation":
            valid = value && value === document.querySelector("#password").value;
            break;
    }
    input.classList.add(valid ? "valid" : "invalid");
    return valid;
}

function testPasswordStrength(password) {
    const passwordTest = passwordStrengthTest.test(password);
    if (passwordTest.strong) {
        return "strong";
    } else if (password.length > 7 && passwordTest.passedTests.length > 3) {
        return "passed";
    } else {
        return "weak";
    }
}