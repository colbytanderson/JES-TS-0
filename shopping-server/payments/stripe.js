import Stripe from 'stripe';

const stripe = Stripe(process.env.jesEcom_STRIPE_API_KEY)

module.exports = stripe;