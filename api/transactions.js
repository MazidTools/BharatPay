export const config = {
  regions: ["bom1"], // Mumbai, India
};

export default async function handler(req, res) {
  try {
    const url = new URL("https://payments-tesseract.bharatpe.in/api/v1/merchant/transactions");

    // Forward all query parameters (module, merchantId, sDate, eDate)
    for (const [key, value] of Object.entries(req.query || {})) {
      url.searchParams.set(key, value);
    }

    const token = req.headers.token || req.headers.Token || "";

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        token: token,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
        "Accept": "application/json, text/plain, */*",
        "Origin": "https://merchant.bharatpe.com",
        "Referer": "https://merchant.bharatpe.com/",
      },
    });

    const data = await response.text();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Content-Type", "application/json");
    return res.status(response.status).send(data);
  } catch (err) {
    return res.status(500).json({ status: false, error: err.message });
  }
}
