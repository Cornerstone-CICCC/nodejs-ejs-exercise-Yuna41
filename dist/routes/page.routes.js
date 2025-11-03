"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pageRouter = (0, express_1.Router)();
/**
 * @route GET /
 * @param { Request } req - Express request object.
 * @param { Response } res - Express response object.
 * @returns { void } - Responds with the Home page.
 */
pageRouter.get('/', (req, res) => {
    res.status(200).render('index', {
        pageTitle: 'Home'
    });
});
/**
 * @route GET /about
 * @param { Request } req - Express request object.
 * @param { Response } res - Express response object.
 * @returns { void } - Responds with the About page.
 */
pageRouter.get('/about', (req, res) => {
    res.status(200).render('about', {
        pageTitle: 'About'
    });
});
/**
 * @route GET /contact
 * @param { Request } req - Express request object.
 * @param { Response } res - Express response object.
 * @returns { void } - Responds with the Contact page.
 */
pageRouter.get('/contact', (req, res) => {
    res.status(200).render('contact', {
        pageTitle: 'Contact'
    });
});
exports.default = pageRouter;
