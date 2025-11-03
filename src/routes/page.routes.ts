import { Router, Request, Response } from 'express'

const pageRouter = Router()

/**
 * @route GET /
 * @param { Request } req - Express request object.
 * @param { Response } res - Express response object.
 * @returns { void } - Responds with the Home page.
 */
pageRouter.get('/', (req: Request, res: Response) => {
  res.status(200).render('index', {
    pageTitle: 'Home'
  })
})

/**
 * @route GET /about
 * @param { Request } req - Express request object.
 * @param { Response } res - Express response object.
 * @returns { void } - Responds with the About page. 
 */
pageRouter.get('/about', (req: Request, res: Response) => {
  res.status(200).render('about', {
    pageTitle: 'About'
  })
})

/**
 * @route GET /contact
 * @param { Request } req - Express request object.
 * @param { Response } res - Express response object.
 * @returns { void } - Responds with the Contact page.
 */
pageRouter.get('/contact', (req: Request, res: Response) => {
  res.status(200).render('contact', {
    pageTitle: 'Contact'
  })
})

export default pageRouter