# BharatPay Proxy (Vercel Mumbai - `bom1`)

High-performance, low-latency BharatPe UPI transaction proxy running on Vercel's Indian datacenter (AWS Mumbai `bom1`).

Bypasses Cloudflare geo-fencing for foreign VPS deployments (Hetzner, AWS, etc.).

## Endpoints:
- `GET /` -> Health check & region status
- `GET /api/transactions` -> Forwarded directly to `payments-tesseract.bharatpe.in`
