import Head from "next/head";

export default function Title(props) {
  return (
    <Head>
      <title>CalculatorGuru / {props.title}</title>
    </Head>
  );
}
