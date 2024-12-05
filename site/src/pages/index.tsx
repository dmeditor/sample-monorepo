import Image from "next/image";
import localFont from "next/font/local";
import { DMEditor, DMEditorView, dmeServerSideLoad } from "dmeditor";
import { GetServerSideProps } from "next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home(props: { data }) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <DMEditorView data={props.data} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { res } = context;
  //fetch data from database or remote server
  const data = [
    {
      data: {
        level: 2,
        settings: {},
        value: "TEST heading",
      },
      id: "lPqRNWSzhXcr1SG38Vtb9",
      type: "heading",
    },
  ];

  try {
    dmeServerSideLoad(data, context);
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    throw new Error("Internal Server Error");
  }

  return { props: { data: data } };
};
