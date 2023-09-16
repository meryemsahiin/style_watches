// import User from "../models/userModel.js"

const getIndexPage = (req, res) => {
    res.render("index", {
        link: "index",
    })
}

const getAboutPage = (req, res) => {
    res.render("about", {
        link: "about"
    })
}

const getProductPage = (req, res) => {
    res.render("product", {
        link: "product"
    })
}

const getTestimonialPage = (req, res) => {
    res.render("testimonial", {
        link: "testimonial"
    })
}

const getContactPage = (req, res) => {
    res.render("contact", {
        link: "contact"
    })
}

const getLoginPage = (req, res) => {
    res.render("login", {
        link: "login",
    })
}

const getRegisterPage = (req, res) => {
    res.render("register", {
        link: "register"
    })
}

const getLogout = (req, res) => {
    res.cookie('jwt', '', {
        maxAge: 1,
    });
    res.redirect("/login");
}

export {getIndexPage, getAboutPage, getProductPage, getTestimonialPage, getContactPage, getLoginPage, getRegisterPage, getLogout};