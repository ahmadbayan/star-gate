import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, browserUiColor }: any) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content={browserUiColor} />
    </Helmet>
  );
}
