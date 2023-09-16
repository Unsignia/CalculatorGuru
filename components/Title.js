import Head from "next/head";

export default function Title(props) {
  const newTitle = `${props.title} | CalculatorGuru`;
  return (
    <Head>
      <title>{newTitle}</title>
    </Head>
  );
}
