const isProd = process.env.NODE_ENV === "production"
const repo = "portfolio"

export default {
  output: "export",
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  images: { unoptimized: true },
}
