import Link from "next/link";
import Section from "./section";

export default function Features() {
  return (
    <Section title="サービスの特徴" subtitle="AAAAA">
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="border relative rounded-md p-6 shadow space-y-3">
          <div className="aspect-video bg-muted"></div>
          <h2>
            記事タイトル <Link href="/" className="absolute inset-0"></Link>
          </h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <button>タグA</button>
        </div>
        <div className="border rounded-md p-6 shadow">aaa</div>
        <div className="border rounded-md p-6 shadow">aaa</div>
      </div>
    </Section>
  );
}